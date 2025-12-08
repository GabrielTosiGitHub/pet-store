import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://692dd8bfe5f67cd80a4d2fd2.mockapi.io/products/products',
  timeout: 10000,
})
