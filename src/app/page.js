import Image from "next/image";
import Sidebar from "./components/sidebar/page";
import MainNavBar from "./components/mianNavbar/page";
import ContentOne from "./components/contetOne/page";
import ContentTwo from "./components/contentTwo/page";
import ContentThree from "./components/contentthree/page";
import ContentFour from "./components/contentfour/page";
import LastBox from "./components/lastbox/page";

export default function Home() {
  return (
    <main className="d-flex">
      <Sidebar />
      <div className="contents container border rounded ms-3 me-3">
        <MainNavBar />
        <div className="d-flex">

        <div className="content-box-wrapper d-flex w-50">
          <ContentOne />
          <ContentTwo />
          <LastBox />
        </div>
        <div className="contentThree d-flex w-50">
          <ContentThree />
          <ContentFour />
        </div>
        </div>
      </div>
    </main>
  );
}
