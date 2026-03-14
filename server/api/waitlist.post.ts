export default defineEventHandler(async (event) => {
  const { name, email, business } = await readBody(event)

  if (!name || !email || !business) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required' })
  }

  const { cloudflare } = event.context
  const db = cloudflare.env.DB

  try {
    await db.prepare('INSERT INTO waitlist (name, email, business) VALUES (?, ?, ?)')
      .bind(name, email, business)
      .run()
  } catch (err: any) {
    if (err.message?.includes('UNIQUE constraint failed')) {
      throw createError({ statusCode: 409, statusMessage: 'This email is already on the waitlist' })
    }
    throw err
  }

  return { success: true }
})
