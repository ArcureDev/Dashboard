// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createPageValidator } from '#validators/page'
import { PageService } from '#services/page_service'
import { PageDto } from '../dtos/dtos.js'
import { inject } from '@adonisjs/core'

@inject()
export default class PagesController {
  constructor(private readonly pageService: PageService) {}

  async create({ request }: HttpContext): Promise<PageDto> {
    const body = await request.validateUsing(createPageValidator)
    return this.pageService.create(body)
  }
}
