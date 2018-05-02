const path = require('path');
const express = require('express');
const useragent = require('express-useragent');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(useragent.express());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    let platform;
    if (req.useragent.isTablet) {
        platform = 'tablet';
    } else if (req.useragent.isMobile) {
        platform = 'mobile';
    } else {
        platform = 'desktop';
    }

    res.sendFile(path.resolve(path.join(__dirname), 'build', platform + '.html'));
});

app.listen(PORT);
