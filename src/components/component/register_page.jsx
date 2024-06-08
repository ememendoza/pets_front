
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function RegisterPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12 bg-white">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-black">Create an Account</h1>
        <p className="text-gray-500 ">Enter your information to get started.</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name" className='text-black text-sm'>First Name</Label>
            <Input id="first-name" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name" className='text-black text-sm'>Last Name</Label>
            <Input id="last-name" placeholder="Doe" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className='text-black text-sm'>Phone</Label>
            <Input id="phone" placeholder="+1 (555) 555-5555" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birth-date" className='text-black text-sm'>Birth Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="pl-3 text-left font-normal text-gray-500 "
                  variant="outline">
                  <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                  Select date
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gender" className='text-black text-sm'>Gender</Label>
            <Select id="gender" required>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="marital-status" className='text-black text-sm'>Marital Status</Label>
            <Select id="marital-status" required>
              <SelectTrigger>
                <SelectValue placeholder="Select marital status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="housing-type" className='text-black text-sm'>Housing Type</Label>
            <Select id="housing-type" required>
              <SelectTrigger>
                <SelectValue placeholder="Select housing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
              <Label htmlFor="children" className='text-black text-sm'>Children</Label>
              <div className="flex justify-center">
                <Checkbox id="children" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pets" className='text-black'>Pets</Label>
              <div className="flex justify-center">
                <Checkbox id="pets" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="available-hours" className='text-black text-sm'>Available Hours</Label>
          <Input id="available-hours" placeholder="9am - 5pm" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country" className='text-black text-sm'>Country</Label>
          <Select id="country" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="US">United States</SelectItem>
              <SelectItem value="CA">Canada</SelectItem>
              <SelectItem value="MX">Mexico</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city" className='text-black text-sm'>City</Label>
            <Input id="city" placeholder="New York" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zone" className='text-black text-sm'>Zone</Label>
            <Input id="zone" placeholder="Manhattan" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="address" className='text-black text-sm'>Address</Label>
            <Input id="address" placeholder="123 Main St" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborhood" className='text-black text-sm'>Neighborhood</Label>
            <Input id="neighborhood" placeholder="SoHo" required />
          </div>
        </div>
      </div>
      <Button className="w-full" type="submit">
        Create Account
      </Button>
    </div>
  );
}

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>)
  );
}
