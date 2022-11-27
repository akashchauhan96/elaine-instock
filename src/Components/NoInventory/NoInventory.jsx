import { useLottie } from 'lottie-react';
import noStock from '../../assets/images/no-inventory-animation.json';
import { Link } from 'react-router-dom';
import './NoInventory.scss';

export default function NoInventory() {

    const options = {
        animationData: noStock,
        loop: true
      };

      const style = {
        height: 300,
      };
    
      const { View } = useLottie(options, style);
    
      return (
        <div className='NoInventory__container'>
            <p className='NoInventory__info'>Oh no! This warehouse has no inventory items.</p>
            {View}
            <Link className='NoInventory__link' to={"/inventory/add"}>
                    <div className='NoInventory__button'>+ Add New Inventory Item</div>
            </Link>
        </div>
      )
}