export class Route {
    constructor(routeId, cityA, cityB, trainsRequired, colorReq, locomotives) {
        this.routeId = routeId; 
        this.cityA = cityA;
        this.cityB = cityB;
        this.trainsRequired = trainsRequired;
        this.colorReq = colorReq;
        this.playerColor = null;
        this.locomotives = locomotives;
    }
}