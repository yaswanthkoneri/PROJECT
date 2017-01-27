//Defining angular module with the name "app" which is defined in ng-app directive in index.html
var app = angular.module('app', ['ui.router']);

//initializing the ui router states
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html'
    }).state('signup', {
        url: '/signup',
        templateUrl: 'signup/signup.html'
    }).state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    }).state('home.profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html'
    }).state('home.change_password', {
        url: '/changepassword',
        templateUrl: 'changepassword/changepassword.html'
    });

    // checking whether the loggedin user is in local storage or not
    if (localStorage.getItem('loggedInUser')) {
        $urlRouterProvider.otherwise('/home/profile'); // if yes redirect to profile page
    } else {
        $urlRouterProvider.otherwise('/login');// if no redirect to login page
    }

});
