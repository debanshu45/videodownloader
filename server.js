const express = require('express');
const app = express();
const videoUrlLink = require('video-url-link');


app.use(express.urlencoded({ extended:false }));
app.use(express.static('views'));
app.set('view engine', 'ejs');
const urlDownloader = require('url-downloader');

app.get('/',(req,res) => {
    res.render('index');
})
app.post('/download',(req,res) => {
    videoUrlLink.instagram.getInfo(req.body.url, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        res.render('display',{info});
        res.end();
    }
});
})
// app.get('instadownload',(req,res)=>{

//     forceDownload(req.query.URL, 'A file to download');
//     res.end();
// })


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
})