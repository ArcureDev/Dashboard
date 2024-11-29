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
}
const routes = [
] as const;
export const api = {
  routes,
  definition: {} as ApiDefinition
}
