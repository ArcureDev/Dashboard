import { Exception } from '@adonisjs/core/exceptions'

export default class NotExistsException extends Exception {
  static status = 403
  static code = 'E_AUTHORIZATION_FAILURE'
  static message = "Cette ressource n'existe pas"
}
