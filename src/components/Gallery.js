import React from 'react'
import useSize from '@react-hook/size'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStyles } from '../styles'

const IMAGE_SIZE = 250

export const Gallery = (props) => {
  const target = React.useRef(null)
  const [width] = useSize(target)
  const classes = useStyles()

  return (
    <div ref={target} style={{ margin: '2px' }}>
      <GridList cellHeight={IMAGE_SIZE} cols={getNumberOfColumns(width)}>
        {props.pictures.map(photo => (
          <GridListTile key={photo} cols={photo.cols || 1}>
            <LazyLoadImage
              height={IMAGE_SIZE}
              src={photo}
              width='100%'
              className={classes.tile}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const getNumberOfColumns = (width) => {
  if (width <= 500) {
    return 1
  } else if (width > 500 && width <= 800) {
    return 2
  } else {
    return Math.floor(width / IMAGE_SIZE)
  }
}
