const MemberBL = require('../models/MembersBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let Members = await MemberBL.getMembers();
   
  return resp.json(Members);
 
})

router.get('/:Memberid', async function(req, resp)
{
  let Memberid = req.params.Memberid;
  let Member = await MemberBL.getMember(Memberid);
  return resp.json(Member);
})

router.post('/', async function(req,resp)
{
  let use = req.body;
  let Memberid = await MemberBL.addMember(use)
  return resp.json(Memberid);
})

router.put('/:Memberid', async function(req,resp)
{
  let use = req.body;
  let Memberid = req.params.Memberid;
  await MemberBL.updateMember(use,Memberid)
  return resp.json("Updated !");
})

router.delete('/:Memberid', async function(req,resp)
{
  let Memberid = req.params.Memberid;
  await MemberBL.deleteMember(Memberid)
  return resp.json("Deleted !");
})


module.exports = router