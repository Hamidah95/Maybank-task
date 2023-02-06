import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllSearches = async () => {
  try {
    const searches = await axios.get('todos?_limit=5')

    return searches.data
  } catch(err) {
    return console.error(err)
  }
}

export const createNewSearch = async (title) => {
  try {
    const search = await axios.post('search', {
      title
    })

    return search.data
  } catch(err) {
    return console.error(err)
  }
}

export const deleteExistedSearches = async (id) => {
  try {
    await axios.delete(`search/${id}`)
    
    return id
  } catch(err) {
     return console.error(err)
  }
}