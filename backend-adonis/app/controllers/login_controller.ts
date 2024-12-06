// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/login'
import User from '#models/user'
import { UserDto } from '../dtos/dtos.js'
import { userToDto } from '../mappers/mappers.js'

export default class LoginController {
  async login({ request, auth }: HttpContext): Promise<UserDto> {
    const body = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(body.email, body.password)
    auth.use('session').login(user)
    await user.load('pages')
    return userToDto(user)
  }
}
