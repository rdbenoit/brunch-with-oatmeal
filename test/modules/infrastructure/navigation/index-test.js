describe("modules/infrastructure/navigation", function(){
    var $ = require("jquery");
    var Modules = require("modules");

    beforeEach(function(){
        $.mobile.changePage = sinon.stub();
    });

    afterEach(function(){
        delete $.mobile.changePage;
    });

    it("should not change page", function(){
        Modules.Infrastructure.navigation.navigate();
        $.mobile.changePage.should.not.have.been.calledWith();
    });

    it("should change page", function(){
        Modules.Infrastructure.navigation.navigate("hello world");
        $.mobile.changePage.should.have.been.calledWith();
    });
});