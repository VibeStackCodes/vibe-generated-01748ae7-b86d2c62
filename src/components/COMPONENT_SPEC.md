# Product Image Gallery Component Specification

## Overview

The Product Image Gallery is a professional-grade React component designed for e-commerce product detail pages. It provides an intuitive interface for browsing product images with advanced features like zoom-on-hover, thumbnail selection, and keyboard navigation.

## Components

### 1. ProductImageGallery (Base Component)

**Location**: `src/components/product-image-gallery.tsx`

#### Features
- **Main Image Display**: Large, optimized product image display
- **Zoom on Hover**: 2x magnification with cursor-tracking zoom origin
- **Thumbnail Selector**: Horizontal scrollable thumbnail strip
- **Image Counter**: Shows current image position (e.g., "1 / 6")
- **Responsive Design**: Works seamlessly on all device sizes
- **Lazy Loading**: Images load on-demand for better performance
- **Dark Mode Support**: Full light/dark theme support via Tailwind
- **Accessibility**: Semantic HTML, ARIA labels, proper alt text

#### Props

```typescript
interface ProductImageGalleryProps {
  images: ProductImage[]           // Array of product images
  productName?: string             // Product name for context
  className?: string               // Additional CSS classes
}
```

#### ProductImage Interface

```typescript
interface ProductImage {
  id: string                       // Unique identifier
  src: string                      // Full-size image URL
  srcSet?: string                  // Responsive image srcSet
  alt: string                      // Descriptive alt text
  thumbnail: string                // Thumbnail image URL
  thumbnailSrcSet?: string        // Responsive thumbnail srcSet
}
```

#### Usage Example

```tsx
import { ProductImageGallery, type ProductImage } from '@/components/product-image-gallery'

const images: ProductImage[] = [
  {
    id: '1',
    src: 'https://example.com/product-1.jpg',
    srcSet: 'https://example.com/product-1-600.jpg 600w, https://example.com/product-1-1200.jpg 1200w',
    alt: 'Product front view',
    thumbnail: 'https://example.com/product-1-thumb.jpg',
    thumbnailSrcSet: 'https://example.com/product-1-thumb-150.jpg 150w, https://example.com/product-1-thumb-300.jpg 300w'
  }
]

export function ProductPage() {
  return (
    <ProductImageGallery
      images={images}
      productName="Premium Watch"
    />
  )
}
```

### 2. AdvancedProductImageGallery (Extended Component)

**Location**: `src/components/product-image-gallery-advanced.tsx`

#### Additional Features (beyond base component)
- **Keyboard Navigation**: Arrow keys, Home, End key support
- **Touch Gestures**: Swipe left/right on mobile devices
- **Image Labels**: Display descriptive labels on images
- **Featured Indicator**: Mark images as featured
- **Image Change Callbacks**: React to image selection changes
- **Auto-rotation**: Optional automatic image cycling
- **Gesture Hints**: On-screen indicators for available interactions

#### Extended Props

```typescript
interface AdvancedProductImageGalleryProps extends ProductImageGalleryProps {
  enableKeyboardNavigation?: boolean    // Default: true
  enableTouchGestures?: boolean         // Default: true
  autoRotate?: boolean                  // Default: false
  autoRotateInterval?: number           // Default: 5000ms
  onImageChange?: (index: number) => void
}
```

#### Extended ProductImage Interface

```typescript
interface AdvancedProductImage extends ProductImage {
  label?: string                        // Image label/caption
  isFeatured?: boolean                  // Featured image flag
}
```

#### Keyboard Navigation Keys

| Key | Action |
|-----|--------|
| ← Arrow Left | Previous image |
| → Arrow Right | Next image |
| Home | First image |
| End | Last image |

#### Usage Example

```tsx
import { AdvancedProductImageGallery } from '@/components/product-image-gallery-advanced'

export function ProductPage() {
  const handleImageChange = (index: number) => {
    console.log(`Viewing image ${index + 1}`)
  }

  return (
    <AdvancedProductImageGallery
      images={images}
      productName="Premium Watch"
      enableKeyboardNavigation={true}
      enableTouchGestures={true}
      onImageChange={handleImageChange}
    />
  )
}
```

## Utility Functions

**Location**: `src/lib/image-gallery-utils.ts`

### Available Utilities

#### Image Optimization
- `generateImageSrcSet(baseUrl, widths)` - Generate responsive srcSet strings
- `calculateImageDimensions(containerWidth, aspectRatio)` - Calculate optimal dimensions
- `createThumbnailUrl(fullImageUrl, size)` - Create optimized thumbnail URLs
- `isHighResImage(url)` - Check if image is high-resolution

#### Image Loading
- `preloadImage(url)` - Preload a single image
- `preloadImages(urls)` - Preload multiple images
- `extractImageMetadata(url)` - Extract metadata from image URL

#### Interaction
- `calculateZoomPosition(event, element)` - Calculate zoom position from mouse event
- `createKeyboardNavigationHandler(index, total)` - Create keyboard navigation helper
- `isTouchDevice()` - Detect touch device capability

