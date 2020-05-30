import { authHeaders } from '../http'

export class Base {
  static endpoint = ''
  static list({ page = 1 }) {
    return new Promise((resolve, reject) => {
      const url = new URL(this.endpoint)
      url.searchParams.append('p', page)
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: authHeaders()
      })
        .then((response) => response.json())
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}