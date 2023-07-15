import React from "react";
import "./style.css";
import "../../responsive.css";
import userIcon from "../../../../public/assets/icons/user-icon.svg";
import dotsIcon from "../../../../public/assets/icons/tots-icon.svg";
import Avatar from "../../../../public/assets/icons/Avatar.svg";
import Avatar1 from "../../../../public/assets/Avatar1.png";
import Avatar2 from "../../../../public/assets/icons/Avatar1.svg";
import Avatar3 from "../../../../public/assets/icons/Avatar2.svg";
// import Avatar4 from "../../../../public/assets/icons/Avatar3.svg";
import UserPic from "../../../../public/assets/UserPic.png";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="sidebar-container d-flex mb-none">
      {/* mini sidebar start */}

      <div className="miniSideBar border-end  p-3 d-flex flex-column align-items-center justify-content-between">
        <div className="svg-topIcons mb-none  d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 14.4C14.39 14.4 13.9 14.89 13.9 15.5C13.9 16.11 14.39 16.6 15 16.6C15.61 16.6 16.1 16.11 16.1 15.5C16.1 14.89 15.61 14.4 15 14.4ZM15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM17.19 17.69L9 21.5L12.81 13.31L21 9.5L17.19 17.69Z"
              fill="#3361FF"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.557 21.1975L18.707 23.7075C19.467 24.1675 20.397 23.4875 20.197 22.6275L19.097 17.9075L22.767 14.7275C23.437 14.1475 23.077 13.0475 22.197 12.9775L17.367 12.5675L15.477 8.1075C15.137 7.2975 13.977 7.2975 13.637 8.1075L11.747 12.5575L6.91696 12.9675C6.03696 13.0375 5.67696 14.1375 6.34696 14.7175L10.017 17.8975L8.91696 22.6175C8.71696 23.4775 9.64696 24.1575 10.407 23.6975L14.557 21.1975Z"
              fill="#C3CAD9"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z"
              fill="#C3CAD9"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4325 10.35L20.8725 11.79L15.9925 16.67L12.7025 13.38C12.5157 13.1927 12.262 13.0875 11.9975 13.0875C11.733 13.0875 11.4793 13.1927 11.2925 13.38L5.2925 19.39C4.9025 19.78 4.9025 20.41 5.2925 20.8C5.6825 21.19 6.3125 21.19 6.7025 20.8L11.9925 15.5L15.2825 18.79C15.6725 19.18 16.3025 19.18 16.6925 18.79L22.2825 13.21L23.7225 14.65C24.0325 14.96 24.5725 14.74 24.5725 14.3V10C24.5825 9.72 24.3625 9.5 24.0825 9.5H19.7925C19.3425 9.5 19.1225 10.04 19.4325 10.35Z"
              fill="#C3CAD9"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM14 23.43C10.05 22.94 7 19.58 7 15.5C7 14.88 7.08 14.29 7.21 13.71L12 18.5V19.5C12 20.6 12.9 21.5 14 21.5V23.43ZM20.9 20.89C20.64 20.08 19.9 19.5 19 19.5H18V16.5C18 15.95 17.55 15.5 17 15.5H11V13.5H13C13.55 13.5 14 13.05 14 12.5V10.5H16C17.1 10.5 18 9.6 18 8.5V8.09C20.93 9.28 23 12.15 23 15.5C23 17.58 22.2 19.47 20.9 20.89Z"
              fill="#C3CAD9"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 15.0825V9.91249C18 9.38249 17.79 8.87249 17.41 8.50249L15.7 6.79249C15.5132 6.60523 15.2595 6.5 14.995 6.5C14.7305 6.5 14.4768 6.60523 14.29 6.79249L12.59 8.49249C12.21 8.87249 12 9.38249 12 9.91249V11.0825H8C6.9 11.0825 6 11.9825 6 13.0825V23.0825C6 24.1825 6.9 25.0825 8 25.0825H22C23.1 25.0825 24 24.1825 24 23.0825V17.0825C24 15.9825 23.1 15.0825 22 15.0825H18ZM10 23.0825H8V21.0825H10V23.0825ZM10 19.0825H8V17.0825H10V19.0825ZM10 15.0825H8V13.0825H10V15.0825ZM16 23.0825H14V21.0825H16V23.0825ZM16 19.0825H14V17.0825H16V19.0825ZM16 15.0825H14V13.0825H16V15.0825ZM16 11.0825H14V9.08249H16V11.0825ZM22 23.0825H20V21.0825H22V23.0825ZM22 19.0825H20V17.0825H22V19.0825Z"
              fill="#C3CAD9"
            />
          </svg>
        </div>
        <div className="svg-BottomIcons mb-none  d-flex flex-column align-items-center">
          <Image
            className="mb-2"
            src={Avatar1}
            height={30}
            width={30}
            alt="Avatar"
          />
          <Image
            className="mb-2"
            src={Avatar}
            height={30}
            width={30}
            alt="Avatar"
          />
          <Image
            className="mb-2"
            src={Avatar3}
            height={30}
            width={30}
            alt="Avatar"
          />
          <Image
            className="mb-2"
            src={Avatar2}
            height={30}
            width={30}
            alt="Avatar"
          />
          <svg
            className="bg-white rounded rounded-circle p-1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM19 16.5H16V19.5C16 20.05 15.55 20.5 15 20.5C14.45 20.5 14 20.05 14 19.5V16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H14V11.5C14 10.95 14.45 10.5 15 10.5C15.55 10.5 16 10.95 16 11.5V14.5H19C19.55 14.5 20 14.95 20 15.5C20 16.05 19.55 16.5 19 16.5Z"
              fill="#C3CAD9"
            />
          </svg>
        </div>
      </div>

      {/*----!!!!!!!!!!!!mini sidebar end-----!!!!!!*/}

      <div className="main-sideBar mb-none  p-4">
        <div className="topIcon d-flex justify-content-between">
          <Image
            src={userIcon}
            alt="userIcon"
            // width={40}
            height={50}
          />
          <Image
            src={dotsIcon}
            alt="userIcon"
            // width={40}
            height={50}
          />
        </div>
        <div className="user-container text-center">
          <Image
            className="mb-4"
            src={UserPic}
            alt="userIcon"
            // width={40}
            height={130}
          />
          <p className="color-6B7-16  mb-1">Hello Alfred Bryant</p>
          <p className="color-ADB-14 ">adrain.nader@yahoo.com</p>
        </div>
        <div className="box-container border rounded rounded-3  mt-4  d-flex justify-content-center">
          <div className="box-wrapper text-center w-50">
            {/* first 4 row */}
            <div
              className="box border border-1 p-2"
              style={{ borderTopLeftRadius: ".3rem" }}
            >
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Dashboard</p>
            </div>

            <div className="box border border-1 p-2">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Task</p>
            </div>

            <div className="box border border-1 p-2">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 7.5H7C5.9 7.5 5.01 8.4 5.01 9.5L5 21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L15.53 16.17C15.21 16.37 14.79 16.37 14.47 16.17L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Emails</p>
            </div>

            <div
              className="box border border-1 p-2"
              style={{ borderBottomLeftRadius: ".3rem" }}
            >
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 16.5H16C15.45 16.5 15 16.95 15 17.5V20.5C15 21.05 15.45 21.5 16 21.5H19C19.55 21.5 20 21.05 20 20.5V17.5C20 16.95 19.55 16.5 19 16.5ZM19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5ZM21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5C22 23.05 21.55 23.5 21 23.5Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Calendars</p>
            </div>
          </div>
          {/* second 4 row */}
          <div className="box-wrapper text-center   w-50">
            <div
              className="box border border-1 p-2"
              style={{ borderTopRightRadius: ".3rem" }}
            >
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Notes</p>
            </div>

            <div className="box border border-1 p-2">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.35 13.54C21.67 10.09 18.64 7.5 15 7.5C12.11 7.5 9.6 9.14 8.35 11.54C5.34 11.86 3 14.41 3 17.5C3 20.81 5.69 23.5 9 23.5H22C24.76 23.5 27 21.26 27 18.5C27 15.86 24.95 13.72 22.35 13.54Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Files</p>
            </div>

            <div className="box border border-1 p-2">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 14.5C20.66 14.5 21.99 13.16 21.99 11.5C21.99 9.84 20.66 8.5 19 8.5C17.34 8.5 16 9.84 16 11.5C16 13.16 17.34 14.5 19 14.5ZM11 14.5C12.66 14.5 13.99 13.16 13.99 11.5C13.99 9.84 12.66 8.5 11 8.5C9.34 8.5 8 9.84 8 11.5C8 13.16 9.34 14.5 11 14.5ZM11 16.5C8.67 16.5 4 17.67 4 20V21.5C4 22.05 4.45 22.5 5 22.5H17C17.55 22.5 18 22.05 18 21.5V20C18 17.67 13.33 16.5 11 16.5ZM19 16.5C18.71 16.5 18.38 16.52 18.03 16.55C18.05 16.56 18.06 16.58 18.07 16.59C19.21 17.42 20 18.53 20 20V21.5C20 21.85 19.93 22.19 19.82 22.5H25C25.55 22.5 26 22.05 26 21.5V20C26 17.67 21.33 16.5 19 16.5Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Clients</p>
            </div>

            <div
              className="box border border-1 p-2"
              style={{ borderBottomRightRadius: ".3rem" }}
            >
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0888 6.39628C13.0788 4.38628 10.0688 3.97628 7.64878 5.15628L11.2788 8.78628C11.6688 9.17628 11.6688 9.80628 11.2788 10.1963L9.68878 11.7863C9.29878 12.1863 8.66878 12.1863 8.27878 11.7863L4.64878 8.15628C3.47878 10.5863 3.88878 13.5763 5.89878 15.5863C7.75878 17.4463 10.4788 17.9363 12.7888 17.0663L20.7488 25.0263C21.7788 26.0563 23.4388 26.0563 24.4588 25.0263C25.4888 23.9963 25.4888 22.3363 24.4588 21.3163L16.5388 13.3863C17.4588 11.0463 16.9788 8.28628 15.0888 6.39628Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </p>
              <p className="color-ADB-12">Settings</p>
            </div>
          </div>
        </div>
        <div className="bottom-icons-container d-flex align-items-center justify-content-evenly mt-5 p-2 border rounded-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.2037 18.75L19.6637 18.46C19.0537 18.39 18.4537 18.6 18.0237 19.03L16.1837 20.87C13.3537 19.43 11.0337 17.12 9.59367 14.28L11.4437 12.43C11.8737 12 12.0837 11.4 12.0137 10.79L11.7237 8.27C11.6037 7.26 10.7537 6.5 9.73367 6.5H8.00367C6.87367 6.5 5.93367 7.44 6.00367 8.57C6.53367 17.11 13.3637 23.93 21.8937 24.46C23.0237 24.53 23.9637 23.59 23.9637 22.46V20.73C23.9737 19.72 23.2137 18.87 22.2037 18.75Z"
              fill="#FF6633"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 7.5H7C5.9 7.5 5 8.4 5 9.5V21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L16.06 15.84C15.41 16.25 14.59 16.25 13.94 15.84L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z"
              fill="#29CC39"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 7.5H6C4.9 7.5 4 8.4 4 9.5V22.5C4 23.6 4.9 24.5 6 24.5H24C25.1 24.5 26 23.6 26 22.5V9.5C26 8.4 25.1 7.5 24 7.5ZM24 21.5C24 22.05 23.55 22.5 23 22.5H15V9.5H23C23.55 9.5 24 9.95 24 10.5V21.5ZM22.25 13H16.75C16.34 13 16 13.34 16 13.75C16 14.16 16.34 14.5 16.75 14.5H22.25C22.66 14.5 23 14.16 23 13.75C23 13.34 22.66 13 22.25 13ZM22.25 15.5H16.75C16.34 15.5 16 15.84 16 16.25C16 16.66 16.34 17 16.75 17H22.25C22.66 17 23 16.66 23 16.25C23 15.84 22.66 15.5 22.25 15.5ZM22.25 18H16.75C16.34 18 16 18.34 16 18.75C16 19.16 16.34 19.5 16.75 19.5H22.25C22.66 19.5 23 19.16 23 18.75C23 18.34 22.66 18 22.25 18Z"
              fill="#8833FF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 18.55L18.55 23.0125C19.2375 23.3875 19.7375 23.2 19.9125 22.375L22.375 10.775C22.625 9.76249 21.9875 9.31249 21.325 9.61249L6.87498 15.1875C5.88748 15.5875 5.89998 16.1375 6.69998 16.375L10.4125 17.5375L19 12.125C19.4 11.875 19.775 12.0125 19.475 12.2875L12.5 18.55Z"
              fill="#33BFFF"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9971 5.5C9.48427 5.5 5 9.98427 5 15.4971C5 17.6834 5.70528 19.711 6.90418 21.3568L5.65817 25.0711L9.50185 23.843C11.0828 24.8891 12.9693 25.4944 15.0029 25.4944C20.5157 25.4944 25 21.0099 25 15.4973C25 9.98444 20.5157 5.50017 15.0029 5.50017H14.9971V5.5ZM12.2054 10.5781C12.0115 10.1138 11.8645 10.0962 11.5707 10.0843C11.4592 10.0771 11.3475 10.0732 11.2357 10.0727C10.8535 10.0727 10.4539 10.1843 10.2129 10.4311C9.91918 10.7308 9.19035 11.4302 9.19035 12.8643C9.19035 14.2984 10.2365 15.6854 10.3775 15.8794C10.5244 16.0732 12.417 19.0588 15.3555 20.2756C17.6535 21.2277 18.3354 21.1395 18.8584 21.0278C19.6224 20.8633 20.5804 20.2988 20.8214 19.6173C21.0624 18.9354 21.0624 18.3535 20.9918 18.2301C20.9213 18.1067 20.7272 18.0364 20.4335 17.8893C20.1397 17.7423 18.7114 17.037 18.441 16.943C18.1765 16.8431 17.9239 16.8785 17.7242 17.1606C17.442 17.5544 17.1658 17.9541 16.9424 18.195C16.7661 18.3831 16.478 18.4066 16.2371 18.3066C15.9139 18.1716 15.0089 17.8539 13.8921 16.8607C13.0281 16.0909 12.4404 15.133 12.27 14.8451C12.0995 14.5513 12.2525 14.3806 12.3875 14.2221C12.5344 14.0398 12.6754 13.9106 12.8224 13.74C12.9693 13.5697 13.0516 13.4815 13.1457 13.2816C13.2457 13.0877 13.175 12.8878 13.1045 12.7408C13.034 12.5939 12.4464 11.1598 12.2054 10.5781Z"
              fill="#29CC39"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
