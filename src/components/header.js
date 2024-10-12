
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className=" flex  items-center justify-between p-5 h-20 bg-blue-600 text-white">
        <h1>Company Name</h1>
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
      </div>
    </>
  );
};

export default Header;
