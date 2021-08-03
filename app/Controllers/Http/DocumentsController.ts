import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

let total = 2

const documents = [
  {
    id: 0,
    text: 'Hello',
  },
  {
    id: 1,
    text: 'Olá mundo',
  },
]

export default class DocumentsController {
  public async index({ view }: HttpContextContract) {
    return view.render('documents/index', { documents: documents })
  }
  public async show({ view, params }: HttpContextContract) {
    const document = documents[params.id]
    return view.render('documents/show', { document })
  }
  public store({ request, response }: HttpContextContract) {
    const text = request.input('text')
    const document = {
      id: total,
      text: text,
    }

    total = total + 1

    documents.push(document)
    return response.json(document)
  }
}
