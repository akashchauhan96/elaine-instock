import WarehouseDetails from '../../Components/WarehouseDetails/WarehouseDetails';
import WarehouseInventoryTable from '../../Components/WarehouseInventoryTable/WarehouseInventoryTable';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../utils/util';
import WarehouseInventoryItem from '../../Components/WarehouseInventoryItem/WarehouseInventoryItem';


function SelectedWarehouse() {
    const {warehouseId} = useParams();

    const [warehousePageDetails, setWarehousePageDetails] = useState(null);

    const [warehouseInventory, setWarehouseInventory] = useState(null);

    useEffect(() => {
        axios.get(URL + `/warehouse/${warehouseId}`)
        .then((response) => {
            setWarehousePageDetails(response.data)
        })
        .catch((error) => {
            console.log('ruh roh!')
        })
    }, [warehouseId])  

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

    return (
        <>
        <WarehouseDetails
            warehousePageDetails = { warehousePageDetails }
            />
        <WarehouseInventoryTable />
        <WarehouseInventoryItem 
            warehouseInventory = { warehouseInventory }
            />
        </>
    )
}

export default SelectedWarehouse;
