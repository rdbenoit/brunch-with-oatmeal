describe("testing is configured", function () {
    it("should configure should", function () {
        true.should.be.true;
    });

    it("should configure expect", function () {
        expect(1).to.equal(1);
    });

    it("should configure sinon", function () {
        var fake = {
            test: function () {
            }
        };

        sinon.stub(fake, "test");
        fake.test(1);
        fake.test.should.have.been.calledWith(1);
    });
});