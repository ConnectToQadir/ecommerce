import "./globals.css";
import Navbar from "@/components/Navbar";
import Context from "@/Context/Context";

export default function RootLayout({ children }) {
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
          <Navbar />
          {children}
        </Context>
      </body>
    </html>
  );
}
