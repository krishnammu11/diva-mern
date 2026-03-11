import { Instagram, MessageCircle } from "lucide-react";

export default function Footerpage() {
  return (
    <>
      <footer className="bg-white text-gray-700 mt-10 border-t">
        
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

          
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-900 cursor-pointer">Home</li>
              <li className="hover:text-red-900 cursor-pointer">About Us</li>
              <li className="hover:text-red-900 cursor-pointer">Contact</li>
            </ul>

            
            <div className="flex gap-5 mt-6 text-gray-600">
              <Instagram className="w-5 h-5 hover:text-red-900 cursor-pointer" />
              <MessageCircle className="w-5 h-5 hover:text-red-900 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">
              POLICIES
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-900 cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-red-900 cursor-pointer">Shipping and Delivery Policy</li>
              <li className="hover:text-red-900 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-900 cursor-pointer">Disclaimer Policy</li>
              <li className="hover:text-red-900 cursor-pointer">Return and Exchange Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-900 cursor-pointer">Track Order</li>
              <li className="hover:text-red-900 cursor-pointer">
                Exchange Request - Mail us at <br />
                support@diva.in
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">
              ABOUT DIVA
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              Celebrating Indian handlooms, women’s strength, and timeless elegance.
              Sarees,Lehengas,Jewelleries sourced from skilled Indian artisans, crafted with heritage and heart.
              <br /><br />
              Crafted for the Naayika in you—graceful, radiant, and unforgettable.
            </p>
          </div>

        </div>

        
        <div className="border-t py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Diva. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}
