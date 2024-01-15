const mongoose=require('mongoose')

const womencloth_schema=mongoose.Schema({
  img:{type:String,require:true},
  title:{type:String,require:true},
  desc:{type:String,require:true},
  price:{type:Number,require:true},
  mrp:{type:Number,require:true},
  off:{type:String,require:true},
  brand:{type:String,require:true},
  material:{type:String,require:true},
  qty:{type:Number}
},{
  timestamps:true,
    versionKey:false
})

const womencloth_model=mongoose.model('womenclothData',womencloth_schema)

module.exports={womencloth_model}