import router from '@adonisjs/core/services/router'

const PagesController = () => import('#controllers/pages_controller')

router.post('pages', [PagesController, 'create'])
