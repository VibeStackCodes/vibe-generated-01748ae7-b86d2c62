/**
 * PromoCarousel Component Examples
 * This file demonstrates different usage patterns for the PromoCarousel component
 *
 * These examples can be used for:
 * - Testing different configurations
 * - Documentation of component capabilities
 * - Development reference
 */

import { PromoCarousel, type PromoSlide } from '../promo-carousel'

/**
 * Basic Example: Simple carousel with default settings
 * - Auto-rotates every 5 seconds
 * - Shows 4 promo slides
 * - Includes navigation arrows and dot indicators
 */
export function BasicPromoCarouselExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Welcome to EuroMart',
      subtitle: 'Discover authentic European brands',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
      imageSrcSet:
        'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop 1600w',
      link: '/',
      ctaText: 'Shop Now',
    },
  ]

  return (
    <div className="w-full">
      <PromoCarousel slides={slides} />
    </div>
  )
}

/**
 * Advanced Example: Carousel with custom auto-rotate interval
 * - Auto-rotates every 3 seconds (faster)
 * - Demonstrates fast-paced carousel behavior
 */
export function FastAutoRotateExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Slide 1',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
      link: '/',
      ctaText: 'View',
    },
    {
      id: '2',
      title: 'Slide 2',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop',
      link: '/',
      ctaText: 'View',
    },
  ]

  return (
    <div className="w-full">
      <PromoCarousel slides={slides} autoRotateInterval={3000} />
    </div>
  )
}

/**
 * Custom Height Example: Carousel with smaller height
 * - Uses custom height class (e.g., h-[400px])
 * - Useful for banner/teaser placements
 */
export function CustomHeightExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Compact Banner',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
      link: '/',
    },
  ]

  return (
    <div className="w-full">
      <PromoCarousel slides={slides} height="h-[400px]" />
    </div>
  )
}

/**
 * Accessibility Example: Carousel demonstrating accessibility features
 * - Keyboard navigation (arrow keys)
 * - Screen reader support with ARIA labels
 * - Proper focus management
 * - Slide counter display
 */
export function AccessibilityExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Accessible Carousel',
      subtitle: 'Navigate with arrow keys or mouse',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
      link: '/',
      ctaText: 'Learn More',
    },
    {
      id: '2',
      title: 'Fully Featured',
      subtitle: 'WCAG compliant with proper ARIA labels',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop',
      link: '/',
      ctaText: 'Explore',
    },
  ]

  return (
    <div className="w-full">
      <PromoCarousel slides={slides} autoRotateInterval={6000} />
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        💡 Tip: Use arrow keys to navigate slides, click dots to jump to specific slides, or hover to pause auto-rotation
      </p>
    </div>
  )
}

/**
 * Feature Showcase: Carousel demonstrating all features
 * - Multiple slides with varied content
 * - Images with srcSet for responsive loading
 * - Title, subtitle, and CTA on every slide
 * - Auto-rotation with pause on hover
 * - Navigation arrows and dot indicators
 * - Responsive design
 */
export function FeatureShowcaseExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Summer Collection',
      subtitle: 'Fresh European fashion for the season',
      image: 'https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=1600&h=600&fit=crop',
      imageSrcSet:
        'https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1595777707802-221254fb3c4d?w=1600&h=600&fit=crop 1600w',
      link: '/collections/summer',
      ctaText: 'Shop Summer',
    },
    {
      id: '2',
      title: 'Tech Innovations',
      subtitle: 'Latest gadgets and electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop',
      imageSrcSet:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop 1600w',
      link: '/collections/tech',
      ctaText: 'Explore Tech',
    },
    {
      id: '3',
      title: 'Home Design',
      subtitle: 'Transform your living spaces',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop',
      imageSrcSet:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop 1600w',
      link: '/collections/home',
      ctaText: 'Shop Home',
    },
    {
      id: '4',
      title: 'Outdoor Adventure',
      subtitle: 'Gear for every exploration',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=600&fit=crop',
      imageSrcSet:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=300&fit=crop 800w, https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=600&fit=crop 1600w',
      link: '/collections/outdoor',
      ctaText: 'Browse Gear',
    },
  ]

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Full-Featured Promo Carousel
        </h3>
        <PromoCarousel slides={slides} autoRotateInterval={5000} />
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>Features demonstrated:</strong> Auto-rotation (5s), responsive design, keyboard navigation, hover to pause, arrow navigation, dot indicators, and CTA buttons
        </p>
      </div>
    </div>
  )
}

/**
 * Minimal Example: Carousel without CTA buttons
 * - Simple title and subtitle only
 * - Perfect for informational banners
 */
export function MinimalExample() {
  const slides: PromoSlide[] = [
    {
      id: '1',
      title: 'Limited Time Offer',
      subtitle: 'Save up to 50% on selected items',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=600&fit=crop',
    },
    {
      id: '2',
      title: 'Free Shipping Available',
      subtitle: 'On orders over €50',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop',
    },
  ]

  return (
    <div className="w-full">
      <PromoCarousel slides={slides} autoRotateInterval={4000} />
    </div>
  )
}

/**
 * Component API Reference
 *
 * PromoSlide Interface:
 * - id: string (unique identifier)
 * - title: string (required, main heading)
 * - subtitle?: string (optional, secondary text)
 * - image: string (required, image URL)
 * - imageSrcSet?: string (optional, responsive image srcSet)
 * - link?: string (optional, CTA link URL)
 * - ctaText?: string (optional, CTA button text)
 *
 * PromoCarousel Props:
 * - slides: PromoSlide[] (required, array of slides)
 * - autoRotateInterval?: number (default: 5000ms, auto-rotation delay)
 * - className?: string (optional, additional CSS classes)
 * - height?: string (default: 'h-[600px]', Tailwind height class)
 *
 * Features:
 * ✓ Auto-rotation with configurable interval
 * ✓ Manual navigation (next/previous arrows)
 * ✓ Dot indicator navigation
 * ✓ Pause auto-rotation on hover
 * ✓ Keyboard navigation (arrow keys)
 * ✓ Responsive design (mobile, tablet, desktop)
 * ✓ Lazy loading for images
 * ✓ Accessibility (ARIA labels, focus management)
 * ✓ Smooth transitions between slides
 * ✓ Slide counter display
 * ✓ Brand colors integration (#003d82, #ff6b35)
 */

export default BasicPromoCarouselExample
