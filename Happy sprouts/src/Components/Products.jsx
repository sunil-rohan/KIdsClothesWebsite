import { useState } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";

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

function Products() {
    const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartMessage, setCartMessage] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState("");

  const { id } = useParams();

  const products = [
    { id: 1, name: "White Geometric Print Shirt", image: i23, price: 895, category: "Girls" },
    { id: 2, name: "Pastel Blue Frock", image: i24, price: 795, category: "Girls" },
    { id: 3, name: "Maroon Satin Party Frock", image: i25, price: 1599, category: "Girls" },
    { id: 4, name: "Teal Blue Checked Shirt for Boys", image: i26, price: 1045, category: "Girls" },
    { id: 5, name: "Yellow Party Frock", image: i27, price: 1299, category: "Girls" },
    { id: 6, name: "Navy Floral Shirt", image: i28, price: 1095, category: "Girls" },
    { id: 7, name: "Green Printed Shirt", image: i29, price: 999, category: "Girls" },
    { id: 8, name: "Black Floral Shirt", image: i30, price: 1199, category: "Girls" },
    { id: 9, name: "Pink Floral Frock", image: i31, price: 899, category: "Girls" },
    { id: 10, name: "Yellow Baby Dress", image: i32, price: 999, category: "Girls" },
    { id: 11, name: "Floral Cotton Dress", image: i33, price: 1099, category: "Girls" },
    { id: 12, name: "Cotton Baby Romper", image: i34, price: 499, category: "Boys" },
    { id: 13, name: "Blue Baby Dungarees", image: i35, price: 699, category: "Boys" },
    { id: 14, name: "Baby Casual Shirt", image: i36, price: 595, category: "Boys" },
    { id: 15, name: "Printed Baby Onesie", image: i37, price: 450, category: "Boys" },
    { id: 16, name: "Cotton Baby Set", image: i38, price: 799, category: "Boys" },
    { id: 17, name: "Striped Baby Shirt", image: i39, price: 895, category: "Boys" },
    { id: 18, name: "Summer Baby Romper", image: i40, price: 549, category: "Boys" },
    { id: 19, name: "Baby Essentials Set", image: i41, price: 1299, category: "Boys" },
    { id: 20, name: "Blue Casual Outfit", image: i42, price: 999, category: "Boys" },
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link
          to="/shop"
          className="mt-4 inline-block text-green-700 underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  function addToCart() {
    if (!size) {
      setSizeError("Please select a size before adding to cart.");
      setCartMessage("");
      return false;
    }

    setSizeError("");

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        size: size,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setCartMessage(
      `“${product.name}” has been added to your cart.`
    );

    window.scrollTo({ top: 0, behavior: "smooth" });

    return true;
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-gray-800">

      
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

       
        <nav className="relative flex min-h-[96px] items-center justify-between gap-4">

          <Link to="/" className="shrink-0">
            <img
              src="https://happysprouts.in/wp-content/uploads/2026/05/Logo-1-1.png"
              alt="Happy Sprouts"
              className="w-[230px] max-w-full"
            />
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

        {/* Add to Cart Success Message */}
        {cartMessage && (
          <div className="mx-auto mt-4 flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-sm border-2 border-emerald-700 bg-[#e6f5ed] px-4 py-4 text-sm text-emerald-800">
            <p>{cartMessage}</p>

            <Link
              to="/cart"
              className="shrink-0 bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              View cart
            </Link>
          </div>
        )}

        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-gray-500">
          <Link to="/">Home</Link> /{" "}
          <Link to={`/${product.category.toLowerCase()}`}>
            {product.category}
          </Link>{" "}
          / {product.name}
        </div>

        {/* Product Details */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-gray-100 p-5 sm:min-h-[550px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[520px] w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="py-3">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#829b89]">
              Happy Sprouts Collection
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-[#829b89]">
              ₹{product.price.toLocaleString("en-IN")}.00
            </p>

            <div className="mt-5 space-y-3 border-b border-gray-200 pb-5 text-sm">
              <p>
                <b>Category:</b> {product.category}
              </p>
              <p>
                <b>Color:</b> As shown in the image
              </p>
              <p>
                <b>Material:</b> Comfortable fabric
              </p>
              <p>
                <b>Brand:</b> Happy Sprouts
              </p>
            </div>

            {/* Size Selection */}
            <label className="mb-2 mt-6 block font-semibold">
              Select Size
            </label>

            <select
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
                setSizeError("");
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            >
              <option value="">Choose a size</option>
              <option value="0-3 Months">0–3 Months</option>
              <option value="3-6 Months">3–6 Months</option>
              <option value="6-12 Months">6–12 Months</option>
              <option value="1-2 Years">1–2 Years</option>
              <option value="2-3 Years">2–3 Years</option>
              <option value="3-4 Years">3–4 Years</option>
            </select>

            {sizeError && (
              <p className="mt-2 text-sm text-red-600">
                {sizeError}
              </p>
            )}

            {/* Quantity and Add to Cart */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-lg border">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="px-4 py-3"
                >
                  −
                </button>

                <span className="min-w-10 text-center">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={addToCart}
                className="flex-1 rounded-lg bg-[#829b89] px-5 py-3 font-semibold text-white transition hover:bg-[#6d8575]"
              >
                Add to Cart 🛒
              </button>
            </div>

            {/* Buy Now */}
            <button
              type="button"
              onClick={() => {
                if (addToCart()) {
                  window.location.href = "/cart";
                }
              }}
              className="mt-3 w-full rounded-lg border border-[#829b89] px-5 py-3 font-semibold text-[#829b89] transition hover:bg-[#829b89] hover:text-white"
            >
              Buy Now
            </button>

            <p className="mt-5 text-sm text-gray-500">
              ♡ Add to wishlist
            </p>
          </div>
        </section>

        {/* Product Description */}
        <section className="mx-auto max-w-7xl px-5 py-10">
          <h2 className="border-b-2 border-[#829b89] pb-3 text-xl font-bold">
            Product Description
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            The {product.name} is designed for little ones, combining
            everyday comfort with a cute style. It is suitable for casual
            outings, playtime, and special occasions.
          </p>

          <h3 className="mt-6 font-semibold">Product Features</h3>

          <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
            <li>Comfortable design for everyday wear</li>
            <li>Suitable for little ones</li>
            <li>Easy to pair with other clothing</li>
            <li>Choose the appropriate size before ordering</li>
          </ul>
        </section>

        {/* Related Products */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <h2 className="mb-7 text-center text-2xl font-bold">
            Related Products
          </h2>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {relatedProducts.map((item) => (
              <a
                key={item.id}
                href={`/product/${item.id}`}
                className="overflow-hidden rounded-xl border border-gray-100 transition hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full bg-gray-100 object-cover"
                />

                <div className="p-3">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="mt-2 font-semibold text-[#829b89]">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </a>
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
            <h3 className="mb-6 font-semibold text-black">
              INFORMATION
            </h3>
            <ul className="space-y-3">
              <li>Shipping Policy</li>
              <li>Return &amp; Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-black">
              INFORMATION
            </h3>
            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-black">
              MY ACCOUNT
            </h3>
            <ul className="space-y-3">
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/login">My Account</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-black">
              GET NEWSLETTER
            </h3>
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
          Designed By{" "}
          <span className="font-bold text-black">Zyntics</span> - 2026
        </div>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          className="fixed bottom-0 right-5 rounded-t-lg bg-[#829989] px-3 py-3 text-white hover:bg-[#6d8575]"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}

export default Products;