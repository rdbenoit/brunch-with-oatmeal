var chai, sinonChai;

chai = require('chai');
sinonChai = require('sinon-chai');
chai.use(sinonChai);

module.exports = {
    expect: chai.expect,
    should: chai.should(),
    sinon: require('sinon')
};