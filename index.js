let app=require("./src/app.js");
app.listen(process.env.server_post,()=>{
    console.log("server started");
})