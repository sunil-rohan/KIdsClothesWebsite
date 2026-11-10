import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {

     const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-[#d8d7d1] px-5 text-black">

     
      <button
        onClick={() => navigate("/")}
        className="absolute right-5 top-5 text-2xl text-pink-600"
      >
        ×
      </button>

      
      <div className="my-auto w-full max-w-[375px]">
        <h1 className="mb-7 text-3xl font-bold">Login</h1>

        <h2 className="mb-6 text-lg font-bold text-[#829b89] underline underline-offset-4">
          Use Phone Number
        </h2>

        <form>
          <div className="flex h-[50px] items-center rounded-lg bg-[#f6f7f7] px-4">
            <span className="border-r border-gray-200 pr-4 text-sm text-[#829b89]">
              +91
            </span>

            <input
              type="tel"
              maxLength={10}
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="button"
            className="mt-5 flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-[#829b89] font-bold text-white hover:bg-[#6d8575]"
          >
            Continue →
          </button>
        </form>

        <div className="my-4 flex items-center gap-3 text-sm text-gray-500">
          <div className="h-px flex-1 bg-gray-400" />
          or
          <div className="h-px flex-1 bg-gray-400" />
        </div>

        <button
          type="button"
          className="h-[50px] w-full rounded-lg border border-black font-semibold hover:bg-white/30"
        >
          Passwordless login →
        </button>

        <p className="mt-9 text-center font-semibold text-gray-500">
          Not a member yet?{" "}
          <Link to="/register" className="text-black hover:text-[#829b89]">
            Register Now
          </Link>
        </p>
      </div>

     
      <Link
        to="/"
        className="mb-8 text-center text-xl font-medium text-[#829b89]"
      >
       <img src="https://happysprouts.in/wp-content/uploads/2026/05/Logo-1-1.png" alt="" height="200" width="200" />
       
      </Link>
    </div>
  );

}
export default Login;