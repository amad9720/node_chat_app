const expect = require('expect');

var {messageGen} = require('./message');

describe("Generate messages", ()=> {
    it('should generate correct message object', ()=> {
        var from = 'julie';
        var content = 'This is a test message';
        var message = messageGen(from, content);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,content});
    });
});
