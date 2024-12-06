// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createPageValidator } from '#validators/page'
import { PageService } from '#services/page_service'
import { PageDto } from '../dtos/dtos.js'
import { inject } from '@adonisjs/core'
import NotExistsException from '#exceptions/not_exists_exception'

@inject()
export default class PagesController {
  constructor(private readonly pageService: PageService) {}

  async getAll({ auth }: HttpContext) {
    return this.pageService.getAll(auth.user?.id)
  }

  async get({ request, auth }: HttpContext) {
    const pageId: number = request.param('pageId')
    return this.pageService.get(auth.user?.id, pageId)
  }

  async create({ request }: HttpContext): Promise<PageDto> {
    const body = await request.validateUsing(createPageValidator)
    return this.pageService.create(body)
  }

  async update({ request, auth }: HttpContext): Promise<PageDto> {
    const userId = auth.user?.id
    const pageId: number = request.param('pageId')

    if (!userId || !pageId) {
      throw new NotExistsException()
    }

    const body = await request.validateUsing(createPageValidator)
    return this.pageService.update(pageId, body, userId)
  }
}
