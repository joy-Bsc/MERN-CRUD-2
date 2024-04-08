import axios from "axios";

export function Create(ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) {
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return axios.post(URL, PostBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
}

export function Read() {
    let URL = "/api/v1/ReadProduct";
    console.log("Fetching data from:", URL); // Check if the URL is correct
    return axios.get(URL)
        .then((res) => {
            console.log("Response:", res); // Check the response from the server
            if (res.status === 200) {
                return res.data['data'];
            } else {
                return false;
            }
        })
        .catch((e) => {
            console.log("Error:", e); // Log any errors that occur
            return false;
        });
}


export function ReadByID(id) {
    let URL = "/api/v1/ReadProduct"+id;
    console.log("Fetching data from:", URL); // Check if the URL is correct
    return axios.get(URL)
        .then((res) => {
            console.log("Response:", res); // Check the response from the server
            if (res.status === 200) {
                return res.data['data'];
            } else {
                return false;
            }
        })
        .catch((e) => {
            console.log("Error:", e); // Log any errors that occur
            return false;
        });
}


export function Update(id, ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) {
    let URL = `/api/v1/UpdateProduct/${id}`; // Corrected URL construction
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return axios.post(URL, PostBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
}

export function Delete(id) {
    let URL = `/api/v1/DeleteProduct/${id}`; // Use backticks for string interpolation and proper URL formatting
    return axios.delete(URL) // Use axios.delete instead of axios.get for delete operation
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
}
