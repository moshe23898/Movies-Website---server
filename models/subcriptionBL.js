const Subcription = require('./SubcriptionModel');

const getSubcriptions = () =>
{
  return Subcription.find({})

 
}


const getSubcription = (id) =>
{
  return Subcription.findById(id)
}

const addSubcription = async (use) =>
{
    let newuse = new Subcription(use);
    await newuse.save();
    return newuse._id
}

const updateSubcription = async (use, id) =>
{
    await Subcription.findByIdAndUpdate(id,use)
}

const deleteSubcription = async (id) =>
{
    await Subcription.findByIdAndDelete(id)
}

module.exports = {getSubcriptions,getSubcription,addSubcription,updateSubcription,deleteSubcription};