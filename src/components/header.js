import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className=" flex  items-center justify-between p-5 px-20 h-[60px]  text-black">
       
        <ul className=" flex items-center gap-5">
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
        <h1>Company Name</h1>
        <button className="bg-blue-500 px-4 py-2 text-white">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Header;
