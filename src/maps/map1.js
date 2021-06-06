import { CardEnum } from "../models/const/card-enum";

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
        }
    ]
}