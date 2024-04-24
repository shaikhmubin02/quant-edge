'use client'
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DXeTqdzLx3X
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Arimo } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"

export function Dev() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <CodeIcon className="h-6 w-6" />
          <span className="text-lg font-medium">QuantEdge</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Featured
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Strategies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Insights
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
        </nav>
        <Button className="hidden lg:inline-flex" variant="primary">
          Join Now
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-6 p-6">
              <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                <CodeIcon className="h-6 w-6" />
                Featured
              </Link>
              <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                <TrendingUpIcon className="h-6 w-6" />
                Strategies
              </Link>
              <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                <LightbulbIcon className="h-6 w-6" />
                Insights
              </Link>
              <Link className="flex items-center gap-2 text-lg font-medium" href="#">
                <UsersIcon className="h-6 w-6" />
                Community
              </Link>
              <Button className="w-full" variant="primary">
                Join Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock Your Coding Potential
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest strategies, insights, and community for developers, traders, and financial
                enthusiasts.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="primary">Join Now</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <img
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={310}
              src="/fc.jpg"
              width={550}
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Featured Strategy</CardTitle>
                <CardDescription>Discover the latest trading strategies from our community.</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
              <CardFooter>
                <Link className="inline-flex items-center gap-2 text-sm font-medium hover:underline" href="#">
                  <ArrowRightIcon className="h-4 w-4" />
                  Learn More
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trending Insights</CardTitle>
                <CardDescription>Stay up-to-date with the latest insights from our community.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link className="group grid grid-cols-[40px_1fr] items-center gap-4" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                      <LightbulbIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:underline">
                        The Future of Decentralized Finance
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Explore the latest trends and innovations in DeFi.
                      </div>
                    </div>
                  </Link>
                  <Link className="group grid grid-cols-[40px_1fr] items-center gap-4" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                      <TrendingUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:underline">Mastering Algorithmic Trading</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Learn how to build and optimize your trading algorithms.
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Link className="inline-flex items-center gap-2 text-sm font-medium hover:underline" href="#">
                  <ArrowRightIcon className="h-4 w-4" />
                  View More
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Spotlight</CardTitle>
                <CardDescription>Explore the latest projects and discussions from our community.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link className="group grid grid-cols-[40px_1fr] items-center gap-4" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                      <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:underline">Algorithmic Trading Club</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Join our community of traders and developers.
                      </div>
                    </div>
                  </Link>
                  <Link className="group grid grid-cols-[40px_1fr] items-center gap-4" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                      <CodeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:underline">Open-Source Strategies</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Contribute to and learn from our open-source projects.
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Link className="inline-flex items-center gap-2 text-sm font-medium hover:underline" href="#">
                  <ArrowRightIcon className="h-4 w-4" />
                  Explore Community
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
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


function CodeIcon(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LightbulbIcon(props: any) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
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


function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TrendingUpIcon(props: any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}