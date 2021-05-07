import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, Drawer, List, ListSubheader } from '@material-ui/core'
import {
  CHANGE_BREED_REQUEST,
  CHANGE_BREED_SUCCESS,
  SET_BREEDS_SUCCESS
} from './rootReducer'
import { selectListBreeds, selectLoading, selectBreedPictures, selectCachedPictures } from './selectors'
import { useStyles } from './styles'
import { SidebarListItem } from './components/SidebarListItem'
import { SidebarSkeletons } from './components/SidebarSkeletons'
import { SidebarCollapsibleListItem } from './components/SidebarCollapsibleListItem'
import { Gallery } from './components/Gallery'
import { formatData, getCacheKey } from './utils'
import { getListOfBreeds, getPicturesByBreed } from './dogApi'

function App () {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    getListOfBreeds()
      .then(data => dispatch({ type: SET_BREEDS_SUCCESS, payload: data }))
  }, [])

  const listBreeds = useSelector(selectListBreeds)
  const loaded = useSelector(selectLoading)
  const breedPictures = useSelector(selectBreedPictures)
  const cachedPictures = useSelector(selectCachedPictures)

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

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
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
                      />
                    )
                  }
                  return (
                    <SidebarCollapsibleListItem
                      key={breed.name}
                      name={breed.name}
                      subItems={breed.subBreeds}
                      onChildClick={setActiveBreed}
                    />
                  )
                })
              )}
        </List>
      </Drawer>
      <main>
        <Gallery pictures={breedPictures} />
      </main>
    </div>
  )
}

export default App
