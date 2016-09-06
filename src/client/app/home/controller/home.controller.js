(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($rootScope, $translate) {
        /*jshint unused:false*/
        var vm = this;

        $rootScope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }
})();
