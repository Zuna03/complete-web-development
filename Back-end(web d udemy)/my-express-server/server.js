const express=require("express");

const app = express();

app.get("/",function(request,response){
  response.send("<h1>Hello World!!</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at: sumi@gmail.com");
});
 app.get("/about",function(req,res){
   res.send("Hey there !!! This website belongs to Shivangi Shrivastava , an aspiring full-stack developer. ")
 })
 app.get("/hobbies",function(req,res){
   res.send(" <ul><li>Drawing</li><li>Stage speaking</li><li>Web Devlopment</li></ul>")
 })
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
