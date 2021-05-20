import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

export const SidebarListItem = (props) => {
  const handleClick = () => {
    props.onClick({
      name: props.name,
      parent: props.parent || null
    })
  }

  const setFocus = (focusItem) => {
    if (focusItem?.name === props.name) {
      console.log(focusItem.name)
      return true
    }
  }

  return (
    <ListItem key={props.name} button onClick={handleClick} className={props.className} selected={setFocus(props.focus)}>
      <ListItemText primary={props.name} />
    </ListItem>
  )
}
