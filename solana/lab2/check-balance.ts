import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
const publicKey = new PublicKey("31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const balance = await connection.getBalance(publicKey);
const balanceInSOL = balance / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balance} Lamports, ${balanceInSOL} Sol!`
);
