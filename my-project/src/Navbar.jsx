import React from "react";

function Navbar() {



    const navItems = [
  { label: "Home", onClick: () => console.log("Home clicked") },
  { label: "About", onClick: () => console.log("About clicked") },
  { label: "Services", onClick: () => console.log("Services clicked") },
  { label: "Contact", onClick: () => console.log("Contact clicked") },
];

    return(
        <nav className=" shadow-lg fixed backdrop-blur-md z-50 rounded-2xl m-[4vh] bg-white/20 ">
           <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex-row flex h-[10vh] p-5 w-full justify-between items-center">
             {navItems.map((item,index)=>(
               <button onClick={item.onClick} className="text-xl text-white p-3 m-1 items-center rounded-3xl m-2 border-2 border-white hover:bg-gray-600 hover:text-white ">{item.label}</button>

            ))}
            
               
            </div>
        </nav>  
    )
}

export default Navbar;