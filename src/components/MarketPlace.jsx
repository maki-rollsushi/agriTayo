import FarmerSidebar from '../components/FarmerSidebar';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Mango', icon: '🥭' },
  { id: 2, name: 'Banana', icon: '🍌' },
  { id: 3, name: 'Strawberry', icon: '🍓' },
];

function Marketplace() {
  return (
    <div className="main-container">
        <div className='sidebar'>
            <FarmerSidebar />
        </div>
      <div className='product-grid'>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;