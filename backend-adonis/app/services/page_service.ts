import Page from '#models/page'
import { PageDto } from '../dtos/dtos.js'
import { inject } from '@adonisjs/core'
import { chartToDto } from '../mappers/mappers.js'

@inject()
export class PageService {
  async create(pageDto: PageDto): Promise<PageDto> {
    const page = await Page.create(pageDto)
    return {
      id: page.id,
      name: page.name,
      charts: page.charts?.map(chartToDto) ?? [],
    }
  }
}
