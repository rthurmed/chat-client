export class Message {
  constructor ({
    _id,
    text,
    timestamp,
    sender = ''
  }) {
    this.id = _id
    this.text = text
    this.timestamp = timestamp
    this.sender = sender
  }
}