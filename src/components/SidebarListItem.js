import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

export const SidebarListItem = (props) => {
  const handleClick = () => {
    props.onClick(props.name)
  }

  return (
    <ListItem key={props.name} button onClick={handleClick} className={props.className}>
      <ListItemText primary={props.name} />
    </ListItem>
  )
}
