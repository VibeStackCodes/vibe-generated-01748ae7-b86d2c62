import { Link } from 'react-router-dom'

/**
 * Category interface defining the shape of a category object
 */
export interface Category {
  id: string
  title: string
  image: string
  imageSrcSet?: string
  link: string
  description?: string
}

/**
 * Props for CategoryTiles component
 */
interface CategoryTilesProps {
  categories: Category[]
  className?: string
}

/**
 * CategoryTile Component
 * Displays a single category tile with image, title, and link
 * Image dimensions: 600x400px (responsive)
 */
function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to={category.link}
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="relative w-full pb-[66.67%]" style={{ aspectRatio: '600 / 400' }}>
          <img
            src={category.image}
            srcSet={category.imageSrcSet}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </div>
      </div>

      {/* Title Container */}
      <div className="flex-1 flex items-center justify-center p-4 bg-white dark:bg-gray-900">
        <h3 className="text-center text-lg font-semibold text-[#003d82] dark:text-white transition-colors duration-300 group-hover:text-[#ff6b35]">
          {category.title}
        </h3>
      </div>

      {/* Optional description (shown on hover) */}
      {category.description && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4 pointer-events-none">
          <p className="text-white text-sm line-clamp-2">{category.description}</p>
        </div>
      )}
    </Link>
  )
}

/**
 * CategoryTiles Component
 * Displays a responsive grid of category tiles
 * Each tile is 600x400px with lazy loading and srcset support
 *
 * @example
 * ```tsx
 * const categories = [
 *   {
 *     id: '1',
 *     title: 'Electronics',
 *     image: '/images/electronics.jpg',
 *     imageSrcSet: '/images/electronics-600.jpg 600w, /images/electronics-1200.jpg 1200w',
 *     link: '/categories/electronics',
 *     description: 'Discover premium electronics from European brands'
 *   }
 * ]
 * <CategoryTiles categories={categories} />
 * ```
 */
export function CategoryTiles({ categories, className }: CategoryTilesProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No categories available</p>
      </div>
    )
  }

  return (
    <div
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className || ''}`}
    >
      {categories.map(category => (
        <CategoryTile key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryTiles
