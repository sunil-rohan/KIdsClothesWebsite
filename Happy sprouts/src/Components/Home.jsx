import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import i1 from "../assets/i1.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.jpg";
import i14 from "../assets/i14.jpg";
import i15 from "../assets/i15.jpg";
import i16 from "../assets/i16.jpg";
import i17 from "../assets/i17.jpg";
import i18 from "../assets/i18.jpg";
import i19 from "../assets/i19.jpg";
import i20 from "../assets/i20.jpg";
import i21 from "../assets/i21.jpg";
import i46 from "../assets/i46.jpg";
import i47 from "../assets/i47.jpg";
import i48 from "../assets/i48.jpg";




function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();

  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      image: i46,
      title: "LOVELY LITTLE PICKS",
    },
    {
      image: i47,
      title: "LITTLE STYLES, BIG SMILES",
    },
    {
      image: i48,
      title: "LITTLE OUTFITS, BIG LOVE",
    },
  ];


  const categories = [
    {
      name: "Just Born",
      image: i14,
    },
    {
      name: "Girl",
      image: i15,
    },
    {
      name: "Boy",
      image: i16,
    },
  ];

  const featuredProducts = [
    { name: "Floral Baby Dress", image: i7, price: "₹899" },
    { name: "Blue Party Dress", image: i8, price: "₹999" },
    { name: "Pink Party Dress", image: i9, price: "₹1,099" },
    { name: "Blue and Green Baby Dress", image: i10, price: "₹1,199" },
    { name: "Purple Party Dress", image: i11, price: "₹999" },
    { name: "Colorful Baby Dress", image: i12, price: "₹1,299" },
  ];


  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % slides.length);
  };


  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white text-black">

    
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
            <Link to='/about'>About Us</Link>

            <div className="relative">
              <button
                onMouseOver={() => setMenuOpen(!menuOpen)}
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

      
        <section className="relative overflow-hidden rounded-b-[20px] ">

         <img
  key={slides[slide].image}
  src={slides[slide].image}
  alt={slides[slide].title}
  className="h-[700px] w-full object-cover bg-[#f5f5f2] sm:h-[420px] bg-cover bg-center"
