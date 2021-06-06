export class RouteGraph {
    constructor(routes, citiesNumber) {
        this.routes = routes; //Lookup routeId -> Route
        this.routeMatrix = []; // 2d array with routeIds

        for (let i = 0 ; i < citiesNumber; i++) {
            routeMatrix.push([])	
            for (let j = 0 ; j < citiesNumber; j ++) {
                tab[i].push(j);
            }
        }
    }

    claimRoute(routeId, playerColor) {
        let route = this.routes[routeId];
        route.playerColor = playerColor;
    }

    isRouteTaken(routeId) {
        return this.routes[routeId] != null; 
    }
}
