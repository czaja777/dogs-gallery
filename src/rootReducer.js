const initialState = {
  breeds: [],
  isLoaded: false,
  selectedBreed: null,
  dogsPictures: []
}

export const SET_BREEDS_SUCCESS = 'setBreedsSuccess'
export const SET_ACTIVE_BREED = 'setActiveBreed'

export function rootReducer (state = initialState, action) {
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
        selectedBreed: action.payload
      }
    default:
      return state
  }
}
