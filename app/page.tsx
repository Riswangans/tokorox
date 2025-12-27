import { ShoppingCart, Star, Truck, Shield } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Belanja!</h1>
          <p className="text-xl mb-8">Produk berkualitas dengan harga terbaik</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Belanja Sekarang
          </button>
        </section>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Truck, text: "Gratis Ongkir", desc: "Min. Belanja 100k" },
            { icon: Shield, text: "Garansi", desc: "30 Hari Pengembalian" },
            { icon: Star, text: "Kualitas", desc: "Produk Original" },
            { icon: ShoppingCart, text: "Mudah", desc: "Checkout Cepat" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow text-center">
              <item.icon className="w-10 h-10 mx-auto mb-2 text-blue-500" />
              <h3 className="font-bold">{item.text}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Produk Terpopuler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              name="Sepatu Sneakers Premium"
              price={299000}
              image="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600"
              rating={4.8}
            />
            <ProductCard
              name="Kamera Mirrorless"
              price={4500000}
              image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600"
              rating={4.9}
            />
            <ProductCard
              name="Headphone Wireless"
              price={799000}
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600"
              rating={4.7}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
