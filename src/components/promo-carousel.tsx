import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Promo slide interface defining the shape of a slide object
 */
export interface PromoSlide {
  id: string
  title: string
  subtitle?: string
  image: string
  imageSrcSet?: string
  link?: string
  ctaText?: string
}

/**
 * Props for PromoCarousel component
 */
interface PromoCarouselProps {
  slides: PromoSlide[]
  autoRotateInterval?: number
  className?: string
  height?: string
}

/**
 * PromoCarousel Component
 * Displays promotional slides with auto-rotation, navigation arrows, and indicators
 * Image dimensions: 1600x600px (responsive)
 * Features:
 * - Auto-rotation that pauses on hover
 * - Previous/Next navigation arrows
 * - Dot indicators showing current slide
 * - Responsive design with lazy loading
 * - Keyboard navigation support (arrow keys)
 *
 * @example
 * ```tsx
 * const promoSlides = [
 *   {
 *     id: '1',
 *     title: 'Summer Sale',
 *     subtitle: 'Up to 50% off on selected items',
 *     image: '/images/promo-1.jpg',
 *     imageSrcSet: '/images/promo-1-800.jpg 800w, /images/promo-1-1600.jpg 1600w',
 *     link: '/sale',
 *     ctaText: 'Shop Now'
 *   }
 * ]
 * <PromoCarousel slides={promoSlides} autoRotateInterval={5000} />
 * ```
 */
export function PromoCarousel({
  slides,
  autoRotateInterval = 5000,
  className = '',
  height = 'h-[600px]',
}: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Validate slides
  if (!slides || slides.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 py-12">
        <p className="text-gray-500 dark:text-gray-400">No promo slides available</p>
      </div>
    )
  }

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoRotating) return

    autoRotateTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    }, autoRotateInterval)

    return () => {
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current)
      }
    }
  }, [currentIndex, isAutoRotating, slides.length, autoRotateInterval])

  // Handle previous slide
  const handlePrevious = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length)
    setIsAutoRotating(false)
  }, [slides.length])

  // Handle next slide
  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    setIsAutoRotating(false)
  }, [slides.length])

  // Handle dot click
  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoRotating(false)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious()
      } else if (event.key === 'ArrowRight') {
        handleNext()
      }
    }

    const carousel = carouselRef.current
    carousel?.addEventListener('keydown', handleKeyDown)

    return () => {
      carousel?.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlePrevious, handleNext])

  // Handle mouse hover to pause/resume auto-rotation
  const handleMouseEnter = () => {
    setIsAutoRotating(false)
  }

  const handleMouseLeave = () => {
    setIsAutoRotating(true)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div
      ref={carouselRef}
      className={`relative w-full overflow-hidden rounded-lg bg-[#003d82] ${height} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="region"
      aria-label="Promotional carousel"
      aria-live="polite"
    >
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            {/* Background image */}
            <img
              src={slide.image}
              srcSet={slide.imageSrcSet}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === currentIndex ? 'eager' : 'lazy'}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content overlay */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-12">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl drop-shadow-lg">
                {slide.title}
              </h2>

              {/* Subtitle */}
              {slide.subtitle && (
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}

              {/* CTA Button */}
              {slide.link && slide.ctaText && (
                <a
                  href={slide.link}
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#ff6b35] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#ff6b35]/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:ring-offset-2 focus:ring-offset-black"
                >
                  {slide.ctaText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 text-white transition-all duration-300 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/40 backdrop-blur-sm"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 text-white transition-all duration-300 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/40 backdrop-blur-sm"
        aria-label="Next slide"
        title="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/40 ${
              index === currentIndex
                ? 'w-3 h-3 md:w-4 md:h-4 bg-[#ff6b35] shadow-lg'
                : 'w-2 h-2 md:w-3 md:h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter (accessibility) */}
      <div className="absolute top-4 right-4 z-20 text-white/80 text-sm md:text-base font-medium">
        <span className="sr-only">Slide</span>
        {currentIndex + 1} <span className="text-white/60">/</span> {slides.length}
      </div>
    </div>
  )
}

export default PromoCarousel
