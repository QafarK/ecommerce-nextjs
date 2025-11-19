import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Exclusive - Subscribe */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Exclusive</h3>
          <p className="text-lg">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <div className="flex border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 w-full placeholder-gray-500 outline-none"
            />
            <button className="px-4 flex items-center justify-center hover:bg-gray-600 cursor-pointer transition">
              <Image
                src="/icons/icon-send.svg"
                alt="Send"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Support</h3>
          <div className="space-y-2 text-gray-400">
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p className="mt-4">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Account */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Account</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/account" className="hover:text-white transition">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login / Register
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white transition">
                Basket
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms Of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-medium">Download App</h3>
          <p className="text-gray-400 text-sm pt-4 pb-1">
            Save $3 with App New User Only
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="/images/QrCode.png"
              alt="QR Code"
              width={80}
              height={80}
            />

            <Image
              src="/images/Frame718.png"
              alt="App Badge"
              width={135}
              height={40}
            />
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex gap-12 mt-6">
            <Link href="#" className="hover:text-gray-400 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-600 text-sm border-t border-gray-800 pt-6">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
