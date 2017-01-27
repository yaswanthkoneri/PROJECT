
//Configuring the login controller

app.controller('loginController', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.pageName = "login page";
    $scope.login = function() {
        //posting userdetails using http request
        $http.post('http://localhost:8080/PROJECT/apis/userAuthentication.php', $scope.loginuser).success(function(response) {
            console.log(response);
            if (response.response === "Authentication Success") { //checking whether authentication success or not from the backend
                localStorage.setItem('loggedInUser', JSON.stringify({ "email": response.user.Email, "userName": response.user.FirstName }));//convering javascript object into string
                $state.go('home.profile');
            } else {
                alert("Please Provide Correct Email and Password");
            }
        }).error(function(err) {
           alert('error:',err);
        });
    };
}]);
