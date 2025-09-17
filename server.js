const express = require('express')
const { connectToDB,getDBConnection } = require('./database')
const cors = require('cors')
let { ObjectId } = require('mongodb')

let app = express();
app.use(cors())
app.use(express.json())

let db 
let port = process.env.PORT || 7000
connectToDB((err) => {
    if (!err) {
        app.listen(port, () => console.log(`Server running on port: ${port}`))
        db = getDBConnection()
    } else {
        console.log(`Server connection_Oops: ${err}`)
    }
})

let dataArray = [];
app.get('/', (req,res) => {
    db.collection('marks')
    .find()
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})

app.get('/name', (req,res) => {
    db.collection('marks')
    .find()
    .sort({name:1})
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/phy', (req, res) => {
  db.collection('marks') // assuming your collection is named 'students'
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.phy": -1 }
      }
    ])
    .toArray()
    .then(rslt => res.status(200).json(rslt))
    .catch(err => res.status(500).json({ GET_All_Oops: err }));
});
app.get('/chem', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.chem": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/maths', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.maths": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/bio', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.bio": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/geog', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.geog": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/his', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.his": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/ict', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ict": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/ent', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ent": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/agric', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.agric": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/cre', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.cre": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/ire', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ire": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/pe', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.pe": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/kis', (req,res) => {
    db.collection('marks')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.kis": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})


app.get('/:id', (req,res) => {
    db.collection('marks')
    .findOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_One_Oops:err}))
})

app.post('/', (req,res) => {
    let bdy = req.body;
    db.collection('marks')
    .insertOne(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.status(500).json({POST_Oops:err}))
})
app.post('/m', (req,res) => {
    let bdy = req.body;
    db.collection('marks')
    .insertMany(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.status(500).json({POST_Oops:err}))
})

app.patch('/:id', (req,res) => {
    let updates = req.body
    db.collection('marks')
    .updateOne({_id: new ObjectId(req.params.id)},{$set:updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})
app.patch('/', (req,res) => {
    let updates = req.body
    db.collection('marks')
    .updateMany({},{$set: updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})

app.delete('/:id', (req,res) => {
    db.collection('marks')
    .deleteOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({DELETE_Oops: err}))
})

/*>>>>>>>>>>>>>>>>>>>>>>>>>>FORM 2 SERVER..................>>>>>>>>>>>>>>>>>>>*/

app.get('/form2/s', (req,res) => {
    db.collection('marks2')
    .find()
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})

app.get('/form2/name', (req,res) => {
    db.collection('marks2')
    .find()
    .sort({name:1})
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/phy', (req, res) => {
  db.collection('marks2') // assuming your collection is named 'students'
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.phy": -1 }
      }
    ])
    .toArray()
    .then(rslt => res.status(200).json(rslt))
    .catch(err => res.status(500).json({ GET_All_Oops: err }));
});
app.get('/form2/chem', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.chem": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/maths', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.maths": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/bio', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.bio": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/geog', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.geog": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/his', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.his": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/ict', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ict": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/ent', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ent": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/agric', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.agric": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/cre', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.cre": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/ire', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ire": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/pe', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.pe": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form2/kis', (req,res) => {
    db.collection('marks2')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.kis": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})


app.get('/form2/:id', (req,res) => {
    db.collection('marks2')
    .findOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_One_Oops:err}))
})

app.post('/form2/s/m', (req,res) => {
    let bdy = req.body;
    db.collection('marks2')
    .insertMany(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})
app.post('/form2/s', (req,res) => {
    let bdy = req.body;
    db.collection('marks2')
    .insertOne(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})

app.patch('/form2/:id', (req,res) => {
    let updates = req.body
    db.collection('marks2')
    .updateOne({_id: new ObjectId(req.params.id)},{$set:updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})
app.patch('/form2/s', (req,res) => {
    let updates = req.body
    db.collection('marks2')
    .updateMany({},{$set: updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})

app.delete('/form2/:id', (req,res) => {
    db.collection('marks2')
    .deleteOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({DELETE_Oops: err}))
})


/*>>>>>>>>>>>>>>>>>>>>>>>>>>FORM 3 SERVER..................>>>>>>>>>>>>>>>>>>>*/

app.get('/form3/s', (req,res) => {
    db.collection('marks3')
    .find()
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})

app.get('/form3/name', (req,res) => {
    db.collection('marks3')
    .find()
    .sort({name:1})
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/phy', (req, res) => {
  db.collection('marks3') // assuming your collection is named 'students'
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.phy": -1 }
      }
    ])
    .toArray()
    .then(rslt => res.status(200).json(rslt))
    .catch(err => res.status(500).json({ GET_All_Oops: err }));
});
app.get('/form3/chem', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.chem": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/maths', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.maths": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/bio', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.bio": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/geog', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.geog": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/his', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.his": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/ict', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ict": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/ent', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ent": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/agric', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.agric": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/cre', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.cre": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/ire', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ire": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/pe', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.pe": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form3/kis', (req,res) => {
    db.collection('marks3')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.kis": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})


app.get('/form3/:id', (req,res) => {
    db.collection('marks3')
    .findOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_One_Oops:err}))
})

