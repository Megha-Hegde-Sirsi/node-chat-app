var expect = require('expect');

var { generateMessage ,generateLocationMessage} = require('./message');

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

describe('Generate Location Message', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude=12;
        var longitude = 13;
        var url = 'https://www.google.com/maps?q=12,13'
        
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url 
        });
    });
});