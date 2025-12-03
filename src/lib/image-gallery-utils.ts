/**
 * Utility functions and helpers for the product image gallery
 * Provides image optimization, loading, and accessibility features
 */

/**
 * Configuration for image loading and optimization
 */
export interface ImageOptimizationConfig {
  enableLazyLoading: boolean
  enableSrcSet: boolean
  zoomScale: number
  imageQuality: 'high' | 'medium' | 'low'
}

/**
 * Default configuration for image optimization
 */
export const DEFAULT_IMAGE_CONFIG: ImageOptimizationConfig = {
  enableLazyLoading: true,
  enableSrcSet: true,
  zoomScale: 2,
  imageQuality: 'high',
}

/**
 * Generate responsive image srcSet for common breakpoints
 * @param baseUrl - Base image URL (should support width parameter)
 * @param widths - Array of widths to generate srcSet for
 * @returns srcSet string compatible with img srcSet attribute
 *
 * @example
 * ```ts
 * const srcSet = generateImageSrcSet(
 *   'https://example.com/image.jpg?w=',
 *   [400, 600, 800, 1000, 1200]
 * )
 * // Result: "https://example.com/image.jpg?w=400 400w, https://example.com/image.jpg?w=600 600w, ..."
 * ```
 */
export function generateImageSrcSet(baseUrl: string, widths: number[] = [400, 600, 800, 1000, 1200]): string {
  return widths.map(width => `${baseUrl}${width} ${width}w`).join(', ')
}

/**
 * Calculate optimal image dimensions for a given container width
 * @param containerWidth - Width of the container in pixels
 * @param aspectRatio - Aspect ratio of the image (width/height)
 * @returns Object with calculated width and height
 *
 * @example
 * ```ts
 * const dimensions = calculateImageDimensions(600, 1) // square image
 * console.log(dimensions) // { width: 600, height: 600 }
 * ```
 */
export function calculateImageDimensions(
  containerWidth: number,
  aspectRatio: number = 1
): { width: number; height: number } {
  return {
    width: containerWidth,
    height: Math.round(containerWidth / aspectRatio),
  }
}

/**
 * Check if an image is likely a high-res image suitable for zoom
 * @param url - Image URL to check
 * @returns boolean indicating if image is high-res
 */
export function isHighResImage(url: string): boolean {
  // Check for common high-res indicators in URL
  const highResPatterns = ['@2x', '@3x', 'hd', 'high-res', 'full-res', 'w=1200', 'w=1000']
  return highResPatterns.some(pattern => url.toLowerCase().includes(pattern))
}

/**
 * Get image metadata from URL (useful for CDN images)
 * @param url - Image URL
 * @returns Object with extracted metadata
 */
