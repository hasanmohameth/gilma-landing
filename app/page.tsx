import Image from "next/image";

import Header from '@/app/Header/page'

import Home from '@/app/Home/Page'
import AboutUs from "./About-us/Page";
import Rules from "./Ruless/Page";
import Servicess from "./Servicess/Page";
import Rooms from "./Rooms/Page";
import Video from "./Videoo/Page";
import Comments from "./Comments/Page";
import Packages from "./Pakages/Page";
import Blogs from "./Blogs/Page";
import Faq from "./Faq/Page";
import Footer from "./Footer/Page";



export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Rules />
      <Servicess />
      <Rooms />
      <Video />
      <Comments />
      <Packages />
      <Blogs />
      <Faq />
      <Footer />
    </div>
  );
}