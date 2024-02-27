import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "../components/header";
import NavBar from "../components/nav";
import TabBar from "../components/tab";
import Image from "next/image";
import NavTab from "@/components/navtab";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')
</style>

const inter = Inter({ subsets: ["latin"] });


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: "Save The World",
    template: `%s | ${SITE_NAME}`,
  },

  description: {
    default: "Save the world from plastic pollution",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <title>{metadata.title.default}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </head>

      <body className="homepage-layout">

        <header className="h-[19vh] w-[100vw]">
          <Headers />
        </header>
        <nav>
          <NavTab />
        </nav>

        <div className="background-container">
          <div className="background"></div>
        </div>
        <main className="w-full">{children}</main>
      </body>
    </html >
  );
}
