(function () {
    'use strict';

    angular
        .module('app.user')
        .factory('auth', auth);

    /* @ngInject */
    function auth($http, environmentConfig, $window) {
        var service = {
            getLogin: getLogin
        };

        return service;

        function getLogin(data) {
            return $http.post(environmentConfig.api + '/login', data)
                .then(success)
                .catch(fail);

            function success(response) {
                $window.sessionStorage.token = response.data.token;
                return response.data;
            }

            function fail() {
                delete $window.sessionStorage.token;
            }
        }
    }
})();
