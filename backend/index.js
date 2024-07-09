const express = require('express')
const rootRouter = require('./routes/index');
const cors = require('cors');


const app = express();

//Middleware
    //handle cors error
    app.use(cors());
    app.use(express.json());
    // endpoint /api/v1 logic
    app.use('/api/v1', rootRouter);
  


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});