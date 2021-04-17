var express = require('express');
var MongoClient = require('mongodb').MongoClient
var crypto = require('crypto');

//One Way hash algorithm to hash passwords and sensitive information
module.exports = {
    OneWayHash: (salt, text) =>
    {
        var hash = crypto.pbkdf2Sync(text, salt, 1000, 64, 'sha512').toString('hex');

        return hash;
    } //end OneWayHash
};