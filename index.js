const path = require('path');
const express = require('express');
const useragent = require('express-useragent');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(useragent.express());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    if (req.useragent.isMobile) {
        res.sendFile(path.resolve(path.join(__dirname), 'build', 'mobile.html'));
    } else if (req.useragent.isTablet) {
        res.sendFile(path.resolve(path.join(__dirname), 'build', 'tablet.html'));
    } else {
        res.sendFile(path.resolve(path.join(__dirname), 'build', 'desktop.html'));
    }
});

app.listen(PORT);
