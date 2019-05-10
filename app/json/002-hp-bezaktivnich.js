module.exports = {
    ORDERS:[{
        ordersStatus: 'Aktivní objednávky',
        addReceipt: "Přidat účtenku z obchodu",
        alert: "Nemáte žádnou aktivní objednávku a veškeré vaše předchozí objednávky byly již vyřízeny. Pojďte si nějakou objednávku udělat <a href='#' class='link'>v našem e-shopu</a>."
    },
    {
        ordersStatus: 'Vyřízené objednávky',
        order: [
            {
                id: "123465235",
                value: "3 485 KČ",
                date: "05. 12. 2019",
                status: "VYŘÍZENO",
                statusColor: "success",
                statusText: "Objednávka byla vyřízena. Lorem ipsum dolor sit amet.",
                orderAction: "Stáhnout fakturu",
                orderItem: [
                    {
                        name: "Osprey Variant 52 galactic black L",
                        price: "3 485 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 5,
                        claimDate: "(do 19.12.2019)"
                    }
                ]
            },
            {
                id: "170112174",
                value: "19 867 KČ",
                date: "10. 10. 2019",
                status: "VYŘÍZENO",
                statusColor: "success",
                statusText: "Objednávka byla vyřízena. Lorem ipsum dolor sit amet.",
                orderActions: "Stáhnout faktury",
                orderActionLinks: [
                    {
                        name: "Faktura_170112174",
                        url: "#faktura_170112174"
                    },
                    {
                        name: "Dobropis_170112174",
                        url: "#dobropis_170112174"
                    }
                ],
                orderItem: [
                    {
                        name: "Samsung Galaxy J3 Duos (2016) bílý",
                        price: "4 999 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 0,
                        claimDate: "(do 10.12.2019)",
                        add: [
                            {
                                firstInLine: true,
                                type: "warranty",
                                text: "Prodloužená záruka +3 roky",
                                price: "1 799 Kč",
                                addThisService: "Uplatnit službu"
                            }
                        ]
                    },
                    {
                        name: "HP Pro 3500 G2 MicroTower",
                        price: "8 999 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 5,
                        claimDate: "(do 10.12.2019)",
                    },
                    {
                        name: "APDATA PV110 Power Bank 10400mAh titanová",
                        price: "450 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        storno: true
                    },
                    {
                        name: "Sony CyberShot DSC-W730B černý",
                        price: "3 999 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 0,
                        claimDate: "(do 10.12.2019)",
                        documentAction: "Dokumenty",
                        documentActionLinks: [
                            {
                                name: "Návod k obsluze",
                                url: "#navodkobsluze"
                            },
                            {
                                name: "Záruční list",
                                url: "#zarucnilist"
                            }
                        ],
                    },
                    {
                        name: "SPEED LINK BAZZ Stereo Headset (Wood)",
                        price: "670 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 5,
                        claimDate: "(do 10.12.2019)",
                    },
                    {
                        name: "Genius GX Gaming SW-G2.1 1250 černé",
                        price: "1 390 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        rating: 0,
                        returnDate: "(dne 10.12.2019)"
                    },
                    {
                        name: "Nescafé Dolce Gusto Cafe Grande Intenso 16ks",
                        price: "320 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        store: "Zboží zakoupeno na prodejně.",
                        rating: 0,
                        claimDate: "(do 10.12.2019)"
                    }
                ]
            },
            {
                id: "192457925",
                value: "1 799 KČ",
                date: "04. 06. 2019",
                status: "VYŘÍZENO",
                statusColor: "success",
                statusText: "Objednávka byla vyřízena. Lorem ipsum dolor sit amet.",
                orderActions: "Stáhnout faktury",
                orderActionLinks: [
                    {
                        name: "Faktura_192457925",
                        url: "#faktura_192457925"
                    },
                    {
                        name: "Dobropis_192457925",
                        url: "#dobropis_192457925"
                    }
                ],
                orderItem: [
                    {
                        name: "Microsoft OFFice 365 pro jednotlivce CZ",
                        price: "1 799 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        licenceKey: "FGHJ5-MF27Z-09GKL-P85BX-EQA49"
                    }
                ]
            },
            {
                id: "192457949",
                value: "1 299 KČ",
                date: "23. 03. 2019",
                status: "VYŘÍZENO",
                statusColor: "success",
                statusText: "Objednávka byla vyřízena. Lorem ipsum dolor sit amet.",
                orderAction: "Stáhnout fakturu",
                orderItem: [
                    {
                        name: "Watch Dogs CZ",
                        price: "1 299 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        licenceKey: "FGHJ5-MF27Z-09GKL-P85BX-EQA49"
                    }
                ]
            }
        ]
    }]
}