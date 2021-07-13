// Copyright 2017-2021 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
import {
  encodeAddress,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  naclKeypairFromSeed,
  randomAsU8a,
  schnorrkelKeypairFromSeed,
} from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/api";
interface Options {
  withHex: boolean;
  type: "sr25519" | "ed25519" | "raw";
  ss58Format: 42;
}
export default function generator(options: Options) {
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
