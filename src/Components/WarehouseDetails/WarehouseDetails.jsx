import './WarehouseDetails.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';

export default function WarehouseDetails ( { warehousePageDetails } ) {

    return (
        <div className='warehouse'>
        <div className='warehouse__header'>
            <div className='warehouse__title'>
                <Link to="/">
                    <img src={ backArrow } alt="Go Back" />
                </Link>
                <h1 className='warehouse__name'>{ warehousePageDetails.warehouse_name }</h1>
            </div>
            {/* <div className='warehouse__edit'> */}
                <Link className="warehouse__edit" to="/edit-warehouse">
                    <img className="warehouse__edit-icon" src={ editIcon } alt="Edit Warehouse" />
                    <p className="warehouse__edit-text">Edit</p>
                </Link>
            {/* </div> */}
        </div>
            <div className='warehouse__details-container'>
                <div className='warehouse__details'>
                    <h4 className='warehouse__detail'>Warehouse Address:</h4>
                    <p className='warehouse__info'>{ warehousePageDetails.address }, { warehousePageDetails.city }, { warehousePageDetails.country }</p>
                </div>
                <div className='warehouse__more-details'>
                    <div className='warehouse__details'>
                        <h4 className='warehouse__detail'>Contact Name:</h4>
                        <p className='warehouse__info'>{ warehousePageDetails.contact_name }</p>
                        <p className='warehouse__info'>{ warehousePageDetails.contact_position }</p>
                    </div>
                    <div className='warehouse__details'>
                        <h4 className='warehouse__detail'>Contact Information:</h4>
                        <p className='warehouse__info'>{ warehousePageDetails.contact_phone }</p>
                        <p className='warehouse__info'>{ warehousePageDetails.contact_email }</p>                       
                    </div>
                </div>
            </div>
        </div>
    )
}