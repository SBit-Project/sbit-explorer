const chains = new Map()

class Chain {
  constructor({
    name, type,
    port, networkMagic,
    pubkeyhash, privatekey, scripthash, witnesshrp, evm,
    genesis, lastPoWBlockHeight
  } = {}) {
    this.name = name
    this.type = type
    this.port = port
    this.networkMagic = networkMagic
    this.pubkeyhash = pubkeyhash
    this.privatekey = privatekey
    this.scripthash = scripthash
    this.witnesshrp = witnesshrp
    this.evm = evm
    this.genesis = genesis
    this.lastPoWBlockHeight = lastPoWBlockHeight
  }

  static add(options) {
    let chain = new Chain(options)
    chains.set(chain.name, chain)
  }

  static get(name) {
    return chains.get(name)
  }
}

Chain.add({
  name: 'mainnet',
  type: 'mainnet',
  port: 22001,
  networkMagic: Buffer.from([0xd2, 0xb1, 0xc5, 0xa4]),
  pubkeyhash: 0x3f,
  privatekey: 0x80,
  scripthash: 0x32,
  witnesshrp: 'sc',
  evm: 0x21,
  genesis: Buffer.from('0100000000000000000000000000000000000000000000000000000000000000000000007609c5d52bb60f5663a85c3d45dd8734bcbebe805898c2b53ef926c82debd4b86a13d061ffff001fb9aa0100e965ffd002cd6ad0e2dc402b8044de833e06b23127ea8c3d80aec9141077149556e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4210000000000000000000000000000000000000000000000000000000000000000ffffffff000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4a0004bf91221d010441455520636f756e74726965732063757420436f7669642069736f6c6174696f6e20706572696f647320696e204f6d6963726f6e2062616c616e63696e6720616374ffffffff0100f2052a01000000434104c911b6209936c7efe1f620cba9e3114e0f9cef6a94ea807333acc42f849598645c3ce9ba74201da81620c9da5b78464a94c6d1c1556977dc0f2b739da9b1510eac00000000', 'hex'),
  lastPoWBlockHeight: 1000
})

Chain.add({
  name: 'testnet',
  type: 'testnet',
  port: 22301,
  networkMagic: Buffer.from([0x2b, 0x33, 0x56, 0x71]),
  pubkeyhash: 0x7d,
  privatekey: 0xef,
  scripthash: 0x6e,
  witnesshrp: 'ts',
  evm: 0x5c,
  genesis: Buffer.from('0100000000000000000000000000000000000000000000000000000000000000000000007d6003ae8ecad753013978c767958ee39b6e3506d110cff9754c7eabdf1d125f396e995effff001ff58501009a62ae6022c867c6966a579cc8569735cf55affd59b987b8a7504a6efb8e7f0956e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4210000000000000000000000000000000000000000000000000000000000000000ffffffff000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff580004bf91221d01044c4e4254432023363236333735202d2030303030303030303030303030303030303030616261313935366632643031636235313431623731623431373530353230663934363134653233623265613832ffffffff0100f2052a0100000043410462aa66c43fba23f7fb32cebb7a6dfbda5b5aa30c5d0ecf19d64a1be94fe8451dbf631cb0c63e21c31374c3abaaee2892e1c11631b7b56f0e9cc08d6fb80512ecac00000000', 'hex'),
  lastPoWBlockHeight: 1000
})

Chain.add({
  name: 'regtest',
  type: 'regtest',
  port: 22401,
  networkMagic: Buffer.from([0xac, 0xb3, 0xd4, 0x1e]),
  pubkeyhash: 0x7d,
  privatekey: 0xef,
  scripthash: 0x6e,
  witnesshrp: 'scrt',
  evm: 0x5c,
  genesis: Buffer.from('0100000000000000000000000000000000000000000000000000000000000000000000006db905142382324db417761891f2d2f355ea92f27ab0fc35e59e90b50e0534edf5d2af59ffff7f2011000000e965ffd002cd6ad0e2dc402b8044de833e06b23127ea8c3d80aec9141077149556e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4210000000000000000000000000000000000000000000000000000000000000000ffffffff000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff420004bf91221d0104395365702030322c203230313720426974636f696e20627265616b732024352c30303020696e206c6174657374207072696365206672656e7a79ffffffff0100f2052a010000004341040d61d8653448c98731ee5fffd303c15e71ec2057b77f11ab3601979728cdaff2d68afbba14e4fa0bc44f2072b0b23ef63717f8cdfbe58dcd33f32b6afe98741aac00000000', 'hex'),
  lastPoWBlockHeight: Infinity
})

module.exports = Chain