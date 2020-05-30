import { Base } from '../models/base'
import { User } from './user'

export class Message extends Base {
  static endpoint = `${process.env.VUE_APP_SERVER_HOST}/messages`

  constructor ({
    _id,
    text,
    createdAt,
    updatedAt,
    author,
  }) {
    super()
    this.id = _id
    this.text = text
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this._author = author
  }

  get author () {
    return new User(this._author)
  }
}