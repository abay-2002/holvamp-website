// Third-party module Express web framework.
import express from "express";
import express_layouts from 'express-ejs-layouts'
const app = express();
const port = process.env.PORT || 4000;

// Express view engine.
app.set('view engine', 'ejs');
app.use(express_layouts);

// Express built-in middleware.
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

const pages = [
    {
        to: '/',
        title: 'Home',
        icon: 'bi bi-house-door-fill'
    },
    {
        to: '/social-media',
        title: 'Social Media',
        icon: 'bi bi-people-fill'
    },
    {
        to: '/youtube',
        title: 'Youtube',
        icon: 'bi bi-youtube'
    }
]

// Express routing middleware. 
app.get('/', function(req, res) {
    res.render('home', {
        layout: 'layouts/main-layout',
        main_title: 'Holvamp',
        title: 'Home',
        pages
    });
});

app.get('/social-media', (req, res) => {
    res.render('social-media', {
        layout: 'layouts/main-layout',
        main_title: 'Holvamp | Social Media',
        title: 'Social Media',
        pages
    })
})

app.listen(port, () => {
    console.log(`App is listening to port:${port}`)
});