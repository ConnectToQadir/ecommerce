"use client";

import axios from "axios";
import { useState } from "react";

const Page = () => {

  
  var [tempImg, setTempImg] = useState(null);

  var [formData, setFormData] = useState({
    title: "",
    relatedImages: [],
    category: "",
    desc: "",
    price: 0,
    stock: 0,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function uploadImageToCloudinay() {
    try {
      var data = new FormData();
      data.append("file", tempImg);
      data.append("upload_preset", "cduspkkl");

      var res = await fetch(
        "https://api.cloudinary.com/v1_1/datpc4k3l/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      res = await res.json();

      return res.url;
    } catch (error) {}
  }

  const uploadProduct = async (e) => {
    e.preventDefault();

    var cUrl = await uploadImageToCloudinay();

    var res = await axios.post("/api/products", {
      ...formData,
      feturedImage: { url: cUrl },
    });

    if (res.data.success) {
      alert("Uploaded");
    }
  };

  return (
    <div>
      <form
        onSubmit={uploadProduct}
        className="max-w-4xl mx-auto border shadow-lg p-4 "
      >
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>

        <div>
          <label className="block" htmlFor="title">
            Title
          </label>
          <input
            className="block py-1 px-2 w-full border mb-3"
            required
            onChange={changeHandler}
            placeholder="Product Title"
            name="title"
            type="text"
          />
        </div>

        {tempImg ? (
          <div className="mb-8 relative">
            <img src={URL.createObjectURL(tempImg)} alt="" />

            <div
              onClick={() => setTempImg(null)}
              className="absolute top-4 right-4 bg-red-600 shadow-lg rounded-full "
            >
              <i className="bx text-white bx-x"></i>
            </div>
          </div>
        ) : (
          <div>
            <label className="block" htmlFor="feturedImage?.url">
              Featured Image
            </label>
            <input
              className="block py-1 px-2 w-full border mb-3"
              required
              onChange={(e) => setTempImg(e.target.files[0])}
              placeholder="Featured Image URL"
              name="feturedImage?.url"
              type="file"
            />
          </div>
        )}

        <div>
          <label className="block" htmlFor="category">
            Category
          </label>
          <input
            className="block py-1 px-2 w-full border mb-3"
            required
            onChange={changeHandler}
            placeholder="Product Category"
            name="category"
            type="text"
          />
        </div>

        <div>
          <label className="block" htmlFor="desc">
            Description
          </label>
          <textarea
            className="block py-1 px-2 w-full border mb-3"
            required
            onChange={changeHandler}
            placeholder="Product Description"
            name="desc"
            rows="4"
          />
        </div>

        <div>
          <label className="block" htmlFor="price">
            Price
          </label>
          <input
            className="block py-1 px-2 w-full border mb-3"
            required
            onChange={changeHandler}
            placeholder="Product Price"
            name="price"
            type="number"
          />
        </div>

        <div>
          <label className="block" htmlFor="stock">
            Stock
          </label>
          <input
            className="block py-1 px-2 w-full border mb-3"
            required
            onChange={changeHandler}
            placeholder="Product Stock"
            name="stock"
            type="number"
          />
        </div>

        <button className="py-2 px-4 bg-indigo-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Page;
