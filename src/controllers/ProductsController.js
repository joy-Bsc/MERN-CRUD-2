const ProductModel = require('../models/ProductsModel');

// C = Create
exports.CreateProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await ProductModel.create(reqBody);
        res.status(201).json({ status: "success", data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}

// // R = Read
// exports.ReadProduct = async (req, res) => {
//     try {
//         // const data = await ProductModel.find({}, "ProductName ProductCode Img UnitPrice Qty TotalPrice");
//         const data = await ProductModel.find();
//         console.log(data,"data")

//         if (data.length > 0) {
//             res.status(200).json({ status: "success", data: data });
//         } else {
//             res.status(404).json({ status: "fail", message: "No products found" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ status: "error", message: "Internal server error" });
//     }
// }
exports.GetProduct = async (req, res) => {
    console.log("hello");
    try {
        const data = await ProductModel.find();
        console.log(data);
        res.status(201).json({ status: "success", data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}
exports.ReadProduct = async ( req, res) => {
    try {
        const data = await ProductModel.find();
        console.log(data);

        if (data && data.length > 0) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "No products found" });
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}

//Read product by id
exports.ReadProductByID = async ( req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const data = await ProductModel.find(query);
        console.log(data);

        if (data && data.length > 0) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "No products found" });
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}



// U = Update
exports.UpdateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const reqBody = req.body;
        const data = await ProductModel.updateOne(query, reqBody);
        if (data) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "Product not found or no modifications made" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}

// D = Delete
exports.DeleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const data = await ProductModel.deleteOne(query);
        if (data.deletedCount > 0) {
            res.status(200).json({ status: "success", message: "Product deleted successfully" });
        } else {
            res.status(404).json({ status: "fail", message: "Product not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}
