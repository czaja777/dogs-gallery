import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

export const SidebarListItem = (props) => {
  const handleClick = () => {
    props.onClick({
      name: props.name,
      parent: props.parent || null
    })
  }

  return (
    <ListItem key={props.name} button onClick={handleClick} className={props.className}>
      <ListItemText primary={props.name} />
    </ListItem>
  )
}
