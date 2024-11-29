import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { PageFactory } from '#database/factories/page_factory'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .relation('pages', () => PageFactory)
  .build()
