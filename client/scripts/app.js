/**
 * Created by m3rkz0r on 9/28/15.
 */
var app = angular.module("TestApp",[]);

app.controller("MainControllers",['$scope', '$http', function($scope, $http){
    $scope.republicans = [];
    $scope.democrats = [];
    $scope.winner = [];
    $scope.showNames = true;
    $scope.showWinner = true;

    var getRepublicans = function() {
        $http.get('/getRepublicans').then(function (res) {
            $scope.republicans = res.data;
            console.log(res.data);
        });
    };

    var getDemocrats = function() {
        $http.get('/getDemocrats').then(function (res) {
            $scope.democrats = res.data; //democrats is our variable from our server app.js get value.
        });
    };

    $scope.getWinner = function(){
        $scope.winnerBracket = $scope.republicans.concat($scope.democrats);

        $scope.winner = $scope.winnerBracket[Math.floor(Math.random() * $scope.winnerBracket.length)];

        console.log($scope.winner);
    };

    //This sets showNames to false, which triggers ng-show to show its values.
    $scope.toggle = function(){
        $scope.showNames = !$scope.showNames;
    };

    $scope.toggleWinner = function(){
        $scope.showWinner = !$scope.showWinner;
    };

    getRepublicans();
    getDemocrats();
}]);

$('.btn-danger').click(function(){
    $('.presidentHeading').remove();

    $('p').prepend("<h3 class='presidentHeading'>Your New President!</h3>");
});

