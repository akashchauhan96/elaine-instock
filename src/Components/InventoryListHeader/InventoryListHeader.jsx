import { Link } from 'react-router-dom';
import './InventoryListHeader.scss';

function InventoryListHeader() {
    
    return (
        <section className='inventoryListHeader'>
            <h1 className='inventoryListHeader__title'>Inventory</h1>
            <div className='inventoryListHeader__container'>
                <input className='inventoryListHeader__search' type="search" placeholder='Search...' />
                <Link className='inventoryListHeader__link' to={"/inventory/add"}>
                    <div className='inventoryListHeader__button'>+ Add New Item</div>
                </Link>
            </div>
        </section>
    );
}

export default InventoryListHeader;