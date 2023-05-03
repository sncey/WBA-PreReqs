import * as anchor from "@project-serum/anchor";
import * as bs58 from "bs58";

const b = bs58.decode(
  "private-key"
);
const j = new Uint8Array(
  b.buffer,
  b.byteOffset,
  b.byteLength / Uint8Array.BYTES_PER_ELEMENT
);
export const keypair = anchor.web3.Keypair.fromSecretKey(j);
