export class Base {
  static endpoint = ''
  static list() {
    return new Promise((resolve, reject) => {
      fetch(this.endpoint, {
        method: 'GET',
        mode: 'cors'
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