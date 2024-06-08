
import { CardContent, Card } from "@/components/ui/card"
import { NavBar } from "@/components/component/nav-bar";
import Link from "next/link";

export function AdoptionView() {
  return (
    <div className="grid gap-6 p-4 sm:p-6 md:p-8 bg-white">
      <NavBar />
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-black">Gracias por darnos un hogar username</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col">
          <img
            alt="Pet 1"
            className="object-cover w-full rounded-t-lg"
            height="300"
            src="https://amoraospets.com/wp-content/uploads/elementor/thumbs/golden-retriever-pdgaifvh0t65c6u3qydvvqkwww9nc4qe44yd6a1fuw.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400" />
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex-1">

              <h3 className="text-xl font-semibold">
                <Link href='/viewpet'>Buddy</Link></h3>

              <p className="text-gray-500 dark:text-gray-400">Golden Retriever</p>
              <p className="mt-4">
                Buddy is a friendly and energetic golden retriever who loves to play fetch and go on long walks. He was
                rescued from a local shelter and is now looking for his forever home.
              </p>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center gap-2">
                  <SyringeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Fully vaccinated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Adopted on 05/01/2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Permanent adoption</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <img
            alt="Pet 2"
            className="object-cover w-full rounded-t-lg"
            height="300"
            src="https://th.bing.com/th/id/OIP.PNr2Ub3J0Dtx0DN_p_lo3wHaFj?rs=1&pid=ImgDetMain"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400" />
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold"><Link href='/viewpet'>Bella</Link></h3>
              <p className="text-gray-500 dark:text-gray-400">Labrador Retriever</p>
              <p className="mt-4">
                Bella is a sweet and gentle labrador retriever who loves to cuddle and go for walks. She was rescued
                from a local shelter and is now looking for a temporary foster home.
              </p>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center gap-2">
                  <SyringeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Fully vaccinated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Adopted on 03/15/2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Temporary adoption (2 months)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <img
            alt="Pet 3"
            className="object-cover w-full rounded-t-lg"
            height="300"
            src="https://assets-global.website-files.com/63634f4a7b868a399577cf37/642d66f958bac5831704029f_maltipoo.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400" />
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold"><Link href='/viewpet'>Max</Link></h3>
              <p className="text-gray-500 dark:text-gray-400">Poodle</p>
              <p className="mt-4">
                Max is a playful and intelligent poodle who loves to learn new tricks. He was rescued from a local
                shelter and is now looking for his forever home.
              </p>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center gap-2">
                  <SyringeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Fully vaccinated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Adopted on 07/01/2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>Permanent adoption</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function SyringeIcon(props) {
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
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>)
  );
}
