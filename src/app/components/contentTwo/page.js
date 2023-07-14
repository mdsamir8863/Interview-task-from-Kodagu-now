import Image from "next/image";
import React from "react";
import img1 from "../../../../public/assets/img1.png";
import img2 from "../../../../public/assets/img2.png";
import Avatar from "../../../../public/assets/icons/Avatar.svg";
import Avatar2 from "../../../../public/assets/icons/Avatar2.svg";
import Avatar1 from "../../../../public/assets/icons/Avatar1.svg";
import Avatar3 from "../../../../public/assets/icons/Avatar3.svg";
import '../../responsive.css'
const ContentTwo = () => {
  return (
    <div className="container content-box-container second-content">
      <div className="content-top mt-4 mb-4">
        <div className="toDo bg-white rounded D-flex justify-content-evenly border-start border-4 border-warning">
          <span className="color-4D5-12">IN WORK</span>
          <span className="border border-2 rounded-circle ps-1 pe-1">65</span>
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
              d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z"
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
              d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z"
              fill="#C3CAD9"
            />
          </svg>
        </div>
      </div>

      <div className="contentBoxThree bg-white rounded mb-2">
        <div className="text p-3">
          <div className="color-ADB-10">
            <p className="D-flex justify-content-between">
              Space Tasks 2
              <Image src={Avatar2} alt="leaf Image" />
            </p>
          </div>
          <p className="color-6B7-12 mb-0">Getting Free Publicity</p>
        </div>
      </div>

      <div className="contentBoxOne  bg-white rounded mb-2">
        <Image className="w-100" src={img2} alt="leaf Image" />
        <div className="text p-3">
          <div className="color-ADB-10">
            <p className="D-flex justify-content-between">
              Space Tasks 2
              <Image src={Avatar1} alt="leaf Image" />
            </p>
          </div>
          <p className="color-6B7-12">Make Money Online Through</p>
          <div className="Icons color-6B7-10 D-flex justify-content-between ">
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
                d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z"
                fill="#C3CAD9"
              />
            </svg>
            <span>4</span>
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
                d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
                fill="#C3CAD9"
              />
            </svg>{" "}
            <span>2</span>
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
                d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z"
                fill="#C3CAD9"
              />
            </svg>
            <span>6 Days Left</span>
          </div>
        </div>
      </div>

     
      
      <div className="contentBoxThree bg-white rounded mb-2">
        <div className="text p-3">
          <div className="color-ADB-10">
            <p className="D-flex justify-content-between">
              Space Tasks 2
              <Image src={Avatar3} alt="leaf Image" />
            </p>
          </div>
          <p className="color-6B7-12 mb-0">Search Engine Optimization ...</p>
        </div>
      </div>
    
      <div className="contentBoxThree bg-white rounded mb-2">
        <div className="text p-3">
          <div className="color-ADB-10">
            <p className="D-flex justify-content-between">
              Space Tasks 2
              <Image src={Avatar} alt="leaf Image" />
            </p>
          </div>
          <p className="color-6B7-12 mb-0">Importance Of The Custom ...</p>
        </div>
      </div>
      <div className="text p-3 bg-white rounded">
          <div className="color-ADB-10">
            <p className="D-flex justify-content-between">
              Space Tasks 2
              <Image src={Avatar1} alt="leaf Image" />
            </p>
          </div>
          <p className="color-6B7-12">Copper Canyon</p>
          <div className="Icons color-6B7-10 D-flex justify-content-between ">
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
                d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z"
                fill="#C3CAD9"
              />
            </svg>
            <span>4</span>
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
                d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
                fill="#C3CAD9"
              />
            </svg>
            <span>2</span>
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
                d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z"
                fill="#C3CAD9"
              />
            </svg>
            <span className="text-danger">1 Days Left</span>
          </div>
        </div>
          <p className="color-6B7-12 mt-3">+ NEW TASK</p>
    </div>
  );
};

export default ContentTwo;
