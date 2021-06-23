

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path =require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productMenuFile = path.join(__dirname,'menu-list-data.json');

app.set('port', (process.env.PORT || 3030));

app.post('/addCart',function (req,res)
{
    console.log(req.body);
    fs.readFile(productMenuFile, (err,data)=>{
        var menuList = JSON.parse(data);
        menuList[req.body.id].amount++;
        let menu2json = JSON.stringify(menuList, null, 4);
        fs.writeFile(productMenuFile,menu2json,(err)=>
        {
            if(err)
            {
                throw err;
            }
        });
        res.json("");
    });
});

app.post('/removeCart',function (req,res)
{
    console.log(req.body);
    fs.readFile(productMenuFile, (err,data)=>{
        var menuList = JSON.parse(data);
        if(menuList[req.body.id].amount != 0)
            menuList[req.body.id].amount--;
        let menu2json = JSON.stringify(menuList, null, 4);
        fs.writeFile(productMenuFile,menu2json,(err)=>
        {
            if(err)
            {
                throw err;
            }
        });
        res.json("");
    });
});

app.listen(3030,()=>
{
    console.log("Start At 3030");
});