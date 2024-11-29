import factory from '@adonisjs/lucid/factories'
import Chart from '#models/chart'

export const ChartFactory = factory
  .define(Chart, async ({ faker }) => {
    return {
      nameChart: faker.animal.petName(),
    }
  })
  .build()
