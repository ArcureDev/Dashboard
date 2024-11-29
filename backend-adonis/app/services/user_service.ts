import { inject } from '@adonisjs/core'
import { CredentialsDto } from '../../types/types.js'
import User from '#models/user'
import { usersToDtos } from '../mappers/user.mapper.js'
import { UserDto } from '../dtos/user.dto.js'

@inject()
export default class UserService {
  async create(credentials: CredentialsDto): Promise<UserDto> {
    const user = await User.create(credentials)
    return {
      id: user.id,
      email: user.email,
    }
  }

  async getCharts() {}

  async getAll(): Promise<UserDto[]> {
    return usersToDtos(await User.all())
  }
}
