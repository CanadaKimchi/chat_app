module.exports = function(io){
    //all the io related things
    io.on("connection", async(socket)=>{
        console.log("client is connected", socket.id)
    });
};