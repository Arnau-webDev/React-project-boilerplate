import { ProductCard } from "../components/ProductCard";

import {ProductButtons, ProductImage, ProductTitle} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: 1,
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: "wrap"
        }}>
          <ProductCard product={product} className="bg-dark text-white">
            <ProductCard.Image className='custom-image' />
            <ProductCard.Title className='text-bold' title={'Coffee'} />
            <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>

            <ProductCard product={product} className="bg-dark text-white" >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage