import { UserDto } from '../dtos/user.dto.js'
import User from '#models/user'

export function userToDto(user: User): UserDto {
  return {
    email: user.email,
    id: user.id,
  }
}

export function usersToDtos(users: User[]): UserDto[] {
  return users.map((user) => userToDto(user))
}
