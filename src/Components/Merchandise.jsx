import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'IoT Forum T-Shirt', price: 20, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'IoT Bottle', price: 5, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'IoT Bag', price: 30, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Circuit Board Mousepad', price: 15, image: '/placeholder.svg?height=200&width=200' },
];

export default function MerchandiseSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="merchandise" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Club Merchandise</h2>
        <p className="text-gray-400 text-center mb-12">
          Support our club and show off your IoT passion with our exclusive merchandise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400">${product.price}</p>
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Here you would typically integrate with a shopping cart or checkout system
                    alert(`Added ${product.name} to cart!`);
                  }}
                >
                  Purchase
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img src={selectedProduct.image || "/placeholder.svg"} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedProduct.name}</h3>
              <p className="text-gray-400 mb-4">${selectedProduct.price}</p>
              <p className="text-gray-300 mb-4">This is a detailed description of the {selectedProduct.name}. It includes information about the product's features, materials, and why it's a must-have for IoT enthusiasts.</p>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                onClick={() => {
                  alert(`Added ${selectedProduct.name} to cart!`);
                  setSelectedProduct(null);
                }}
              >
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

