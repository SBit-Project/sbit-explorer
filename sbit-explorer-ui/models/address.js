import * as SbitinfoAPI from '@/services/sbitinfo-api'

class Address {
  static get(id, options = {}) {
    return SbitinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return SbitinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return SbitinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/address/${id}/src20-balance-history`, {params: {token, page, pageSize}, ...options})
  }
}

export default Address
