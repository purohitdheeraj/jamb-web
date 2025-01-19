'use client';

import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary p-8 text-sm text-secondary-foreground">
      <div className="container w-full">
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {/* Contact Info */}
          <div className="space-y-1">
            <p>Tel: +44 (0) 207 730 2122</p>
            <p>25-27 Pimlico Rd.</p>
            <p>London SW1W 8PH</p>
          </div>
            <div>
            <p className="mt-2">hello@jamb.co.uk</p>
            </div>
            <div></div>

          {/* Newsletter */}
          <div className="max-w-xl col-span-2 space-y-4">
            <h3 className="copernicus-semibold text-foreground">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Search"
                className="w-full border border-gray-300 px-3 py-1.5"
              />
              <Button
                type="submit"
                variant={'default'}
                className="text-secondary"
              >
                Subscribe
              </Button>
            </form>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded-full border-gray-300" />
              <span className="text-xs">I agree to our Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Reproduction Chimneypieces */}
          <div className="space-y-2">
            <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Reproduction Chimneypieces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Marble</a></li>
              <li><a href="#" className="hover:text-gray-900">Stone</a></li>
              <li><a href="#" className="hover:text-gray-900">Grates & Accessories</a></li>
              <li><a href="#" className="hover:text-gray-900">Guide to Jamb Marbles</a></li>
            </ul>
            </div>

            <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Antique Chimneypieces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">French & Italian</a></li>
              <li><a href="#" className="hover:text-gray-900">Georgian</a></li>
              <li><a href="#" className="hover:text-gray-900">Regency</a></li>
            </ul>
            </div>

            <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Sell an Antique Chimneypiece</h3>
              
            </div>
          </div>

          {/* Reproduction Lighting */}
          <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Reproduction Lighting</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Hanging Globes</a></li>
              <li><a href="#" className="hover:text-gray-900">Hanging Lanterns</a></li>
              <li><a href="#" className="hover:text-gray-900">Wall Lights</a></li>
              <li><a href="#" className="hover:text-gray-900">Dish Lights</a></li>
              <li><a href="#" className="hover:text-gray-900">Table Lamps</a></li>
              <li><a href="#" className="hover:text-gray-900">Chains & Brackets</a></li>
            </ul>
          </div>

          {/* Reproduction Furniture */}
          <div>
            
          <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Reproduction Furniture</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Seating</a></li>
              <li><a href="#" className="hover:text-gray-900">Tables</a></li>
              <li><a href="#" className="hover:text-gray-900">Mirrors</a></li>
              <li><a href="#" className="hover:text-gray-900">The Pantry Collection</a></li>
            </ul>
          </div>
          <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Antique Furniture</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Seating</a></li>
              <li><a href="#" className="hover:text-gray-900">Tables</a></li>
              <li><a href="#" className="hover:text-gray-900">Desks</a></li>
              <li><a href="#" className="hover:text-gray-900">Bookcases & Cabinets</a></li>
              <li><a href="#" className="hover:text-gray-900">Chests</a></li>
              <li><a href="#" className="hover:text-gray-900">Mirrors</a></li>
              <li><a href="#" className="hover:text-gray-900">Fire Accessories</a></li>
              <li><a href="#" className="hover:text-gray-900">Objects</a></li>
              <li><a href="#" className="hover:text-gray-900">Work of Arts</a></li>
              <li><a href="#" className="hover:text-gray-900">Lighting</a></li>
            </ul>
          </div>
          </div>

          {/* Journal */}
          <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">Journal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Praesentium</a></li>
              <li><a href="#" className="hover:text-gray-900">Voluptaribus</a></li>
              <li><a href="#" className="hover:text-gray-900">Accusamus</a></li>
              <li><a href="#" className="hover:text-gray-900">Iusto</a></li>
              <li><a href="#" className="hover:text-gray-900">Dignissimos</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4 border-t py-4 border-t-secondary-foreground">
            <h3 className="copernicus-semibold text-foreground">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Founders</a></li>
              <li><a href="#" className="hover:text-gray-900">Team</a></li>
              <li><a href="#" className="hover:text-gray-900">Galleries</a></li>
              <li><a href="#" className="hover:text-gray-900">Workshops</a></li>
              <li><a href="#" className="hover:text-gray-900">Showrooms</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

