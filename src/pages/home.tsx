import { CategoryTiles, type Category } from '@/components/category-tiles'
import { PromoCarousel, type PromoSlide } from '@/components/promo-carousel'

/**
 * Sample promo slides for the carousel
 * In a real application, this would come from an API
 */
const samplePromoSlides: PromoSlide[] = [
  {
    id: '1',
    title: 'Summer Collection 2024',
    subtitle: 'Discover the latest European fashion trends',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop 1600w',
    link: '/promo/summer',
    ctaText: 'Shop Now',
  },
  {
    id: '2',
    title: 'Premium Electronics Sale',
    subtitle: 'Up to 40% off on selected tech products',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop 1600w',
    link: '/promo/electronics',
    ctaText: 'Browse Electronics',
  },
  {
    id: '3',
    title: 'Home Elegance',
    subtitle: 'Transform your living space with European design',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop 1600w',
    link: '/promo/home',
    ctaText: 'Explore Home',
  },
  {
    id: '4',
    title: 'Outdoor Adventure Gear',
    subtitle: 'Explore nature with premium European equipment',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=600&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=600&fit=crop 1600w',
    link: '/promo/outdoor',
    ctaText: 'Shop Outdoor Gear',
  },
]

/**
 * Sample category data for demonstration
 * In a real application, this would come from an API
 */
const sampleCategories: Category[] = [
  {
    id: '1',
    title: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=1200&h=800&fit=crop 1200w',
    link: '/categories/fashion',
    description: 'Premium European fashion brands and apparel',
  },
  {
    id: '2',
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop 1200w',
    link: '/categories/electronics',
    description: 'Latest technology and electronics from Europe',
  },
  {
    id: '3',
    title: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop 1200w',
    link: '/categories/home',
    description: 'Beautiful home and living products',
  },
  {
    id: '4',
    title: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop 1200w',
    link: '/categories/sports',
    description: 'Premium sports and outdoor equipment',
  },
  {
    id: '5',
    title: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1596462502278-af282f83d8c5?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1596462502278-af282f83d8c5?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1596462502278-af282f83d8c5?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1596462502278-af282f83d8c5?w=1200&h=800&fit=crop 1200w',
    link: '/categories/beauty',
    description: 'Luxury beauty and personal care products',
  },
  {
    id: '6',
    title: 'Food & Gourmet',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    imageSrcSet:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop 300w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop 600w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop 1200w',
    link: '/categories/food',
    description: 'Artisanal European food and gourmet delicacies',
  },
]

/**
 * Home page component
 * Displays hero section and category tiles grid
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-[#003d82]">
        <img
          src="https://images.unsplash.com/photo-1552456562-daf45e75d08d?w=1600&h=600&fit=crop"
          alt="EuroMart Hero"
          srcSet="https://images.unsplash.com/photo-1552456562-daf45e75d08d?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1552456562-daf45e75d08d?w=1600&h=600&fit=crop 1600w"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Hero overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">EuroMart</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Discover and confidently buy authentic European brands seamlessly across languages,
            currencies and borders
          </p>
        </div>
      </section>

      {/* Promo Carousel Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PromoCarousel slides={samplePromoSlides} autoRotateInterval={5000} />
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003d82] dark:text-white mb-2">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our curated selection of European brands and products
            </p>
          </div>

          {/* Category tiles grid */}
          <CategoryTiles categories={sampleCategories} />
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003d82] dark:text-white mb-2">
                Authentic Brands
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Verified sellers and authentic products guaranteed
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003d82] dark:text-white mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cross-border delivery with tracking and support
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003d82] dark:text-white mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Multiple payment options with PCI compliance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
