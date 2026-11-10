import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import i43 from "../assets/i43.jpg";

function Contact() {
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

    <section className="bg-[url('/src/assets/i43.jpg')] bg-cover bg-center h-[450px]  rounded-2xl  md:grid-cols-2">
       

        <div className="flex flex-col items-center justify-center px-8 py-10 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl ml-130 mt-20">
            Get in Touch
          </h1>

          <p className="max-w-xl text-sm leading-6 md:text-base ml-130 ">
         Have questions or need help choosing the right products for your little one? 
         Our team at Happy Sprouts is always here to assist you. 
         Feel free to reach out to us for support, inquiries, or feedback.


          </p>
        </div>
      </section>

    <section className="mx-auto grid max-w-[1075px] grid-cols-1 gap-6 px-4 py-12 sm:px-6 md:grid-cols-[290px_1fr]">

        <div className="bg-[#829b89] px-6 py-8 text-white sm:px-8">
          <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-700">
            〜 Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            Contact
            <br />
            Information
          </h2>

          <div className="mt-9">
            <h3 className="font-semibold">☎ Call Us</h3>
            <p className="ml-8 mt-1 text-sm leading-5">
              9566644085
              <br />
              9789888224
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">✉ Email Us</h3>
            <p className="ml-8 mt-1 break-all text-sm">
              customerservice@happysprouts.in
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#e0e0e0] px-6 py-8 sm:px-10">
          <h2 className="mb-6 text-xl font-semibold">
            Need More Info? Let's Talk
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been submitted.");
            }}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-xs font-semibold">NAME</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#829b89]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold">EMAIL</label>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#829b89]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold">SUBJECT</label>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#829b89]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold">MESSAGE</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#829b89]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#829b89] py-3 text-xs font-bold text-white transition hover:bg-[#6d8575]"
            >
              SUBMIT
            </button>
          </form>
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

export default Contact;