/>

        
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[65%] pl-5 sm:max-w-[60%] sm:pl-[6%]">
              <h1 className="text-3xl font-normal leading-tight sm:text-5xl lg:text-[58px]">
                {slides[slide].title}
              </h1>

              <Link
                to="/shop"
                className="mt-5 inline-block text-xs font-semibold text-gray-700 underline underline-offset-4 sm:text-sm"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow sm:left-4"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow sm:right-4"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  slide === index
                    ? "w-6 bg-[#829b89]"
                    : "w-2.5 bg-white"
                }`}
              />
            ))}
          </div>
        </section>

       
        <section
          id="shop"
          className="grid grid-cols-1 items-center gap-7 py-12 md:grid-cols-[1fr_1.25fr_1fr] lg:gap-10 lg:py-16"
        >

         
          <div className="flex min-h-[220px] items-center gap-5 rounded-[20px] bg-[#f3f3f3] p-5 sm:p-7">
            <img
              src={i17}
              alt="Baby collection"
              className="h-28 w-28 shrink-0 rounded-full object-cover sm:h-36 sm:w-36"
            />

            <div>
              <p className="text-xs text-gray-500">AUTUMN DRESS</p>

              <h2 className="mt-3 text-xl font-semibold leading-8">
                Best <br /> Collection
              </h2>

              <Link
                to="/shop"
                className="mt-3 block text-xs text-[#829b89]"
              >
                SHOP NOW →
              </Link>
            </div>
          </div>

          
          <div className="py-2 text-center">
            <h2 className="mb-5 text-2xl font-semibold">
              Shop For
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <Link
                  to="/shop"
                  key={category.name}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
                  />

                  <span className="text-sm font-semibold">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

      
          <div className="flex min-h-[220px] items-center justify-between gap-3 rounded-[20px] bg-[#f3f3f3] p-5 sm:p-7">
            <div>
              <p className="text-xs text-gray-500">
                TINY TREASURES
              </p>

              <h2 className="mt-3 text-xl font-semibold leading-8">
                Loved By <br /> Kids.
              </h2>

              <Link
                to="/shop"
                className="mt-3 block text-xs text-[#829b89]"
              >
                VIEW COLLECTIONS →
              </Link>
            </div>

            <img
              src={i18}
              alt="Kids collection"
              className="h-28 w-28 shrink-0 rounded-full object-cover sm:h-36 sm:w-36"
            />
          </div>
        </section>

        

<section className="mt-10">


  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

    <div>
      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm">
        <span className="text-red-400">〜</span>
        Products
      </span>

      <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
        Baby Essentials Made With Love
      </h2>
    </div>

    <div>
      <p className="text-sm leading-6">
        Soft, safe, and thoughtfully designed products to keep
        your little one happy, cozy, and cared for every day,
        giving parents comfort and peace of mind.
      </p>

      <Link
        to="/shop"
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#829b89] px-4 py-2 text-xs font-semibold text-white hover:bg-[#6d8875]"
      >
        SHOP NOW →
      </Link>
    </div>

  </div>


  <div className="mt-16 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.25fr]">

  
    <div className="overflow-hidden rounded-2xl">
      <video
        src="https://happysprouts.in/wp-content/uploads/2026/09/IMG_8686.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-[420px] w-full object-cover"
      />
    </div>

   
    <div className="space-y-4 text-sm leading-[1.7]">

      <p>
        Our baby essentials are thoughtfully chosen with love to
        bring softness, comfort, and care to every little moment.
        From everyday needs to cozy must-haves, each product is
        designed to keep your little one happy and comfortable
        while giving parents the confidence and peace of mind
        they deserve. <strong>Made with little ones in mind, our
        collection brings together quality, practicality, and
        gentle comfort for every stage of their journey.</strong>
      </p>

      <p>
        Every little detail is chosen to make parenting a little
        easier and everyday moments a little more special. Whether
        it’s playtime, bedtime, or cuddles in between, our baby
        essentials are made to add comfort, convenience, and joy
        to your little one’s day.
      </p>

      <p>
        We believe the sweetest moments begin with the little
        things. Our collection is thoughtfully curated to support
        growing families with essentials that combine gentle
        comfort, everyday functionality, and timeless style—
        perfect for creating happy memories together.
      </p>

    </div>
  </div>

</section>


<section className="relative mt-16 min-h-[300px] overflow-hidden rounded-md bg-[#e8eae6] px-6 py-12 sm:px-10 md:px-11">

  <div className="relative z-10 max-w-[600px]">
    <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
      Beautifully Wrapped, Ready To Delight
    </h2>

    <p className="mt-4 max-w-lg text-sm leading-6">
      Thoughtful little gifts for the most special little people.
      Discover baby essentials made with love.
    </p>

    <Link
      to="/shop"
      className="mt-5 inline-flex rounded-full bg-[#829b89] px-5 py-3 text-sm font-semibold text-white hover:bg-[#6d8875]"
    >
      EXPLORE COLLECTION →
    </Link>
  </div>

  <img
    src={i21}
    alt="Baby collection"
    className="mt-8 mb-18 object-contain object-bottom md:absolute md:bottom-0 md:right-8 md:mt-0 md:h-[280px] md:w-[280px]"
  />

</section>


<section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

 
  <div className="flex min-h-[145px] flex-col items-center justify-center bg-[#f5f6f3] p-5 text-center">
    <span className="mb-3 text-3xl">♙</span>
    <h3 className="text-base font-semibold">First Time Shopping?</h3>
    <p className="mt-1 text-sm">Enjoy 10% OFF on your first order!</p>
  </div>


  <div className="flex min-h-[145px] flex-col items-center justify-center bg-[#f5f6f3] p-5 text-center">
    <span className="mb-3 text-3xl">♧</span>
    <h3 className="text-base font-semibold">Quality Support</h3>
    <p className="mt-1 text-sm">Always Online 24/7</p>
  </div>

  {/* Returns */}
  <div className="flex min-h-[145px] flex-col items-center justify-center bg-[#f5f6f3] p-5 text-center">
    <span className="mb-3 text-3xl">🛒</span>
    <h3 className="text-base font-semibold">Returns & Refund</h3>
    <p className="mt-1 text-sm">Money back guarantee</p>
  </div>

  {/* Secure Payment */}
  <div className="flex min-h-[145px] flex-col items-center justify-center bg-[#f5f6f3] p-5 text-center">
    <span className="mb-3 text-3xl">🛡</span>
    <h3 className="text-base font-semibold">Secure Payment</h3>
    <p className="mt-1 text-sm">Safest Method for Paying</p>
  </div>

</section>

{/* Featured Products */}
<section className="mt-16 pb-12">

  {/* Heading */}
  <div className="mb-6 text-center">
    <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm">
      <span className="text-red-400">〜</span>
      Products
    </span>

    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
      Featured Products
    </h2>

    <p className="mt-3 text-sm text-gray-700">
      Handpicked favorites loved by parents and little ones.
    </p>
  </div>

  {/* Product Images */}
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
    {featuredProducts.map((product) => (
      <Link
        key={product.name}
        to="/shop"
        className="group relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full bg-gray-100 object-contain transition duration-300 group-hover:scale-105 sm:h-48"
        />
        <div className="absolute inset-x-0 bottom-0 bg-white/90 px-3 py-2 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-sm text-gray-700">{product.price}</p>
        </div>
      </Link>
    ))}
  </div>

</section>

      <footer className="bg-[#f4f5f1] text-gray-600">
<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">

    {/* Contact Information */}
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

    {/* Policies */}
    <div>
      <h3 className="mb-6 font-semibold text-black">INFORMATION</h3>
      <ul className="space-y-3">
        <li>Shipping Policy</li>
        <li>Return &amp; Refund Policy</li>
        <li>Privacy Policy</li>
        <li>Terms &amp; Conditions</li>
      </ul>
    </div>

    {/* Website Links */}
    <div>
      <h3 className="mb-6 font-semibold text-black">INFORMATION</h3>
      <ul className="space-y-3">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>

    {/* Account */}
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
      <h3 className="mb-6 font-semibold text-black ">GET NEWSLETTER</h3>
      <p className="hover:text-red-900">Get 10% off your first order!</p>
      <p className="mt-1 hover:text-red-900">Hurry up</p>

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

export default Home;
