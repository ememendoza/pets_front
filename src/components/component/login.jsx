"use client"; 

import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";


export function Login() {
  const router = useRouter();

  const handleDefault = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    router.push('/home'); // Reemplaza '/your-target-page' con la ruta deseada
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
      <div className="mx-auto w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg ">
        <div>
          <img
            alt="Pet"
            className="mx-auto h-24 w-24 rounded-full object-cover"
            height={100}
            src="/animals.png"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
            width={100}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Or 
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500"
              href="/register"
            >
              sign up for a new account
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST" onSubmit={handleDefault}>
          <div>
            <Label htmlFor="email" className="ml-2 block text-sm text-gray-900">Username or Email</Label>
            <Input
              autoComplete="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="ml-2 block text-sm text-gray-900">Password</Label>
              <Link
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 "
                href="#"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              autoComplete="current-password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
          <div className="flex items-center">
            <Checkbox id="remember" />
            <Label
              className="ml-2 block text-sm text-gray-900 "
              htmlFor="remember"
            >
              Remember me
            </Label>
          </div>
          <div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
