export const networkCollections = {
    "0x1": [
        {
        image: "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s130",
        name: "Cool cats NFT",
        addrs: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        },
        {
        image: "https://lh3.googleusercontent.com/pyNATu7ZX-iQ-6njFABGsUNfL_hQFJOSh3f5Q7Mbl3JCx-8dova1j0wbZS1xQKpL737005T7v1Hp3qwnIszi5qFiERiTz1iAhrtJ=s130",
        name: "Fluffy Polar Bears ",
        addrs: "0xdebbc3691d42090d899cafe0c4ed80897a7c9d6a",
        },
        {
        image: "https://lh3.googleusercontent.com/CKnfM8FTn_30ZWM-QoO19HPfYa8KYQrYhojjNr-RyKDm-HOxiRCICg1RgvFRwZjE6RXO7WhAnICgcXOhkWYHghAwPKIEuL3iCUT9JIQ=s130",
        name: "Ready Player Cat NFT",
        addrs: "0xcdb7c1a6fe7e112210ca548c214f656763e13533",
        },
],

"0x13881": [
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];