import assertRevert from 'openzeppelin-solidity/test/helpers/assertRevert';

const DONotAllowS3Policy = artifacts.require('./DONotAllowS3Policy.sol');

const eutil = require('ethereumjs-util');

const testDataHash1 = eutil.bufferToHex(eutil.sha3('{"foo":"bar","baz":42}'));
const testDataUri1 = 'QmUMqi1rr4Ad1eZ3ctsRUEmqK2U3CyZqpetUe51LB9GiAM';
const testS3DataUri1 = 's3://QmUMqi1rr4Ad1eZ3ctsRUEmqK2U3CyZqpetUe51LB9GiAM';

contract('DONotAllowS3Policy', accounts => {
  const admin = accounts[0];
  const viewer0 = accounts[1];
  let instance;

  before('set up a LinniaHub contract', async () => {
    instance = await DONotAllowS3Policy.new();
  });

  describe('constructor', () => {
    it('should not fail', async () => {
      const newInstance = await DONotAllowS3Policy.new({
        from: admin
      });
    });
  });
  describe('checkPolicy', () => {
    it('should allow ipfs dataURI', async () => {
      const result = await instance.checkPolicy.call(testDataHash1, viewer0, testDataUri1, {from: admin})
      assert.equal(true, result);
    });
    it('should NOT allow s3 dataURI', async () => {
      await assertRevert( instance.checkPolicy.call(testDataHash1, viewer0, testS3DataUri1, {from: admin}));
    });
  });
});
