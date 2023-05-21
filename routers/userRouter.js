const UserBL = require('../models/userBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let Users = await UserBL.getUsers();
   
  return resp.json(Users);
 
})

router.get('/:useid', async function(req, resp)
{
  let useid = req.params.useid;
  let User = await UserBL.getUser(useid);
  return resp.json(User);
})

router.post('/', async function(req,resp)
{
  let use = req.body;
  let useid = await UserBL.addUser(use)
  return resp.json(useid);
})

router.put('/:useid', async function(req,resp)
{
  let use = req.body;
  let useid = req.params.useid;
  await UserBL.updateUser(use,useid)
  return resp.json("Updated !");
})

router.delete('/:useid', async function(req,resp)
{
  let useid = req.params.useid;
  await UserBL.deleteUser(useid)
  return resp.json("Deleted !");
})


module.exports = router