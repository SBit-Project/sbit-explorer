const path = require('path')

const CHAIN = Symbol('sbit.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.sbitinfo.lib.Chain.get(this.config.sbit.chain)
    return this[CHAIN]
  },
  get sbitinfo() {
    return {
      lib: require(path.resolve(this.config.sbitinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.sbitinfo.path, 'rpc'))
    }
  }
}
