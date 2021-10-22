import axios from './plugins/axios.js'

export const getBooks = req => axios.get(`/books/v1/volumes`, req)