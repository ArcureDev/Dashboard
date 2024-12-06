import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const PagesController = () => import('#controllers/pages_controller')

router.get('pages', [PagesController, 'getAll']).use(middleware.auth())
router.post('pages', [PagesController, 'create']).use(middleware.auth())
router.get('pages/:pageId', [PagesController, 'get']).use(middleware.auth())
router.put('pages/:pageId', [PagesController, 'update']).use(middleware.auth())
