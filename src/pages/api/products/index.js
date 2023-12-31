import Products from "@/src/models/Products";
import dbConnect from "@/src/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();


  switch (req.method) {
    case "GET":
      try {
        var match = {};

        if (req.query.id) {
          match._id = req.query.id;
        }

        var foundItems = await Products.find(match);
        res.json({
          success: true,
          message: foundItems,
        });
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
      break;
    case "POST":
      try {
        var product = await Products.create(req.body);

        res.json({
          success: true,
          message: product,
        });
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
      break;
    case "PUT":
      try {
        await Products.findByIdAndUpdate(req.body._id, { $set: req.body });

        res.json({
          success: true,
          message: "Product Updated Successfully!",
        });
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
      break;
    case "DELETE":
      try {

        console.log(req.query.id)
        await Products.findByIdAndDelete(req.query.id);



        res.json({
          success: true,
          message: "Product Deleted Successfully!",
        });


      } catch (error) {

        console.log(error)

        res.json({
          success: false,
          message: error.message,
        });
      }
      break;
  }
}
