
// In src/index.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const v1WorkoutRouter = require('./v1/routes/routes');
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
 }

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api/v1/workouts', v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});