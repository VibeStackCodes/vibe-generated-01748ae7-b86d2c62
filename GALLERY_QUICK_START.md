# Product Image Gallery - Quick Start Guide

## 🚀 Quick Start

### Basic Usage (30 seconds)

```tsx
import { ProductImageGallery, type ProductImage } from '@/components/product-image-gallery'

const images: ProductImage[] = [
  {
    id: '1',
    src: 'https://example.com/product-1-large.jpg',
    srcSet: 'https://example.com/product-1-600.jpg 600w, https://example.com/product-1-1200.jpg 1200w',
    alt: 'Product front view',
    thumbnail: 'https://example.com/product-1-thumb.jpg',
    thumbnailSrcSet: 'https://example.com/product-1-thumb-150.jpg 150w, https://example.com/product-1-thumb-300.jpg 300w'
  },
  // ... more images
]

function ProductPage() {
  return <ProductImageGallery images={images} productName="Premium Watch" />
}
```

## 📁 Files Created

```
src/
├── components/
│   ├── product-image-gallery.tsx           # Base component
│   ├── product-image-gallery-advanced.tsx  # Advanced version
│   ├── __tests__/
│   │   └── product-image-gallery.example.tsx
│   └── COMPONENT_SPEC.md                   # Full documentation
├── lib/
│   └── image-gallery-utils.ts              # Utility functions
└── pages/
    └── product-detail.tsx                  # Example page
```

## ✨ Features

### Base Component (ProductImageGallery)
- ✅ Main image display
- ✅ Zoom on hover (2x magnification)
- ✅ Thumbnail selector (80x80px)
- ✅ Image counter ("1 / 6")
- ✅ Responsive design
- ✅ Lazy loading
- ✅ Dark mode support
- ✅ Accessibility (ARIA, alt text)

### Advanced Component (AdvancedProductImageGallery)
- ✅ All base features, plus:
- ✅ Keyboard navigation (← → Home End)
- ✅ Touch swipe gestures
- ✅ Image labels
- ✅ Featured indicators
- ✅ Change callbacks
- ✅ Auto-rotation (optional)

## 🎯 Key Features

### Zoom on Hover
```tsx
// Automatically enabled - hover over main image to zoom
// 2x magnification with cursor tracking
```

### Thumbnail Navigation
```tsx
// Click any thumbnail to switch images
// Active thumbnail highlighted with orange border
```

### Image Counter
```tsx
// Shows current position: "1 / 6"
// Bottom-left corner of main image
```

### Keyboard Navigation (Advanced Only)
```tsx
→ Arrow Right    - Next image
← Arrow Left     - Previous image
Home             - First image
End              - Last image
```

### Touch Gestures (Advanced Only)
```tsx
Swipe Left       - Next image
Swipe Right      - Previous image
```

## 📝 Type Definitions

```typescript
// Basic image type
interface ProductImage {
  id: string
  src: string
  srcSet?: string
  alt: string
  thumbnail: string
  thumbnailSrcSet?: string
}

// Advanced image type
interface AdvancedProductImage extends ProductImage {
  label?: string
  isFeatured?: boolean
}

// Component props
interface ProductImageGalleryProps {
  images: ProductImage[]
  productName?: string
  className?: string
}

// Advanced props
interface AdvancedProductImageGalleryProps extends ProductImageGalleryProps {
  enableKeyboardNavigation?: boolean
  enableTouchGestures?: boolean
  autoRotate?: boolean
  autoRotateInterval?: number
  onImageChange?: (index: number) => void
}
```

## 🎨 Styling & Theming

### Brand Colors
- **Primary**: `#003d82` (EuroMart Blue)
- **Accent**: `#ff6b35` (EuroMart Orange)
- **Tailwind CSS**: v4.1.17

### Dark Mode
Automatically supported - uses Tailwind dark mode utilities.

### Responsive
- Mobile: Full-width, stacked layout
- Tablet: Adjusted thumbnail display
- Desktop: Full-featured display

## 🔧 Utility Functions

Import from `@/lib/image-gallery-utils`:

