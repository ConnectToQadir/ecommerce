'use client'

import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Dnavbar from "../components/Dnavbar";
import Context from "@/src/Context/Context";
import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {

  var pathname = usePathname()




  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Context>

          {
            pathname.startsWith("/admin") ? 
            // dashboard layout

            <div className="flex-col h-screen overflow-hidden">


              <nav className="bg-gray-100 h-12 flex items-center">
                <Dnavbar />
              </nav>


              <div className="h-[calc(100vh-48px)]  flex">

                <aside className="w-44 bg-gray-100">
                  <Sidebar />
                </aside>

                <main className="flex-1 p-2 h-full">
                  <div className="h-full overflow-auto">
                  {children}
                  </div>
                </main>

              </div>


            </div>

            :

            // public layout
            <>
              <Navbar />
              {children}
            </>
          }

          






        </Context>
      </body>
    </html>
  );
}
