var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {
    $interval(function() {
        var date;
        date = new Date
        var blinkswitch;
        var hour = date.getHours();
        var minutes = date.getMinutes();
        $scope.hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        $scope.minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        $scope.seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        $scope.blinkswitch = !$scope.blinkswitch;
        $scope.time = (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    }, 1000);

});
