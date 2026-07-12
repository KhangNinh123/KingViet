import re

with open("/Users/MAC/Documents/KingViet/src/pages/Collection/index.jsx", "r", encoding="utf-8") as f:
    content = f.read()

with open("products_array.js", "r", encoding="utf-8") as f:
    products_js = f.read()

# Replace the products array
# The array starts at `const products = [` and ends at `];` before `return (`
pattern_array = r"const products = \[.*?\];"
content = re.sub(pattern_array, products_js.strip(), content, flags=re.DOTALL)

# Replace the img rendering logic
old_render = """                  {/* Default Image */}
                  <img
                    src={product.imgDefault}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={product.imgHover}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  />"""

new_render = """                  {/* Default Image */}
                  <img
                    src={product.imgDefault}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-100 ${product.imgHover || product.desc ? 'group-hover:opacity-0' : ''}`}
                  />
                  {/* Hover Image or Text */}
                  {product.imgHover ? (
                    <img
                      src={product.imgHover}
                      alt={`${product.name} hover`}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/95 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center pointer-events-none">
                      <p className="text-sm text-gray-800 text-center font-medium line-clamp-6 leading-relaxed px-1 mb-8">{product.desc}</p>
                    </div>
                  )}"""

content = content.replace(old_render, new_render)

with open("/Users/MAC/Documents/KingViet/src/pages/Collection/index.jsx", "w", encoding="utf-8") as f:
    f.write(content)

