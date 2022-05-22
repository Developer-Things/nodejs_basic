
var first=require('express')
var store=first()
var second=require('express-session')
store.use(second({
   secret:'secret!',  //unique id
   resave:true,
   key:'session',
   saveUninitialized:false
   
}))

store.get('/' ,function(req,res){
   if(req.session.page_views){
      req.session.page_views++
      res.send("page visited"+req.session.page_views+"times")
   }
   else{
      req.session.page_views=1
      res.send("page for the first time")
   }
});
store.listen(3000)


