//Add Your Collections here

export const networkCollections = {
  "0xa869": [ // Avalanche Testnet
  ],
  "0x4": [ // rinkeby
    {
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NiwyNDYsMjQ2LDEpOyc+PGcgc3R5bGU9J2ZpbGw6cmdiYSgyMTcsMzgsNjksMSk7IHN0cm9rZTpyZ2JhKDIxNywzOCw2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuNjsnPjxyZWN0ICB4PSc1NScgeT0nMzUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc1NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc1NScgeT0nNjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc2NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nNDUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNScgeT0nNTUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3NScgeT0nNTUnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4=",
      name: "Moralis Avalanche Hackaton Drop",
      addrs: "0x7650D3448F8044d8732528148c2A2d6B1D17BA88"
    },
    {
      image: "",
      name: "Test MGL",
      addrs: "0x6d996636c3917d8D0B99Dc1D877Fbf7fC189c8f1"
    },
  ]
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
