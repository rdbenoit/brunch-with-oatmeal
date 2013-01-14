describe("modules/helpers/view", function () {
    var Modules = require("modules");
    var $ = require("jquery");
    var actual;


    beforeEach(function(){
        actual = Modules.Helpers.View.getEventTarget({target: "<div></div>"});
    });

    afterEach(function(){
    });

    it("should get element from target", function () {
        expect(actual[0].toString()).to.equal($("<div></div>")[0].toString());
    });
});