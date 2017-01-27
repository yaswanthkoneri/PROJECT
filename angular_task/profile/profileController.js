app.controller('profileController', ['$scope', function($scope) {
    $scope.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
}]);
