declare module "*.png";
declare module "*.svg" {
  export const id: string;
}
interface Chain {
  name: string;
  icon: string;
}
interface WalletAccount {
  chain: string;
  accountName: string;
  address: string;
  mnemonic?: string;
  privateKey?: string;
  createdTime?: number;
  tokens: Array<Token>;
}
interface WalletAccounts {
  [prop: string]: WalletAccount[];
}
interface Token {
  tokenName: string;
  contractAddress?: string;
  precision?: string;
  icon?: string;
  balance?: string;
}
