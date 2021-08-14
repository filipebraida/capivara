import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async create({ view }: HttpContextContract) {
    return view.render('sessions/create')
  }
  public async store({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      response.redirect().toRoute('home')
    } catch {
      return response.redirect().toRoute('sessions.create')
    }
  }
  public async delete({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
