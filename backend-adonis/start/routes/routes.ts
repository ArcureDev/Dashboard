/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import './users.routes.js'
import { loginValidator } from '#validators/login'
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', async ({ request, auth }: HttpContext) => {
  const body = await request.validateUsing(loginValidator)
  const user = await User.verifyCredentials(body.email, body.password)
  await auth.use('session').login(user)
})

router.post('/logout', async ({ auth }: HttpContext) => {
  await auth.use('session').logout()
})
