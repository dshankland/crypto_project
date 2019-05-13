const baseURL = 'http://localhost:3000/api/portfolio/'

export default {
  getPortfolio(){ // getSightings returns a promise
    return fetch(baseURL)
    .then(res => res.json()) // returns a promise which is returned in methods within app.vue (fetchData)
    // the value of the res.json, .then is done on this in app.vue
  },
  postAsset(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()) // give me an object that is JSON
  },
  putAsset(id, payload){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteAsset(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },

}
