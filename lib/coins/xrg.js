/*
  info from:
    https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Ergon',
  per1: 1e8,
  unit: 'XRG'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000000070e37bfee7e84b94f997f38155a85b22172f5ca25fd4eb3d64c5ad7c5',
  // nDefaultPort
  port: 2137,
  portRpc: 2136,
  protocol: {
    // pchMessageStart
    magic: 0xc48f5fc2 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [

    'dnsseed.ergon.moe',
    'seed.ergon.loping.net'

  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 145,
    private: 0x80,
    public: 0x00,
    scripthash: 0x05,
    messagePrefix: '\x18Ergon Signed Message:\n'
  }
}, common)


module.exports = {
  main: main,

}
