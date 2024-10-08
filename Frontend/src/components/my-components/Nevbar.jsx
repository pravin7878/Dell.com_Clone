import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { MdPermIdentity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

// import services

import { hendelClick, hendelSearch, hendelSingIn, hendelSingUp } from "../../services/service.jsx"


import { Input } from "../ui/input";
import { HoverMenubar } from "../shadcn-component/HoverManubar";
import { SheetSide } from "../shadcn-component/SheetSide";
import { LoginBtn } from "./login/LoginBtn.jsx";
import { LoginCont } from "./login/LoginCont.jsx";
import { Cart } from "./Cart.jsx";
import { manusTitles } from "@/utils/menuContent.js";

export const Nevbar = () => {
  const [quiry, setquiry] = useState("")


  return (<>
    <nav className='flex justify-between align-middle items-center'>
      <div className='lg:w-[20%] md:w-[30%] md:flex items-center'>
        {/* dextop */}
        <span className="hidden md:block lg:hidden cursor-pointer">
          <SheetSide
            side={"left"}
            btn={<IoMenu size={30} />}
            cont={
              manusTitles?.map((title,ind) => {
                return <div key={ind} className="flex flex-col gap-2 mt-6">
                  <h3 className="flex justify-between cursor-pointer text-gray-500 hover:text-black">
                    <p>{title}</p>
                    <p><IoIosArrowForward /></p>
                  </h3>
                </div>
              })
            }
          />
        </span>
        <svg className="hidden md:block p-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1017 132">
          <path width={33} fill="#0076ce" d="M1015 84.89c0-12.23-6.8-17.66-20.39-20.38-13.58-2.71-21.73-4.08-21.73-13.58 0-6.79 5.43-10.87 14.95-10.87 12.23 0 16.3 5.43 16.3 12.23l1.36 1.36h5.43l1.36-1.36c0-13.58-10.87-19.02-24.46-19.02-14.95 0-23.09 8.15-23.09 17.67 0 10.87 8.15 16.3 21.73 19.02 13.59 2.72 20.38 4.08 20.38 14.95 0 6.79-4.07 12.23-17.66 12.23-12.23 0-17.66-6.8-17.66-14.95l-1.36-1.36h-5.43l-1.36 1.36c0 12.23 9.51 21.74 25.81 21.74 17.66-.02 25.82-8.17 25.82-19.04m-58.42-13.58l1.35-1.36v-4.07c0-19.02-10.87-32.61-29.89-32.61s-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.72 8.15-8.15 13.59-19.02 13.59-17.67 0-23.1-16.3-23.1-24.45l1.36-1.36h48.92zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.74-23.09 16.3 0 21.74 13.58 21.74 23.09l-1.36 1.36zm-59.78 36.68V35.97l-1.36-1.36h-5.43l-1.36 1.36v65.22l1.36 1.36h5.43l1.36-1.36zm0-78.8v-8.15l-1.36-1.36h-5.43l-1.36 1.36v8.15l1.36 1.36h5.43l1.36-1.36zm-51.62 74.73c-13.59 0-21.74-9.51-21.74-28.53s8.15-28.53 21.74-28.53c13.58 0 21.73 9.51 21.73 28.53 0 19.01-8.15 28.53-21.73 28.53m21.73-4.08c0 17.66-4.08 31.25-20.38 31.25-12.23 0-16.3-5.43-17.66-12.23l-1.36-1.36h-5.43l-1.36 1.36c1.36 10.87 9.51 19.02 25.81 19.02 17.67 0 28.53-10.87 28.53-38.04V35.97l-1.36-1.36h-4.08l-1.36 1.36-1.36 8.16h-1.36c-2.71-5.43-9.51-10.87-21.74-10.87-19.02 0-28.53 14.95-28.53 35.33 0 20.37 9.51 35.32 28.53 35.32 12.23 0 19.02-5.43 21.74-10.87h1.37zm-88.3-52.98c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.24-12.23 31.24-35.32s-13.58-35.33-31.24-35.33c-17.67 0-31.25 12.23-31.25 35.33 0 23.09 13.59 35.32 31.25 35.32m-40.76-2.72V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.37zm-48.9-61.13c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.25-12.23 31.25-35.32s-13.59-35.33-31.25-35.33-31.25 12.23-31.25 35.33c0 23.09 13.59 35.32 31.25 35.32m-39.4-2.72V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.67 4.08-21.74 10.87h-1.36l-1.35-8.16-1.36-1.36h-4.08l-1.36 1.36v65.22l1.36 1.36h5.44l1.35-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.43l1.36-1.36zm-69.29 0V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.66 4.08-21.74 10.87h-1.36V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.44l1.35-1.36zm-116.83-32.6c0-19.02 9.51-28.53 23.09-28.53s19.02 8.15 20.37 16.3l1.36 1.36h5.44l1.36-1.36c-1.36-13.58-12.23-23.09-28.53-23.09-17.66 0-31.24 10.87-31.24 35.33 0 24.45 13.58 35.32 31.24 35.32 16.3 0 27.17-9.51 28.53-23.09l-1.36-1.36h-5.44l-1.36 1.36c-1.36 8.15-6.79 16.3-20.37 16.3-13.59-.01-23.09-9.53-23.09-28.54m-14.95 2.72l1.36-1.36v-4.07c0-19.02-10.87-32.61-29.9-32.61-19.01 0-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.71 8.15-8.15 13.59-19.02 13.59-17.66 0-23.09-16.3-23.09-24.45l1.36-1.36h48.91zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.73-23.09 16.31 0 21.74 13.58 21.74 23.09l-1.35 1.36zm-36.61-51.63V8.81l-1.36-1.36h-70.65l-1.36 1.36v4.08l1.36 1.36h29.89l1.36 1.36v85.59l1.36 1.36h5.43l1.36-1.36V15.6l1.36-1.36h29.89l1.36-1.36zM322.2 83.65v18.9h-61.35V7.45h21.6v76.2h39.75zm-283.65 18.9c22.13 0 40.73-15.12 46.03-35.58l53.8 42.03 53.77-42.01v35.56h61.35v-18.9h-39.75V7.45h-21.6v35.56L140.58 83.3l-11.53-9.01L153.73 55l26.88-21-15.34-12-51.58 40.3-11.53-9.01L153.73 13 138.38 1l-53.8 42.03c-5.3-20.46-23.9-35.58-46.03-35.58H0v95.1h38.55zM21.6 83.65v-57.3h16.95C52.88 26.35 64.5 39.18 64.5 55S52.88 83.65 38.55 83.65H21.6z">
          </path>
        </svg>

        {/*mobile manue*/}
        <div className="flex p-5 md:hidden">
          <span className="cursor-pointer">
            <SheetSide
              side={"left"}
              btn={<IoMenu size={30} />}
              cont={
                manusTitles?.map((title,ind)=>{
                  return <div key={ind} className="flex flex-col gap-2 mt-6">
                    <h3 className="flex justify-between cursor-pointer text-gray-500 hover:text-black">
                      <p>{title}</p>
                      <p><IoIosArrowForward /></p>
                    </h3>
                  </div>
                })
              }
            />
          </span>
          <svg className=' pl-2' xmlns="http://www.w3.org/2000/svg" width="58" height="33" viewBox="0 0 58 33">
            <path fill="#0076ce" d="M58 14.793v3.383H46.956V1.154h3.888v13.638H58zM6.939 18.175c3.984 0 7.332-2.706 8.286-6.368l9.685 7.522 9.679-7.519v6.365h11.044v-3.383h-7.155V1.154H34.59v6.364l-9.283 7.211-2.076-1.613 4.443-3.453 4.839-3.759-2.761-2.148-9.285 7.213-2.075-1.613 9.283-7.211L24.91 0l-9.685 7.522c-.954-3.662-4.302-6.368-8.286-6.368H0v17.021h6.939zm-3.051-3.383V4.537h3.051c2.58 0 4.671 2.296 4.671 5.128s-2.092 5.128-4.671 5.128H3.888zM58 29.156c0-1.018-.569-1.469-1.706-1.697s-1.82-.34-1.82-1.131c0-.566.455-.904 1.251-.904 1.024 0 1.364.453 1.364 1.018l.113.113h.456l.113-.113c0-1.131-.911-1.584-2.047-1.584-1.251 0-1.933.678-1.933 1.471 0 .904.682 1.357 1.82 1.582s1.707.34 1.707 1.244c0 .566-.34 1.018-1.478 1.018-1.024 0-1.478-.566-1.478-1.244l-.113-.113h-.455l-.113.113c0 1.018.796 1.81 2.16 1.81 1.478 0 2.16-.678 2.16-1.584zm-4.891-1.129l.113-.113v-.338c0-1.584-.909-2.715-2.502-2.715s-2.502 1.131-2.502 2.715v.226c0 1.582.796 2.941 2.616 2.941 1.591 0 2.16-1.018 2.275-1.697l-.113-.113h-.456l-.113.113c-.227.678-.682 1.131-1.591 1.131-1.48 0-1.933-1.357-1.933-2.035l.113-.113h4.093v-.002zm-.682-.566h-3.411l-.113-.113c0-.791.455-1.922 1.82-1.922s1.82 1.131 1.82 1.922l-.115.113zm-5.004 3.053v-5.428l-.113-.113h-.456l-.113.113v5.428l.113.113h.456l.113-.113zm0-6.56v-.678l-.113-.113h-.456l-.113.113v.678l.113.113h.456l.113-.113zm-4.322 6.22c-1.138 0-1.82-.791-1.82-2.375s.682-2.375 1.82-2.375 1.82.791 1.82 2.375-.682 2.375-1.82 2.375zm1.82-.34c0 1.47-.342 2.601-1.706 2.601-1.024 0-1.364-.453-1.478-1.018l-.113-.113h-.456l-.113.113c.113.904.796 1.582 2.16 1.582 1.48 0 2.389-.904 2.389-3.166v-4.75l-.113-.113h-.342l-.113.113-.113.68h-.113c-.227-.453-.796-.906-1.82-.906-1.591 0-2.389 1.244-2.389 2.941s.796 2.941 2.389 2.941c1.024 0 1.593-.451 1.82-.904h.113 0zm-7.393-4.41c1.138 0 1.933.904 1.933 2.375s-.796 2.375-1.933 2.375-1.933-.904-1.933-2.375.796-2.375 1.933-2.375zm0 5.316c1.478 0 2.616-1.018 2.616-2.941s-1.138-2.941-2.616-2.941-2.616 1.018-2.616 2.941 1.138 2.941 2.616 2.941zm-3.411-.226v-7.691l-.114-.113h-.455l-.113.113v7.691l.113.113h.455l.114-.113zm-4.095-5.09c1.138 0 1.933.904 1.933 2.375s-.796 2.375-1.933 2.375-1.933-.904-1.933-2.375.796-2.375 1.933-2.375zm0 5.316c1.478 0 2.616-1.018 2.616-2.941s-1.138-2.941-2.616-2.941-2.616 1.018-2.616 2.941 1.138 2.941 2.616 2.941zm-3.298-.226v-3.393c0-1.469-.796-2.262-2.047-2.262-.796 0-1.48.34-1.82.906h-.113l-.113-.68-.113-.113h-.342l-.113.113v5.428l.113.113h.456l.113-.113V27.46c0-1.244.569-2.035 1.82-2.035.909 0 1.478.566 1.478 1.697v3.393l.113.113h.455l.113-.113zm-5.802 0v-3.393c0-1.469-.796-2.262-2.047-2.262-.796 0-1.478.34-1.82.906h-.113v-2.941l-.113-.113h-.456l-.113.113v7.691l.113.113h.456l.113-.113v-3.053c0-1.244.569-2.035 1.82-2.035.909 0 1.478.566 1.478 1.697v3.394l.113.113h.455l.113-.115zm-9.78-2.715c0-1.584.796-2.375 1.933-2.375s1.591.678 1.707 1.357l.113.113h.456l.113-.113c-.113-1.131-1.024-1.922-2.389-1.922-1.478 0-2.616.906-2.616 2.941s1.138 2.941 2.616 2.941c1.365 0 2.275-.791 2.389-1.922l-.113-.113h-.456l-.113.113c-.113.678-.569 1.357-1.707 1.357s-1.933-.791-1.933-2.375zm-1.251.227l.113-.113v-.338c0-1.584-.911-2.715-2.502-2.715S5 25.991 5 27.575v.226c0 1.582.796 2.941 2.616 2.941 1.591 0 2.16-1.018 2.275-1.697l-.113-.113h-.454l-.113.113c-.227.678-.682 1.131-1.591 1.131-1.478 0-1.933-1.357-1.933-2.035l.113-.113h4.09v-.002zm-.682-.566H5.795l-.113-.113c0-.791.455-1.922 1.82-1.922s1.82 1.131 1.82 1.922l-.113.113zm-3.066-4.297v-.34l-.113-.113H.113L0 22.824v.34l.113.113h2.502l.113.113v7.125l.113.113h.455l.113-.113V23.39l.113-.113h2.502l.115-.113z"></path>
          </svg>
        </div>
      </div>

      {/* serch input */}
      <div className='hidden md:block md:w-[50%] lg:w-[42%]  m-auto'>
        <div className="relative">
          <Input
            value={quiry}
            onChange={(e) => setquiry(e.target.value)}
            type="text"
            onKeyDown={hendelSearch}
            placeholder="Search Dell"
            className="lg:px-5 border-2 border-gray-300 focus:border-none"
          />
          <span
            onClick={hendelClick}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 pr-1">
            <IoMdSearch size={30} className="" />
          </span>
        </div>

      </div>

      {/* for lg screen */}
      <div className='hidden w-[35%] lg:flex justify-between align-middle m-auto items-center text-sm'>
        <span className="cursor-pointer w-[22%] flex items-center align-middle justify-center">
          <MdPermIdentity size={25} className="" />
          <LoginBtn btn={"Sing In"} />

        </span>
        <span className="cursor-pointer w-[30%] flex gap-1 items-center  align-middle justify-center">
          <BiSupport size={20} />
          <p>Contact Us</p>
        </span>
        <span className="cursor-pointer w-[22%] flex gap-1 items-center  align-middle justify-center">
          <GrLanguage size={18} />
          <p>IN/EN</p>
        </span>
        <span className="cursor-pointer w-[22%] flex gap-1 items-center  align-middle justify-center">
          <IoCartOutline size={22} />
          <p>Cart</p>
        </span>
      </div>

      {/* for md and sm screen */}
      <div className="flex justify-center w-[30%] md:w-[15%] lg:hidden ml-10">
        <span className="w-1/2">
          <SheetSide
            btn={
              <MdPermIdentity
                size={38}
                className="fill-gray-600 hover:fill-black active:border-b-2 border-black hover:border-b-2"
              />}
            side={"right"}
            cont={<LoginCont className="text-[10px]" />}
          />
        </span>

        <span className="w-1/2 ">
          <SheetSide
            btn={
              <IoCartOutline
                size={38}
                className="text-gray-600 hover:text-black active:border-b-2 border-black hover:border-b-2"
              />}
            side={"right"}
            cont={<Cart/>}

          />
        </span>
      </div>
    </nav>

    {/* search input for sm screen */}
    <div className='md:hidden w-[80%]  m-auto'>
      <div className="relative">
        <Input
          value={quiry}
          onChange={(e) => setquiry(e.target.value)}
          type="text"
          onKeyDown={hendelSearch}
          placeholder="Search Dell"
          className="h-[35px]  border-2 border-gray-300 focus:border-none"
        />
        <span
          onClick={hendelClick}
          className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 pr-1">
          <IoMdSearch size={30} className="" />
        </span>
      </div>

    </div>

    <menu
     className="hidden lg:block">
      <HoverMenubar />
    </menu>
  </>)
}
