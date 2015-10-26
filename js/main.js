var fxScheduleApp = angular.module('ui.bootstrap.mozfest', ['ngAnimate', 'ui.bootstrap', 'ngRoute']);

fxScheduleApp.controller('SessionsCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});

fxScheduleApp.controller('ScheduleCtrl', function ($scope, $window) {
    $scope.tabs = [
        { title:'Friday 6/11', content:'Dynamic content 1' },
        { title:'Saturday 7/11', content:'Dynamic content 2' },
        { title:'Sunday 8/11', content:'Dynamic content 3' }
    ];
});

fxScheduleApp.config(function($routeProvider){
    $routeProvider
        //the timeline display
        .when('/', {
            templateUrl: 'pages/sessions.html',
            controller: 'SessionsCtrl'
        })
        .when('/schedule', {
            templateUrl: 'pages/schedule.html',
            controller: 'ScheduleCtrl'
        })
});
