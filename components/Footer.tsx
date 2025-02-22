import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 grid gap-8">
        {/* Logo at the Top */}
        <div >
          <Link href="/" className="inline-block">
            <h2 className="text-[#008060] text-3xl font-bold">Better</h2>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Column */}
          <div className="space-y-8">
            <p className="text-gray-600 max-w-sm">
              Better is a family of companies serving all your homeownership
              needs.
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">
                  <span className="text-[#008060]">Better</span>{" "}
                  <span className="text-gray-400">Mortgage</span>
                </h3>
                <p className="text-gray-600 text-sm">
                  We can&apos;t wait to say &quot;Welcome home.&quot; Apply 100% online, with
                  expert customer support.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">
                  <span className="text-[#008060]">Better</span>{" "}
                  <span className="text-gray-400">Real Estate</span>
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">
                  <span className="text-[#008060]">Better</span>{" "}
                  <span className="text-gray-400">Cover</span>
                </h3>
                <p className="text-gray-600 text-sm">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">
                  <span className="text-[#008060]">Better</span>{" "}
                  <span className="text-gray-400">Inspect</span>
                </h3>
                <p className="text-gray-600 text-sm">
                  Get free repair estimates, 24-hour turnarounds on reports, and
                  rest easy with our 100-day inspection guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              {[
                "Home affordability calculator",
                "Mortgage calculator",
                "Free mortgage calculator",
                "Mortgage calculator with taxes",
                "Mortgage calculator with PMI",
                "Rent vs buy calculator",
                "HELOC payment calculator",
                "HELOC vs cash-out",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Media",
                "Partner With Us",
                "Learning center",
                "FAQs",
                "Investor Relations",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-gray-900 font-semibold text-lg">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="mailto:hello@better.com"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    hello@better.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:415-523-8837"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    415-523-8837
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-900 font-semibold text-lg">Legal</h3>
              <ul className="space-y-3">
                {[
                  "NMLS Consumer Access",
                  "Privacy Policy",
                  "Terms of Use",
                  "Disclosures & Licensing",
                  "Affiliated Business",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
