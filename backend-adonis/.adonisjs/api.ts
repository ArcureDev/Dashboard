import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type UsersPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/users.ts')['createUserValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['create'], true>
}
type UsersGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['getAll'], false>
}
type UsersIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/users.ts')['updateUserValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['update'], true>
}
type UsersDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['delete'], false>
}
type UsersMeGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['getMe'], false>
}
type UsersMeChartsGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['getCharts'], false>
}
type PagesGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/pages_controller.ts').default['getAll'], false>
}
type PagesPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/page.ts')['createPageValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/pages_controller.ts').default['create'], true>
}
type PagesIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/pages_controller.ts').default['get'], false>
}
type PagesIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/page.ts')['createPageValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/pages_controller.ts').default['update'], true>
}
type LoginPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/login.ts')['loginValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/login_controller.ts').default['login'], true>
}
export interface ApiDefinition {
  'users': {
    '$url': {
    };
    '$post': UsersPost;
    '$get': UsersGetHead;
    '$head': UsersGetHead;
    ':id': {
      '$url': {
      };
      '$put': UsersIdPut;
    };
    '$delete': UsersDelete;
    'me': {
      '$url': {
      };
      '$get': UsersMeGetHead;
      '$head': UsersMeGetHead;
      'charts': {
        '$url': {
        };
        '$get': UsersMeChartsGetHead;
        '$head': UsersMeChartsGetHead;
      };
    };
  };
  'pages': {
    '$url': {
    };
    '$get': PagesGetHead;
    '$head': PagesGetHead;
    '$post': PagesPost;
    ':pageId': {
      '$url': {
      };
      '$get': PagesIdGetHead;
      '$head': PagesIdGetHead;
      '$put': PagesIdPut;
    };
  };
  'login': {
    '$url': {
    };
    '$post': LoginPost;
  };
}
const routes = [
] as const;
export const api = {
  routes,
  definition: {} as ApiDefinition
}
