var expect = require('expect');

var { generateMessage } = require('./message');

describe('Generate Message', () => {
    it('should generate the correct method object', () => {
        var from = 'megha';
        var text = 'message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});