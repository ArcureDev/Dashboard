import { inject } from '@adonisjs/core'
import User from '#models/user'
import { usersToDtos } from '../mappers/mappers.js'
import { CredentialsDto, UserDto } from '../dtos/dtos.js'
import Page from '#models/page'

@inject()
export default class UserService {
  async create(credentials: CredentialsDto): Promise<UserDto> {
    const user = await User.create(credentials)
    await Page.create({ userId: user.id })
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
