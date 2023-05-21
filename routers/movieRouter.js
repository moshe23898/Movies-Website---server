const MovieBL = require('../models/MovieBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let Movies = await MovieBL.getMovies();
   
  return resp.json(Movies);
 
})

router.get('/:movieid', async function(req, resp)
{
  let movieid = req.params.movieid;
  let Movie = await MovieBL.getMovie(movieid);
  return resp.json(Movie);
})

router.post('/', async function(req,resp)
{
  let use = req.body;
  let movieid = await MovieBL.addMovie(use)
  return resp.json(movieid);
})

router.put('/:movieid', async function(req,resp)
{
  let use = req.body;
  let movieid = req.params.movieid;
  await MovieBL.updateMovie(use,movieid)
  return resp.json("Updated !");
})

router.delete('/:movieid', async function(req,resp)
{
  let movieid = req.params.movieid;
  await MovieBL.deleteMovie(movieid)
  return resp.json("Deleted !");
})


module.exports = router