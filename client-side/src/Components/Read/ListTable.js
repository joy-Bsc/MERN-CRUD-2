import React, { useEffect, useState } from 'react';
import { Delete, Read } from '../../APIServices/CRUDServices';
import { errorToast, successToast } from '../../Helper/ValidationHelper';
import { useNavigate } from 'react-router-dom';

const ListTable = (props) => {
    let [DataList, SetDataList] = useState([]);
    const navigate = useNavigate(); // Access the navigate function

    useEffect(() => {
        Read().then((Result) => {
            SetDataList(Result);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const DeleteItem = (id) => {
        Delete(id).then((result) => {
            if (result === true) {
                successToast("Delete success");
                // Refresh data after successful delete
                Read().then((result) => {
                    SetDataList(result);
                }).catch((error) => {
                    console.error('Error fetching data:', error);
                });
            } else {
                errorToast("Delete fail");
            }
        }).catch((error) => {
            console.error('Error deleting item:', error);
            errorToast("Delete error");
        });
    }

    const UpdateItem = (id) => {
        navigate(`/update/${id}`); // Navigate to the update page with the ID
    }

    return (
        <div>
            <table className='table' border={2} >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(DataList) && DataList.length > 0 ? (
                        DataList.map((item, i) => (
                            <tr key={i}>
                                <td>{item && item.ProductName}</td>
                                <td>{item && item.ProductCode}</td>
                                <td><img className='list-img' src={item && item.Img} width={50} alt='' /></td>
                                <td>{item && item.UnitPrice}</td>
                                <td>{item && item.Qty}</td>
                                <td>{item && item.TotalPrice}</td>
                                <td><button className='btn btn-danger' onClick={() => DeleteItem(item && item._id)} >Delete</button></td>
                                <td><button className='btn btn-success' onClick={() => UpdateItem(item && item._id)}>Update</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListTable;
