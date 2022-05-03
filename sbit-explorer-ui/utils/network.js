export default {
  mainnet: {
    pubkey: 0x3f,
    pubkeyhash: 0x3f,
    scripthash: 0x32,
    witness_v0_keyhash: 'sc',
    witness_v0_scripthash: 'sc'
  },
  testnet: {
    pubkey: 0x7d,
    pubkeyhash: 0x7d,
    scripthash: 0x6e,
    witness_v0_keyhash: 'ts',
    witness_v0_scripthash: 'ts'
  }
}[process.env.network || 'mainnet']
