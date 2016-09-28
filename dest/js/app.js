"use strict";

angular.module("cinemaApp", ["ngMaterial"]).controller("globalCtrl", function ($scope) {
    $scope.current = {
        name: "Якись фільмец",
        src: "https://unsplash.it/1600/1000/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }]
    };

    $scope.films = [{
        id: 1,
        src: "https://unsplash.it/250/300/?random",
        time: [{
            id: 1,
            time: "10:30"
        }, {
            id: 2,
            time: "12:45"
        }, {
            id: 3,
            time: "13:15"
        }, {
            id: 4,
            time: "15:45"
        }, {
            id: 5,
            time: "16:40"
        }, {
            id: 6,
            time: "17:50"
        }]
    }, {
        id: 2,
        src: "https://unsplash.it/250/300/?random",
        time: [{
            id: 1,
            time: "10:30"
        }, {
            id: 2,
            time: "12:45"
        }, {
            id: 3,
            time: "13:15"
        }, {
            id: 4,
            time: "15:45"
        }, {
            id: 5,
            time: "16:40"
        }, {
            id: 6,
            time: "17:50"
        }]
    }];
});