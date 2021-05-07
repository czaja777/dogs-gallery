export const formatData = (activeBreed, data) => {
  if (activeBreed === null) {
    return [data.message]
  }
  return data.message
}

export const getCacheKey = (breed) => {
  if (breed === null) {
    return 'random'
  } else if (breed.parent === null) {
    return breed.name
  }
  return `${breed.parent}/${breed.name}`
}
