import React, { useRef } from 'react';
import { errorToast, isEmpty, successToast } from '../../Helper/ValidationHelper';
import { Create } from '../../APIServices/CRUDServices';

const CreateForm = () => {
    // Define refs for input elements
    const productNameRef = useRef();
    const productCodeRef = useRef();
    const imgRef = useRef();
    const unitPriceRef = useRef();
    const qtyRef = useRef();
    const totalPriceRef = useRef();

    const saveData = async () => {
        // Extract values from refs
        const productName = productNameRef.current.value;
        const productCode = productCodeRef.current.value;
        const img = imgRef.current.value;
        const unitPrice = unitPriceRef.current.value;
        const qty = qtyRef.current.value;
        const totalPrice = totalPriceRef.current.value;

        // Validate input values
        if (isEmpty(productName)) {
            errorToast("Product name required");
            return;
        }
       else if (isEmpty(productCode)) {
            errorToast("Product code required");
            return;
        }
        else if (isEmpty(img)) {
            errorToast("Product image required");
            return;
        }
        else if (isEmpty(unitPrice)) {
            errorToast("Product unit price required");
            return;
        }
        else if (isEmpty(qty)) {
            errorToast("Product qty required");
            return;
        }
        else if (isEmpty(totalPrice)) {
            errorToast("Product total price required");
            return;
        }
        // Add similar checks for other fields...
         else{
        try {
            // Call the Create function with correct parameters
            const result = await Create(productName, productCode, img, unitPrice, qty, totalPrice);
            if (result===0) {
                errorToast("Request fail try again");
                
                
                
            } else {
                successToast("Data save success");
                productNameRef.current.value="";
                productCodeRef.current.value="";
                imgRef.current.value="";
                unitPriceRef.current.value="";
                qtyRef.current.value="";
                totalPriceRef.current.value="";
            }
        } catch (error) {
            console.error("Error:", error);
            errorToast("An error occurred while saving data");
        }
    };
}

    return (
        <div className='container'>
            {/* Input fields for product details */}
            <div className='row'>
                {/* Product Name */}
                <div className='col-md-4 p-2'>
                    <label>Product Name</label>
                    <input ref={productNameRef} type='text' className='form-control'/>
                </div>
                {/* Product Code */}
                <div className='col-md-4 p-2'>
                    <label>Product Code</label>
                    <input ref={productCodeRef} type='text' className='form-control'/>
                </div>
                {/* Product Img */}
                <div className='col-md-4 p-2'>
                    <label>Product Img</label>
                    <input ref={imgRef} type='text' className='form-control'/>
                </div>
                {/* Unit Price */}
                <div className='col-md-4 p-2'>
                    <label>Unit Price</label>
                    <input ref={unitPriceRef} type='text' className='form-control'/>
                </div>
                {/* Qty */}
                <div className='col-md-4 p-2'>
                    <label>Qty</label>
                    <input ref={qtyRef} type='text' className='form-control'/>
                </div>
                {/* Total Price */}
                <div className='col-md-4 p-2'>
                    <label>Total Price</label>
                    <input ref={totalPriceRef} type='text' className='form-control'/>
                </div>
            </div>
            <br/>
            {/* Save button */}
            <div className='row'>
                <div className='col-md-4 p-2'>
                    <button onClick={saveData} className='btn btn-primary w-100'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;
