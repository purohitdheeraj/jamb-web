"use client";

import { Button } from "./ui/button";

const footerColumns = [
  {
    col1: [
      {
        title: "Reproduction Chimneypieces",
        items: [
          { label: "Marble", link: "#" },
          { label: "Stone", link: "#" },
          { label: "Grates & Accessories", link: "#" },
          { label: "Guide to Jamb Marbles", link: "#" },
        ],
      },
      {
        title: "Antique Chimneypieces",
        items: [
          { label: "French & Italian", link: "#" },
          { label: "Georgian", link: "#" },
          { label: "Regency", link: "#" },
        ],
      },
      {
        title: "Sell an Antique Chimneypiece",
        items: [],
      },
    ],
  },
  {
    col2: [
      {
        title: "Reproduction Lighting",
        items: [
          { label: "Hanging Globes", link: "#" },
          { label: "Hanging Lanterns", link: "#" },
          { label: "Wall Lights", link: "#" },
          { label: "Dish Lights", link: "#" },
          { label: "Table Lamps", link: "#" },
          { label: "Chains & Brackets", link: "#" },
        ],
      },
    ],
  },
  {
    col3: [
      {
        title: "Reproduction Furniture",
        items: [
          { label: "Seating", link: "#" },
          { label: "Tables", link: "#" },
          { label: "Mirrors", link: "#" },
          { label: "The Pantry Collection", link: "#" },
        ],
      },
      {
        title: "Antique Furniture",
        items: [
          { label: "Seating", link: "#" },
          { label: "Tables", link: "#" },
          { label: "Desks", link: "#" },
          { label: "Bookcases & Cabinets", link: "#" },
          { label: "Chests", link: "#" },
          { label: "Mirrors", link: "#" },
          { label: "Fire Accessories", link: "#" },
          { label: "Objects", link: "#" },
          { label: "Work of Arts", link: "#" },
          { label: "Lighting", link: "#" },
        ],
      },
    ],
  },
  {
    col4: [
      {
        title: "Journal",
        items: [
          { label: "Praesentium", link: "#" },
          { label: "Voluptaribus", link: "#" },
          { label: "Accusamus", link: "#" },
          { label: "Iusto", link: "#" },
          { label: "Dignissimos", link: "#" },
        ],
      },
    ],
  },
  {
    col5: [
      {
        title: "About",
        items: [
          { label: "Founders", link: "#" },
          { label: "Team", link: "#" },
          { label: "Galleries", link: "#" },
          { label: "Workshops", link: "#" },
          { label: "Showrooms", link: "#" },
          { label: "Terms & Conditions", link: "#" },
        ],
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary p-8 text-sm text-secondary-foreground">
      <div className="container w-full">
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="space-y-1">
            <p>Tel: +44 (0) 207 730 2122</p>
            <p>25-27 Pimlico Rd.</p>
            <p>London SW1W 8PH</p>
          </div>
          <div>
            <p className="mt-2">hello@jamb.co.uk</p>
          </div>
          <div></div>
          <div className="col-span-2  space-y-4">
            <h3 className="copernicus-semibold text-foreground">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Search"
                className="w-full border border-gray-300 px-3 py-1.5"
              />
              <Button
                type="submit"
                variant={"default"}
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
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {Object.values(col).map((sections, sectionIndex) => (
                <div key={sectionIndex}>
                  {sections.map((section, idx) => (
                    <div
                      key={idx}
                      className="space-y-4 border-t py-4 border-t-secondary-foreground"
                    >
                      <h3 className="copernicus-semibold text-foreground">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.length > 0 ? (
                          section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a href={item.link} className="hover:text-gray-900">
                                {item.label}
                              </a>
                            </li>
                          ))
                        ) : (
                          <li>No items available</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
