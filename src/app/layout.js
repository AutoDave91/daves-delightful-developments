import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dave's Delightful Developments",
  description: "Building delightful, family-first web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ddd-cream text-ddd-navy flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}