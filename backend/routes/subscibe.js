const express = require('express');

const router = express.Router();

// Mock database for subscriptions
const subscriptions = [];

// Route to handle subscription
router.post('/', (req, res) => {
    const { email } = req.body;
    const subscribe = req.query.subscribed;    

    const filePath = path.join(__dirname,'...','data','subscriptions.json');
    let subscribes = [];

    if (fxs.existsSync(filePath)) {
        const filedata = fs.readFileSync(filePath, 'utf8');
        subscribes = JSON.parse(filedata);
        subscribes.push(subscribe);
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        res.status(200).json({ status: 'Message Recived' });
        console.log('Content from submited', { email });
    }
    else{
        subscribes.push(subscribed);
        fs.writeFileSync(filePath, JSON.stringify(subscribes,null,2));
        res.status(200).json({ status: 'Message Recived' });
        console.log('Content from submited',{ email});
    }

});

module.exports = router;