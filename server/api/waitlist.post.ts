export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)

  if (!email) {
    throw createError({ statusCode: 400, statusMessage: 'Email is required' })
  }

  const { cloudflare } = event.context
  const db = cloudflare.env.DB

  try {
    await db.prepare('INSERT INTO waitlist (email) VALUES (?)')
      .bind(email)
      .run()
  } catch (err: any) {
    if (err.message?.includes('UNIQUE constraint failed')) {
      throw createError({ statusCode: 409, statusMessage: 'This email is already on the waitlist' })
    }
    throw err
  }

  return { success: true }
})
