"use client";

import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import {NavBar} from '@/components/component/nav-bar'
import { ResponsiveBar } from "@nivo/bar"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function HomePage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] py-8 px-4 md:px-6">
        <NavBar/>
        <div
          className="container mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white md:text-4xl">Adopt a Furry Friend</h1>
            <p className="text-lg text-white md:text-xl">Find your perfect pet today!</p>
          </div>
          <Carousel className="w-full max-w-sm mr-9">
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="Dog"
                  className="aspect-video object-cover rounded-md"
                  height={252}
                  src="https://imgs.search.brave.com/XNiH8jlZfpynl2B8Gm9pyYpO_ytDWukF73fbul0eDck/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc0LzYzLzg5/LzM2MF9GXzU3NDYz/ODkxNl9qOGNtVkEw/Q2hnUnNBdFBXQ0pz/cEI5VVV2Nm1iMGNJ/Vi5qcGc"
                  width={448} />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Cat"
                  className="aspect-video object-cover rounded-md"
                  height={252}
                  src="https://imgs.search.brave.com/x6oPkYh7RJt1WC0MijhS37iC2TR8LiOS6bhF4KqPvWg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzM3LzYx/LzM2MF9GXzY3ODM3/NjE1MV9vc1c3TzFW/cU1JNmx5OXdPQkoy/dklWUmdCTGhDWVNh/OC5qcGc"
                  width={448} />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Rabbit"
                  className="aspect-video object-cover rounded-md"
                  height={252}
                  src="https://imgs.search.brave.com/oUOkVGUgmdPY-hPoGQzCTSseM9n5PZAdCQYqWpIRPlI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA2Lzcw/L2JlLzA2NzBiZTE2/Y2Q2NjE2M2YyNDFh/NTgwNGY1NGU3NGY2/LmpwZw"
                  width={448} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-2 lg:col-span-1">
                <h2 className="text-2xl font-bold mb-4 text-slate-950">Our Story</h2>
                <p className="text-gray-900 ">
                  Founded in 2015, our pet adoption platform has helped thousands of animals find their forever homes.
                  Our mission is to connect loving families with the perfect furry companions, while also supporting
                  local animal shelters and rescues.
                </p>
              </div>
              <div className="col-span-2 lg:col-span-2">
                <BarChart className="aspect-[9/4]" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Most Adopted Pets</h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    alt="Dog"
                    className="rounded-full w-24 h-24 object-cover"
                    height={150}
                    src="https://imgs.search.brave.com/IE5akjioJVvcLRvoGdy6LsTPP_ZlCZR-cMuNO6g32t0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzc2LzA3LzA1/LzM2MF9GXzM3NjA3/MDUzMV9CT1duS1hi/SjFoM2Q0NDJOckJR/M0taWEFIU3NHdEt2/di5qcGc"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width={150} />
                  <h3 className="text-xl font-bold mt-4">Dog</h3>
                  <p className="text-gray-700 ">Adopted 50 times</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    alt="Cat"
                    className="rounded-full w-24 h-24 object-cover"
                    height={150}
                    src="https://imgs.search.brave.com/iJgH-5iIZs0nW15IMceLvh0bKSTvEpeIKxmN19DnuQ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZjL01pX0dhdG9f/eEQuanBn"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width={150} />
                  <h3 className="text-xl font-bold mt-4">Cat</h3>
                  <p className="text-gray-700 ">Adopted 45 times</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    alt="Rabbit"
                    className="rounded-full w-24 h-24 object-cover"
                    height={150}
                    src="https://imgs.search.brave.com/Hw0CSeDbT3psjycA9hUGSlPTvDmSpHUs2g94tBkRAPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM1LzA0LzI0/LzM2MF9GXzEzNTA0/MjQ2MF9ZN01Ealh4/VTRaNDY1anVvWnVo/MWJ1eXdEWkVlelU5/Ti5qcGc"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width={150} />
                  <h3 className="text-xl font-bold mt-4">Rabbit</h3>
                  <p className="text-gray-700">Adopted 40 times</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    alt="Hamster"
                    className="rounded-full w-24 h-24 object-cover"
                    height={150}
                    src="https://imgs.search.brave.com/ru2Y2BGvhNZLWIaEHWdCjM86qtTZxz2CGXsXscAA3Bk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MzUzMjE4MC9waG90/by9nb2xkZW4taGFt/c3Rlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9b2FVVFlw/bk1hRE85UFJOZ01Q/X1pJaEVwTHcxX1M2/dG40aFlfNjVoVlRY/ND0"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width={150} />
                  <h3 className="text-xl font-bold mt-4">Hamster</h3>
                  <p className="text-gray-700 ">Adopted 35 times</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Support Our Cause</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-gray-900 ">
                  Your donations help us provide food, shelter, and medical care for the animals in our care. Every
                  contribution makes a difference in the lives of these deserving pets.
                </p>
                <div className="mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Donate Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Donation</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label className="text-right" htmlFor="amount">
                            Donation Amount
                          </Label>
                          <Input
                            className="col-span-3"
                            id="amount"
                            placeholder="Enter donation amount"
                            type="number" />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label className="text-right" htmlFor="name">
                            Name
                          </Label>
                          <Input className="col-span-3" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label className="text-right" htmlFor="email">
                            Email
                          </Label>
                          <Input
                            className="col-span-3"
                            id="email"
                            placeholder="Enter your email"
                            type="email" />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label className="text-right" htmlFor="card-number">
                            Card Number
                          </Label>
                          <Input
                            className="col-span-3"
                            id="card-number"
                            placeholder="Enter your card number"
                            type="text" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="col-span-2 grid gap-2">
                            <Label className="text-right" htmlFor="expiry-month">
                              Expiry Month
                            </Label>
                            <Select id="expiry-month">
                              <SelectTrigger>
                                <SelectValue placeholder="Select month" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="01">January</SelectItem>
                                <SelectItem value="02">February</SelectItem>
                                <SelectItem value="03">March</SelectItem>
                                <SelectItem value="04">April</SelectItem>
                                <SelectItem value="05">May</SelectItem>
                                <SelectItem value="06">June</SelectItem>
                                <SelectItem value="07">July</SelectItem>
                                <SelectItem value="08">August</SelectItem>
                                <SelectItem value="09">September</SelectItem>
                                <SelectItem value="10">October</SelectItem>
                                <SelectItem value="11">November</SelectItem>
                                <SelectItem value="12">December</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="col-span-2 grid gap-2">
                            <Label className="text-right" htmlFor="expiry-year">
                              Expiry Year
                            </Label>
                            <Select id="expiry-year">
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="2027">2027</SelectItem>
                                <SelectItem value="2028">2028</SelectItem>
                                <SelectItem value="2029">2029</SelectItem>
                                <SelectItem value="2030">2030</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="col-span-2 grid gap-2">
                            <Label className="text-right" htmlFor="cvc">
                              CVC
                            </Label>
                            <Input id="cvc" placeholder="CVC" type="text" />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Donate</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div>
                <img
                  alt="Donation"
                  className="rounded-md object-cover"
                  height={300}
                  src="https://imgs.search.brave.com/dhlaEdgP2S8Pi97QuvgV71jnCui-uhN1EIywvNdOvDM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/MjIyMTIwOC9lcy9m/b3RvL3BlcnJvLXkt/Z2F0by1zb24tbG9z/LW1lam9yZXMtYW1p/Z29zLWp1Z2FuZG8t/anVudG9zLWVuLWNh/c2EuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTMzZHZub1M1/c2pPQzNBMS1LQWpI/RFU5T3MwdTd5cUFP/OUZ0ci1pY0Q1WG89"
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width={500} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div
          className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p>© 2024 Pet Adoption App. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="hover:underline" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Donate Now</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Donation</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right" htmlFor="amount">
                Donation Amount
              </Label>
              <Input
                className="col-span-3"
                id="amount"
                placeholder="Enter donation amount"
                type="number" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right" htmlFor="name">
                Name
              </Label>
              <Input className="col-span-3" id="name" placeholder="Enter your name" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right" htmlFor="email">
                Email
              </Label>
              <Input
                className="col-span-3"
                id="email"
                placeholder="Enter your email"
                type="email" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right" htmlFor="card-number">
                Card Number
              </Label>
              <Input
                className="col-span-3"
                id="card-number"
                placeholder="Enter your card number"
                type="text" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 grid gap-2">
                <Label className="text-right" htmlFor="expiry-month">
                  Expiry Month
                </Label>
                <Select id="expiry-month">
                  <SelectTrigger>
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">January</SelectItem>
                    <SelectItem value="02">February</SelectItem>
                    <SelectItem value="03">March</SelectItem>
                    <SelectItem value="04">April</SelectItem>
                    <SelectItem value="05">May</SelectItem>
                    <SelectItem value="06">June</SelectItem>
                    <SelectItem value="07">July</SelectItem>
                    <SelectItem value="08">August</SelectItem>
                    <SelectItem value="09">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 grid gap-2">
                <Label className="text-right" htmlFor="expiry-year">
                  Expiry Year
                </Label>
                <Select id="expiry-year">
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                    <SelectItem value="2030">2030</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 grid gap-2">
                <Label className="text-right" htmlFor="cvc">
                  CVC
                </Label>
                <Input id="cvc" placeholder="CVC" type="text" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Donate</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
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
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}
