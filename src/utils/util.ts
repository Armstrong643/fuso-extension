import { useLocation } from "react-router-dom";
export function shortenAddress(address: string) {
  return address.replace(/(.{6})(.*)(.{6})/, "$1...$3");
}
export function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}
export function getAccount(account: WalletAccount, accounts: WalletAccounts) {
  if (!account) {
    return null;
  }
  let { chain, address } = account;
  let accountlist = accounts[chain];
  for (let index = 0; index < accountlist.length; index++) {
    const temp = accountlist[index];
    if (address === temp.address) {
      return temp;
    }
  }
  return null;
}
