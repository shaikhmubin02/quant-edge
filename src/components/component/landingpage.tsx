/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uv0BvdiXOor
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Landingpage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-950 dark:text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">QuantEdge</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Developer
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400" href="#">
            About
          </Link>
          <Button
            className="text-sm font-medium dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            variant="outline"
          >
            Login
          </Button>
          <Button className="text-sm font-medium dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
            Sign Up
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y dark:border-gray-800">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unlock the Power of Financial Markets with QuantEdge
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  QuantEdge is the ultimate platform for traders and investors to analyze financial markets, share
                  ideas, and stay informed.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">S&P 500</h3>
                  <span className="text-green-500 font-bold">+1.2%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">4,200.88</p>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Nasdaq</h3>
                  <span className="text-red-500 font-bold">-0.5%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">13,000.00</p>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">FTSE 100</h3>
                  <span className="text-green-500 font-bold">+0.8%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">7,500.00</p>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Bitcoin</h3>
                  <span className="text-red-500 font-bold">-2.1%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">$30,000.00</p>
              </Card>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/finance.jpg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn from the Experts at QuantEdge</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our comprehensive educational resources and become a more informed trader.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Beginner's Guide</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Start your trading journey with our comprehensive beginner's guide.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Technical Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dive deep into the world of technical analysis and master market patterns.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Trading Strategies</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore a variety of trading strategies and find the one that suits your style.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Market Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stay up-to-date with the latest market news and analysis.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Webinars</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join our live webinars and learn from industry experts.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Community Forum</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with a community of traders and share your insights.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Explore Education
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Empower Your Trading with QuantEdge's Developer Tools
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Leverage our powerful API and build custom trading solutions that fit your needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 dark:bg-gray-900 dark:text-gray-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200" type="submit">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to access our developer tools.
                <Link className="underline underline-offset-2 dark:text-gray-400" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-800 dark:bg-gray-950">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 QuantEdge. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
