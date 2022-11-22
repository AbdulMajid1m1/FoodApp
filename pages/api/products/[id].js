import Product from "../../../models/Product";
import dbConnect from "../../../util/mongo";

export default  async function handler(req, res) {
   
    const { method, query:{id}} = req;
    dbConnect();
    if (method === "GET") {
        try{
        const product=await Product.findById(id);
        res.status(200).json(product);
        }
        catch(err){
            res.status(500).json(500);

        }
     }

    if (method === "PUT") {
        try{
            const product= await Product.put(id);
            res.status(201).json(product);
        } catch(err){
            res.status(500).json(err);
        }
      
    }
    if (method === "DELETE") {
        try{
            const product= await Product.deleteOne({id});
            res.status(201).json(product);
        } catch(err){
            res.status(500).json(err);
        }
      
    }


}