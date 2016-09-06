/* jshint -W117, -W030 */

describe('user routes', function () {
    describe('state', function () {

        beforeEach(function() {
            module('app.user', bard.fakeToastr);
            bard.inject('$rootScope', '$state');
        });

        bard.verifyNoOutstandingHttpRequests();

        /////LOGIN ROUTE TEST
        it('should map state login to url /login ', function() {
            expect($state.href('login', {})).to.equal('/login');
        });

        it('should map /login route to Login View template', function () {
            var view = 'app/user/template/login.html';
            expect($state.get('login').templateUrl).to.equal(view);
        });

        it('of login should work with $state.go', function () {
            $state.go('login');
            $rootScope.$apply();
            expect($state.is('login'));
        });
    });
});
