const Member = require('./MembersModel');

const getMembers = () =>
{
  return Member.find({})

 
}


const getMember = (id) =>
{
  return Member.findById(id)
}

const addMember = async (use) =>
{
    let newuse = new Member(use);
    await newuse.save();
    return newuse._id
}

const updateMember = async (use, id) =>
{
    await Member.findByIdAndUpdate(id,use)
}

const deleteMember = async (id) =>
{
    await Member.findByIdAndDelete(id)
}

module.exports = {getMembers,getMember,addMember,updateMember,deleteMember};