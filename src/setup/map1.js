import { CardEnum } from "../models/const/card-enum";

export const tickets = [
    
    {
        id: 1,
        cityAId: 3,
        cityBId: 1,
        points: 200
    },
    {
        id:2,
        cityAId: 0,
        cityBId: 3,
        points: 15
    }
];

export const map = {
    background: "poland.png",
    cities: [
        {
            id: 0,
            name: 'Zamość',
            x: 560,
            y: 430
        },
        {
            id: 1,
            name: 'Lublin',
            x: 500,
            y: 320
        },
        {
            id: 2,
            name: 'Warsaw',
            x: 352,
            y: 221
        },
        {
            id: 3,
            name: 'Poznan',
            x: 112,
            y: 200
        },
        {
            id: 4,
            name: 'Cracow',
            x: 361,
            y: 486
        },
        {
            id: 5,
            name: 'Wroclav',
            x: 124,
            y: 365
        },
        {
            id: 6,
            name: 'Gdansk',
            x: 290,
            y: 23
        }   
    ],
    routes: [
        {
            routeId: 0,
            cityA: 0,
            cityB: 1,
            trainSpots: [
                {
                    color: CardEnum.LOCOMOTIVE,
                    x: 540,
                    y: 390,
                    angle: 80
                },
                {
                    color: CardEnum.LOCOMOTIVE,
                    x: 512,
                    y: 342,
                    angle: 45
                },
            ]
        },
        {
            routeId: 1,
            cityA: 1,
            cityB: 2,
            trainSpots: [
                {
                    color: CardEnum.RED,
                    x: 499,
                    y: 284,
                    angle: 114
                },
                {
                    color: CardEnum.RED,
                    x: 503,
                    y: 230,
                    angle: 76
                },
                {
                    color: CardEnum.RED,
                    x: 470,
                    y: 188,
                    angle: 26
                },
                {
                    color: CardEnum.RED,
                    x: 417,
                    y: 181,
                    angle: -15
                },
                {
                    color: CardEnum.LOCOMOTIVE,
                    x: 368,
                    y: 201,
                    angle: -30
                },
            ]
        },
        {
            routeId: 2,
            cityA: 2,
            cityB: 6,
            trainSpots: [
                {
                    color: CardEnum.GREEN,
                    x: 301,
                    y: 199,
                    angle: 36
                },
                {
                    color: CardEnum.GREEN,
                    x: 255,
                    y: 159,
                    angle: 56
                },
                {
                    color: CardEnum.GREEN,
                    x: 239,
                    y: 107,
                    angle: 89
                },
                {
                    color: CardEnum.GREEN,
                    x: 253,
                    y: 55,
                    angle: 124
                },
            ]
        },
        {
            routeId: 3,
            cityA: 4,
            cityB: 5,
            trainSpots: [
                {
                    color: CardEnum.ORANGE,
                    x: 310,
                    y: 484,
                    angle: 0
                },
                {
                    color: CardEnum.ORANGE,
                    x: 258,
                    y: 480,
                    angle: 12
                },
                {
                    color: CardEnum.ORANGE,
                    x: 209,
                    y: 464,
                    angle: 28
                },
                {
                    color: CardEnum.ORANGE,
                    x: 165,
                    y: 435,
                    angle: 41
                },
                {
                    color: CardEnum.ORANGE,
                    x: 130,
                    y: 395,
                    angle: 54
                }
            ]
        },
        {
            routeId: 4,
            cityA: 3,
            cityB: 5,
            trainSpots: [
                {
                    color: CardEnum.BLACK,
                    x: 89,
                    y: 336,
                    angle: 54
                },
                {
                    color: CardEnum.BLACK,
                    x: 73,
                    y: 285,
                    angle: 90
                },
                {
                    color: CardEnum.BLACK,
                    x: 83,
                    y: 233,
                    angle: 113
                }
            ]
        },
        {
            routeId: 5,
            cityA: 0,
            cityB: 4,
            trainSpots: [
                {
                    color: CardEnum.WHITE,
                    x: 382,
                    y: 498,
                    angle: 20
                },
                {
                    color: CardEnum.WHITE,
                    x: 436,
                    y: 508,
                    angle: 0
                },
                {
                    color: CardEnum.WHITE,
                    x: 486,
                    y: 497,
                    angle: 334
                },
                {
                    color: CardEnum.WHITE,
                    x: 525,
                    y: 461,
                    angle: 307
                }
            ]
        },
        {
            routeId: 6,
            cityA: 2,
            cityB: 5,
            trainSpots: [
                {
                    color: CardEnum.BLUE,
                    x: 145,
                    y: 364,
                    angle: 0
                },
                {
                    color: CardEnum.BLUE,
                    x: 197,
                    y: 354,
                    angle: 337
                },
                {
                    color: CardEnum.BLUE,
                    x: 242,
                    y: 329,
                    angle: -37
                },
                {
                    color: CardEnum.BLUE,
                    x: 314,
                    y: 253,
                    angle: 304
                },
                {
                    color: CardEnum.BLUE,
                    x: 282,
                    y: 294,
                    angle: 314
                }   
            ]
        },
        {
            routeId: 7,
            cityA: 1,
            cityB: 4,
            trainSpots: [
                {
                    color: CardEnum.PINK,
                    x: 427,
                    y: 449,
                    angle: -38
                },
                {
                    color: CardEnum.PINK,
                    x: 477,
                    y: 357,
                    angle: 99
                },
                {
                    color: CardEnum.PINK,
                    x: 460,
                    y: 408,
                    angle: 296
                },
                {
                    color: CardEnum.PINK,
                    x: 381,
                    y: 473,
                    angle: 343
                }   
            ]
        },
        {
            routeId: 8,
            cityA: 2,
            cityB: 4,
            trainSpots: [
                {
                    color: CardEnum.YELLOW,
                    x: 363,
                    y: 250,
                    angle: 47
                },
                {
                    color: CardEnum.YELLOW,
                    x: 386,
                    y: 300,
                    angle: 85
                },
                {
                    color: CardEnum.YELLOW,
                    x: 377,
                    y: 354,
                    angle: 121
                },
                {
                    color: CardEnum.YELLOW,
                    x: 352,
                    y: 398,
                    angle: 115
                },
                {
                    color: CardEnum.YELLOW,
                    x: 344,
                    y: 450,
                    angle: 84
                }   
            ]
        }
    ]
}