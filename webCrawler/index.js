#!/usr/bin/node

var express = require('express'),
    url = require('url'),//解析操作url
    superagent = require('superagent'),
    cheerio = require('cheerio'),
    eventproxy = require('eventproxy');
var targetUrl = 'https://cnodejs.org/';

superagent.get(targetUrl).end(function(err,res){
  console.log(res);
});
