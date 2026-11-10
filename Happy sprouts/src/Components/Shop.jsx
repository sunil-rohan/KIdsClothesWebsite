
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import i23 from "../assets/i23.jpg";
import i24 from "../assets/i24.jpg";
import i25 from "../assets/i25.jpg";
import i26 from "../assets/i26.jpg";
import i27 from "../assets/i27.jpg";
import i28 from "../assets/i28.jpg";
import i29 from "../assets/i29.jpg";
import i30 from "../assets/i30.jpg";
import i31 from "../assets/i31.jpg";
import i32 from "../assets/i32.jpg";
import i33 from "../assets/i33.jpg";
import i34 from "../assets/i34.jpg";
import i35 from "../assets/i35.jpg";
import i36 from "../assets/i36.jpg";
import i37 from "../assets/i37.jpg";
import i38 from "../assets/i38.jpg";
import i39 from "../assets/i39.jpg";
import i40 from "../assets/i40.jpg";
import i41 from "../assets/i41.jpg";
import i42 from "../assets/i42.jpg";

const categories = [
  "Babies",
  "Babies Dungarees",
  "Babies Frock",
  "Babies Sets",
  "Boys",
  "Fashion",
  "Girls",
  "Onesies",
  "Rompers",
];

const names = [
  "White Geometric Print Shirt For Baby Boys",
  "Pastel Blue Frock For Baby Girls",
  "Green Checked Shirt For Baby Boys",
  "Maroon Satin Party Frock For Baby Girls",
  "Yellow Party Frock For Baby Girls",
  "Navy Floral Shirt For Baby Boys",
  "Cotton Baby Romper",
  "Blue Baby Dungarees",
  "Pink Floral Frock",
  "Baby Casual Shirt",
  "Printed Baby Onesie",
  "Yellow Baby Dress",
  "Cotton Baby Set",
  "Blue Party Frock",
  "Striped Baby Shirt",
  "Summer Baby Romper",
  "Floral Cotton Dress",
  "Casual Baby Dungarees",
  "White Baby Shirt",
  "Pink Baby Onesie",
  "Green Party Frock",
  "Baby Printed T-shirt",
  "Cotton Shorts Set",
  "Floral Baby Romper",
  "Blue Cotton Shirt",
  "Baby Party Wear Set",
  "Pink Satin Frock",
  "Sleeveless Baby Onesie",
  "Yellow Cotton Romper",
  "Boys Casual Shirt",
  "Girls Party Dress",
  "Baby Everyday Set",
  "Printed Cotton Dungarees",
  "Soft Cotton Onesie",
  "Floral Party Frock",
  "Baby Essentials Set",
];

const productImages = [
  i23, i24, i25, i26, i27, i28, i29, i30, i31, i32,
  i33, i34, i35, i36, i37, i38, i39, i40, i41, i42,
];

const productCategories = [
  "Boys", "Babies Frock", "Boys", "Girls", "Girls", "Boys",
  "Rompers", "Babies Dungarees", "Girls", "Boys", "Onesies", "Girls",
  "Babies Sets", "Girls", "Boys", "Rompers", "Girls", "Babies Dungarees",
  "Boys", "Onesies",
];

const products = names.slice(0, 20).map((name, index) => ({
  id: index + 1,
  name,
  image: productImages[index % productImages.length],
  price: [895, 795, 1599, 999, 1299, 1095][index % 6],
  category: productCategories[index],
  color: ["White", "Blue", "Red", "Green", "Yellow", "Navy"][index % 6],
  age: ["0-6 Months", "6-12 Months", "1-2 Years", "2-3 Years"][index % 4],
  brand: ["Happy Sprouts", "Little Star", "Tiny Kids"][index % 3],
}));

