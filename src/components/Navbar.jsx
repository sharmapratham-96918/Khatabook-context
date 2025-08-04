import React from "react";

const Navbar = ()=>{
    return (
        <nav className="bg-emerald-800 md:bg-blue-500 text-white  font-bold  p-3  flex items-center justify-between ">
      <h1 className="text-2xl">Khata Book</h1>
      <button className="border-2 bg-gray-700 text-white border-black p-2 cursor-pointer hover:bg-gray-500 transition delay delay-150 duration-150" >Change Theme</button>
    </nav>

    )
}
export default Navbar;