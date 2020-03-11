const SkiyaTube = require('Embark/contracts/SkiyaTube')
let accounts = []
const url = web3.utils.asciiToHex("https://siasky.net/IADUs8d9CQjUO34LmdaaNPK_STuZo24rpKVfYW3wPPM2uQ")
//console.log('url: ', url)
config({
    contracts: {
        deploy: {
            SkiyaTube: {}
        }
    }
}, (err, accs) => {
    accounts = accs;
});
contract('SkiyaTube', () => {

    it('should add a new video url', async () => {
        const result = await SkiyaTube.methods.addVideo(url).send({
            gas: 8000000,
            from: accounts[0]
        });
        var event = result.events.addedEvent.returnValues
        console.log('returnValues: ', event)
        assert.strictEqual(event.added, true);
    });
    it('should add a like to a url', async () => {
        const result = await SkiyaTube.methods.addLike(url).send({
            gas: 8000000,
            from: accounts[0]
        });
        var event = result.events.addedEvent.returnValues
        console.log('returnValues: ', event)
        assert.strictEqual(event.added, true);
    });
    it('should remove a like for video', async () => {
        const result = await SkiyaTube.methods.disLike(url).send({
            gas: 8000000,
            from: accounts[0]
        });
        var event = result.events.addedEvent.returnValues
        console.log('returnValues: ', event)
        assert.strictEqual(event.added, true);
    });
    it('should add a view to a video', async () => {
        const result = await SkiyaTube.methods.addView(url).send({
            gas: 8000000,
            from: accounts[0]
        });
        var event = result.events.addedEvent.returnValues
        console.log('returnValues: ', event)
        assert.strictEqual(event.added, true);
    });

    it('should get a videos information', async () => {
        const result = await SkiyaTube.methods.getVideo(url).call({
            gas: 8000000,
            from: accounts[0]
        });
        console.log('video details: ', result)
        assert.strictEqual(parseInt(result[0]) === 1 && parseInt(result[0]) === 1 && parseInt(result[0]) === 1, true)
    });

});