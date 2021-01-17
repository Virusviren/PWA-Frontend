let insurances = [
  {
    serialNo: 1,
    id: {
      $oid: "600446d1fc13ae2335000000",
    },
    companyName: "Denesik, Spinka and Barton",
    insuranceName:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    price: 527.48,
    postedOn: "7/2/2020",
    insuranceDetails:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    imageURL:
      "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    serialNo: 2,
    id: {
      $oid: "600446d1fc13ae2335000001",
    },
    companyName: "Zieme, Grimes and Muller",
    insuranceName: "Vivamus in felis eu sapien cursus vestibulum.",
    price: 216.52,
    postedOn: "2/5/2020",
    insuranceDetails:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    imageURL:
      "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    serialNo: 3,
    id: {
      $oid: "600446d1fc13ae2335000002",
    },
    companyName: "Orn, Smitham and Green",
    insuranceName: "Nunc purus. Phasellus in felis.",
    price: 210.49,
    postedOn: "11/2/2020",
    insuranceDetails:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    imageURL:
      "https://images.unsplash.com/photo-1572337999334-6c9beb560750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    serialNo: 4,
    id: {
      $oid: "600446d1fc13ae2335000003",
    },
    companyName: "Gusikowski-Spinka",
    insuranceName:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 497.38,
    postedOn: "9/23/2020",
    insuranceDetails:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    imageURL:
      "https://images.unsplash.com/photo-1559742174-784456b3390e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    serialNo: 5,
    id: {
      $oid: "600446d1fc13ae2335000004",
    },
    companyName: "Johns, Runte and Kuhlman",
    insuranceName: "Suspendisse ornare consequat lectus.",
    price: 583.47,
    postedOn: "2/7/2020",
    insuranceDetails:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    imageURL:
      "https://images.unsplash.com/photo-1604092336365-0669045a9c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    serialNo: 6,
    id: {
      $oid: "600446d1fc13ae2335000005",
    },
    companyName: "Lemke-Beatty",
    insuranceName:
      "Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 578.61,
    postedOn: "7/1/2020",
    insuranceDetails:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    imageURL:
      "https://images.unsplash.com/photo-1601031368146-49b73fcaebb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1132&q=80",
  },
  {
    serialNo: 7,
    id: {
      $oid: "600446d1fc13ae2335000006",
    },
    companyName: "Streich-Marvin",
    insuranceName:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 469.11,
    postedOn: "4/21/2020",
    insuranceDetails:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    imageURL:
      "https://images.unsplash.com/photo-1543609840-77bc74bd6d6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    serialNo: 8,
    id: {
      $oid: "600446d1fc13ae2335000007",
    },
    companyName: "Kemmer-Pfannerstill",
    insuranceName: "Phasellus sit amet erat.",
    price: 126.8,
    postedOn: "9/20/2020",
    insuranceDetails: "Fusce consequat. Nulla nisl. Nunc nisl.",
    imageURL:
      "https://images.unsplash.com/photo-1572017114417-cce8079335be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
];

module.exports = insurances;
