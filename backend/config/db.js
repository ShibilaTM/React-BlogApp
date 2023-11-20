const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL,{
        dbName:'BlogAppDB',
        // useNewUrlParser:true,
        // useUnifiedTopology:true
})

.then(()=>{
    console.log('Mongo db connection success');
})
.catch(err=>{
    console.log('error connecting to mongo'+err.message);
})