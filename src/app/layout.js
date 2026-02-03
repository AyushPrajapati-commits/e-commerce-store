import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

export const metadata = {
  title: "ShopEase",
  description: "Modern E-commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="max-w-7x1 mx-auto px-4 py-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
