import { ChartDto, UserDto } from '../dtos/dtos.js'
import User from '#models/user'
import Chart from '#models/chart'

export function userToDto(user: User): UserDto {
  return {
    email: user.email,
    id: user.id,
  }
}

export function usersToDtos(users: User[]): UserDto[] {
  return users.map((user) => userToDto(user))
}

export function chartToDto(chart: Chart): ChartDto {
  return {
    id: chart.id,
  }
}
