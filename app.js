const express=require('express')
const fs=require('fs')
const app=express();
const path=require('path');
const port=80;
const data=require('./data.json');
const  Fuse = require('fuse.js');


app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

const fuse = new Fuse(data, {
    keys: ['Automation_name'], // Specify which fields to fuzzy search on
    includeScore: true // Include search score for ranking results
});

app.get('/',(req,res)=>{
    return res.status(200).render('index', {data:data} );
})
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = data.filter(item => {
      if(    item.Automation_name.toLowerCase().includes(query) || item.Created_by.toLowerCase().includes(query) || item.Trigger.toLowerCase().includes(query) || 
      item.Modified_at.toLowerCase().includes(query) || item.Last_modified_at.toLowerCase().includes(query)  || item.Last_modified_by.toLowerCase().includes(query)){
        return true
      }
      return false;
    })
    // const results=fuse.search(query)
    // console.log(results);
    res.status(200).json(results); // Return results as JSON
  });

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})