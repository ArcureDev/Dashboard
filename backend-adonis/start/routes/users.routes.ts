import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const UsersController = () => import('#controllers/users_controller')

router.post('users', [UsersController, 'create'])
router.get('users', [UsersController, 'getAll'])
router.put('users/:id', [UsersController, 'update'])
router.delete('users', [UsersController, 'delete'])
router.get('users/me', [UsersController, 'getMe']).use(middleware.auth())
router.get('users/me/charts', [UsersController, 'getCharts']).use(middleware.auth())
