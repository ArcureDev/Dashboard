import { createTuyau } from '@tuyau/client'
import { api } from '../.adonisjs/index.js'

export const tuyau = createTuyau({
  api,
  baseUrl: 'http://localhost:3333',
})
