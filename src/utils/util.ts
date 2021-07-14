export function shortenAddress(address: string) {
  return address.replace(/(.{6})(.*)(.{6})/, "$1...$3");
}
