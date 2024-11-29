import factory from '@adonisjs/lucid/factories'
import Page from '#models/page'
import { ChartFactory } from '#database/factories/chart_factory'

export const PageFactory = factory
  .define(Page, ({ faker }) => {
    return {
      name: faker.book.title(),
    }
  })
  .relation('charts', () => ChartFactory)
  .build()
