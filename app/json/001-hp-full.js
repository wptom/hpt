module.exports = {
    ORDERS:[{
        ordersStatus: 'Aktivní objednávky',
        addReceipt: "Přidat účtenku z obchodu",
        order: [
            {
                id: "170112174",
                idText: "OBJEDNÁ",
                value: "4999 Kč",
                date: "21. 12. 2019",
                status: "VYŘIZUJEME",
                statusColor: "warning",
                statusText: "Objednávka byla úspěšně vyřízena. Ať už předána dopravci anebo vyzvednuta na pobočce.",
                orderAction: "Stornovat objednávku",
                orderItem: [
                    {
                        name: "Patriot 4GB DDR3 1600MHz CL11 Signature Line (8x512)",
                        price: "3 048 Kč (1 524 Kč/1 kus)",
                        items: "2 kusy",
                        imgURL: "images/thumb.png",
                        productURL: "#"
                    }
                ]
            },
            {
                id: "158112079",
                idText: "OBJEDNÁVKA",
                value: "11 833 Kč",
                date: "20.12.2019",
                status: "PŘIPRAVENO",
                statusColor: "warning",
                statusText: "Objednávka je připravena.",
                orderAction: "Dotaz objednávce",
                orderItem: [
                    {
                        name: "Tefal Vitacuisine Compact VS400330",
                        price: "2 048 Kč (1 024 Kč/1 kus)",
                        items: "2 kusy",
                        imgURL: "images/thumb.png",
                        productURL: "#",
                        add: [
                            {
                                firstInLine: true,
                                type: "warranty",
                                text: "Prodloužená záruka +3 roky",
                                price: "1 799 Kč",
                                addThisService: "Uplatnit službu"
                            },
                            {
                                firstInLine: false,
                                type: "gift",
                                text: "Utírací utěrka 50 cm",
                                info: "(dárek)",
                                price: "1 799 Kč"
                            },
                            {
                                firstInLine: false,
                                type: "warranty",
                                text: "Prodloužená záruka +3 roky",
                                price: "1 799 Kč"
                            },
                            {
                                firstInLine: false,
                                type: "gift",
                                text: "Utírací utěrka 50 cm",
                                info: "(dárek)",
                                price: "1 799 Kč"
                            }
                        ]
                    },
                    {
                        name: "ASUS PCE-AC56",
                        price: "1 390 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#"
                    },
                    {
                        name: "24\" Samsung 24MP76HM",
                        price: "3 690 Kč",
                        items: "1 kus",
                        imgURL: "images/thumb.png",
                        productURL: "#"
                    }
                ]
            }
        ]
    },
    {
        ordersStatus: 'Stornované objednávky',
        order: [
            {
                id: "170112174",
                value: "4999 Kč",
                date: "21. 12. 2019",
                storno: "Stornovat objednávku",
                status: "Vyřizujeme",
                invoice: [
                    {
                        id: "Faktura_19245925",
                        url: "#"
                    },
                    {
                        id: "Dobropis_19245925",
                        url: "#"
                    }
                ],
                orderItem: [
                    {
                        name: "Tefal Vitacuisine Compact VS400330",
                        price: "4999 Kč"
                    },
                    {
                        name: "ASUS",
                        price: "11111 Kč"
                    }
                ]
            },
            {
                id: "00170112174",
                value: "123 Kč",
                date: "21. 12. 2019",
                storno: "Stornovat objednávku",
                status: "Vyřizujeme",
                invoice: [
                    {
                        id: "Faktura_19245925",
                        url: "#"
                    },
                    {
                        id: "Dobropis_19245925",
                        url: "#"
                    }
                ],
                orderItem: [
                    {
                        name: "2Tefal Vitacuisine Compact VS400330",
                        price: "4999 Kč"
                    },
                    {
                        name: "2ASUS",
                        price: "211111 Kč"
                    }
                ]
            }
        ]
    }]
}