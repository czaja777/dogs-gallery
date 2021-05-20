import React from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from '../styles'

export const OnePhoto = (props) => {
  const classes = useStyles()

  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <img src={props.pictures} alt='' className={classes.photo} />
    </Box>
  )
}
