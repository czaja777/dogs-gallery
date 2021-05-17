import React from 'react'
import { Box } from '@material-ui/core'

export const OnePhoto = (props) => {
  // const title = () => {
  //   if (props === 'random') {
  //     return <h1>Choose breed from the menu on the left site.</h1>
  //   }
  // }
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      {/* {title} */}
      <img src={props.pictures} alt='' />
    </Box>
  )
}
