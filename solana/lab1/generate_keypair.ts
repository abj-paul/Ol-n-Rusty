import {Keypair} from "@solana/web3.js";
const keypair = Keypair.generate();

//console.log(`✅ Generated keypair!`)
//console.log(`The Public Key is: ${keypair.publicKey.toBase58()}`)
//console.log(`The Private Key is: ${keypair.secretKey}`)

console.log(`[${keypair.secretKey}]`)
