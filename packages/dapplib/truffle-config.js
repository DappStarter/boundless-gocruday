require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide hunt breeze outer silk'; 
let testAccounts = [
"0x5b5f9f7d09ccbe23bf562b2eb4403efe2688f47f841eb70fdf9b2b84505e0948",
"0xf08df2a2513d38bade36059ea63d332e0e3680012973c38a3ef706c63928c12c",
"0x92c6a1d63796a267e31b51ad5e81b0705d9a460831cadc448a2d5cc32fc1fa56",
"0x8a0b48c9d4ed8137d101454ca9defe3e5f6ba81b8bbc185378e37ef71ae4494c",
"0xf8dd6643d06c86717d3acbd6ee515de5e5c2106982312a72d9c99b3e639d971e",
"0xaa4bd7355dbd91b10c1e19430f11aa71568fbd1c551c1d609fa9f86362cb82a4",
"0x62d7336d3f96523ca61810149a245f55182db3cbeeb53c8726af48dd09cccbd9",
"0x39cafb658777dd9eb14170c4d54183e36f7efd9ccc5c7912314744f84c593b29",
"0x0820a4959661680a4c7e4fe1997f05d921086a01eed33e10b00e534ac61e49a7",
"0x75c5bf8d6a43e725df788bbe8e106365df8c509369fda6819c670bc2ebd03548"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
