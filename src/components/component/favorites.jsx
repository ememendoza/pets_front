
import Link from "next/link"
import { NavBar } from "@/components/component/nav-bar";
import { Button } from "@/components/ui/button"

export function Favorites() {
  return (
    (
      <header>
        <NavBar/>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">

          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900" />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Buddy</span>
            </Link>
            <img
              alt="Pet 1"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Buddy</h3>
                <p className="text-sm text-gray-500">Labrador Retriever</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 "
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Bella</span>
            </Link>
            <img
              alt="Pet 2"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Bella</h3>
                <p className="text-sm text-gray-500">Siberian Husky</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Max</span>
            </Link>
            <img
              alt="Pet 3"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Max</h3>
                <p className="text-sm text-gray-500">Golden Retriever</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Luna</span>
            </Link>
            <img
              alt="Pet 4"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Luna</h3>
                <p className="text-sm text-gray-500">Bengal Cat</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Milo</span>
            </Link>
            <img
              alt="Pet 5"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Milo</h3>
                <p className="text-sm text-gray-500">Pug</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Daisy</span>
            </Link>
            <img
              alt="Pet 6"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Daisy</h3>
                <p className="text-sm text-gray-500">Maltese</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
            <div className="absolute top-2 right-2 z-10">
              <StarIcon className="w-6 h-6 fill-gray-900 " />
            </div>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Charlie</span>
            </Link>
            <img
              alt="Pet 7"
              className="object-cover w-full h-64"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500} />
            <div
              className="bg-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-black">Charlie</h3>
                <p className="text-sm text-gray-500">Bulldog</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  size="icon"
                  variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Adopt</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>)
  );
}

function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
