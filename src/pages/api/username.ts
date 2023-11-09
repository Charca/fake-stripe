import type { APIRoute } from 'astro'

export const prerender = false

export const get: APIRoute = async function (context) {
  const session = await context.locals.auth.validate()
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthozied' }), {
      status: 401,
    })
  }

  return new Response(JSON.stringify(session.user), {
    headers: {
      'content-type': 'application/json',
    },
  })
}
