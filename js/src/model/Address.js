export default class Address {
  constructor (address) {
    this.street = address.street
    this.city = address.city
    this.state = address.state
    this.zip = address.zip
  }

  set street (street) { this._street = street }
  get street () { return this._street }

  set city (city) { this._city = city }
  get city () { return this._city }

  set state (state) { this._state = state }
  get state () { return this._state }

  set zip (zip) { this._zip = zip }
  get zip () { return this._zip }
}
