import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import MainNavBar from "./components/mianNavbar/MainPageNavBar";
import ContentOne from "./components/contetOne/content1";
import ContentTwo from "./components/contentTwo/content2";
import ContentThree from "./components/contentthree/content3";
import ContentFour from "./components/contentfour/content4";
import LastBox from "./components/lastbox/Lastbox";
import "./globals.css";
import "./responsive.css";
export default function Home() {
  return (
    <main className="d-flex justify-content-between">
      <Sidebar />
      <div className="contents container border rounded ms-3 me-3">
        <MainNavBar />
        <div className="d-flex ">
          <ContentOne />
          <ContentTwo />
          <ContentThree />
          <ContentFour />
          <LastBox />
        </div>
      </div>
    </main>
  );
}
