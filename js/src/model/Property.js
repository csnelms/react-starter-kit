import Address from './Address'

export default class Property {
  constructor (property) {
    this.transactionId = property.transactionId
    this.address = property.address
  }

  set transactionId (transactionId) { this._transactionId = transactionId }
  get transactionId () { return this._transactionId }

  set address (address) { this._address = new Address(address) }
  get address () { return this._address }
}
