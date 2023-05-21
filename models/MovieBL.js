const Movie = require('./MovieModel');

const getMovies = () =>
{
  return Movie.find({})

 
}


const getMovie = (id) =>
{
  return Movie.findById(id)
}

const addMovie = async (use) =>
{
    let newuse = new Movie(use);
    await newuse.save();
    return newuse._id
}

const updateMovie = async (use, id) =>
{
    await Movie.findByIdAndUpdate(id,use)
}

const deleteMovie = async (id) =>
{
    await Movie.findByIdAndDelete(id)
}

module.exports = {getMovies,getMovie,addMovie,updateMovie,deleteMovie};