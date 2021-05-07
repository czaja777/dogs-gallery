export const getListOfBreeds = () =>
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())

export const getPicturesByBreed = (breed) => fetch(getUrl(breed))
  .then(res => res.json())

const getUrl = (activeBreed) => {
  if (activeBreed === null) {
    return 'https://dog.ceo/api/breeds/image/random'
  } else if (activeBreed.parent === null) {
    return `https://dog.ceo/api/breed/${activeBreed.name}/images`
  } else {
    return `https://dog.ceo/api/breed/${activeBreed.parent}/${activeBreed.name}/images`
  }
}
