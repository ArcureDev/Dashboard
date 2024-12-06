import Page from '#models/page'
import { PageDto } from '../dtos/dtos.js'
import { inject } from '@adonisjs/core'
import { chartToDto } from '../mappers/mappers.js'
import ForbiddenException from '#exceptions/forbidden_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import NotExistsException from '#exceptions/not_exists_exception'

@inject()
export class PageService {
  async getAll(userId?: number): Promise<PageDto[]> {
    if (!userId) {
      throw new UnAuthorizedException()
    }
    return await Page.findManyBy({ user_id: userId, removed: false })
  }

  async get(userId?: number, pageId?: number): Promise<PageDto> {
    if (!userId) {
      throw new UnAuthorizedException()
    }
    if (!pageId) {
      throw new NotExistsException()
    }
    const page = await Page.findBy({ user_id: userId, removed: false, id: pageId })
    if (!page) {
      throw new NotExistsException()
    }
    return page
  }

  async create(pageDto: PageDto): Promise<PageDto> {
    const page = await Page.create(pageDto)
    return {
      id: page.id,
      name: page.name,
      charts: page.charts?.map(chartToDto) ?? [],
    }
  }

  async update(pageId: number, pageDto: PageDto, userId: number): Promise<PageDto> {
    const page = await Page.find({ id: pageId, user_id: userId })
    if (!page) {
      throw new ForbiddenException()
    }

    page.name = pageDto.name

    return {
      id: page.id,
      name: page.name,
      charts: page.charts?.map(chartToDto) ?? [],
    }
  }
}
