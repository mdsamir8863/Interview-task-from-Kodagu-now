import Image from "next/image";
import Sidebar from "./components/sidebar/page";
import MainNavBar from "./components/mianNavbar/page";
import ContentOne from "./components/contetOne/page";
import ContentTwo from "./components/contentTwo/page";
import ContentThree from "./components/contentthree/page";
import ContentFour from "./components/contentfour/page";
import LastBox from "./components/lastbox/page";
import Avatar from "../../public/assets/icons/Avatar.svg";

export default function Home() {
  return (
    <main className="d-flex">
      <Sidebar />
      <div className="contents container border ms-3 me-3">
        <MainNavBar />
        <div className="content-box-wrapper d-flex">
          <ContentOne />
          <ContentTwo />
          <div className="contentThree d-flex">
            <ContentThree />
            <ContentFour />
            <LastBox />
          </div>
        </div>
      </div>
    </main>
  );
}
