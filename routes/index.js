var oauth2=require('nodeweibo/lib/oauth2');
var users=require('nodeweibo/lib/users');
var statuses=require('nodeweibo/lib/statuses');


exports.index = function(req, res){
    if(req.query.code){
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
                var screen_name=data.screen_name;
                var username=data.name;
                var city=data.city;
                var location=data.location;
                var province=data.province;
                var followers_count=data.followers_count;
                var friends_count=data.friends_count;
                var statuses_count=data.statuses_count;
                var description=data.description;
                var url=data.url;
                var created_at=data.created_at;
                var date=new Date(created_at);
                var options={
                    access_token:access_token,
                    uid:uid
                };
                statuses.user_timeline(options,function(data){
                    var statuses_text=[];
                    var reposts_count=[];
                    var comments_count=[];
                    var pic_urls=[];
                    var statuses_created_at=[];
                    for(var i=0; i<3;i++){
                        statuses_text.push(data.statuses[i].text);
                        reposts_count.push(data.statuses[i].reposts_count);
                        comments_count.push(data.statuses[i].comments_count);
                        pic_urls.push(data.statuses[0].pic_urls);
                        statuses_created_at.push(new Date(data.statuses[i].created_at));
                    }
                    res.render('index',
                        {
                            userId: username ,
                            userLogo:userLogo,
                            screen_name:screen_name,
                            city:city,
                            location:location,
                            province:province,
                            followers_count:followers_count,
                            friends_count:friends_count,
                            statuses_count:statuses_count,
                            description:description,
                            url:url,
                            created_at:date,
                            statuses_text:statuses_text,
                            reposts_count:reposts_count,
                            comments_count:comments_count,
                            pic_urls:pic_urls,
                            statuses_created_at:statuses_created_at
                        });
                });
            });

        });
    }
    else{
        res.write('<a href="127.0.0.1:3000/begin">login in</a>');
        res.end();
    }
};