app.post('/form3/s', (req,res) => {
    let bdy = req.body;
    db.collection('marks3')
    .insertOne(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})
app.post('/form3/s/m', (req,res) => {
    let bdy = req.body;
    db.collection('marks3')
    .insertMany(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})

app.patch('/form3/:id', (req,res) => {
    let updates = req.body
    db.collection('marks3')
    .updateOne({_id: new ObjectId(req.params.id)},{$set:updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})
app.patch('/form3/s', (req,res) => {
    let updates = req.body
    db.collection('marks3')
    .updateMany({},{$set: updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})

app.delete('/form3/:id', (req,res) => {
    db.collection('marks3')
    .deleteOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({DELETE_Oops: err}))
})


/*>>>>>>>>>>>>>>>>>>>>>>>>>>FORM 4 SERVER..................>>>>>>>>>>>>>>>>>>>*/

app.get('/form4/s', (req,res) => {
    db.collection('marks4')
    .find()
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})

app.get('/form4/name', (req,res) => {
    db.collection('marks4')
    .find()
    .sort({name:1})
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/phy', (req, res) => {
  db.collection('marks4') // assuming your collection is named 'students'
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.phy": -1 }
      }
    ])
    .toArray()
    .then(rslt => res.status(200).json(rslt))
    .catch(err => res.status(500).json({ GET_All_Oops: err }));
});
app.get('/form4/chem', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.chem": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/maths', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.maths": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/bio', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.bio": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/geog', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.geog": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/his', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.his": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/ict', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ict": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/ent', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ent": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/agric', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.agric": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/cre', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.cre": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/ire', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.ire": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/pe', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.pe": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})
app.get('/form4/kis', (req,res) => {
    db.collection('marks4')
    .aggregate([
      {
        $addFields: {
          "filTotals.phy": { $add: ["$marks.phy1", "$marks.phy2"] },
          "filTotals.chem": { $add: ["$marks.chem1", "$marks.chem2"] },
          "filTotals.maths": "$marks.maths1",
          "filTotals.bio": { $add: ["$marks.bio1", "$marks.bio2"] },
          "filTotals.geog": "$marks.geog1",
          "filTotals.his": "$marks.his1",
          "filTotals.ict": { $add: ["$marks.ict1", "$marks.ict2"] },
          "filTotals.ent": "$marks.ent1",
          "filTotals.agric": { $add: ["$marks.agric1", "$marks.agric2"] },
          "filTotals.cre": "$marks.cre1",
          "filTotals.ire": "$marks.ire1",
          "filTotals.pe": { $add: ["$marks.pe1", "$marks.pe2"] },
          "filTotals.kis": "$marks.kis1"
        }
      },
      {
        $sort: { "filTotals.kis": -1 }
      }
    ])
    .toArray()
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_All_Oops:err}))
})


app.get('/form4/:id', (req,res) => {
    db.collection('marks4')
    .findOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({GET_One_Oops:err}))
})

app.post('/form4/s', (req,res) => {
    let bdy = req.body;
    db.collection('marks4')
    .insertOne(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})
app.post('/form4/s/m', (req,res) => {
    let bdy = req.body;
    db.collection('marks4')
    .insertMany(bdy)
        .then(rslt => res.status(200).json(rslt))
        .catch(err => req.statusCode(500).json({POST_Oops:err}))
})

app.patch('/form4/:id', (req,res) => {
    let updates = req.body
    db.collection('marks4')
    .updateOne({_id: new ObjectId(req.params.id)},{$set:updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})
app.patch('/form4/s', (req,res) => {
    let updates = req.body
    db.collection('marks4')
    .updateMany({},{$set: updates})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({PATCH_Oops: err}))
})

app.delete('/form4/:id', (req,res) => {
    db.collection('marks4')
    .deleteOne({_id: new ObjectId(req.params.id)})
        .then(rslt => res.status(200).json(rslt))
        .catch(err => res.status(500).json({DELETE_Oops: err}))
})

