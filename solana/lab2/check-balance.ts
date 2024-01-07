import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
try {
  const publicKey = new PublicKey(keypair.publicKey);

  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
  const balance = await connection.getBalance(publicKey);
  const balanceInSOL = balance / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balance} Lamports, ${balanceInSOL} Sol!`
  );
} catch(e){
  console.log(`${e.message}!`);
}




