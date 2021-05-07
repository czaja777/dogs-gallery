import { getCacheKey } from './utils'

const initialState = {
  breeds: [],
  isLoaded: false,
  activeBreed: null,
  dogsPictures: [],
  cachedPictures: {
    random: {
      isLoaded: false,
      pictures: []
    }
  }
}

export const SET_BREEDS_SUCCESS = 'setBreedsSuccess'
export const SET_ACTIVE_BREED = 'setActiveBreed'
export const SET_PICTURES = 'setPictures'
export const CHANGE_BREED_REQUEST = 'changeBreedRequest'
export const CHANGE_BREED_SUCCESS = 'changeBreedSuccess'

export function rootReducer (state = initialState, action) {
  let cacheKey

  switch (action.type) {
    case SET_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: Object.entries(action.payload.message).map(item => {
          return {
            name: item[0],
            subBreeds: item[1]
          }
        }),
        isLoaded: true
      }
    case SET_ACTIVE_BREED:
      return {
        ...state,
        activeBreed: action.payload
      }
    case CHANGE_BREED_REQUEST:
      cacheKey = getCacheKey(action.payload.breed)

      return {
        ...state,
        activeBreed: action.payload.breed,
        cachedPictures: {
          ...state.cachedPictures,
          [cacheKey]: {
            isLoaded: false,
            pictures: [],
            ...state.cachedPictures[cacheKey]
          }
        }
      }
    case CHANGE_BREED_SUCCESS:
      cacheKey = getCacheKey(action.payload.breed)

      return {
        ...state,
        activeBreed: action.payload.breed,
        cachedPictures: {
          ...state.cachedPictures,
          [cacheKey]: {
            isLoaded: true,
            pictures: action.payload.pictures
          }
        }
      }
    case SET_PICTURES:
      return {
        ...state,
        dogsPictures: action.payload
      }

    default:
      return state
  }
}
