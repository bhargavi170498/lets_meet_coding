var db = require('../dbconnection');
var u={
getUser:function(us,callback)
{
    console.log(us.user_id);
    console.log(us.user_pass);
    return db.query("select * from user_tbl where user_id=? and user_pass=?", [us.user_id,us.user_pass], callback);
}
};
module.exports=u;