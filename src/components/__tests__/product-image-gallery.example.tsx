import { ProductImageGallery, type ProductImage } from '@/components/product-image-gallery'

/**
 * Sample product images for demonstration
 * In a real application, this would come from an API
 */
const sampleProductImages: ProductImage[] = [
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
]

/**
 * Example component demonstrating ProductImageGallery usage
 * Shows how to integrate and customize the gallery component
 */
export function ProductImageGalleryExample() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#003d82] dark:text-white mb-2">
            Product Image Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Premium European Watch Collection - High-Resolution Product Photography
          </p>
        </div>

        {/* Layout: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <ProductImageGallery
                images={sampleProductImages}
                productName="Premium Swiss Watch - Rose Gold Edition"
                className="w-full"
              />
            </div>
          </div>

          {/* Product Details Column */}
          <div className="space-y-6">
            {/* Title Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#003d82] dark:text-white mb-2">
                Premium Swiss Watch
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Rose Gold Edition</p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-[#003d82] to-[#ff6b35] rounded-lg p-6 text-white">
              <p className="text-sm font-medium opacity-90 mb-1">Price</p>
              <p className="text-3xl font-bold">€2,450</p>
              <p className="text-sm opacity-75 mt-2">Free shipping within Europe</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                In stock ({sampleProductImages.length} variants available)
              </span>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-[#003d82] dark:text-white">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-0.5">✓</span>
                  <span>Swiss quartz movement with chronograph</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-0.5">✓</span>
                  <span>Stainless steel with rose gold plating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-0.5">✓</span>
                  <span>Water resistant to 50m</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-0.5">✓</span>
                  <span>Sapphire crystal with anti-reflective coating</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-[#ff6b35] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border-2 border-[#003d82] text-[#003d82] py-3 rounded-lg font-semibold hover:bg-[#003d82] hover:text-white transition-colors dark:border-gray-400 dark:text-gray-300">
                Add to Wishlist
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <span className="font-semibold">💡 Tip:</span> Hover over the main image to zoom in and see more details. Use the thumbnails below to switch between different product views.
              </p>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 bg-[#003d82] text-white rounded-full flex items-center justify-center font-bold mb-3">
              1
            </div>
            <h3 className="font-semibold text-[#003d82] dark:text-white mb-2">
              Hover to Zoom
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Move your mouse over the main image to zoom in and inspect details at 2x magnification.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold mb-3">
              2
            </div>
            <h3 className="font-semibold text-[#003d82] dark:text-white mb-2">
              Select Thumbnails
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Click any thumbnail below the main image to switch between different product views and angles.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 bg-[#003d82] text-white rounded-full flex items-center justify-center font-bold mb-3">
              3
            </div>
            <h3 className="font-semibold text-[#003d82] dark:text-white mb-2">
              Image Counter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              See which image you're currently viewing and navigate through all available product images.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-[#003d82] dark:text-white mb-4">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Responsive Design
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Adapts seamlessly to mobile, tablet, and desktop screens with touch-friendly thumbnails.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Zoom on Hover
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2x magnification with smooth transform following your cursor position for detailed inspection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Lazy Loading
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Images load on-demand for better performance and reduced initial page load time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Accessibility
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Semantic HTML, ARIA labels, and keyboard navigation support for all users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Multiple Resolutions
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Supports srcSet for responsive image delivery across different device sizes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-[#ff6b35]">✓</span> Dark Mode Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fully styled for both light and dark themes with Tailwind CSS integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImageGalleryExample
