
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import i23 from "../assets/i23.jpg";
import i25 from "../assets/i25.jpg";
import i28 from "../assets/i28.jpg";
import i29 from "../assets/i29.jpg";
import i30 from "../assets/i30.jpg";
import i33 from "../assets/i33.jpg";
import i34 from "../assets/i34.jpg";
import i36 from "../assets/i36.jpg";
import i42 from "../assets/i42.jpg";

function Boys() {
  const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sort, setSort] = useState("default");

  const products = [
    { id: 12, name: "Cotton Baby Romper", image: i23, price: 499 },
    { id: 13, name: "Blue Baby Dungarees", image: i25, price: 699 },
    { id: 14, name: "Baby Casual Shirt", image: i28, price: 595 },
    { id: 15, name: "Printed Baby Onesie", image: i29, price: 450 },
    { id: 16, name: "Cotton Baby Set", image: i30, price: 799 },
    { id: 17, name: "Striped Baby Shirt", image: i33, price: 895 },
    { id: 18, name: "Summer Baby Romper", image: i34, price: 549 },
    { id: 19, name: "Baby Essentials Set", image: i36, price: 1299 },
    { id: 20, name: "Blue Casual Outfit", image: i42, price: 999 },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "name") return a.name.localeCompare(b.name);
    return a.id - b.id;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top bar */}
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
          <Link
            to="/"
            className="shrink-0 text-2xl font-medium tracking-tight text-[#829b89] sm:text-3xl"
          >
                              <img src="https://happysprouts.in/wp-content/uploads/2026/05/Logo-1-1.png" height="300" width="300" />

          </Link>

          <div className="hidden items-center gap-7 text-sm lg:flex">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>

            <div className="relative">
              <button
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path strokeLinecap="round" d="m15.5 15.5 5 5" />
              </svg>
            </button>

              {searchOpen && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (searchText.trim()) {
                      navigate(`/shop?search=${encodeURIComponent(searchText.trim())}`);
                      setSearchOpen(false);
                    }
                  }}
                  className="absolute right-0 top-14 z-50 flex w-[290px] rounded-lg border border-gray-200 bg-white p-3 shadow-lg"
                >
                  <input
                    type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search products..."
                    autoFocus
                    className="min-w-0 flex-1 px-2 py-2 text-sm outline-none"
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
              ♙
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

        {/* Boys products */}
        <section className="py-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#829b89]">
                Happy Sprouts Collection
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Boys' Collection
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Explore our collection of boys' clothing.
              </p>
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#829b89]"
            >
              <option value="default">Default sorting</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          <p className="mb-5 text-sm text-gray-500">
            Showing {sortedProducts.length} products
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                            <a
                href={`/product/${product.id}`}
                className="block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <h2 className="mt-3 font-semibold">
                  {product.name}
                </h2>

                <p className="mt-2 text-[#829b89]">
                  ₹{product.price}
                </p>
              </a>

                <div className="px-3 pb-4 sm:px-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="block rounded-lg bg-[#829b89] px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-[#6d8575]"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}

export default Boys;
