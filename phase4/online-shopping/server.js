var express = require("express");
var bp = require('body-parser');
var mongodb = require("mongodb");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'subhasree260497@gmail.com',
      pass: 'SubhaLisha@26'
    }
  });
  
var ObjectID =  mongodb.ObjectID;
var database;
var USER_COLLECTION="users";
var PRODUCT_COLLECTION="products";
var app = express();
app.use(bp.json());
var  distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const LOCAL_DATABASE = "mongodb+srv://subhasree:subhasree123@cluster0.kjkid.mongodb.net/shopping?retryWrites=true&w=majority";
// Local port.
const LOCAL_PORT = 8080;

mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (error, client) {

        // Check if there are any problems with the connection to MongoDB database.
        if (error) {
            console.log(error);
            process.exit(1);
        }

        // Save database object from the callback for reuse.
        database = client.db();
        console.log("Database connection done.");

        // Initialize the app.
        var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
            var port = server.address().port;
            console.log("App now running on port", port);
        });
    });

    app.post("/api/users",function(req,res){
        var user = req.body;
        email = req.body.email;
        database.collection("login").findOne({email:email},function(err,doc){
        if(doc){
                manageError(res, "User already exists", "Account already exist");
        }
        else{
        database.collection(USER_COLLECTION).insertOne(user, function (err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new user.");
            } else {
                console.log("New User Registered",doc.ops);
            }
        });
        }
    })
    })

    app.post("/api/products",function(req,res){
        var product = req.body;
        var pid = req.body.pid;
        database.collection(PRODUCT_COLLECTION).findOne({pid:pid},function(err,doc){
            if(doc){
             //   console.log("server 64",doc);
                manageError(res,"Product already Exist","Cannot add similar product")
            }
            else{
                database.collection(PRODUCT_COLLECTION).insertOne(product,function(err,doc){
                    if (err) {
                        manageError(res, err.message, "Failed to create new product.");
                    } else {
                       res.send(doc)
                    }
                })
            }
            })
        
    });

    app.post("/api/login",function(req,res){
        var acc = req.body;
        email = req.body.email;
        database.collection("login").findOne({email:email},function(err,doc){
            if(doc){
                manageError(res, "User already exists", "Account already exist");
            }
            else{
                database.collection("login").insertOne(acc, function (err, doc) {
                    if (err) {
                        manageError(res, err.message, "Failed to insert in login.");
                    } else {
                        console.log("Account Added",doc.ops);
                    }
                });
            }
        }) 
    })
    app.get("/api/products",function(req,res){
        database.collection(PRODUCT_COLLECTION).find({}).project({pid:1,_id:0}).toArray(function(err,doc){
            if(err){
                manageError(res,err.message,"No product available")
            }
            else{
               // console.log("Server 106",doc)
                res.send(doc)
            }
        })
    })
    app.get("/api/allproducts/:category",function(req,res){
        category = req.params.category;
        database.collection(PRODUCT_COLLECTION).find({category:category}).toArray(function(err,doc){
            if(err){
                manageError(res,err.message,"No product available")
            }
            else{
                //console.log("Server 118",doc)
                res.send(doc)
            }
        })
    })
    app.get("/api/products/:pid",function(req,res){
        pid = req.params.pid;
        database.collection(PRODUCT_COLLECTION).findOne({pid:pid},function(err,doc){
            if(err){
                manageError(res,err.message,"No product available")
                res.send(err)
            }
            else{
                //console.log("Server 118",doc)
                res.send(doc)
            }
        })
    })

    app.get("/api/allUsers/:email",function(req,res){
        email = req.params.email;
        database.collection(USER_COLLECTION).findOne({email:email},function(err,doc){
            if(err){
                manageError(res,err.message,"No user available")
                res.send(err)
            }
            else{
                res.send(doc)
            }
        })
    })

    app.get("/api/forgotPassword/:email",function(req,res){
        email = req.params.email;
        database.collection("login").findOne({email:email},function(err,doc){
            if(err){
                manageError(res,err.message,"No user available")
                res.send(err)
            }
            else if(doc==null){
                res.send("No Email Available")
            }
            else if(doc){
                console.log("170",doc)
                var mailOptions = {
                    from: 'subhasree260497@gmail.com',
                    to: email,
                    subject: 'Fashionista Password',
                    text: "Dear Customer,\nYour Password is :"+ doc.password +"\nPlease don't share with third party\n\nRegards,\nFashionista Group"
                  };
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: 175' + info.response);
                    }

                res.send(doc)
            })
            }
        })

        
    })
    

    app.put("/api/wishList/:email/:pid",function(req,res){
        var email = req.params.email;
        var pid = req.params.pid;

        mylists =[]
        database.collection(USER_COLLECTION).findOne({"email":email}).then(result=>{
        if(result.mylist){
            for(i=0;i<result.mylist.length;i++){
                if(result.mylist[i]!==pid)
                     mylists.push(result.mylist[i]);
                else
                    manageError(res,"Product already added","No such user");
            }
            mylists.push(pid)
            database.collection(USER_COLLECTION).updateOne({"email":email},{$set:{mylist:mylists}}); 
        } 
        else{
            mylists.push(pid);
            database.collection(USER_COLLECTION).updateOne({"email":email},{$set:{mylist:mylists}}); 
        } 
        res.send(result);  
               
    })
        
    })

    app.get("/api/login/:email/:password",function(req,res){
        var email = req.params.email;
        var password = req.params.password;
    //  console.log("Server.js 81",email,password)
        database.collection("login").findOne({email:email,password:password},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else if(doc==null){
                manageError(res,"No such user","No such user");
               
            }
            else{
               // console.log("server 91",doc);
                database.collection(USER_COLLECTION).findOne({email:email},function(err,doc){
                    if(err){
                        manageError(res,err.message,"No such user");
                    }
                    else{
                        res.send(doc);
                    }
                })
            }
        })
    })

    app.get("/api/getWishList/:email",function(req,res){
        email = req.params.email;
        products = []
        database.collection(USER_COLLECTION).findOne({email:email},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
               // console.log("198",doc)
                res.send(doc)
             }
        })

    })
    app.get("/api/getCart/:email",function(req,res){
        email = req.params.email;
        database.collection(USER_COLLECTION).findOne({email:email},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
               // console.log("211",doc.carts)
                 res.send(doc.carts)
                
             }
        })

    })

    app.put('/api/products/:pid/:quantity',function(req,res){
        var pid=req.params.pid
        var quantity = req.params.quantity;
        //console.log("server 154",pid,quantity)
        database.collection(PRODUCT_COLLECTION).updateOne({pid:pid},{$set:{quantity:quantity}},function(err,doc){
            if(err){
                manageError(res,err.message,"No such product");
            }
            else{
                res.send(doc);
            }
        })
    })
    app.put('/api/updateAddress/:email/:street/:city/:state/:country/:zip',function(req,res){
        email = req.params.email;
        street = req.params.street;
        city = req.params.city;
        mystate = req.params.state;
        country = req.params.country;
        zip = req.params.zip;
        //console.log("server 154",pid,quantity)
        database.collection(USER_COLLECTION).updateOne({email:email},{$set:{"street":street,"city":city,"state":mystate,"country":country,"zip":zip}},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
                //console.log("260",doc)
                res.send(doc);
            }
        })
    })

    app.put('/api/updatePayment/:email/:cname/:card_no/:date/:ccv',function(req,res){
        email = req.params.email;
        cname = req.params.cname;
        card_no = req.params.card_no;
        date = req.params.date;
        ccv = req.params.ccv;
        database.collection(USER_COLLECTION).updateOne({email:email},{$set:{"cname":cname,"card_no":card_no,"date":date,"ccv":ccv}},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
                //console.log("260",doc)
                res.send(doc);
            }
        })
    })

    app.put('/api/resetPassword/:email/:newPwd',function(req,res){
        email = req.params.email;
        newPwd = req.params.newPwd;
        
        database.collection("login").updateOne({email:email},{$set:{"password":newPwd}},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
                //console.log("260",doc)
                res.send(doc);
            }
        })
    })

    app.put('/api/updateCart/:email/:quantity/:pid',function(req,res){
        var email=req.params.email
        var quantity = req.params.quantity;
        var pid= req.params.pid;
        cartList=[]
        
        database.collection(USER_COLLECTION).findOne({email:email},function(err,doc){
            if(err){
                manageError(res,err.message,"No such user");
            }
            else{
                for(i=0;i<doc.carts.length;i++){
                    if(doc.carts[i].pid == pid)
                    {
                            mycart = doc.carts[i];
                            if(quantity==1){
                                mycart.quantity = parseInt(mycart.quantity)+1;
                                if(parseInt(mycart.quantity) > 0)
                                    cartList.push(mycart);
                            }
                            else {
                                mycart.quantity = parseInt(mycart.quantity)-1;
                                if(parseInt(mycart.quantity) > 0)
                                    cartList.push(mycart);
                            }
                        
                    }
                    else{
                        cartList.push(doc.carts[i])
                    }
                    
                }
                console.log("257-",cartList)
                database.collection(USER_COLLECTION).updateOne({"email":email},{$set:{carts:cartList}}); 
               
               
             }
        })
        
    })

    app.get("/api/allproducts",function(req,res){
        database.collection(PRODUCT_COLLECTION).find({}).toArray(function(err,doc){
            if(err){
                manageError(res,err.message,"No product available")
            }
            else{
               // console.log("Server 106",doc)
                res.send(doc)
            }
        })
    })
    app.get("/api/allUsers",function(req,res){
        database.collection(USER_COLLECTION).find({}).toArray(function(err,doc){
            if(err){
                manageError(res,err.message,"No User available")
            }
            else{
               // console.log("Server 106",doc)
                res.send(doc)
            }
        })
    })

    app.put("/api/deleteList/:pid/:email",function(req,res){
       
        var pid = req.params.pid;
        var email = req.params.email;
        all =[]
        database.collection(USER_COLLECTION).findOne({"email":email}).then(result=>{
            if(result.mylist){
                for(i=0;i<result.mylist.length;i++){
                    if(result.mylist[i] != pid){

                        all.push(result.mylist[i])
                    }
                }
                database.collection(USER_COLLECTION).updateOne({email:email},{$set:{mylist:all}})
            }
        })
    })

    app.put("/api/cart/:email",function(req,res){
        email = req.params.email
        cart = req.body;
        mycart =[]
        database.collection(USER_COLLECTION).findOne({"email":email}).then(result=>{
        if(result.carts){
            for(i=0;i<result.carts.length;i++){
                if(result.carts[i].pid!==cart.pid){
                     mycart.push(result.carts[i]);
                }
                else{
                    console.log("same Product")
                    cart.quantity = result.carts[i].quantity+1;

                }
                    
            }
            mycart.push(cart);
            database.collection(USER_COLLECTION).updateOne({"email":email},{$set:{carts:mycart}}); 
        } 
        else{
            mycart.push(cart);
            //console.log(mycart);
            database.collection(USER_COLLECTION).updateOne({"email":email},{$set:{carts:mycart}}); 
        } 
        res.send(result);  
               
    })

    })
    


    function manageError(res, reason, message, code) {
        console.log("Error: " + reason);
        res.status(code || 500).json({ "error": message });
        
    }