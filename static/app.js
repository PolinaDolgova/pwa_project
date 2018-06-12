"use strict";
var app = angular.module("myApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('Home', {
            url: '/',
            templateUrl: 'home.html'
        })

        .state('Tests', {
            url: '/tests',
            templateUrl: 'tests.html'
        })

        .state('Headache', {
            url: '/tests/headacheTests',
            templateUrl: 'headache.html'
        })

        .state('Backache', {
            url: '/tests/backacheTests',
            templateUrl: 'backache.html'
        })

        .state('Neurology', {
            url: '/tests/neurologyTests',
            templateUrl: 'neurology.html'
        })

        .state('Question', {
            url: '/questionToDoctor',
            templateUrl: 'questionToDoctor.html'
        })

        .state('Appointment', {
            url: '/appointment',
            templateUrl: 'appointment.html'
        })

        .state('Lk', {
            url: '/lk',
            templateUrl: 'lk.html'
        })
        .state('About', {
            url: '/about',
            templateUrl: 'about.html'
        });
});


app.controller("AppCtrl", function ($scope) {
    $scope.directions = ["Нейрохирургия",
        "Неврология",
        "Терапия",
        "Лечебный медицинский массаж",
        "Травматология и ортопедия",
        "Гастроэнтерология",
        "Мануальная терапия",
        "Функциональная диагностика",
        "INVITRO анализы",
        "Психолог",
        "Амбулаторная реабилитация"
    ];
    $scope.timelist = ["8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00"
    ];
    $scope.ishiddentest = true;
    $scope.hiddenTest = [
        {
            test: "migraine",
            hidden: true,
            hidresult: true
        },
        {
            test: "pressure",
            hidden: true,
            hidresult: true
        },
        {
            test: "cluster pain",
            hidden: true,
            hidresult: true
        },
        {
            test: "neck pain",
            hidden: true,
            hidresult: true
        },
        {
            test: "loin pain",
            hidden: true,
            hidresult: true
        },
        {
            test: "all back",
            hidden: true,
            hidresult: true
        },
        {
            test: "neugology",
            hidden: true,
            hidresult: true
        }
    ];

    $scope.openTest = function (name) {
        name.hidden = !name.hidden;
    };

    $scope.openRes = function (name) {
        name.hidresult = !name.hidresult;
    };
    $scope.openNav = function () {
        document.getElementById("menu").style.width = "250px";
    };
    $scope.closeNav = function () {
        document.getElementById("menu").style.width = "0";
    }
});