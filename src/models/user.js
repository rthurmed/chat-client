export class User {
  constructor ({
    _id,
    name,
    email,
    createdAt,
    updatedAt
  }) {
    this.id = _id
    this.name = name
    this.email = email
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}