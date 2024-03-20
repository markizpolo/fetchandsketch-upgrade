const fetchandsketch = require('fetchandsketch');
const fetchandsketch_upgrade = require('fetchandsketch-upgrade');
const multer = require('multer');
const mongoose = require('mongoose');
const jest = require('jest');
const ganache_cli = require('ganache-cli');
const dotenv = require('dotenv');
const axios = require('axios');
const firebase = require('firebase');
const moment = require('moment');
const sinon = require('sinon');
const ethers = require('ethers');
const webpack = require('webpack');
const supertest = require('supertest');
const enzyme = require('enzyme');
const ipfs_http_client = require('ipfs-http-client');
const bluebird = require('bluebird');
const xml2js = require('xml2js');

const name = 'Node.js';
console.log(`Hello, ${name}!`);

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));

const assert = require('assert');
assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');

// Implement a bubble sort algorithm
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
console.log('Sorted Array:', bubbleSort(unsortedArray));

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});