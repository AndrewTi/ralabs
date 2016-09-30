"use strict";

angular.module("cinemaApp", ["ngMaterial", "ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "https://AndrewTi.github.io/dest/view/home/home.html"
    }).when("/home", {
        templateUrl: "https://AndrewTi.github.io/dest/view/home/home.html"
    }).when("/select", {
        templateUrl: "https://AndrewTi.github.io/dest/view/select/select.html"
    }).when("/film", {
        templateUrl: "https://AndrewTi.github.io/dest/view/film/film.html"
    }).when("/shares", {
        templateUrl: "https://AndrewTi.github.io/dest/view/shares/shares.html"
    }).when("/about", {
        templateUrl: "https://AndrewTi.github.io/dest/view/about/about.html"
    });
}).controller("globalCtrl", function ($scope, $location) {

    //LOCAL FUNCTION

    var findEl = function findEl(data, line, index) {
        for (var el in $scope.places) {
            if ($scope.places[el].id == line) {
                $scope.places[el].places[index] = data;
                return { line: line, place: index };
            }
        }
    };

    var count = 0;

    setInterval(function () {
        ++count;
        if (count >= $scope.films.length) count = 0;
        $scope.current = $scope.films[count];
        $scope.$apply();
    }, 10000);

    //GLOBAL FUNCTION

    $scope.buyTickets = function () {
        $scope.countTickets.map(function (e) {
            var elem = findEl("reserved", e.line, e.place);
        });

        $scope.countTickets = [];
    };

    $scope.selectFilm = function (data) {
        var time = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        $scope.select.film = data;
        $scope.select.time = time;
        $location.path("/select");
    };

    $scope.clearTime = function () {
        $scope.select.time = null;
    };

    $scope.clearPlace = function () {
        $scope.countTickets.map(function (e) {
            var elem = findEl("free", e.line, e.place);
        });

        $scope.countTickets = [];
    };

    $scope.addPlace = function (line, index) {
        $scope.countTickets.push(findEl("select", line, index));
    };

    $scope.removePlace = function (line, index) {
        var elem = findEl("free", line, index);
        var num = 0;
        $scope.countTickets.map(function (e) {
            if (e.line == elem.line) {
                if (e.place == elem.place) {
                    $scope.countTickets.splice(num, 1);
                }
            }
            num++;
        });
    };

    //HARDCODE

    $scope.countTickets = [];

    $scope.select = {
        time: null,
        film: null
    };

    $scope.selectPlaces = {};
    $scope.places = {
        line1: {
            id: 1,
            places: {
                1: "free",
                2: "free",
                3: "reserved",
                4: "reserved",
                5: "free",
                6: "free",
                7: "free",
                8: "reserved"
            }
        },
        line2: {
            id: 2,
            places: {
                1: "free",
                2: "free",
                3: "reserved",
                4: "reserved",
                5: "free",
                6: "free",
                7: "free",
                8: "free"
            }
        },
        line3: {
            id: 3,
            places: {
                1: "free",
                2: "reserved",
                3: "reserved",
                4: "reserved",
                5: "reserved",
                6: "free",
                7: "free",
                8: "free"
            }
        },
        line4: {
            id: 4,
            places: {
                1: "free",
                2: "free",
                3: "reserved",
                4: "reserved",
                5: "free",
                6: "free",
                7: "free",
                8: "free"
            }
        }
    };

    $scope.current = {
        id: 1,
        name: "Якись фільмец",
        src: "https://unsplash.it/251/303/?random",
        srcLarge: "https://unsplash.it/1600/1000/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
    };

    $scope.films = [{
        id: 1,
        name: "Якись фільмец",
        src: "https://unsplash.it/251/303/?random",
        srcLarge: "https://unsplash.it/1600/1000/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
        name: "Якись фільмец 2",
        src: "https://unsplash.it/254/302/?random",
        srcLarge: "https://unsplash.it/1604/1002/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
        id: 3,
        name: "Якись фільмец 3",
        src: "https://unsplash.it/251/302/?random",
        srcLarge: "https://unsplash.it/1601/1002/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
        id: 4,
        name: "Якись фільмец 4",
        src: "https://unsplash.it/252/303/?random",
        srcLarge: "https://unsplash.it/1601/1003/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
        id: 5,
        name: "Якись фільмец 5",
        src: "https://unsplash.it/254/304/?random",
        srcLarge: "https://unsplash.it/1604/1004/?random",
        startDay: "10/11/1991",
        expDay: "10/11/1992",
        description: "Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!\n                    Lorem ipsum dolor sit amet, \n                    consectetur adipisicing elit. \n                    Accusantium aperiam assumenda autem deserunt \n                    laborum nam numquam placeat quo veritatis voluptas. \n                    Aliquam consequuntur delectus distinctio eos molestias \n                    placeat quibusdam voluptatibus voluptatum!",
        prices: [{
            price: "буді дні - 100грн"
        }, {
            price: "вихідні дні - 120грн"
        }, {
            price: "пільговий - 80грн"
        }, {
            price: "день глядача - 90грн"
        }],
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
