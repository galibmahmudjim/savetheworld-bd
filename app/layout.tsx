import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "../components/header";
import TabBar from "../components/tab";
import Image from "next/image";
import NavTab from "../components/navtab";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <link href="https://fonts.cdnfonts.com/css/google-sans" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
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
        <div className="flex-nowrap text-nowrap h-full flex flex-row justify-center gap-[5%] w-full items-start mt-[20vh]">
          <div>
            <div className=" font-sans font-semibold text-black text-xl">Home</div>
            <div className=" font-sans font-semibold text-black text-xl">Plastic Threat</div>
            <div className=" font-sans font-semibold text-black text-xl">Facts & Figures</div>
            <div className=" font-sans font-semibold text-black text-xl">Reduce, Reuse, Recycle (3R)</div>
          </div>
          <div>
            <div className=" font-sans font-semibold text-black text-xl">Kids’ Corner</div>
            <div className=" font-sans font-semibold text-black text-xl">Media</div>
            <div className=" font-sans font-semibold text-black text-xl">FAQs</div>
          </div>
        </div>
        <footer className="w-full h-full flex flex-col my-[15vh] mt-[20vh]  justify-start items-start">
          <div className="w-full h-full flex flex-row justify-around items-start">
            <div className="flex-nowrap text-nowrap h-full flex  flex-col justify-start items-start">
              <h3 className="font-sans font-bold text-white mb-2">Contact:</h3>
              <div className=" font-sans font-semibold text-white text-lg">jesmin@du.ac.bd</div>
              <div className=" font-sans font-semibold text-white text-lg">Dept. of Genetic Engg., & Biotechnology</div>
              <div className=" font-sans font-semibold text-white text-lg">University of Dhaka, Bangladesh</div>

              <div className=" font-sans font-semibold text-white text-lg">Copyright ©2023 All rights reserved</div>
            </div>
            <div className="flex-nowrap text-nowrap h-full flex flex-col justify-start items-start">
              <h3 className="font-sans font-bold text-white mb-2">Quick Links</h3>
              <div className=" font-sans font-semibold text-white text-lg">Home</div>
              <div className=" font-sans font-semibold text-white text-lg">Plastic Threat</div>
              <div className=" font-sans font-semibold text-white text-lg">Facts & Figures</div>
              <div className=" font-sans font-semibold text-white text-lg">Reduce, Reuse, Recycle (3R)</div>
              <div className=" font-sans font-semibold text-white text-lg">Kids’ Corner</div>
              <div className=" font-sans font-semibold text-white text-lg">Media</div>
              <div className=" font-sans font-semibold text-white text-lg">FAQs</div>
            </div>
            <div className=" h-full flex flex-col justify-start items-start flex-nowrap text-nowrap font-sans text-2xl">
              <h3 className="font-sans font-bold text-white mb-2">Social Media:</h3>
              <div className="flex flex-row justify-around gap-[4px] mt-1 w-full items-center ">
                <img src="/facebook.png" alt="" className="w-[40px]" />

                <img src="/twitter.png" alt="" className="w-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-start mt-[5vh] font-sans font-semibold text-white text-[15px] ml-[8%] ">Copyright ©2023 All rights reserved</div>
        </footer>


        <div>

        </div>
      </body>
    </html >
  );
}
