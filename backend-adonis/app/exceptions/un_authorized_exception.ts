import { Exception } from '@adonisjs/core/exceptions'

export default class UnAuthorizedException extends Exception {
  static status = 401
  static code = 'E_UNAUTHORIZED'
  static message = "Être authentifié·e, c'est important :)"
}
