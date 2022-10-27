import ProdModel from "../models/prod.js";

class ProdGetController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProdModel.find()
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default ProdGetController;