import React, { useEffect, useRef, useState } from 'react';
import { errorToast, isEmpty, successToast } from '../../Helper/ValidationHelper';
import { ReadByID, Update } from '../../APIServices/CRUDServices';

const UpdateForm = (props) => {
    // Define refs for input elements
    const productNameRef = useRef();
    const productCodeRef = useRef();
    const imgRef = useRef();
    const unitPriceRef = useRef();
    const qtyRef = useRef();
    const totalPriceRef = useRef();
    const [formData, setFormData] = useState({ ProductName:'', ProductCode: '', Img: '', UnitPrice: '', Qty: '', TotalPrice: '' });
 // State to store form data

    const UpdateData = async () => {
        // Extract values from refs
        const productName = productNameRef.current.value;
const productCode = productCodeRef.current.value;
const img = imgRef.current.value;
const unitPrice = unitPriceRef.current.value;
const qty = qtyRef.current.value;
const totalPrice = totalPriceRef.current.value;


        // Validate input values
        if (isEmpty(productName) || isEmpty(productCode) || isEmpty(img) || isEmpty(unitPrice) || isEmpty(qty) || isEmpty(totalPrice)) {
            errorToast("All fields are required");
            return;
        }

        try {
            // Call the Update function with correct parameters
            
            const result = await Update(props.id, productName, productCode, img, unitPrice, qty, totalPrice);
            if (result === 0) {
                errorToast("Request failed, please try again");
            } else {
                successToast("Data updated successfully");
                // Clear form fields
                productNameRef.current.value = "";
                productCodeRef.current.value = "";
                imgRef.current.value = "";
                unitPriceRef.current.value = "";
                qtyRef.current.value = "";
                totalPriceRef.current.value = "";
            }
        } catch (error) {
            console.error("Error:", error);
            errorToast("An error occurred while updating data");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data by ID
                const result = await ReadByID(props.id);
                   setFormData(result);
                // Update form fields with fetched data
                if (result && result.length > 0) {
                    productNameRef.current.value = result[0]['ProductName'];
                    productCodeRef.current.value = result[0]['ProductCode'];
                    imgRef.current.value = result[0]['Img'];
                    unitPriceRef.current.value = result[0]['UnitPrice'];
                    qtyRef.current.value = result[0]['Qty'];
                    totalPriceRef.current.value = result[0]['TotalPrice'];
                } else {
                    // Handle case when no data is found for the given ID
                    console.error('No data found for ID:', props.id);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(); // Call fetchData function
    }, [props.id]); // Include props.id in the dependency array
    

    

    return (
        <div className='container'>
            {/* Input fields for product details */}
            <div className='row'>
                {/* Product Name */}
                <div className='col-md-4 p-2'>
                    <label>Product Name</label>
                    <input ref={productNameRef} type='text' className='form-control' defaultValue={formData.ProductName} />
                </div>
                {/* Product Code */}
                <div className='col-md-4 p-2'>
                    <label>Product Code</label>
                    <input ref={productCodeRef} type='text' className='form-control' defaultValue={formData.ProductCode} />
                </div>
                {/* Product Img */}
                <div className='col-md-4 p-2'>
                    <label>Product Img</label>
                    <input ref={imgRef} type='text' className='form-control' defaultValue={formData.Img} />
                </div>
                {/* Unit Price */}
                <div className='col-md-4 p-2'>
                    <label>Unit Price</label>
                    <input ref={unitPriceRef} type='text' className='form-control' defaultValue={formData.UnitPrice} />
                </div>
                {/* Qty */}
                <div className='col-md-4 p-2'>
                    <label>Qty</label>
                    <input ref={qtyRef} type='text' className='form-control' defaultValue={formData.Qty} />
                </div>
                {/* Total Price */}
                <div className='col-md-4 p-2'>
                    <label>Total Price</label>
                    <input ref={totalPriceRef} type='text' className='form-control' defaultValue={formData.TotalPrice} />
                </div>
            </div>
            <br />
            {/* Save button */}
            <div className='row'>
                <div className='col-md-4 p-2'>
                    <button onClick={UpdateData} className='btn btn-primary w-100'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;
