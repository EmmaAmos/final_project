const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

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