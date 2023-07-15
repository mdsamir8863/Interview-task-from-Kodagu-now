import React from "react";
import "./search.css";
import Image from "next/image";
import arrowIcon from "../../../../public/assets/icons/arrow-icon.svg";
import searchIcon from "../../../../public/assets/icons/search-icon.svg";
const Search = () => {
  return (
    <>
      <label htmlFor="search" className=" d-flex align-items-center bg-white mb-0 ms-4 me-2   rounded w-auto  rounded-5 input-group ">
        <Image className=" ms-3 me-3" src={searchIcon} alt="searchIcon" width={16} height={16} />
        <input
          className=" border-0 border w-auto"
          type="search"
          name=""
          id="search"
          placeholder="Search Products, Orders and Clients"
        />
        <Image src={arrowIcon} alt="searchIcon" width={30} height={30} />
      </label>
    </>
  );
};

export default Search;
