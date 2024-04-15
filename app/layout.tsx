import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";

const menu = [
  { href: "#open-source", label: "Open Source" },
  { href: "#projects", label: "Projects" },
  { href: "#events", label: "Events" },
  { href: "#about-us", label: "About us" },
];

export const metadata: Metadata = {
  title: "opensource.construction",
  description: "",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body>
        <header>
          <nav>
            <h1>
              <Link href="/">opensource.construction</Link>
            </h1>
            <ul>
              <li>
                {menu.map((e) => (
                  <Link href={e.href} key={e.href}>
                    {e.label}
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div>© opensource.construction</div>
          <div>
            <ul>
              <li>
                <Link href="/imprint">Imprint & Data Protection</Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
      <SpeedInsights />
    </html>
  );
}
