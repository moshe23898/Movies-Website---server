const SubcriptionBL = require('../models/subcriptionBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let Subcriptions = await SubcriptionBL.getSubcriptions();
   
  return resp.json(Subcriptions);
 
})

router.get('/:Subcriptionid', async function(req, resp)
{
  let Subcriptionid = req.params.Subcriptionid;
  let Subcription = await SubcriptionBL.getSubcription(Subcriptionid);
  return resp.json(Subcription);
})

router.post('/', async function(req,resp)
{
  let use = req.body;
  let Subcriptionid = await SubcriptionBL.addSubcription(use)
  return resp.json(Subcriptionid);
})

router.put('/:Subcriptionid', async function(req,resp)
{
  let use = req.body;
  let Subcriptionid = req.params.Subcriptionid;
  await SubcriptionBL.updateSubcription(use,Subcriptionid)
  return resp.json("Updated !");
})

router.delete('/:Subcriptionid', async function(req,resp)
{
  let Subcriptionid = req.params.Subcriptionid;
  await SubcriptionBL.deleteSubcription(Subcriptionid)
  return resp.json("Deleted !");
})


module.exports = router