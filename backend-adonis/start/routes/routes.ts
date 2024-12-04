/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import './users.routes.js'
import './pages.routes.js'

const LoginController = () => import('#controllers/login_controller')

router.post('login', [LoginController, 'login'])

router.post('/logout', async ({ auth }: HttpContext) => {
  await auth.use('session').logout()
})
