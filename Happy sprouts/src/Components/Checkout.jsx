import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import i45 from "../assets/i45.jpg";


function Checkout() {
  const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
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

          <Link
            to="/"
            className="shrink-0 text-2xl font-medium tracking-tight text-[#829b89] sm:text-3xl"
          >
            <img src="https://happysprouts.in/wp-content/uploads/2026/05/Logo-1-1.png" height="300" width="300" />

          </Link>

          <div className="hidden items-center gap-7 text-sm lg:flex">
            <Link to="/home">Home</Link>
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

         <section className="bg-[url('/src/assets/i45.jpg')] bg-cover bg-center h-[450px]  rounded-2xl  md:grid-cols-2">
       

        <div className="flex flex-col items-center justify-center px-8 py-10 text-center ">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl ml-150 mt-20">
           Check Out
          </h1>

          <p className="max-w-xl text-sm leading-6 md:text-base ml-150">
         Finalize your order and complete your purchase securely with Happy Sprouts.
         Review your items, enter your delivery details, and choose your preferred payment method.


          </p>
        </div>
      </section>

   
<section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 text-sm sm:px-6 lg:grid-cols-[1.25fr_1fr]">

 
  <div>
    <h2 className="mb-1 text-2xl font-semibold">Billing Details</h2>

    <form
  id="checkout-form"
  onSubmit={(e) => {
    e.preventDefault();
    navigate("/orderplaced");
  }}
  className="space-y-5"
>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">First name *</label>
          <input required type="text" className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Last name *</label>
          <input required type="text" className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Country / Region *</label>
        <select required defaultValue="India" className="w-full border border-gray-300 px-3 py-2.5">
          <option>India</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Street address *</label>
        <input required type="text" placeholder="House number and street name" className="mb-4 w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
      </div>

      <div>
        <label className="mb-2 block font-semibold">Town / City *</label>
        <input required type="text" className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
      </div>

      <div>
        <label className="mb-2 block font-semibold">State *</label>
        <select required defaultValue="Tamil Nadu" className="w-full border border-gray-300 px-3 py-2.5">
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Maharashtra</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">PIN Code *</label>
        <input required type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
      </div>

      <div>
        <label className="mb-2 block font-semibold text-rose-500">Phone *</label>
        <div className="flex border border-gray-300 focus-within:border-[#829b89]">
          <span className="border-r border-gray-300 px-4 py-2.5">+91</span>
          <input required type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} className="w-full px-3 py-2.5 outline-none" />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Email *</label>
        <input required type="email" className="w-full border border-gray-300 px-3 py-2.5 outline-none focus:border-[#829b89]" />
      </div>      

     
    </form>
  </div>


  <div>
    <h2 className="mb-1 text-2xl font-semibold">Your Order</h2>

    <div className="border border-gray-300">
      <div className="grid grid-cols-[1fr_auto] border-b border-gray-300 px-4 py-4 font-semibold">
        <span>Product</span>
        <span>Subtotal</span>
      </div>

      {JSON.parse(localStorage.getItem("cart") || "[]").map((item) => (
        <div key={`${item.id}-${item.size}`} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-4">
          <span>
            {item.name}
            {item.size ? ` - ${item.size}` : ""} × {item.quantity}
          </span>
          <span className="whitespace-nowrap">
            ₹{(item.price * item.quantity).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </span>
        </div>
      ))}

      <div className="grid grid-cols-[1fr_auto] px-4 py-4 font-semibold">
        <span>Subtotal</span>
        <span>
          ₹{JSON.parse(localStorage.getItem("cart") || "[]").reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] border-t border-gray-200 px-4 py-5 font-bold">
        <span>Total</span>
        <span>
          ₹{JSON.parse(localStorage.getItem("cart") || "[]").reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>

  
    <div className="mt-3 border border-gray-300 p-4">
      <p className="font-semibold">UPI, Cards, NetBanking</p>

      <div className="mt-4 bg-gray-100 p-3 leading-6">
        Pay securely via UPI, Credit/Debit Card, or Internet Banking through Razorpay.
      </div>

      <p className="mt-5 leading-6 text-gray-600">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
        <Link to="/privacy-policy" className="underline">privacy policy</Link>.
      </p>
<button
  type="submit"
  form="checkout-form"
  className="mt-5 w-full rounded-lg bg-[#829b89] px-6 py-3 font-semibold text-white transition hover:bg-[#6d8575]"
>
  Place Order
</button>
    </div>
  </div>
</section>




       <footer className="bg-[#f4f5f1] text-gray-600 w">
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
        <a href="https://www.facebook.com/" aria-label="Facebook"
          className="rounded bg-[#829989] p-2 text-white">f</a>
        <a href="https://www.instagram.com/" aria-label="Instagram"
          className="rounded bg-[#829989] p-2 text-white">◎</a>
        <a href="https://www.youtube.com/" aria-label="YouTube"
          className="rounded bg-[#829989] p-2 text-white">▶</a>
        <a href="https://x.com/" aria-label="X"
          className="rounded bg-[#829989] p-2 text-white">𝕏</a>
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
export default Checkout;