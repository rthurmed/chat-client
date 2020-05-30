const ENDPOINT = `${process.env.VUE_APP_SERVER_HOST}/auth`
const endpoints = {
  REGISTER: `${ENDPOINT}/register`,
  LOGIN: `${ENDPOINT}/login`,
  LOGOUT: `${ENDPOINT}/logout`
}

export class AuthService {
  static register ({ name, email, pass }) {
    return new Promise((resolve, reject) => {
      fetch(endpoints.REGISTER, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          name,
          email,
          pass
        })
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
  static login ({ email, pass }) {
    return new Promise((resolve, reject) => {
      fetch(endpoints.LOGIN, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          email,
          pass
        })
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
  static logout () {
    return new Promise((resolve, reject) => {
      fetch(endpoints.LOGOUT, {
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