import Address from './Address'

export default class Property {
  constructor (property) {
    this.transactionId = property.transactionId
    this.address = new Address(property.address) // property.address
    console.log('Property model', this.address)
  }

  // TODO: figure out why your setter is removing the property you are trying to create
  // set transactionId (transactionId) { this._transactionId = transactionId }
  // get transactionId () { return this._transactionId }
  //
  // set address (address) { this._address = new Address(address) }
  // get address () { return this._address }
}
