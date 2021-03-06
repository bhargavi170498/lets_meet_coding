var db=require('../dbconnection');

var community={

    getAlCommunities:function(callback){
        return db.query("select * from communities_tbl",callback);
    },
    getCommunityById:function(id,callback){
        return db.query("select * from communities_tbl where comm_id=?",[id],callback);
    },
    addCommunity:function(comm,callback){
        return db.query("insert into communities_tbl values(?,?,?,?,?,?)",[comm.comm_name,comm.comm_des,comm.comm_date,comm.comm_rating,comm.created_by],callback);
    },
    updateCommunity:function(id,comm,callback){
        return db.query("update communities_tbl set comm_name=?,comm_des=?,comm_pic=?,comm_date=?,comm_ratting=?,created_by=? where comm_id=?",[comm.comm_name,comm.comm_des,comm.comm_date,comm.comm_rating,comm.created_by,id],callback);
    },
    deleteCommunity:function(id,callback){
        return db.query("delete from communities_tbl where comm_id=?",[id],callback);
    }
};

module.exports=community;