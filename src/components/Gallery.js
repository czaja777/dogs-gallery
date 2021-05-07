import React from 'react'
import useSize from '@react-hook/size'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { useStyles } from '../styles'

const IMAGE_SIZE = 250

export const Gallery = (props) => {
  const target = React.useRef(null)
  const [width] = useSize(target)
  const classes = useStyles()

  return (
    <div className={classes.content} ref={target}>
      {/*<p> Wybierz z menu po lewej stronie interesującą Cię rasę </p> */}
      <GridList cellHeight={IMAGE_SIZE} className={classes.gridList} cols={getNumberOfColumns(width)}>
        {props.pictures.map(photo => (
          <GridListTile key={photo} cols={photo.cols || 1}>
            <img src={photo} alt={photo.name} />
          </GridListTile>
        ))}
      </GridList>
      {/* <main> */}
      {/*  <p> Wybierz z menu po lewej stronie interesującą Cię rasę </p> */}
      {/*  {props.pictures.map(photo => { */}
      {/*    return (<img src={photo} key={photo} />) */}
      {/*  })} */}
      {/* </main> */}
    </div>
  )
}

const getNumberOfColumns = (width) => {
  if (width <= 500) {
    return 1
  } else if (width > 500 && width <= 800) {
    return 2
  } else {
    return Math.floor(width/IMAGE_SIZE)
  }
}
