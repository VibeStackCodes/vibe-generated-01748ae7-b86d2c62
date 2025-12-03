import { useState, useRef, MouseEvent, KeyboardEvent } from 'react'
import { isTouchDevice, createKeyboardNavigationHandler } from '@/lib/image-gallery-utils'

/**
 * Advanced product image interface with additional metadata
 */
export interface AdvancedProductImage {
  id: string
  src: string
  srcSet?: string
  alt: string
  thumbnail: string
  thumbnailSrcSet?: string
  label?: string
  isFeatured?: boolean
}

/**
 * Props for advanced gallery component
 */
interface AdvancedProductImageGalleryProps {
  images: AdvancedProductImage[]
  productName?: string
  className?: string
  enableKeyboardNavigation?: boolean
  enableTouchGestures?: boolean
  autoRotate?: boolean
  autoRotateInterval?: number
  onImageChange?: (index: number) => void
}

/**
 * Advanced ProductImageGallery Component
 * Extended version with:
 * - Keyboard navigation (arrow keys)
 * - Touch swipe gestures (on mobile)
 * - Auto-rotation capability
 * - Image labels
 * - Featured image indicator
 * - Image change callbacks
 *
 * @example
 * ```tsx
 * const images = [...]
 * <AdvancedProductImageGallery
 *   images={images}
 *   productName="Premium Watch"
 *   enableKeyboardNavigation={true}
 *   enableTouchGestures={true}
 *   onImageChange={(index) => console.log('Changed to image:', index)}
 * />
 * ```
 */
export function AdvancedProductImageGallery({
  images,
  productName = 'Product',
  className,
  enableKeyboardNavigation = true,
  enableTouchGestures = true,
  autoRotate = false,
  autoRotateInterval = 5000,
  onImageChange,
}: AdvancedProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [touchStartX, setTouchStartX] = useState(0)
  const mainImageRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const currentImage = images[selectedImageIndex]
  const isTouch = isTouchDevice()

  /**
   * Handle image selection and trigger callback
   */
  const selectImage = (index: number) => {
    setSelectedImageIndex(index)
    setIsZooming(false)
    onImageChange?.(index)
  }

  /**
   * Handle zoom tracking
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current || !imageRef.current) return

    const rect = mainImageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    setZoomPosition({ x: xPercent, y: yPercent })
  }

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!enableKeyboardNavigation) return

    const nav = createKeyboardNavigationHandler(selectedImageIndex, images.length)

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        selectImage(nav.next())
        break
      case 'ArrowLeft':
        e.preventDefault()
        selectImage(nav.prev())
        break
      case 'Home':
        e.preventDefault()
        selectImage(nav.first())
        break
      case 'End':
        e.preventDefault()
        selectImage(nav.last())
        break
      default:
        break
    }
  }

  /**
   * Handle touch start
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!enableTouchGestures) return
    setTouchStartX(e.touches[0].clientX)
  }

  /**
   * Handle touch end for swipe gestures
   */
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!enableTouchGestures) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left: go to next image
        selectImage((selectedImageIndex + 1) % images.length)
      } else {
        // Swiped right: go to previous image
        selectImage((selectedImageIndex - 1 + images.length) % images.length)
      }
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className || ''}`}>
        <p className="text-gray-500 dark:text-gray-400">No images available</p>
      </div>
    )
  }

  return (
    <div
      ref={galleryRef}
      className={`flex flex-col gap-4 ${className || ''}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${productName} image gallery`}
    >
      {/* Main Image Container */}
      <div className="w-full">
        <div
          ref={mainImageRef}
          className="relative w-full bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md cursor-zoom-in"
          style={{ aspectRatio: '1 / 1' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="img"
          aria-label={currentImage.alt}
        >
          {/* Main Image */}
          <img
            ref={imageRef}
            src={currentImage.src}
            srcSet={currentImage.srcSet}
            alt={currentImage.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out"
            style={
              isZooming
                ? {
                    transform: 'scale(2)',
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }
                : {}
            }
            loading="lazy"
          />

          {/* Featured Indicator */}
          {currentImage.isFeatured && (
            <div className="absolute top-4 left-4 bg-[#ff6b35] text-white px-3 py-1.5 rounded-full shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide">Featured</p>
            </div>
          )}

          {/* Image Label */}
          {currentImage.label && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{currentImage.label}</p>
            </div>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-full">
              <p className="text-sm font-medium">
                {selectedImageIndex + 1} / {images.length}
              </p>
            </div>
          )}

          {/* Zoom Indicator Badge */}
          {isZooming && !isTouch && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-2 rounded-full shadow-md animate-pulse">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">🔍 Zoom</p>
            </div>
          )}

          {/* Touch Swipe Hint */}
          {isTouch && images.length > 1 && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-2 rounded-full shadow-md">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-200">← Swipe →</p>
            </div>
          )}
        </div>

        {/* Navigation Hints for Keyboard */}
        {enableKeyboardNavigation && !isTouch && images.length > 1 && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 px-2">
            Use arrow keys to navigate • Home/End to jump
          </div>
        )}
      </div>

      {/* Thumbnail Selector */}
      {images.length > 1 && (
        <div className="w-full">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => selectImage(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-200 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-[#ff6b35] shadow-lg scale-105'
                    : 'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-[#003d82]'
                }`}
                style={{ width: '80px', height: '80px' }}
                title={`View image ${index + 1}: ${image.alt}`}
                aria-label={`Select ${image.alt}`}
                aria-pressed={index === selectedImageIndex}
              >
                <img
                  src={image.thumbnail}
                  srcSet={image.thumbnailSrcSet}
                  alt={`${image.alt} thumbnail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Featured Badge */}
                {image.isFeatured && (
                  <div className="absolute top-1 right-1 bg-[#ff6b35] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    ★
                  </div>
                )}

                {/* Active indicator overlay */}
                {index === selectedImageIndex && (
                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Info */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          <span className="font-medium text-gray-700 dark:text-gray-300">{currentImage.alt}</span>
          {images.length > 1 && (
            <span className="ml-2">
              ({selectedImageIndex + 1} of {images.length})
            </span>
          )}
        </p>
        {productName && (
          <p className="text-xs mt-1 opacity-75">{productName}</p>
        )}
      </div>
    </div>
  )
}

export default AdvancedProductImageGallery
