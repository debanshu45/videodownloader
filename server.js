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
app.get('/facebook',(req,res) => {
    res.render('form',{ id:"fbdownload" });
});
app.get('/instagram',(req,res) => {
    res.render('form',{id:"instadownload"});
})
app.get('/youtube',(req,res) => {
    res.render('form',{ id:"youtubedownload" });
})

app.post('/instadownload',(req,res) => {
    videoUrlLink.instagram.getInfo(req.body.url, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        res.render('display',{info,platform:"instagram"});;
        res.end();
    }
});
})
app.post('/fbdownload',(req,res) => {
    videoUrlLink.twitter.getInfo(req.body.url, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log(info);
            res.render('display',{platform:"twitter",video:info.variants[0].url,heading:info.full_text});
        }
    });
})
app.post('/youtubedownload',(req,res)=>{
    videoUrlLink.youtube.getInfo(req.body.url, { hl: 'en' }, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log(info);
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