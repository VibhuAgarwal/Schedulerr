import Header from "@/components/Header";
import "./globals.css";
import {Inter} from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Schedulerr",
  description: "Meeting scheduling app",
};

const inter = Inter({
  subsets: ['latin'],})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">{children}</main>
        {/* <Footer/> */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gradient">
            Made with ❤️ by Vibhor Agarwal
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
