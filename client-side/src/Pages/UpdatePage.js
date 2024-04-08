import React from 'react';
import UpdateForm from '../Components/Update/UpdateForm';
import AppNavbar from '../Components/Common/AppNavbar';
import { useParams } from 'react-router';

const UpdatePage = () => {
    const params = useParams();
    return (
        <div>
            <AppNavbar/>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;