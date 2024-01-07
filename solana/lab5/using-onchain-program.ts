import * as web3 from "@solana/web3.js";
import base58 from "bs58";
import "dotenv/config";
import {getKeypairFromEnvironment} from "@solana-developers/node-helpers";



async function sendPingTransaction(connection: web3.Connection, keypair: web3.Keypair){
	const PING_PROGRAM_ADDRESS = web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
	const PING_PROGRAM_DATA_ADDRESS = web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

	const transaction = new web3.Transaction();
	const programId = new web3.PublicKey(PING_PROGRAM_ADDRESS);
	const programDataId = new web3.PublicKey(PING_PROGRAM_DATA_ADDRESS);

	
	const instruction = new web3.TransactionInstruction({
		keys: [
			{
				pubKey: programDataId,
				isSigner: false,
				isWritabel: true
			}
		],
		programId: programId
	});

	transaction.add(instruction);
	const signature = await web3.sendAndConfirmTransaction(connection, transaction, [keypair]);

	console.log(`✅ Transaction completed! Signature is ${signature}`)
}

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`Sender key loaded from environment ${senderKeypair.publicKey}`);

connection.requestAirdrop(senderKeypair.publicKey, web3.LAMPORTS_PER_SOL*1)
.then((data)=>{

	sendPingTransaction(connection, keypair)
	.then((data)=>{})
	.catch((err)=>{console.error(err);})
})
.catch((err)=>{
	console.error(err);
})

