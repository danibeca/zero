/* jshint -W117, -W030 */
describe('LoginController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.user');
        bard.inject('$controller', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('LoginController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Login controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });
});
