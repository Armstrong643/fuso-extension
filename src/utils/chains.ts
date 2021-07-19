export const Chains: Chain[] = [
  {
    name: "TAO",
    icon: "/img/coin/TAO.svg",
    bg: "#CC2F2F",
  },
  {
    name: "BTC",
    icon: "/img/coin/BTC.svg",
    bg: "#EB8B17",
  },
  {
    name: "ETH",
    icon: "/img/coin/ETH.svg",
    bg: "#547399",
  },
  {
    name: "LTC",
    icon: "/img/coin/LTC.svg",
    bg: "#355E9D",
  },
  {
    name: "FIL",
    icon: "/img/coin/FIL.svg",
    bg: "#31BEB6",
  },
  {
    name: "TRX",
    icon: "/img/coin/TRX.svg",
    bg: "#CC2F2F",
  },
  {
    name: "DOGE",
    icon: "/img/coin/DOGE.svg",
    bg: "#C1AE71",
  },
  {
    name: "DOT",
    icon: "/img/coin/DOT.svg",
    bg: "#D30171",
  },
];
export function getChain(name: string) {
  for (let index = 0; index < Chains.length; index++) {
    const chain = Chains[index];
    if (name === chain.name) {
      return chain;
    }
  }
  return null;
}
