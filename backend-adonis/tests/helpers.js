import { promisify } from 'node:utils'
import { createServer } from 'node:http'
import { getActiveTest } from '@japa/runner'

export function createHttpServer(callback) {
  const server = createServer(callback)

  const test = getActiveTest()
  test.cleanup(() => promisify(server.close)())

  server.listen(somePort)
  return server
}
