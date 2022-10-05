const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
//This is where the search funtion is made


const getSearch = async (req, res) => {
    const result = await mongodb.getDb().db().collection(any).find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    }); 
};

const getResult = async (req, res) => {
  const results = req.params.id;
  const query = { results: results};
  const result = await mongodb.getDb().db().collection(any).find(query);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  }); 
};

module.exports = {
  getSearch,
  getResult
};

//check out this link: https://www.youtube.com/watch?v=208OaGpH1PA&t=0s