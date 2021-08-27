const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/movieApp",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connected")
    }).catch(err => {
        console.log("oh no")
        console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String1,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

Movie.insertMany([
    {title:'legally blonde',year:1998,score:10,rating:'a'},
    {title:'emily in paris',year:2020,score:9,rating:'b'}

]).then(data=>{
    console.log("it worked")
    console.log(data)
})

Movie.find({year:{$gte:2015}}).then(data=>console.log(data))