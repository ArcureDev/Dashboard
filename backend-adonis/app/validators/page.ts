import vine from '@vinejs/vine'

export const createPageValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    charts: vine.array(vine.object({})),
  })
)

export const updatePageValidator = vine.compile(
  vine.object({
    id: vine.number(),
    name: vine.string().trim(),
    charts: vine.array(
      vine.object({
        id: vine.number(),
      })
    ),
  })
)
