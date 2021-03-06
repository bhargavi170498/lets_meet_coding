//import { lchmod } from 'fs';

var db = require('../dbconnection');

var User = {

    getAllUsers: function (callback) {
        return db.query("select * from user_tbl", callback);
    },
    getUserById: function (id, callback) {
        return db.query("select * from user_tbl where user_id=?", [id], callback);
    },
    addUser: function (u, callback) {
        console.log(u.user_id);
        console.log(u.user_pass);
        console.log(u.gender);
        console.log(u.user_name);
        console.log(u.user_mob_no);
        console.log(u.user_pic);
        console.log(u.user_bdate);
        return db.query("insert into user_tbl(user_id,user_name,user_pass,user_pic,gender,user_mob_no,user_bdate) values(?,?,?,?,?,?,?)",[u.user_id,u.user_name,u.user_pass,u.user_pic,u.gender,u.user_mob_no,u.user_bdate],callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from user_tbl where user_id=?", [id],callback);
    },
    updateUser: function (id, u, callback) {
        return db.query("update user_tbl set user_name=?,user_pic=?,gender=?,user_mob_no=?,user_bdate=? where user_id=?",[u.user_name,u.user_pic,u.gender,u.user_mob_no,u.user_bdate, id],callback);
    }

};
module.exports = User;
