/**
 * Created by i-wanglihua on 14-1-20.
 */

/*
 * GET home page.
 */
var oauth2=require('nodeweibo/lib/oauth2');

exports.test = function(req, res){
    oauth2.authorize();
    res.end();
};