var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainController', function($scope) {
    $scope.movies = [{name:'Shrek', genre:'Action Comedy'},
        {name:'Hello', genre:'Comedy'},
        {name:'Die Hard', genre:'Action'},
        {name:'The Godfather', genre:'Drama'}];
});