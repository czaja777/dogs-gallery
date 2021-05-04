import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { range } from 'ramda'

const windowHeight = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

export const SidebarSkeletons = () => {
  const itemHeight = 64

  const numberOfElements = Math.round(windowHeight / itemHeight)

  return (
    <>
      {range(0, numberOfElements).map((item) => (
        <Skeleton key={item} variant='text' animation='wave' height={itemHeight} />
      ))}
    </>
  )
}
