import WarehouseDetails from '../../Components/WarehouseDetails/WarehouseDetails';
<<<<<<< HEAD
import WarehouseInventoryTable from '../../Components/WarehouseInventoryTable/WarehouseInventoryTable';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../utils/util';
import WarehouseInventoryItem from '../../Components/WarehouseInventoryItem/WarehouseInventoryItem';

=======
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
>>>>>>> develop

function SelectedWarehouse() {
    const {warehouseId} = useParams();

<<<<<<< HEAD
    const [warehousePageDetails, setWarehousePageDetails] = useState(null);

    const [warehouseInventory, setWarehouseInventory] = useState(null);

    useEffect(() => {
        axios.get(URL + `/warehouse/${warehouseId}`)
=======
    const [warehousePageDetails, setWarehousePageDetails] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouse/${warehouseId}`)
>>>>>>> develop
        .then((response) => {
            setWarehousePageDetails(response.data)
        })
        .catch((error) => {
            console.log('ruh roh!')
        })
    }, [warehouseId])  

<<<<<<< HEAD
    useEffect(() => {
        axios.get(URL + `/warehouse/${warehouseId}/inventories`)
        .then((response) => {
            setWarehouseInventory(response.data)
        })
        .catch((error) => {
            console.log('ruh roh!')
        })
    }, [warehouseId])  

    console.log(warehouseInventory)

    if(!warehousePageDetails || !warehouseInventory){
        return <h1>Loading...</h1>
      }

=======
    
>>>>>>> develop
    return (
        <>
        <WarehouseDetails
            warehousePageDetails = { warehousePageDetails }
            />
<<<<<<< HEAD
        <WarehouseInventoryTable />
        <WarehouseInventoryItem 
            warehouseInventory = { warehouseInventory }
            />
=======
        {/* Warehouse Inventory goes here */}
>>>>>>> develop
        </>
    )
}

export default SelectedWarehouse;
