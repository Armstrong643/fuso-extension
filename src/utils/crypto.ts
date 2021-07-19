import {
  encodeAddress,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  naclKeypairFromSeed,
  randomAsU8a,
  schnorrkelKeypairFromSeed,
} from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/api";
import { keccak512 } from "js-sha3";
import { AES, enc } from "crypto-js";
interface Options {
  withHex: boolean;
  type: "sr25519" | "ed25519" | "raw";
  ss58Format: 42;
}
export function generator(options: Options) {
  const mnemonic = options.withHex ? undefined : mnemonicGenerate(12);
  const seed = mnemonic ? mnemonicToMiniSecret(mnemonic) : randomAsU8a();
  const keyring = new Keyring({
    type: "sr25519",
    ss58Format: 42,
  });
  const pair =
    options.type === "sr25519"
      ? schnorrkelKeypairFromSeed(seed)
      : naclKeypairFromSeed(seed);
  const ppair = keyring.addFromPair(pair);

  const address = encodeAddress(pair.publicKey, options.ss58Format);
  return {
    address,
    mnemonic,
    seed,
  };
}
export function data2keccak512(data: string) {
  return keccak512(data);
}
export function encryptMessage(message: string, hash: string) {
  return AES.encrypt(message, hash).toString();
}
export function decryptMessage(message: string, hash: string) {
  return AES.decrypt(message, hash).toString(enc.Utf8);
}
