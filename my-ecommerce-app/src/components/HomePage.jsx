import ProductCard from '../components/ProductCard';
import headphonesImage from '../assets/images/headphones-3683983_1280.jpg';
import mouseImage from '../assets/images/mouse-7386247_1280.jpg';
import smartwatchImage from '../assets/images/smartwatch-8300238_1280.jpg';
import speakerImage from '../assets/images/speaker-6497177_1280.jpg';
const HomePage = () => {
  // Mock data - in a real app this would come from an API
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: headphonesImage
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: mouseImage
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: smartwatchImage
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 49.99,
      image: speakerImage
    }
    // Add more products as needed
  ];

  return (
    <div className="home-page">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
