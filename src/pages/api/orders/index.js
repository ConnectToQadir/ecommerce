import OrdersModal from "@/src/models/Orders";
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

        var foundItems = await OrdersModal.find(match);
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
        var order = await OrdersModal.create(req.body);

        res.json({
          success: true,
          message: order,
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
        await OrdersModal.findByIdAndUpdate(req.body._id, { $set: req.body });

        res.json({
          success: true,
          message: "Order Updated Successfully!",
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

        await OrdersModal.findByIdAndDelete(req.query.id);



        res.json({
          success: true,
          message: "Order Deleted Successfully!",
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
