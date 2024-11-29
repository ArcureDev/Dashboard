import { inject } from '@adonisjs/core'
import UserService from '#services/user_service'
import { HttpContext } from '@adonisjs/core/http'
import { createUserValidator, updateUserValidator } from '#validators/users'
import { UserDto } from '../dtos/user.dto.js'

@inject()
export default class UsersController {
  constructor(private readonly userService: UserService) {}

  async getAll(): Promise<UserDto[]> {
    return this.userService.getAll()
  }

  async create({ request }: HttpContext): Promise<UserDto> {
    const payload = await request.validateUsing(createUserValidator)
    return this.userService.create(payload)
  }

  async getMe({ auth }: HttpContext) {
    return auth.user
  }

  async update({ request }: HttpContext) {
    const payload = await request.validateUsing(updateUserValidator)
    return payload
  }

  async delete({ response }: HttpContext) {
    response.abort({ message: 'HIHI' }, 200)
  }

  async getCharts({ auth }: HttpContext) {
    console.log('charts', auth.getUserOrFail())
  }
}
