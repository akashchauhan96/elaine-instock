import './WarehouseDetails.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

export default function WarehouseDetails () {
    return (
        <div className='warehouse'>
        <div className='warehouse__header'>
            <div className='warehouse__title'>
                <img src={ backArrow } alt="Go Back" />
                <h1 className='warehouse__name'>Warehouse Name</h1>
            </div>
            <img src={ editIcon } alt="Edit Warehouse" />
        </div>
            <div className='warehouse__details-container'>
                <div className='warehouse__details'>
                    <h4 className='warehouse__detail'>Warehouse Address:</h4>
                    <p className='warehouse__info'>Street Address, State, Country</p>
                </div>
                <div className='warehouse__more-details'>
                    <div className='warehouse__details'>
                        <h4 className='warehouse__detail'>Contact Name:</h4>
                        <p className='warehouse__info'>Name</p>
                        <p className='warehouse__info'>Title</p>
                    </div>
                    <div className='warehouse__details'>
                        <h4 className='warehouse__detail'>Contact Information:</h4>
                        <p className='warehouse__info'>Phone Number</p>
                        <p className='warehouse__info'>Email</p>                       
                    </div>
                </div>
            </div>

        </div>
    )
}