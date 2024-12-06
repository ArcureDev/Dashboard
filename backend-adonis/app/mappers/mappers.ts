import { ChartDto, PageDto, UserDto } from '../dtos/dtos.js'
import User from '#models/user'
import Chart from '#models/chart'
import Page from '#models/page'

export async function userToDto(user: User): Promise<UserDto> {
  await user.load('pages')
  return {
    email: user.email,
    id: user.id,
    pages: pagesToDtos(user.pages),
  }
}

export async function usersToDtos(users: User[]): Promise<UserDto[]> {
  return Promise.all(users.map((user) => userToDto(user)))
}

export function chartToDto(chart: Chart): ChartDto {
  return {
    id: chart.id,
  }
}

export function chartsToDtos(charts: Chart[] | undefined): ChartDto[] {
  return charts?.map(chartToDto) ?? []
}

export function pageToDto(page: Page): PageDto {
  return {
    id: page.id,
    name: page.name,
    charts: chartsToDtos(page.charts),
  }
}

export function pagesToDtos(pages: Page[] | undefined): PageDto[] {
  return pages?.map(pageToDto) ?? []
}
