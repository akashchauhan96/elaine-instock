import WarehouseDetails from '../../Components/WarehouseDetails/WarehouseDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SelectedWarehouse() {
    const {warehouseId} = useParams();

    const [warehousePageDetails, setWarehousePageDetails] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouse/${warehouseId}`)
        .then((response) => {
            setWarehousePageDetails(response.data)
        })
        .catch((error) => {
            console.log('ruh roh!')
        })
    }, [warehouseId])  

    
    return (
        <>
        <WarehouseDetails
            warehousePageDetails = { warehousePageDetails }
            />
        {/* Warehouse Inventory goes here */}
        </>
    )
}

export default SelectedWarehouse;
