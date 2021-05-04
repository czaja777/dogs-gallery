import React from 'react'
import { Skeleton } from '@material-ui/lab'
import * as R from 'ramda'

const windowHeight = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

export const quantitySkeletons = () => {
  const itemHeight = 64

  const numberOfElements = Math.round(windowHeight / itemHeight)
  const array = R.range(0, numberOfElements)

  return array.map((item) => (
    <Skeleton key={item} variant='text' animation='wave' height={itemHeight} />
  ))
}
