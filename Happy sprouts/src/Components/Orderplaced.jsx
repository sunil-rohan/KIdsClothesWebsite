import { Link } from "react-router-dom";

function Orderplaced() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      
      <div className="flex flex-col justify-between gap-2 bg-[#829b89] px-4 py-3 text-sm text-white sm:flex-row sm:items-center sm:px-8">
        <p>Call Us: 9566644085</p>

        <div className="flex flex-wrap gap-4">
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Store</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
      </div>

      
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b bg-white px-5 py-5 shadow-sm md:px-10">
        <Link to="/" className="text-2xl font-bold text-[#829b89]">
          Happy Sprouts
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium md:gap-7">
          <Link to="/" className="transition hover:text-[#829b89]">
            Home
          </Link>

          <Link to="/about" className="transition hover:text-[#829b89]">
            About Us
          </Link>

          <Link to="/shop" className="transition hover:text-[#829b89]">
            Collections
          </Link>

          <Link to="/shop" className="transition hover:text-[#829b89]">
            Shop
          </Link>

          <Link to="/contact" className="transition hover:text-[#829b89]">
            Contact
          </Link>

          <Link to="/cart" className="text-lg transition hover:text-[#829b89]">
            🛒
          </Link>
        </div>
      </nav>

      {/* Order Success Banner */}
      <main className="px-4 py-10 sm:px-8 md:py-16">
        <section className="relative mx-auto flex min-h-[380px] max-w-6xl items-center overflow-hidden rounded-3xl bg-[#e8eee8] px-6 py-10 shadow-sm sm:px-12 md:px-16">

          {/* Decorative Background Circles */}
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#d2dfd4] opacity-70"></div>
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#d2dfd4] opacity-70"></div>

          <div className="relative z-10 grid w-full items-center gap-8 md:grid-cols-2 md:gap-12">

            {/* Order Success Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="Order placed successfully"
                className="w-48 object-contain drop-shadow-sm sm:w-60 md:w-72"
              />
            </div>

            {/* Order Success Caption */}
            <div className="text-center md:text-left">
              <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-[#829b89]">
                Thank You For Your Purchase
              </p>

              <h1 className="mb-5 text-3xl font-extrabold leading-tight text-[#536d5b] sm:text-4xl lg:text-5xl">
                Order Placed Successfully!
              </h1>

              <p className="mb-4 text-lg font-medium text-gray-700">
                Thank you for shopping with Happy Sprouts!
              </p>

              <p className="mx-auto mb-8 max-w-md leading-7 text-gray-600 md:mx-0">
                Your order has been placed successfully. We appreciate your
                purchase and hope you love your little one's new favourites!
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Link
                  to="/shop"
                  className="rounded-full bg-[#829b89] px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#6d8575]"
                >
                  Continue Shopping
                </Link>

                <Link
                  to="/"
                  className="rounded-full border-2 border-[#829b89] px-8 py-3 font-semibold text-[#536d5b] transition duration-300 hover:bg-white"
                >
                  Back to Home
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-[#829b89] px-6 py-10 text-white md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3">

          <div>
            <h2 className="mb-4 text-2xl font-bold">Happy Sprouts</h2>
            <p className="max-w-sm leading-7 text-white/90">
              Bringing comfort, happiness, and style to your little one's
              everyday adventures.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col items-start gap-2 text-white/90">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About Us</Link>
              <Link to="/shop" className="hover:text-white">Shop</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <p className="mb-2">Phone: 9566644085</p>
            <p>Email: support@happysprouts.com</p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/30 pt-5 text-center text-sm text-white/90">
          <p>© 2026 Happy Sprouts. All rights reserved.</p>
          <p className="mt-1">Designed By Zyntics</p>
        </div>
      </footer>

    </div>
  );
}

export default Orderplaced;