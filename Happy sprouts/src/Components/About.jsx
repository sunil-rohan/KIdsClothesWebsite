import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import i21 from "../assets/i21.jpg";
import i22 from "../assets/i22.jpg";

function About() {
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


      
      <section className="bg-[url('/src/assets/i13.jpg')] bg-cover bg-center h-[450px]  rounded-2xl  md:grid-cols-2">
       

        <div className="flex flex-col items-center justify-center px-8 py-10 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl ml-120 mt-15 w-full">
            About Happy Sprouts
          </h1>

          <p className="max-w-xl text-sm leading-6 md:text-base ml-120 mt-5">
            At Happy Sprouts, we believe every child deserves the best start
            in life. Our store offers a thoughtfully selected range of baby
            products designed to bring comfort, safety, and joy to both babies
            and parents.
          </p>
        </div>
      </section>

     
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm">
            <span className="mr-2 text-red-400">〜</span>
            What we do?
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
            We Go To Great
            <br />
            Lengths To Please....
          </h2>

          <p className="mt-6 text-sm leading-6 md:text-base">
            At Happy Sprouts, we search and scour the world of infant and
            kids’ wear, the giant warehouses of dolls and toys, the maze of
            activity and development games, and the new-age phenomenon of
            interactive gadgets.
          </p>

          <p className="mt-5 text-sm leading-6 md:text-base">
            We then carefully select products based on quality, comfort,
            safety, and usefulness, so parents can shop with confidence and
            find lovely essentials for their little ones.
          </p>

          <p className="mt-5 text-sm leading-6 md:text-base">
            Our goal is to make every shopping experience simple, joyful,
            and full of products that families love.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-block rounded-full bg-[#829989] px-7 py-3 text-white transition hover:bg-[#6d8575]"
          >
            Explore Our Shop
          </Link>
        </div>

     
        <div className="relative mx-auto w-full max-w-md pb-10">
          <img
            src={i21}
            alt="Baby wearing Happy Sprouts clothing"
            className=" h-full w-full rounded-full object-cover"
          />

          <img
            src={i22}
            alt="Baby clothing collection"
            className="absolute -bottom-2 right-0 h-40 w-40 rounded-full border-4 border-white object-cover md:h-48 md:w-48"
          />
        </div>
      </section>

    
    

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16">

     
        <div className="relative mx-auto h-[350px] w-full max-w-md">
          <img
            src={i21}
            alt="Baby wearing comfortable clothes"
            className="absolute left-4 top-20 h-56 w-48 object-cover shadow-md md:left-10 "
          />

          <img
            src={i22}
            alt="Baby in a blue outfit"
            className="absolute right-4  h-56 w-48 border-8 border-white object-cover shadow-md md:right-10"
          />
        </div>

  
        <div className="grid gap-10 sm:grid-cols-2">

          <div>
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#829989] text-sm text-white">
              ✓
            </div>

            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Our Vision
            </h3>

            <p className="text-sm leading-6 text-gray-700">
              Bringing thoughtful products to elevate the parenting
              experience and be the most trusted global lifestyle brand
              for children.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#829989] text-sm text-white">
              ✓
            </div>

            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Our Mission
            </h3>

            <p className="text-sm leading-6 text-gray-700">
              Nurturing little ones with love and care, providing trusted
              products, and fulfilling parents' dreams.
            </p>
          </div>

        </div>
      </section>

    
      <section className="relative overflow-hidden bg-[#f0eeed] px-6 py-14 text-center md:py-16 bg-yellow-200">

      
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />

        <div className="relative mx-auto max-w-4xl ">

          <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-4xl ">
            Who We Are?
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-6 text-gray-700">
            Happy Sprouts is conceived to be a destination for children
            to experience the joy of shopping for their favourite
            products in toys, games, entertainment, dresses, apparel
            that befits a lifestyle of the confident.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-gray-700">
            We at Happy Sprouts view children through their parents'
            eyes — eyes that carry the hopes and aspirations they have
            for their precious little ones. From babies to toddlers to
            little boys and girls, all the way through their growing
            years, Happy Sprouts aims to be a parenting partner of choice.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#829989] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#6d8575]"
          >
            CONTACT US <span>→</span>
          </Link>

        </div>
      </section>

         <footer className="bg-[#f4f5f1] text-gray-600 ">
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

export default About;