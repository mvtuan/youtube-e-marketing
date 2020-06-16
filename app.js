const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Server listening on port 3000' );
})
console.log('Hello');