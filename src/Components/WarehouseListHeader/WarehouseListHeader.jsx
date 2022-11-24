import { Link } from 'react-router-dom';
import './WarehouseListHeader.scss';

function WarehouseListHeader() {
    
    return (
        <section className='warehouseListHeader'>
            <h1 className='warehouseListHeader__title'>Warehouses</h1>
            <div className='warehouseListHeader__container'>
                <input className='warehouseListHeader__search' type="search" placeholder='Search...' />
                <Link className='warehouseListHeader__link' to={"/add-warehouse"}>
                    <div className='warehouseListHeader__button'>+ Add New Warehouse</div>
                </Link>
            </div>
        </section>
    );
}

export default WarehouseListHeader;