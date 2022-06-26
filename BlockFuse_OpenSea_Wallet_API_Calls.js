import { OpenSeaStreamClient } from '@opensea/stream-js';

const client = new OpenSeaStreamClient({
    token: env.openseaApiKey
});

client.connect();

client.onItemReceivedOffer('*', (event) => {
    // handle event
});

res.set('Content-Disposition', 'attachment; filename=AssetData.json')
res.json(req.user);
