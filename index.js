const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/movieApp",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connected")
    }).catch(err => {
        console.log("oh no")
        console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
new Movie({title:'legally blonde',year:1998,score:10,rating:'a'})