import { ProductImageGallery, type ProductImage } from '@/components/product-image-gallery'
import { Link } from 'react-router-dom'

/**
 * Sample product data
 * In a real application, this would be fetched from an API based on the product ID
 */
interface Product {
  id: string
  name: string
  brand: string
  price: number
  currency: string
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  description: string
  features: string[]
  images: ProductImage[]
}

const sampleProduct: Product = {
  id: '1',
  name: 'Premium Swiss Watch',
  brand: 'European Timepieces',
  price: 2450,
  currency: '€',
  rating: 4.8,
  reviewCount: 342,
  inStock: true,
  stockCount: 15,
  description:
    'Experience timeless elegance with our Premium Swiss Watch. Handcrafted with precision engineering, this sophisticated timepiece combines traditional watchmaking with modern design. Each watch is carefully assembled in Switzerland and features components sourced from across Europe, making it a true testament to authentic European craftsmanship.',
  features: [
    'Swiss quartz movement with chronograph function',
    'Stainless steel case with rose gold plating',
    'Water resistant to 50 meters',
    'Sapphire crystal with anti-reflective coating',
    'Date window with quick-set functionality',
    'Italian leather strap with deployable clasp',
    'Comes with luxury gift box and documentation',
    'International 2-year warranty included',
  ],
  images: [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Front View',
      thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop 160w',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Side View',
      thumbnail: 'https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1579909108328-f55b86ffe3a4?w=160&h=160&fit=crop 160w',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Detail View',
      thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=160&h=160&fit=crop 160w',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Back View',
      thumbnail: 'https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1546868871-7541df60d0d9?w=160&h=160&fit=crop 160w',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Box Contents',
      thumbnail: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=160&h=160&fit=crop 160w',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop 400w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop 600w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&h=1000&fit=crop 1000w',
      alt: 'Premium Watch - Lifestyle',
      thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&h=80&fit=crop',
      thumbnailSrcSet:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&h=80&fit=crop 80w, https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=160&h=160&fit=crop 160w',
    },
  ],
}

/**
 * Product Detail Page Component
 * Displays a full product page with image gallery, details, and specifications
 */
export function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link to="/" className="text-[#003d82] dark:text-white font-semibold hover:text-[#ff6b35] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Image Gallery */}
          <div>
            <ProductImageGallery images={sampleProduct.images} productName={sampleProduct.name} />
          </div>

          {/* Right Column: Product Details */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Link to="/" className="hover:text-[#003d82]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 dark:text-gray-300">Products</span>
              <span className="mx-2">/</span>
              <span className="text-gray-700 dark:text-gray-300">{sampleProduct.brand}</span>
            </div>

            {/* Brand & Title */}
            <div>
              <p className="text-sm font-semibold text-[#ff6b35] mb-2 uppercase tracking-wide">
                {sampleProduct.brand}
              </p>
              <h1 className="text-4xl font-bold text-[#003d82] dark:text-white">
                {sampleProduct.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(sampleProduct.rating)
                        ? 'text-[#ff6b35]'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {sampleProduct.rating} out of 5
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                ({sampleProduct.reviewCount} reviews)
              </span>
            </div>

            {/* Price & Stock */}
            <div className="border-y border-gray-200 dark:border-gray-800 py-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-[#003d82] dark:text-white">
                  {sampleProduct.currency}
                  {sampleProduct.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {sampleProduct.currency}
                  {Math.round(sampleProduct.price * 1.2).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Save {sampleProduct.currency}
                {Math.round(sampleProduct.price * 0.2)} (17% off)
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    sampleProduct.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {sampleProduct.inStock
                    ? `In stock (${sampleProduct.stockCount} units available)`
                    : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="font-semibold text-lg text-[#003d82] dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {sampleProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-[#ff6b35] font-bold mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-[#ff6b35] text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg">
                Add to Cart
              </button>
              <div className="flex gap-3">
                <button className="flex-1 border-2 border-[#003d82] text-[#003d82] py-3 rounded-lg font-semibold hover:bg-[#003d82] hover:text-white transition-colors dark:border-gray-400 dark:text-gray-300">
                  ♡ Wishlist
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                  Share
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <span className="font-semibold">🚚 Free shipping </span>
                within Europe for orders over €50. Estimated delivery: 3-5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#003d82] dark:text-white mb-4">About This Product</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {sampleProduct.description}
            </p>

            <h3 className="text-xl font-bold text-[#003d82] dark:text-white mb-4">Why Choose This Watch?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Authentic European Craftsmanship</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built in Switzerland with components from across Europe
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Premium Materials</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stainless steel, sapphire crystal, and Italian leather
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Precision Movement</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Swiss quartz movement ensures exceptional accuracy
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">International Warranty</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2-year warranty covering manufacturing defects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold text-[#003d82] dark:text-white mb-3">Product Details</h4>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Brand</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    {sampleProduct.brand}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Category</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">Watches & Accessories</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Material</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">Rose Gold Plated Steel</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Water Resistance</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">50 meters</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Warranty</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">2 Years</dd>
                </div>
              </dl>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-2">
                ✓ Verified Seller
              </p>
              <p className="text-xs text-green-800 dark:text-green-200">
                This product is sold by a verified European seller with excellent customer ratings
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2024 EuroMart. All rights reserved. | Your trusted pan-European marketplace
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ProductDetailPage
