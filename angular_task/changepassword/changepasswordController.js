////Configuring the changepassword controller
app.controller('changePasswordController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.pageName = "change password";
    $scope.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Getting emailaddress from local storage and send it to backend

    $scope.changePassword = function() {
        //checking whether password and confirmation password matches or not
        if ($scope.changepasswordData.new_password !== $scope.changepasswordData.confirmation_password) { 
            alert(" Both the password and confirmation password should match");
        } else {
            console.log($scope.changepasswordData);
            $scope.changepasswordData.Email = $scope.loggedInUser.email;
            $scope.data = { 
                "Email": $scope.changepasswordData.Email,
                "old_password": $scope.changepasswordData.old_password,
                "new_password": $scope.changepasswordData.new_password
            };
            $http.post('http://localhost:8080/PROJECT/apis/changePassword.php', $scope.data).then(function(response) { //posting the data using http service
                if (response.data.status == "Success") { // checking the response status 
                    alert('User password changed successfully');
                    $state.go('home.profile'); // redirecting to profile page after the successfull password change
                } else {
                    console.log(response);
                    alert("Something went wrong.");// error message 
                }
            });
        }
    };

}]);
