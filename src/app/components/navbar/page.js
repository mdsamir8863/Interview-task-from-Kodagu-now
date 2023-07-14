import React from "react";
import "./navbar.css";
import Search from "../searchbox/page";
import Image from "next/image";
import navIcon from "../../../../public/assets/icons/nav-icon.svg";
import tots from "../../../../public/assets/icons/tots-icon.svg";
import account_circle from "../../../../public/assets/icons/account_circle.svg";
import userIcon from "../../../../public/assets/icons/user-icon.svg";
import notification from "../../../../public/assets/icons/notification-icon.svg";
import crossIcon from "../../../../public/assets/icons/cross-icon.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-expand nav-mb-none pt-0">
        <ul className="list-unstyled d-flex flex-row align-items-center justify-content-around  border border-2 w-100 nav-mb-none">
          {/* <li> */}
          <Image
            className="btn w-auto"
            src={navIcon}
            alt="searchIcon"
            width={50}
            height={50}
          />
          {/* </li> */}
          <li>
            <Link href="/" className=" text-decoration-none color-4D5-18">
              Constructor
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-decoration-none color-7D8-14 color-7D8-14"
            >
              Dashboard
            </Link>
          </li>
          <li className=" cursor-pointer ">
            <Link
              href="/"
              className=" text-decoration-none color-7D8-14 color-7D8-14"
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className=" text-decoration-none color-7D8-14 color-7D8-14"
            >
              News
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className=" text-decoration-none color-7D8-14 color-7D8-14"
            >
              User Policy
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className=" text-decoration-none color-7D8-14 color-7D8-14"
            >
              Contacts
            </Link>
          </li>
          {/* <li> */}
          <Image
            className="btn w-auto"
            src={tots}
            alt="searchIcon"
            width={50}
            height={50}
          />
          {/* </li> */}

          <Search />

          {/* <li> */}
          <Image
            className="btn w-auto"
            src={account_circle}
            alt="searchIcon"
            width={50}
            height={50}
          />
          {/* </li> */}

          <li>Clayton Santos</li>
          {/* <li> */}
          <Image
            className=" rounded rounded-circle btn w-auto"
            src={notification}
            alt="searchIcon"
            width={50}
            height={50}
          />
          {/* </li> */}
          {/* <li> */}
          <Image
            className=" rounded rounded-circle btn w-auto"
            src={crossIcon}
            alt="searchIcon"
            width={50}
            height={50}
          />
          {/* </li> */}
        </ul>
      </nav>



      <div className="mb-show pt-0  navbar D-flex flex-row justify-content-between">
        <div className=" mb-show">
          <Image
            className="btn w-auto mb-show"
            src={navIcon}
            alt="searchIcon"
            width={50}
            height={50}
          />

          <Link href="/" className=" text-decoration-none color-4D5-18">
            Constructor
          </Link>
        </div>
        <Image
          className="btn w-auto mb-show"
          src={userIcon}
          alt="searchIcon"
          width={50}
          height={50}
        />
      </div>
    </>
  );
};

export default Navbar;
