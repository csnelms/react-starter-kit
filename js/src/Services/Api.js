// import axios from 'axios'

export function get (url) {
  return async () => {
    // const response = await fetch('https://api.github.com/users/gaearon/gists')
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json'
      },
      timeout: 1200,
      credentials: 'include',
      mode: 'cors'
    }
    // TODO: dynamically create url params
    const response = await fetch(url, options)
    if (response.ok && response.status === 200) {
      const json = await response.json()
      return json
    } else {
      throw new Error('API call failure')
    }
  }
}

// TODO: get a post working
