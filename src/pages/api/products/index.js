import Products from "@/src/models/Products";
import dbConnect from "@/src/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      try {
        var foundItems = await Products.find();
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
  }
}
