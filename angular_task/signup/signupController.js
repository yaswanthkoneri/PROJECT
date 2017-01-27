app.controller('signupController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.pageName = "signup page";
    $scope.registation = function() {
        if ($scope.registerdata.password !== $scope.registerdata.conformation_password) { //checking whether password and confirmation password are same or not !
            alert(" Both the password and confirmation password should match");
        } else {
           // console.log($scope.registerdata);
            $http.post('http://localhost:8080/PROJECT/apis/userRegistration.php', $scope.registerdata).then(function(response) {//posting the data using the http request
                console.info(response);
                if (response.data.response == "User created successfully") {
                    localStorage.setItem('loggedInUser', JSON.stringify({ "email": response.data.user.Email, "userName": response.data.user.FirstName }));
                    $state.go('home.profile');
                } else {
                    alert("Something went wrong.");
                }
            });
        }
    };
    $scope.reset = function() {
        $scope.registerdata = '';
    };
}]);
