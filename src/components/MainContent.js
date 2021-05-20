import React from 'react'
import { OnePhoto } from './OnePhoto'
import { Gallery } from './Gallery'
import { Typography } from '@material-ui/core'

export const MainContent = (props) => {
  console.log('czy jest nieaktywna rasa:', props.activeBreed)
  return (
    <>
      {props.activeBreed === null
        ? <Typography variant='h3' align='center'>Choose breed from the menu on the left site.</Typography>
        : null}
      {props.pictures.length === 1
        ? <OnePhoto pictures={props.pictures} chachedBreed={props.cachedPictures} />
        : <Gallery pictures={props.pictures} />}
    </>
  )
}
