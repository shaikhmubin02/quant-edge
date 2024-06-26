'use client'
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3mumg7wFC48
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
import { ResponsiveLine } from "@nivo/line"
import { Card } from "@/components/ui/card"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-950 dark:text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">QuantEdge</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400" href="education">
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400" href="dev">
            Developer
          </Link>
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
                <LineChart className="aspect-[4/3]" />
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Nasdaq</h3>
                  <span className="text-red-500 font-bold">-0.5%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">13,000.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">FTSE 100</h3>
                  <span className="text-green-500 font-bold">+0.8%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">7,500.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Bitcoin</h3>
                  <span className="text-red-500 font-bold">-2.1%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">$30,000.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Gold</h3>
                  <span className="text-green-500 font-bold">+0.5%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">$1,800.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Crude Oil</h3>
                  <span className="text-red-500 font-bold">-1.2%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">$75.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">MSCI World</h3>
                  <span className="text-green-500 font-bold">+0.6%</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2,500.00</p>
                <LineChart className="aspect-[4/3]" />
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Market Insights</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Get the latest insights and analysis on the financial markets.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Economic Trends</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Stay up-to-date on the latest economic trends and their impact on the markets.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Industry News</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Get the latest news and updates from the financial industry.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Expert Opinions</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Hear from industry experts on the latest trends and insights.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Market Insights</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Get the latest insights and analysis on the financial markets.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Economic Trends</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Stay up-to-date on the latest economic trends and their impact on the markets.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Industry News</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Get the latest news and updates from the financial industry.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Expert Opinions</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Hear from industry experts on the latest trends and insights.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <br />
      </main>
    </div>
  )
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MountainIcon(props: any) {
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
