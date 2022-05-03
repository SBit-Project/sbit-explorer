import * as SbitinfoAPI from '@/services/sbitinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return SbitinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return SbitinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return SbitinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return SbitinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return SbitinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return SbitinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
