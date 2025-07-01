import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
          <p className="text-lg font-normal text-gray-600">Enter your email and password to Sign In.</p>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <p className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-gray-800">
              Your email
            </p>
            <input
              size="lg"
              placeholder="name@mail.com"
              className="peer h-full w-full rounded-md border border-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
            />
            <p className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-gray-800">
              Password
            </p>
            <input
              type="password"
              size="lg"
              placeholder="********"
              className="peer h-full w-full rounded-md border border-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
            />
          </div>
          <div className="inline-flex items-center mt-4">
            <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="check-2"
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
              Remember Me
            </label>
          </div>
          <Button className="mt-6 w-full" fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-inherit">
              <a
                href="#signup"
                className="block font-sans text-sm antialiased font-bold leading-relaxed tracking-normal text-gray-900 underline"
              >
                Forgot Password
              </a>
            </p>
          </div>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
            Don't have an account?
            <Link to="/auth/sign-up" className="font-medium text-gray-900 ml-1">Sign up</Link>
          </p>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default SignIn;