import React from 'react'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'
import { OnePhoto } from './OnePhoto'
import { Gallery } from './Gallery'
import { useStyles } from '../styles'

export const MainContent = (props) => {
  const classes = useStyles()
  const isOnePhoto = props.pictures.length === 1

  if (props.activeBreed === null) {
    return (
      <main className={clsx(classes.main, classes.mainCenter)}>
        <Typography variant='h3' align='center'>Choose breed from the menu on the left site.</Typography>
        <OnePhoto pictures={props.pictures} chachedBreed={props.cachedPictures} />
      </main>
    )
  }

  return (
    <main className={clsx(classes.main, { [classes.mainCenter]: isOnePhoto })}>
      {isOnePhoto
        ? <OnePhoto pictures={props.pictures} chachedBreed={props.cachedPictures} />
        : <Gallery pictures={props.pictures} />}
    </main>
  )
}
