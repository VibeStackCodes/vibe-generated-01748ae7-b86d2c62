import { useState, useRef, MouseEvent } from 'react'

/**
 * Product image interface defining the structure of a product image
 * Each image can have multiple resolutions for different screen sizes
 */
export interface ProductImage {
  id: string
  src: string
  srcSet?: string
  alt: string
  thumbnail: string
  thumbnailSrcSet?: string
}

/**
 * Props for ProductImageGallery component
 */
interface ProductImageGalleryProps {
  images: ProductImage[]
  productName?: string
  className?: string
}

/**
 * ProductImageGallery Component
 * Displays a product image gallery with:
 * - Main image display with zoom on hover
 * - Thumbnail selector for image switching
 * - Responsive design
 * - Lazy loading support
 * - Accessibility features
 *
 * @example
 * ```tsx
 * const images = [
 *   {
 *     id: '1',
 *     src: 'https://example.com/product-1.jpg',
 *     srcSet: 'https://example.com/product-1-600.jpg 600w, https://example.com/product-1-1200.jpg 1200w',
 *     alt: 'Product front view',
 *     thumbnail: 'https://example.com/product-1-thumb.jpg',
 *     thumbnailSrcSet: 'https://example.com/product-1-thumb-150.jpg 150w, https://example.com/product-1-thumb-300.jpg 300w'
 *   },
 *   {
 *     id: '2',
 *     src: 'https://example.com/product-2.jpg',
 *     srcSet: 'https://example.com/product-2-600.jpg 600w, https://example.com/product-2-1200.jpg 1200w',
 *     alt: 'Product side view',
 *     thumbnail: 'https://example.com/product-2-thumb.jpg',
 *     thumbnailSrcSet: 'https://example.com/product-2-thumb-150.jpg 150w, https://example.com/product-2-thumb-300.jpg 300w'
 *   }
 * ]
 * <ProductImageGallery images={images} productName="Premium Watch" />
 * ```
 */
export function ProductImageGallery({
  images,
  productName = 'Product',
  className,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const mainImageRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const currentImage = images[selectedImageIndex]

  /**
   * Handle mouse move to track zoom position
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current || !imageRef.current) return

    const rect = mainImageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate position as percentage
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    setZoomPosition({ x: xPercent, y: yPercent })
  }

  /**
   * Handle mouse enter to start zoom
   */
  const handleMouseEnter = () => {
    setIsZooming(true)
  }

  /**
   * Handle mouse leave to stop zoom
   */
  const handleMouseLeave = () => {
    setIsZooming(false)
  }

  /**
   * Handle thumbnail click to change selected image
   */
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsZooming(false)
  }

  if (!images || images.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className || ''}`}>
        <p className="text-gray-500 dark:text-gray-400">No images available</p>
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-4 ${className || ''}`}>
      {/* Main Image Container */}
      <div className="w-full">
        <div
          ref={mainImageRef}
          className="relative w-full bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md"
          style={{ aspectRatio: '1 / 1' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Image */}
          <img
            ref={imageRef}
            src={currentImage.src}
            srcSet={currentImage.srcSet}
            alt={currentImage.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out ${
              isZooming ? 'cursor-zoom-in' : 'cursor-default'
            }`}
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

          {/* Zoom Indicator Badge */}
          {isZooming && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-2 rounded-full shadow-md">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Zoom
              </p>
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
        </div>
      </div>

      {/* Thumbnail Selector */}
      {images.length > 1 && (
        <div className="w-full">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-200 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-[#ff6b35] shadow-lg'
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
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {currentImage.alt}
          </span>
          {images.length > 1 && (
            <span className="ml-2">
              ({selectedImageIndex + 1} of {images.length})
            </span>
          )}
        </p>
        {productName && (
          <p className="text-xs mt-1 opacity-75">
            {productName}
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductImageGallery
