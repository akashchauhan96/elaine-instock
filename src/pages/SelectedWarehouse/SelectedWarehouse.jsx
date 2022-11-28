import WarehouseDetails from '../../Components/WarehouseDetails/WarehouseDetails';
import WarehouseInventoryTable from '../../Components/WarehouseInventoryTable/WarehouseInventoryTable';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../utils/util';
import WarehouseInventoryItem from '../../Components/WarehouseInventoryItem/WarehouseInventoryItem';
import NoInventory from '../../Components/NoInventory/NoInventory';


function SelectedWarehouse() {
    const { warehouseId } = useParams();
    const [warehousePageDetails, setWarehousePageDetails] = useState(null);
    const [warehouseInventory, setWarehouseInventory] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);

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
    }, [warehouseId, isDeleted])

    if (!warehousePageDetails && !warehouseInventory) {
        return <h1>Loading...</h1>
    }

    if (!warehousePageDetails) {
        return
    }

    if (!warehouseInventory) {
        return
    }

    return (
        <>
            <WarehouseDetails
                warehousePageDetails={warehousePageDetails}
            />
            <WarehouseInventoryTable />
            {warehouseInventory.length === 0 ? <NoInventory /> :
                warehouseInventory.map((inventory) => {
                    return <WarehouseInventoryItem
                        key={inventory.id}
                        inventory={inventory}
                        isDeleted={isDeleted}
                        setIsDeleted={setIsDeleted}
                    />
                })
            }
        </>
    )
}

export default SelectedWarehouse;
