import { test } from '@japa/runner'
import { tuyau } from '#tests/tuyau'
import { UserFactory } from '#database/factories/user_factory'

test.group('Users list', () => {
  test('get a list of users - empty', async ({ assert }) => {
    const users = await tuyau.users.$get().unwrap()
    assert.lengthOf(users, 0)
  })
  test('get a list of users - multiples', async ({ assert }) => {
    const nbUsers = 10
    await UserFactory.createMany(nbUsers)
    const users = await tuyau.users.$get().unwrap()
    assert.lengthOf(users, nbUsers)
  })
})
