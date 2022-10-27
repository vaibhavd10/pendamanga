import ProdModel from "../models/prod.js";
import AC2TModel from "../models/ac2t.js";

class IdController {
    static getAllDoc = async (req, res) => {
      try {
        let jobData  =await ProdModel.find({_id:req.params.id})
        .populate('AC2_LINK')
        if (!jobData)
       { res.status(500).json({ message:'user not found'})
      
      }
      res.status(200).send({jobData})
  
      // console.log('lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',jobData);
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default IdController;



















// router.get("/joblink/:id", async (req, res) => {
       
//     let jobData  =await ProdModel.findById(req.body.id)
//       .populate(AC2_LINK)
//       if (!jobData)
//      { res.status(500).json({ message:'user not found'})
    
//     }
//     res.status(200).send({jobData})

//       console.log('lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',jobData);
   
   
//    });