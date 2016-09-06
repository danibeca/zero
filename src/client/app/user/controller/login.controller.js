(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController(logger, auth, user) {
        var vm = this;
        vm.dataLoading = false;
        vm.login = login;

        activate();

        function activate() {
            logger.info('Activated Login View');
        }

        function login() {
            vm.dataLoading = true;
            auth.getLogin(vm.credential)
                .then(getLoginComplete);

            function getLoginComplete(data) {
                vm.dataLoading = false;
                if (data) {
                    user.setUser(data);
                    logger.success('Login realizado');
                } else {
                    logger.error('Email o password invalidos');
                }
            }
        }
    }
})();
