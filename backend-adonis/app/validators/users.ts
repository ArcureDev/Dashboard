import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim(),
  })
)

/**
 * Validates the user's update action
 */
export const updateUserValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().exists(async (db, value, _) => {
        const user = await db.from('users').where('id', value).first()
        return user
      }),
    }),
  })
)
