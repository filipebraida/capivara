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
  public index({ response }: HttpContextContract) {
    return response.json(documents)
  }
  public show({ response, params }: HttpContextContract) {
    const document = documents[params.id]
    return response.json(document)
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
