
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import i44 from "../assets/i44.jpg";

function Cart() {
  const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id, size) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === id && item.size === size)
    );
    saveCart(updatedCart);
  };

  const changeQuantity = (id, size, amount) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id && item.size === size) {
          return {
            ...item,
            quantity: Math.max(1, item.quantity + amount),
          };
        }
        return item;
      });

    saveCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = Math.max(0, subtotal - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "HAPPY10") {
      const amount = subtotal * 0.1;
      setDiscount(amount);
      setCouponMessage("Coupon applied! You saved 10%.");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

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

      {/* Navbar */}
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
              className="flex items-center justify-center rounded-full bg-[#f5f5f2] p-3"
            >
              <svg
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
      </main>

         <section className="bg-[url('/src/assets/i44.jpg')] bg-cover bg-center h-[450px]  rounded-2xl  md:grid-cols-2">
       

        <div className="flex flex-col items-center justify-center px-8 py-10 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl ml-150 mt-20">
            Cart

          </h1>

          <p className="max-w-xl text-sm leading-6 md:text-base ml-150">
        Review the items you’ve added to your cart before proceeding to checkout.
        Update quantities, remove products, or continue shopping to add more baby essentials for your little one.

          </p>
        </div>
      </section>

    
<section className="mx-auto max-w-[1250px] px-4 py-12 sm:px-6">

  {cart.length === 0 ? (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-semibold">Your cart is empty</h2>
      <p className="mt-3 text-gray-500">
        You haven't added any products to your cart yet.
      </p>
      <Link
        to="/shop"
        className="mt-6 inline-block rounded-full bg-[#829b89] px-7 py-3 font-semibold text-white hover:bg-[#6d8575]"
      >
        Continue Shopping
      </Link>
    </div>
  ) : (
    <>
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-3 py-5 text-left">Product</th>
              <th className="px-3 py-5 text-left">Price</th>
              <th className="px-3 py-5 text-center">Quantity</th>
              <th className="px-3 py-5 text-right">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr
                key={`${item.id}-${item.size}`}
                className="border-b border-gray-300"
              >
                <td className="px-3 py-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-xl hover:text-red-600"
                      aria-label="Remove product"
                    >
                      ×
                    </button>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[90px] w-[90px] object-contain"
                    />

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="mt-1 text-gray-500">
                        Size: {item.size}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-4 whitespace-nowrap">
                  ₹{item.price.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </td>

                <td className="px-3 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() =>
                        changeQuantity(item.id, item.size, -1)
                      }
                      className="h-10 w-10 rounded-full border border-gray-200 hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="flex h-10 min-w-[65px] items-center justify-center rounded-full border border-gray-200">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        changeQuantity(item.id, item.size, 1)
                      }
                      className="h-10 w-10 rounded-full border border-gray-200 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="px-3 py-4 text-right whitespace-nowrap">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon and Update Cart */}
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4 border-t border-gray-300 pt-4">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon code"
            className="w-[195px] rounded-full border border-gray-300 px-4 py-3 outline-none focus:border-[#829b89]"
          />

          <button
            onClick={applyCoupon}
            className="rounded-full bg-[#829b89] px-5 py-3 text-xs font-bold text-white hover:bg-[#6d8575]"
          >
            APPLY COUPON
          </button>

          {couponMessage && (
            <p className="w-full text-sm text-gray-600">
              {couponMessage}
            </p>
          )}
        </div>

        <button
          onClick={() => saveCart([...cart])}
          className="rounded-full bg-[#829b89] px-8 py-3 text-xs font-bold text-white hover:bg-[#6d8575]"
        >
          UPDATE CART
        </button>
      </div>

      {/* Cart Totals */}
      <div className="ml-auto mt-8 w-full max-w-[615px]">
        <h2 className="border-b border-gray-300 pb-3 text-4xl font-semibold">
          Cart Totals
        </h2>

        <div className="flex justify-between border-b border-gray-200 py-5">
          <span>Subtotal</span>
          <span>
            ₹{subtotal.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between border-b border-gray-200 py-4 text-green-700">
            <span>Discount</span>
            <span>
              −₹{discount.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        )}

        <div className="flex justify-between border-b border-gray-300 py-5 font-bold">
          <span>Total</span>
          <span>
            ₹{total.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        <Link
          to="/checkout"
          className="mt-7 inline-block rounded-full bg-[#829b89] px-6 py-4 text-xs font-bold text-white hover:bg-[#6d8575]"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </>
  )}
</section>
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
              <a href="https://www.facebook.com/" aria-label="Facebook" className="rounded bg-[#829989] p-2 text-white">f</a>
              <a href="https://www.instagram.com/" aria-label="Instagram" className="rounded bg-[#829989] p-2 text-white">◎</a>
              <a href="https://www.youtube.com/" aria-label="YouTube" className="rounded bg-[#829989] p-2 text-white">▶</a>
              <a href="https://x.com/" aria-label="X" className="rounded bg-[#829989] p-2 text-white">𝕏</a>
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

export default Cart;
