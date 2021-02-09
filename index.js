const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
// const HOST = '0.0.0.0';
app.set('view engine' , 'ejs');
app.use(express.static('public'));

app.get('/' , function(req , res){
    res.render('index');
});

app.get('/projects' , function(req , res){
    res.render('projects');
});

app.get('/blog' , function(req , res){
    res.render('blog');
});

// app.get('/exp' , function(req , res){
//     res.render('exp');
// });

// app.get('/social' , function(req , res){
//     res.render('social');
// });

// app.get('/skills' , function(req , res){
//     res.render('skills');
// });

app.listen(PORT , function(){
    console.log(`Serving on port ${PORT}`);
});