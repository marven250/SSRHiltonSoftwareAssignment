const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000 ;
const cors = require('cors');
const ReactDOMServer = require('react-dom/server');
const volcanoRoutes = require('./routes/index');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/volcanoes', volcanoRoutes);


app.get('/', (req, res, next)=>{
    res.send('Welcome to the Hilton Software Volcanoes API');
});

app.get('/*', (req, res)=>{
    const reactApp = ReactDOMServer.renderToString(
        <h1>Hello from the server side!</h1>
    );

    return res.send(`
        <html>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>
    `)
})


app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
});