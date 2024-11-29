import { test } from '@japa/runner'
import { CredentialsDto } from '../../../types/types.js'
import { tuyau } from '#tests/tuyau'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Users create', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  test('Create a user', async ({ assert }) => {
    const credentials: CredentialsDto = { email: 'therorfen@coucou.coucou', password: '1337' }
    const savedUser = await tuyau.users.$post(credentials).unwrap()
    const allSavedUsers = await tuyau.users.$get().unwrap()
    assert.deepEqual({ id: 1, email: credentials.email }, savedUser)
    assert.lengthOf(allSavedUsers, 1)
  })
  test('Create a user with existing email', async ({ assert }) => {
    const credentials: CredentialsDto = { email: 'belynn__@coucou.coucou', password: '1337' }
    await tuyau.users.$post(credentials).unwrap()
    await assert.rejects(async () => {
      await tuyau.users.$post(credentials).unwrap()
    })
  })
})
