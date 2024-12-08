
import Image from "next/image";
import {FaFacebook} from "react-icons/fa"
import { RxInstagramLogo } from "react-icons/rx";
import {FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
<div>
<footer className="bg-[#EEEFFB] h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center">

  <div className="container mx-auto px-12 items-center">

    {/* Responsive Grid */}
    <div className="mt-[94px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left lg:text-left">
            <div className="mt-2 sm:mt-0">
              
          {/* Logo */}
          <Image
            src="/lodo.00.png"
            width={98}
            height={34}
            alt="logo"
          />
              <div className="mt-4 flex items-center gap-x-2 justify-center sm:justify-start">
               
             
    <div className="flex w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
     {/* Search Input */}
        <input
          type="search"
    className="w-2/3 h-12 px-4 text-gray-700 bg-white border-none outline-none placeholder-gray-400"
    placeholder="Search"
  />
    {/* Sign Up Button */}
  <button className="w-1/3 h-12 bg-[#FB2E86] text-white font-medium hover:bg-[#e12b77] transition duration-300">
    Sign Up
  </button>
</div>

                {/* //////////// */}
              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
            {/* Categories Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Categories</h3>
              <ul className="mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
  
         

        </div>
        </footer>
{/* bottom */}

        <div className="bg-[#E7E4F8]  ">
    <div className="container px-5  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">
      
    <p className="text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        <a
          href="https://twitter.com/knyttnev"
          rel="noopener noreferrer"
          className="text-[#9DA0AE] ml-1"
          target="_blank"
        >
          @Right Reserved
        </a>
      </p>
      <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

     <div className="w-5 h-5 " ><a href="#"><FaFacebook  /></a></div> 
      <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><RxInstagramLogo /></a></div>
        <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><FaLinkedin  /></a></div>

    </span>
    </div>
  </div>

      
        </div>
    );
  };
  
  export default Footer;
  




  {/* <input
    type="email"
    placeholder="Enter Email Address"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
    Sign Up
  </button>
</div> */}



{/* <input
              type="text"
             
              placeholder="Enter Email Address"
           
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            Sign-Up
          </button>
        </div> */}







// import React from "react"
// import {FaFacebook, FaGithub} from "react-icons/fa"
// import { RxInstagramLogo } from "react-icons/rx";
// import {FaLinkedin } from "react-icons/fa"
// import Link from "next/link"

// function Footer() {
//   return (
//     <div className="text-[#8A8FB9]  ">
//   <footer className="bg-[#EEEFFB] py-8 text-[#8A8FB9] h-[479px] items-center">
//   <div className="container  py-24 mx-auto mt-[40px]">
//     <div className="flex flex-wrap md:text-left text-center order-first">


//     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//         Hekto
//         </h2>
//         <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
//           <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
//             <label
//               htmlFor="footer-field"
//               className="leading-7 text-sm text-gray-600"
//             >
//             </label>
//             <input
//               type="text"
//               id="footer-field"
//               placeholder="Enter Email Address"
//               name="footer-field"
//               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
//             Sign-Up
//           </button>
//         </div>
//         <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
//         Contact Info
//           <br className="lg:block hidden" />
//           17 Princess Road, London, Greater London NW1 8JR, UK
//         </p>
//       </div>

//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
//           CATEGORIES
//         </h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800  ml-6">Laptops & Computers</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800 ml-6">Cameras & Photography</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800 ml-6">Smart Phones & Tablets</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800 ml-6">Video Games & Consoles</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800 ml-6">Waterproof Headphones</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//         Customer Care
//         </h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">My Account</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Discount</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Returns</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Orders History</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//         Pages
//         </h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Blog</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Category</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
//           </li>
//         </nav>
//       </div>
      
//     </div>
//   </div>
//   <div className="bg-[#E7E4F8]">
//     <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
//       <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
//         © 2024 Hekto —
//         <a
//           href="https://twitter.com/knyttnev"
//           rel="noopener noreferrer"
//           className="text-gray-600 ml-1"
//           target="_blank"
//         >
//           @Right Reserved
//         </a>
//       </p>
//       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//      <div className="text-3xl text-gray-900" "><FaFacebook  /></div> 
//       <div className="text-3xl ml-3 text-gray-900"><RxInstagramLogo /></div>
//         <div className="text-3xl ml-3 text-gray-900"><FaLinkedin  /></div>

//     </span>
//     </div>
//   </div>
// </footer>

//     </div>
//   )
// }

// export default Footer
