import ProdModel from "../models/prod.js";

class UpdateJobController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProdModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default UpdateJobController;