import * as SbitinfoAPI from '@/services/sbitinfo-api'

class Misc {
  static info(options = {}) {
    return SbitinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return SbitinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return SbitinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return SbitinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return SbitinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return SbitinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return SbitinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
