import { getCacheKey } from './utils'

export const selectListBreeds = state => state.breeds

export const selectLoading = state => state.isLoaded

export const selectBreedPictures = state => {
  const cacheKey = getCacheKey(state.activeBreed)
  return state.cachedPictures[cacheKey].pictures
}

export const selectActiveBreed = state => state.activeBreed

export const selectCachedPictures = state => state.cachedPictures