function Shop() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery =
    new URLSearchParams(location.search).get("search")?.trim().toLowerCase() || "";

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(124);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState("default");

  const [openFilters, setOpenFilters] = useState({
    price: true,
    category: true,
    color: false,
    age: false,
    brand: false,
  });

  const toggleFilter = (name) => {
    setOpenFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleValue = (value, values, setValues) => {
    setValues(
      values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedAges([]);
    setSelectedBrands([]);
    setMinPrice(124);
    setMaxPrice(3000);
    setSort("default");
  };

  const submitSearch = (e) => {
    e.preventDefault();

    const query = searchText.trim();

    navigate(
      query ? `/shop?search=${encodeURIComponent(query)}` : "/shop"
    );

    setSearchOpen(false);
  };

  let filteredProducts = products.filter((product) =>
    product.price >= minPrice &&
    product.price <= maxPrice &&
    (!selectedCategories.length ||
      selectedCategories.includes(product.category)) &&
    (!selectedColors.length ||
      selectedColors.includes(product.color)) &&
    (!selectedAges.length ||
      selectedAges.includes(product.age)) &&
    (!selectedBrands.length ||
      selectedBrands.includes(product.brand)) &&
    (!searchQuery ||
      product.name.toLowerCase().includes(searchQuery))
  );

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  } else if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  } else if (sort === "name") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  const FilterHeading = ({ name, children }) => (
    <button
      type="button"
      onClick={() => toggleFilter(name)}
      className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-900"
    >
      {children}
      <span>{openFilters[name] ? "⌄" : "›"}</span>
    </button>
  );

  const FilterCheckboxes = ({ options, selected, setSelected }) => (
    <div className="space-y-2 pb-4">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggleValue(option, selected, setSelected)}
            className="accent-[#829b89]"
          />
          {option}
        </label>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-[1540px] flex-wrap items-center justify-between gap-2 rounded-b-[28px] bg-[#829b89] px-5 py-2 text-xs text-white sm:px-10">
        <div className="flex gap-4">
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Store</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>

        <p>☎ Need help? Call us: 9566644085</p>
      </div>

      <main className="mx-auto max-w-[1292px] px-4 sm:px-6">
        {/* Navbar */}
        <nav className="relative flex min-h-[96px] items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <img
              src="https://happysprouts.in/wp-content/uploads/2026/05/Logo-1-1.png"
              alt="Happy Sprouts"
              height="300"
              width="300"
            />
          </Link>

          <div className="hidden items-center gap-7 text-sm lg:flex">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2"
              >
                Collections <span>⌄</span>
              </button>

              {menuOpen && (
                <div className="absolute left-0 top-8 z-20 w-44 rounded-lg bg-white p-4 shadow-lg">
                  <Link to="/newborn" className="block py-2">
                    Newborn
                  </Link>
                  <Link to="/girls" className="block py-2">
                    Girls
                  </Link>
                  <Link to="/boys" className="block py-2">
                    Boys
                  </Link>
                </div>
              )}
            </div>

            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact us</Link>
          </div>

          {/* Search, Account and Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full bg-[#f5f5f2] p-3 transition hover:bg-[#829b89] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path
                    strokeLinecap="round"
                    d="m15.5 15.5 5 5"
                  />
                </svg>
              </button>

              {searchOpen && (
                <form
                  onSubmit={submitSearch}
                  className="absolute right-0 top-14 z-50 flex w-[290px] rounded-lg border border-gray-200 bg-white p-3 shadow-lg"
                >
                  <input
                    type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search products..."
                    autoFocus
                    className="min-w-0 flex-1 px-2 py-2 text-sm text-gray-800 outline-none"
                  />

                  <button
                    type="submit"
                    className="rounded-md bg-[#829b89] px-4 py-2 text-white hover:bg-[#6d8575]"
                  >
                    Search
                  </button>
                </form>
              )}
            </div>

            <Link
              to="/login"
              aria-label="Account"
              className="rounded-full bg-[#f5f5f2] p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="8" r="4" />
                <path
                  strokeLinecap="round"
                  d="M4.5 21a7.5 7.5 0 0 1 15 0"
                />
              </svg>
            </Link>

            <Link
              to="/cart"
              aria-label="Cart"
              className="rounded-full bg-[#f5f5f2] p-3"
            >
              🛒
            </Link>
          </div>
        </nav>

        {/* Shop Content */}
        <div className="pb-16">
          <div className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#829b89]">
              Home
            </Link>
            <span className="mx-3">/</span>
            <span>Shop</span>
          </div>

          {searchQuery && (
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-[#f5f5f2] p-4">
              <p>
                Search results for:{" "}
                <strong className="text-[#829b89]">{searchQuery}</strong>
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  navigate("/shop");
                }}
                className="text-sm font-semibold text-[#829b89] underline"
              >
                Clear search
              </button>
            </div>
          )}

          <div className="grid items-start gap-8 md:grid-cols-[240px_1fr]">
            {/* Filters */}
            <aside className="overflow-hidden rounded-lg border border-gray-200 bg-[#f8f8f8] px-5">
              <div className="flex items-center justify-between border-b border-gray-200 py-5">
                <h2 className="text-sm font-bold">Filters</h2>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm"
                >
                  Clear All
                </button>
              </div>

              <div className="border-b border-gray-200">
                <FilterHeading name="price">Product Price</FilterHeading>
                {openFilters.price && (
                  <div className="pb-5">
                    <input
                      type="range"
                      min="124"
                      max="3000"
                      value={minPrice}
                      onChange={(e) =>
                        setMinPrice(
                          Math.min(Number(e.target.value), maxPrice)
                        )
                      }
                      className="w-full accent-[#829b89]"
                      aria-label="Minimum price"
                    />

                    <input
                      type="range"
                      min="124"
                      max="3000"
                      value={maxPrice}
                      onChange={(e) =>
                        setMaxPrice(
                          Math.max(Number(e.target.value), minPrice)
                        )
                      }
                      className="w-full accent-[#829b89]"
                      aria-label="Maximum price"
                    />

                    <div className="flex justify-between text-sm">
                      <div>
                        Min. price:
                        <p className="mt-1">₹{minPrice}</p>
                      </div>
                      <div>
                        Max. price:
                        <p className="mt-1">₹{maxPrice}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <FilterHeading name="category">
                  Product Categories
                </FilterHeading>
                {openFilters.category && (
                  <FilterCheckboxes
                    options={categories}
                    selected={selectedCategories}
                    setSelected={setSelectedCategories}
                  />
                )}
              </div>

              <div className="border-b border-gray-200">
                <FilterHeading name="color">Color</FilterHeading>
                {openFilters.color && (
                  <FilterCheckboxes
                    options={["White", "Blue", "Red", "Green", "Yellow", "Navy"]}
                    selected={selectedColors}
                    setSelected={setSelectedColors}
                  />
                )}
              </div>

              <div className="border-b border-gray-200">
                <FilterHeading name="age">Age</FilterHeading>
                {openFilters.age && (
                  <FilterCheckboxes
                    options={["0-6 Months", "6-12 Months", "1-2 Years", "2-3 Years"]}
                    selected={selectedAges}
                    setSelected={setSelectedAges}
                  />
                )}
              </div>

              <div>
                <FilterHeading name="brand">Product Brands</FilterHeading>
                {openFilters.brand && (
                  <FilterCheckboxes
                    options={["Happy Sprouts", "Little Star", "Tiny Kids"]}
                    selected={selectedBrands}
                    setSelected={setSelectedBrands}
                  />
                )}
              </div>
            </aside>

            {/* Products */}
            <section>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm">
                  Showing {filteredProducts.length ? 1 : 0}–{filteredProducts.length} of {filteredProducts.length} results
                </p>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-gray-300 bg-white px-3 py-2 text-sm"
                  aria-label="Sort products"
                >
                  <option value="default">Default sorting</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                  <option value="name">Sort by name</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="min-w-0 text-center"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-[4/5] w-full rounded-lg bg-gray-100 object-cover transition hover:opacity-90"
                      />

                      <h3 className="mt-3 text-xs leading-5 sm:text-sm">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-1 text-sm font-medium text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}.00
                    </p>
                  </article>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <p className="py-16 text-center text-gray-500">
                  No products found. Try another product name or clear your filters.
                </p>
              )}
            </section>
          </div>
        </div>

        {/* Footer - unchanged */}
        <footer className="bg-[#f4f5f1] text-gray-600">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white p-5">
              <h2 className="mb-5 text-xl font-semibold text-[#829989]">
                Happy 🌱 Sprouts
              </h2>
              <hr className="mb-4" />
              <p className="mb-1">📞 Mon - Fri: 9:00-18:00</p>
              <p className="text-black">9566644085</p>
              <p className="text-black">9789888224</p>
              <p className="mb-1 mt-5">✉ Get Support</p>
              <p className="text-black">customerservice</p>
              <p className="text-black">@happysprouts.in</p>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-black">INFORMATION</h3>
              <ul className="space-y-3">
                <li>Shipping Policy</li>
                <li>Return &amp; Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-black">INFORMATION</h3>
              <ul className="space-y-3">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-black">MY ACCOUNT</h3>
              <ul className="space-y-3">
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/login">My Account</Link></li>
                <li><Link to="/shop">Shop</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-black">GET NEWSLETTER</h3>
              <p>Get 10% off your first order!</p>
              <p className="mt-1">Hurry up</p>

              <div className="mt-6 flex gap-2">
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className="rounded bg-[#829989] p-2 text-white"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="rounded bg-[#829989] p-2 text-white"
                >
                  ◎
                </a>
                <a
                  href="https://www.youtube.com/"
                  aria-label="YouTube"
                  className="rounded bg-[#829989] p-2 text-white"
                >
                  ▶
                </a>
                <a
                  href="https://x.com/"
                  aria-label="X"
                  className="rounded bg-[#829989] p-2 text-white"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-4 text-center text-sm">
            Designed By <span className="font-bold text-black">Zyntics</span> - 2026
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-0 right-5 rounded-t-lg bg-[#829989] px-3 py-3 text-white hover:bg-[#6d8575]"
          >
            ↑
          </button>
        </footer>
      </main>
    </div>
  );
}

export default Shop;
