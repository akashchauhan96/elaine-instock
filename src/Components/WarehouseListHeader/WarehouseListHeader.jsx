import { Link } from 'react-router-dom';
import './WarehouseListHeader.scss';

function WarehouseListHeader() {
    return (
        <section className='warehouseListHeader'>
            <h1>Warehouses</h1>
            <input type="search" placeholder='Search' />
            <Link>
                <div>Add New Warehouse</div>
            </Link>
        </section>

    );
}

export default WarehouseListHeader;