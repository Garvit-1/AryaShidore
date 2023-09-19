const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.post('/bfhl', async(req, res) => {
    const data = await JSON.parse(req.body.data);
    var numbers = []
    var alphabets = []
    for(let i=0;i<data.length;i++){
        if(isNaN(data[i])){
            alphabets.unshift(data[i])
        }
        else{
            numbers.unshift(data[i])
        }
    }
    console.log(numbers)
    console.log(alphabets)
    const user_id = "arya_shidore_09082002";
    const email = "aryarohit.shidore2020@vitstudent.ac.in";
    const roll_number = "20BCE2027";
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

    const response = {
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});