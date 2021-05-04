import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, Drawer, List, ListSubheader } from '@material-ui/core'
import { SET_ACTIVE_BREED, SET_BREEDS_SUCCESS } from './rootReducer'
import { selectListBreeds, selectLoading } from './selectors'
import { useStyles } from './styles'
import { SidebarListItem } from './components/SidebarListItem'
import { SidebarSkeletons } from './components/pluralSkeleton'
import { SidebarCollapsibleListItem } from './components/SidebarCollapsibleListItem'

function App () {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => dispatch({ type: SET_BREEDS_SUCCESS, payload: data }))
  }, [])

  const listBreeds = useSelector(selectListBreeds)
  const loaded = useSelector(selectLoading)

  const setActiveBreed = (breedName) => {
    dispatch({ type: SET_ACTIVE_BREED, payload: breedName })
  }

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
        zdjęcia rasy lub komunikat
      </main>
    </div>
  )
}

export default App
