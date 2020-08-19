const express = require('express');
const app = express();
const videoUrlLink = require('video-url-link');

app.use(express.urlencoded({ extended:false }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('index');
})
app.post('/download',(req,res) => {
    videoUrlLink.instagram.getInfo(req.body.url, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log(info);
        res.render('display',{info});
        res.end();
    }
});
})


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
})