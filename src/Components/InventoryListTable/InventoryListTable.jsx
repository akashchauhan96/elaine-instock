import './InventoryListTable.scss';
import sortIcon from '../../assets/icons/sort-24px.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../utils/util';
import InventoryListItem from '../InventoryListItem/InventoryListItem';

function InventoryListTable() {
    const [inventories, setInventories] = useState(null);

    useEffect(() => {
        axios.get(URL + "/inventory").then((response) => {
            setInventories(response.data);
        }).catch((err) => {
            console.log(`An error occured while trying to access the warehouses: ${err}`);
        })
    }, []);

    if (!inventories) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className='inventoryListTable'>
                <div className='inventoryListTable__column inventoryListTable__column--first'>
                    <h4>Inventory Item</h4>
                    <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className='inventoryListTable__column inventoryListTable__column--second'>
                    <h4>Category</h4>
                    <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className='inventoryListTable__column inventoryListTable__column--third'>
                    <h4>Status</h4>
                    <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className='inventoryListTable__column inventoryListTable__column--fourth'>
                    <h4>QTY</h4>
                    <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className='inventoryListTable__column inventoryListTable__column--fifth'>
                    <h4>Warehouse</h4>
                    <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className='inventoryListTable__column inventoryListTable__column--sixth'>
                    <h4>Actions</h4>
                </div>
            </div>
            {/* Display warehouses conatined within array in warehouses state variable */}
            {inventories.map((inventory) => {
                console.log(inventory);
                // Checks to see if it is the last warehouse in the list and pass as prop to remove border 
               return <InventoryListItem key={inventory.id} inventory={inventory} isLastInventory={inventory.id === inventories[inventories.length - 1].id ? true : false}/>
            })}

            <InventoryListItem/>
        </>
    );
}

export default InventoryListTable;