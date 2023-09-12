const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chats = require("./data/chats");
const cors=require('cors');


//cors
app.use(cors({"Access-Control-Allow-Origin":"*"}))

app.get("/", function (req, res) {
  //console.log("chats", chats);
  res.send("Hello World");
});

app.get("/api/chat/:id", (req, res) => {
  //console.log('req',req)

  const singlechat = chats.find((c) => c._id === req.params.id);

  res.send(singlechat);
});

app.get("/new", (req, res) => {
  const { id } = req.params;

  const newChat = chats.find((out) => out._id === id);
  console.log(newChat);

  res.send("success");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get('/api/new',(req,res)=>{
  res.json({
    success:true
  })

})

app.get("/status", (req, res) => {
  console.log("Status...");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
