import { Base } from '../models/base'

export class Message extends Base {
  constructor ({
    _id,
    text,
    timestamp,
    sender = ''
  }) {
    super()
    this.id = _id
    this.text = text
    this.timestamp = timestamp
    this.sender = sender
  }
  static endpoint = `${process.env.VUE_APP_SERVER_HOST}/messages`
}