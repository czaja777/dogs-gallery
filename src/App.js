import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { CHANGE_BREED_REQUEST, CHANGE_BREED_SUCCESS, SET_BREEDS_SUCCESS } from './rootReducer'
import {
  selectListBreeds,
  selectLoading,
  selectBreedPictures,
  selectCachedPictures,
  selectActiveBreed
} from './selectors'
import { useStyles } from './styles'
import { SidebarListItem } from './components/SidebarListItem'
import { SidebarSkeletons } from './components/SidebarSkeletons'
import { SidebarCollapsibleListItem } from './components/SidebarCollapsibleListItem'
import { formatData, getCacheKey } from './utils'
import { getListOfBreeds, getPicturesByBreed } from './dogApi'
import { MainContent } from './components/MainContent'

function App () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const listBreeds = useSelector(selectListBreeds)
  const loaded = useSelector(selectLoading)
  const breedPictures = useSelector(selectBreedPictures)
  const cachedPictures = useSelector(selectCachedPictures)
  const getActiveBreed = useSelector(selectActiveBreed)

  const setActiveBreed = useCallback((nextActiveBreed) => {
    dispatch({ type: CHANGE_BREED_REQUEST, payload: { breed: nextActiveBreed } })

    const cacheKey = getCacheKey(nextActiveBreed)

    if (cachedPictures[cacheKey]?.isLoaded !== true) {
      getPicturesByBreed(nextActiveBreed)
        .then(data => dispatch({
          type: CHANGE_BREED_SUCCESS,
          payload: {
            breed: nextActiveBreed,
            pictures: formatData(nextActiveBreed, data)
          }
        }))
    }
  }, [dispatch, cachedPictures])

  useEffect(() => {
    getListOfBreeds()
      .then(data => dispatch({ type: SET_BREEDS_SUCCESS, payload: data }))
    setActiveBreed(null)
  }, [dispatch])

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant={isDesktop ? 'persistent' : 'temporary'}
        anchor='left'
        open={isDesktop ? true : isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader className={classes.listTitle} component='div' id='nested-list-subheader'>
              Breeds list:
            </ListSubheader>
          }
        >
          <Divider />
          {loaded === false
            ? <SidebarSkeletons />
            : (
                listBreeds.map(breed => {
                  if (breed.subBreeds.length === 0) {
                    return (
                      <SidebarListItem
                        key={breed.name}
                        name={breed.name}
                        onClick={setActiveBreed}
                        padding={{ left: 0 }}
                        focus={getActiveBreed}
                      />
                    )
                  }
                  return (
                    <SidebarCollapsibleListItem
                      key={breed.name}
                      name={breed.name}
                      subItems={breed.subBreeds}
                      onChildClick={setActiveBreed}
                      focus={getActiveBreed}
                    />
                  )
                })
              )}
        </List>
      </Drawer>

      <MainContent pictures={breedPictures} cachedPictures={cachedPictures} activeBreed={getActiveBreed} />

      <IconButton className={classes.menuButton} onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon />
      </IconButton>
    </div>
  )
}

export default App
