
/*
 * GET home page.
 */
var oauth2=require('nodeweibo/lib/oauth2');
var users=require('nodeweibo/lib/users');

exports.index = function(req, res){
    global.code=req.query.code;
    var options={
        client_id:'4263807830',
        client_secret:'f314a703b2586510ae62a8baaef1570e',
        grant_type:'authorization_code',
        code:code,
        redirect_uri:'127.0.0.1:3000/app'
    };
    oauth2.access_token(options,function(data){
        global.access_token=data.access_token;
        global.uid=data.uid;

        var options={
            source:4263807830,
            access_token:access_token,
            uid:uid
        };
        users.show(options,function(data){
            var userLogo=data.avatar_large;
            var username=data.name;
            var fansCount=data.followers_count;
            res.render('index',
                {
                    userId: username ,
                    userLogo:userLogo,
                    fansCount:fansCount
                });
        });

    });
};