import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mx-20 mt-20">
      <div>
        <div>
          <h1 className="text-3xl font-semibold">Interested To Book</h1>
          <h1>Please Share your Contract into</h1>
          <form action="">
            <input type="email"  className="py-5 px-4 border-2 border-r-0 bg-gray-200 rounded-lg rounded-r-none"/>
            <button className="py-5 px-4 border-2 border-l-0 bg-gray-500 rounded-lg rounded-l-none text-lg font-semibold">Subscribe</button>
          </form>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row items-center justify-between my-6 border-t-2">
        <div className="flex flex-row items-center gap-3">
          <CiLocationOn />
          Bandar, Bandar, Narayanganj
        </div>
        <div>
          <h1 className="text-3xl font-thin">
            Real <br /> State
          </h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaFacebookF className="w-7 h-7" />
          <FaWhatsapp className="w-7 h-7" />
          <FaInstagram className="w-7 h-7" />
        </div>
      </div>
      <div className="py-5 border-t-2 text-center">
        <h1>All rights reserved</h1>
      </div>
    </div>
  );
}