```typescript
// Image optimization
generateImageSrcSet(baseUrl, widths)
calculateImageDimensions(width, aspectRatio)
createThumbnailUrl(fullImageUrl, size)

// Image loading
preloadImage(url)
preloadImages(urls)

// Interaction
calculateZoomPosition(event, element)
isTouchDevice()

// Accessibility
formatAltText(index, total, description)
enhanceAltText(baseAlt, productName)

// Styling
buildImageContainerClasses(isZooming, hasMultiple)
getThumbnailGridClasses(imageCount)
```

## 📚 Examples

### View Examples
1. **Basic Example**: `/src/components/__tests__/product-image-gallery.example.tsx`
2. **Real Page**: `/src/pages/product-detail.tsx`
3. **Full Demo**: Navigate to `/product/1` in the app

### Run Examples Locally
```bash
# Start dev server
npm run dev

# Navigate to http://localhost:5173/product/1
```

## 🧪 Testing

```typescript
// Example test
describe('ProductImageGallery', () => {
  it('should display first image by default', () => {
    render(<ProductImageGallery images={mockImages} />)
    expect(screen.getByAltText('First image alt')).toBeInTheDocument()
  })

  it('should change image on thumbnail click', () => {
    render(<ProductImageGallery images={mockImages} />)
    fireEvent.click(screen.getByRole('button', { name: /image 2/i }))
    expect(screen.getByAltText('Second image alt')).toBeInTheDocument()
  })

  it('should zoom on mouse enter', () => {
    render(<ProductImageGallery images={mockImages} />)
    const mainImage = screen.getByRole('img')
    fireEvent.mouseEnter(mainImage)
    expect(mainImage).toHaveStyle({ transform: 'scale(2)' })
  })
})
```

## 🚀 Performance Tips

1. **Use responsive images** with `srcSet` for different screen sizes
2. **Optimize thumbnails** - serve smaller versions
3. **Lazy load** - images use `loading="lazy"`
4. **Preload** - use `preloadImages()` for critical images
5. **CDN delivery** - use image CDN for better performance

## ♿ Accessibility

### WCAG Compliance
- ✅ AA color contrast
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation (advanced)
- ✅ Screen reader support
- ✅ Touch-friendly (80x80px minimum)

### Testing Accessibility
```bash
# Use lighthouse or axe DevTools
# Keyboard: Tab through components
# Screen reader: Test with NVDA/JAWS
```

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS, Android)

## ❓ FAQ

### Q: How do I add more images?
A: Add more objects to the `images` array following the `ProductImage` interface.

### Q: How do I customize colors?
A: Use the `className` prop to add custom Tailwind classes or modify component styling directly.

### Q: Does it support touch devices?
A: Yes! The advanced component supports swipe gestures on touch devices.

### Q: How do I handle image loading errors?
A: Add error handling in parent component or use `preloadImages()` utility for validation.

### Q: Can I disable zoom?
A: The zoom is built-in. You can style it differently or create a custom wrapper.

### Q: How do I implement auto-rotation?
A: Use the `AdvancedProductImageGallery` with `autoRotate={true}` and set `autoRotateInterval`.

## 📖 Full Documentation

For complete API documentation, see: `src/components/COMPONENT_SPEC.md`

## 🐛 Troubleshooting

### Images not showing
- Check image URLs are accessible
- Verify CORS headers if using external CDN
- Check browser network tab for 404 errors

### Zoom not working
- Ensure mouse events aren't prevented
- Check CSS `overflow: hidden` on container
- Verify CSS transforms aren't disabled

### Thumbnails not scrolling
- Check container width is not restricted
- Ensure `overflow-x: auto` on thumbnail strip
- Verify flex layout

### Dark mode not working
- Ensure `darkMode: 'class'` in Tailwind config
- Check dark class applied to document root
- Verify Tailwind CSS dark utilities available

## 📞 Need Help?

1. Check `COMPONENT_SPEC.md` for detailed documentation
2. Review example files in `__tests__/` directory
3. Check `product-detail.tsx` for real-world usage
4. Refer to utility functions in `lib/image-gallery-utils.ts`

---

**Version**: 1.0.0
**Last Updated**: 2024
**Status**: Production Ready ✅
