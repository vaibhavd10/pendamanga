import ProdModel from "../models/prod.js";

class ProdIdController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProdModel.findById(req.params.id)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default ProdIdController;