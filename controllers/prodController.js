import ProdModel from "../models/prod.js";

class ProdController {
    static createDoc = async(req,res)=>{
        try {
            const{SHOP_TYPE,BOGIE_TYPE,COACH_TYPE,DATE_CREATED,}= req.body
            const doc = new ProdModel({
                SHOP_TYPE:SHOP_TYPE,
                BOGIE_TYPE:BOGIE_TYPE,
                COACH_TYPE:COACH_TYPE,
                DATE_CREATED:DATE_CREATED

            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }
}
export default ProdController;