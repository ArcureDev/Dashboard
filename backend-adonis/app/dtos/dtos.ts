export type CredentialsDto = {
  email: string
  password: string
}

export type UserDto = {
  id: number
  email: string
}

export type PageDto = {
  id?: number
  name: string
  charts: ChartDto[]
}

export type ChartDto = {
  id?: number
}