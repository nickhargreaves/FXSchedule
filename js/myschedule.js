angular.module('ui.bootstrap.mozfest', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.mozfest').controller('TabsCtrl', function ($scope, $window) {
    $scope.tabs = [
        { title:'Friday 6/11', content:'Dynamic content 1' },
        { title:'Saturday 7/11', content:'Dynamic content 2' },
        { title:'Sunday 8/11', content:'Dynamic content 3' }
    ];
});