#### Accessibility
- `formatAltText(index, total, description)` - Format descriptive alt text
- `enhanceAltText(baseAlt, productName)` - Enhance alt text with product context
- `isValidProductImage(image)` - Validate image data structure

#### Styling
- `buildImageContainerClasses(isZooming, hasMultiple)` - Build CSS classes dynamically
- `getThumbnailGridClasses(imageCount)` - Get appropriate grid layout classes
- `getImagePlaceholderStyles()` - Get placeholder animation styles

## Styling & Theming

### Colors Used
- **Primary**: `#003d82` (EuroMart Brand Blue)
- **Accent**: `#ff6b35` (EuroMart Accent Orange)
- **Backgrounds**: Gray scale (Tailwind defaults)

### Responsive Breakpoints
- **Mobile**: Default styles (single column)
- **Tablet** (md): Adjusted thumbnail display
- **Desktop** (lg+): Full-featured display

### Dark Mode
All components fully support dark mode via Tailwind CSS dark mode utilities.

## Performance Optimizations

### Image Optimization
1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **Responsive Images**: `srcSet` support for different screen sizes
3. **Thumbnail Optimization**: Separate smaller images for thumbnails
4. **Image Preloading**: Utility function to preload images when needed

### Render Optimization
1. **Memoization**: Component uses stable callbacks to prevent unnecessary re-renders
2. **State Management**: Minimal state surface area
3. **Event Delegation**: Efficient event handling

### CSS Optimization
1. **Tailwind CSS**: Utility-first approach ensures minimal CSS
2. **Dark Mode Support**: Built-in with Tailwind dark mode
3. **Transitions**: Hardware-accelerated transforms for smooth animations

## Accessibility Features

### ARIA Support
- `role="region"` on gallery container
- `role="img"` on main image display
- `aria-label` for component purpose
- `aria-pressed` on thumbnail buttons

### Keyboard Support
- Full keyboard navigation (Advanced component)
- Focus management
- Tab order preservation

### Screen Reader Support
- Descriptive alt text on all images
- Image counter announcements
- Navigation instructions

### Color Contrast
- Text colors meet WCAG AA standards
- Focus indicators clearly visible
- High contrast dark mode theme

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support (iOS Safari, Chrome Mobile, etc.)

## Examples & Demos

### Basic Example
See `src/components/__tests__/product-image-gallery.example.tsx`

### Product Detail Page
See `src/pages/product-detail.tsx` for real-world implementation

## Testing Considerations

### Unit Tests to Consider
1. Image switching functionality
2. Zoom position calculations
3. Keyboard navigation
4. Touch gesture detection
5. Thumbnail rendering

### Integration Tests to Consider
1. Full gallery workflow (click thumbnails, zoom, navigate)
2. Responsive behavior on different screen sizes
3. Keyboard navigation accessibility
4. Dark mode theme switching

### E2E Tests to Consider
1. Complete user journey through product images
2. Mobile vs desktop interaction patterns
3. Performance metrics (load time, interaction responsiveness)

## Migration Guide

### From Previous Version (if applicable)
N/A - This is a new component

### Upgrading to Advanced Version
```tsx
// Before (basic)
import { ProductImageGallery } from '@/components/product-image-gallery'

// After (advanced)
import { AdvancedProductImageGallery } from '@/components/product-image-gallery-advanced'
```

The API is backward compatible - existing `images` and `productName` props work identically.

## Future Enhancements

1. **Image Lightbox**: Full-screen image viewer modal
2. **Image Carousel**: Automatic image cycling with controls
3. **Image Comparison**: Slider to compare before/after images
4. **360° Viewer**: Interactive 360-degree product view
5. **Video Support**: Embed product videos alongside images
6. **Image Annotations**: Add hotspots and labels to images
7. **Social Sharing**: Built-in image sharing capabilities
8. **Analytics**: Track which images users view most

## TypeScript Types

All components are fully typed with strict TypeScript:

```typescript
// Re-export these types in your components:
export { ProductImage, AdvancedProductImage }
export { ProductImageGallery, AdvancedProductImageGallery }
export type { ProductImageGalleryProps, AdvancedProductImageGalleryProps }
```

## Troubleshooting

### Images not loading
- Check image URLs are accessible
- Verify CORS headers if using external CDN
- Check browser network tab for errors

### Zoom not working
- Ensure mouse events are not prevented by parent elements
- Check `overflow: hidden` is applied to main image container
- Verify CSS transforms are not disabled

### Thumbnails not scrollable
- Check container width is not restricted
- Ensure parent has `overflow-x: auto` on thumbnail container
- Verify flex layout is properly set

### Dark mode not applied
- Ensure `darkMode: 'class'` in Tailwind config
- Check dark class is applied to document root
- Verify CSS dark mode utilities are available

## Support & Contribution

For issues or feature requests, refer to the main project repository.

---

**Last Updated**: 2024
**Version**: 1.0.0
**Maintained By**: EuroMart Development Team
