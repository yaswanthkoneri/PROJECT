app.controller('homeController', ['$scope', '$state', function($scope, $state) {
    $scope.pageName = "home page";
    $scope.logout = function() {
        localStorage.removeItem('loggedInUser'); // removing the userdetails from the local storage
        $state.go('login'); // redirecting to the login page after the logout action
    };
}]);
