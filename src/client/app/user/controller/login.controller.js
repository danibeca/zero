(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController(logger, auth, $state, $filter) {
        var vm = this;
        vm.login = login;

        function login() {
            auth.getLogin(vm.credential)
                .then(success)
                .catch(fail);


            function success(data) {
                vm.dataLoading = false;
                if (data) {
                    logger.success($filter('translate')('LOGIN_SUCCESS'));
                } else {
                    logger.error($filter('translate')('LOGIN_FAILED'));
                }
            }

            function fail() {
                logger.error($filter('translate')('LOGIN_INTERNAL_ERROR'));
            }


        }
    }
})();