export function extractImageMetadata(
  url: string
): { width?: number; height?: number; quality?: string; format?: string } {
  const metadata: any = {}

  // Extract width if present in URL
  const widthMatch = url.match(/w[=_](\d+)/)
  if (widthMatch) {
    metadata.width = parseInt(widthMatch[1], 10)
  }

  // Extract height if present in URL
  const heightMatch = url.match(/h[=_](\d+)/)
  if (heightMatch) {
    metadata.height = parseInt(heightMatch[1], 10)
  }

  // Extract format if present
  const formatMatch = url.match(/\.([a-z]+)[\?#]?/i)
  if (formatMatch) {
    metadata.format = formatMatch[1].toLowerCase()
  }

  return metadata
}

/**
 * Create an optimized thumbnail URL from a full image URL
 * @param fullImageUrl - URL of the full image
 * @param thumbnailSize - Desired thumbnail size (width in pixels)
 * @returns Optimized thumbnail URL
 */
export function createThumbnailUrl(fullImageUrl: string, thumbnailSize: number = 80): string {
  // If URL already has width parameter, replace it
  if (fullImageUrl.includes('w=') || fullImageUrl.includes('w_')) {
    return fullImageUrl.replace(/w[=_]\d+/, `w=${thumbnailSize}`)
  }

  // If URL has query parameters, add width parameter
  if (fullImageUrl.includes('?')) {
    return `${fullImageUrl}&w=${thumbnailSize}`
  }

  // Otherwise append as query parameter
  return `${fullImageUrl}?w=${thumbnailSize}`
}

/**
 * Preload an image to ensure it's cached before display
 * @param url - Image URL to preload
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`))

    img.src = url
  })
}

/**
 * Preload multiple images in sequence
 * @param urls - Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export async function preloadImages(urls: string[]): Promise<void> {
  try {
    await Promise.all(urls.map(url => preloadImage(url)))
  } catch (error) {
    console.warn('Some images failed to preload:', error)
  }
}

/**
 * Generate zoom position percentage from mouse event
 * @param event - Mouse event
 * @param element - DOM element reference
 * @returns Object with x and y percentages
 */
export function calculateZoomPosition(
  event: MouseEvent,
  element: HTMLElement | null
): { x: number; y: number } {
  if (!element) {
    return { x: 50, y: 50 }
  }

  const rect = element.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const xPercent = (x / rect.width) * 100
  const yPercent = (y / rect.height) * 100

  // Clamp values to 0-100
  return {
    x: Math.max(0, Math.min(100, xPercent)),
    y: Math.max(0, Math.min(100, yPercent)),
  }
}

/**
 * Get alt text for accessibility
 * @param index - Image index in gallery
 * @param total - Total number of images
 * @param description - Description of the image
 * @returns Formatted alt text string
 */
export function formatAltText(index: number, total: number, description: string): string {
  return `${description} (Image ${index + 1} of ${total})`
}

/**
 * Validate ProductImage data structure
 * @param image - Image object to validate
 * @returns boolean indicating if image is valid
 */
export function isValidProductImage(image: any): boolean {
  return (
    image &&
    typeof image === 'object' &&
    typeof image.id === 'string' &&
    typeof image.src === 'string' &&
    typeof image.alt === 'string' &&
    typeof image.thumbnail === 'string'
  )
}

/**
 * Generate placeholder styles for image loading state
 * @returns CSS properties object for placeholder
 */
export function getImagePlaceholderStyles(): React.CSSProperties {
  return {
    backgroundColor: '#f3f4f6',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  }
}

/**
 * Build CSS classes for image container
 * @param isZooming - Whether zoom is active
 * @param hasMultipleImages - Whether there are multiple images
 * @returns CSS class string
 */
export function buildImageContainerClasses(
  isZooming: boolean = false,
  hasMultipleImages: boolean = true
): string {
  const classes = ['relative', 'w-full', 'bg-gray-100', 'dark:bg-gray-800', 'overflow-hidden', 'rounded-lg']

  if (isZooming) {
    classes.push('cursor-zoom-in')
  }

  if (hasMultipleImages) {
    classes.push('shadow-md')
  }

  return classes.join(' ')
}

/**
 * Format image alt text to be more descriptive
 * @param baseAlt - Base alt text
 * @param productName - Name of the product
 * @returns Enhanced alt text
 */
export function enhanceAltText(baseAlt: string, productName: string): string {
  return `${productName}: ${baseAlt}`
}

/**
 * Calculate appropriate thumbnail size based on device pixel ratio
 * @returns Thumbnail size in pixels
 */
export function calculateThumbnailSize(): number {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
  const baseSize = 80
  return Math.round(baseSize * dpr)
}

/**
 * Detect if device supports touch events
 * @returns boolean indicating touch support
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false

  return (
    'ontouchstart' in window ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
    (typeof navigator !== 'undefined' && 'msMaxTouchPoints' in navigator && navigator.msMaxTouchPoints > 0)
  )
}

/**
 * Create keyboard navigation handler for image gallery
 * @param currentIndex - Current image index
 * @param totalImages - Total number of images
 * @returns Object with navigation functions
 */
export function createKeyboardNavigationHandler(
  currentIndex: number,
  totalImages: number
): { next: () => number; prev: () => number; first: () => number; last: () => number } {
  return {
    next: () => (currentIndex + 1) % totalImages,
    prev: () => (currentIndex - 1 + totalImages) % totalImages,
    first: () => 0,
    last: () => totalImages - 1,
  }
}

/**
 * Generate thumbnail grid layout classes based on image count
 * @param imageCount - Total number of images
 * @returns CSS class string for grid layout
 */
export function getThumbnailGridClasses(imageCount: number): string {
  if (imageCount <= 3) {
    return 'grid grid-cols-3 gap-2'
  } else if (imageCount <= 6) {
    return 'flex flex-wrap gap-2'
  } else {
    return 'flex flex-wrap gap-2 overflow-x-auto'
  }
}
