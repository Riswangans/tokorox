import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

export default function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          Rp {price.toLocaleString('id-ID')}
        </p>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition">
          <ShoppingCart className="w-5 h-5" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
