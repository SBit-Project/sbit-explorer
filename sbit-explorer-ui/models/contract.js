import * as SbitinfoAPI from '@/services/sbitinfo-api'

class Contract {
  static get(id, options = {}) {
    return SbitinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return SbitinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/src20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return SbitinfoAPI.get(`/src20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
