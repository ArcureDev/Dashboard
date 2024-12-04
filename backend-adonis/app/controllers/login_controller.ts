// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/login'
import User from '#models/user'

export default class LoginController {
  async login({ request, auth }: HttpContext) {
    const body = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(body.email, body.password)
    await auth.use('session').login(user)
  }
}
