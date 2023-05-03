import * as anchor from "@project-serum/anchor";
import * as bs58 from "bs58";

const b = bs58.decode(
  "27PdmWSo3DGxG8xiSe94G2TxJDEvkyTE7r1TDWsaFQAvsK3VVtpt6vknCUGvZHgQwYTuTd3Z8kkvTz2K84fehqWu"
);
const j = new Uint8Array(
  b.buffer,
  b.byteOffset,
  b.byteLength / Uint8Array.BYTES_PER_ELEMENT
);
export const keypair = anchor.web3.Keypair.fromSecretKey(j);
