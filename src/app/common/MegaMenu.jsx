import React from "react";

export default function MegaMenu({menuHover}) {
  return (
    <div className={`${menuHover ? "opacity-100" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[28%_auto] gap-24 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Women's New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Blazers
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Dresses
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Men's New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_90187318-a3f1-492f-9377-b18381a175a6_600x.jpg?v=1724869721" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Women's New  Arrivals</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop-1_3ac58a1d-4386-40be-a9bf-9db422c8941d_600x.jpg?v=1724869727" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Men's New  Arrivals</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}
