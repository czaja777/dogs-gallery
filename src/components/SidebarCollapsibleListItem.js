import React, { useState } from 'react'
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { SidebarListItem } from './SidebarListItem'
import { useStyles } from '../styles'

export const SidebarCollapsibleListItem = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.name} />
        {props.subItems.length === 0
          ? null
          : (
              open ? <ExpandLess /> : <ExpandMore />
            )}
      </ListItem>
      {props.subItems.length === 0
        ? null
        : (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {props.subItems.map(sBreed => {
                return (
                  <SidebarListItem
                    key={sBreed}
                    name={sBreed}
                    parent={props.name}
                    onClick={props.onChildClick}
                    className={classes.nested}
                    focus={props.focus}
                  />
                )
              })}
            </List>
          </Collapse>
          )}
    </>
  )
}
