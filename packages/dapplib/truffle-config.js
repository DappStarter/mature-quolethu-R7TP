require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan reward stick unique grace person bubble gas'; 
let testAccounts = [
"0xd0c4f1eb4b7ba29eccfcd2569a6862376a6e682a207d576b408b315acf7e908d",
"0x51d4e15066fb0ae573fabd994d7d18f564cab8f026e3f45cf812393ee505d5ab",
"0x4592de9bf319b50cb9e7d6010a7d6062ea3504221a276f19e32f6fae1d004759",
"0x49dbc31b59829c6216126a971e566674709d1ce2b2e330689bbc97eb1ca2bdf4",
"0x2832b8c386245139c321f3f085b4c9d3f16cb5e4cc6284dae743c96d0ad12b49",
"0x9be42cdba3eb4b45d3adb7e8a2d1d57022753baa037bcadb7ccc87794e4bd6ba",
"0xbb4c8f8d8ea69da42a17782a7132f75310cfce5db2e3bcde07c0879268d7bc77",
"0x4494b96faf8fbe90617f0fcd01bdb7f1a8c9b6783a61d0d217a78f004b320756",
"0xf5af27be6ed5b18c40eef841d4af71606942eba50438f9ad0b0bfefd678f877b",
"0xf5717ff9fe763d56409556340733c509f846cb3aae33f21f16fc0e4e958dee19"
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
            version: '^0.8.0'
        }
    }
};

