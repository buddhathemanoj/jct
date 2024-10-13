import Link from "next/link";

const SidebarLayout = ({ children }) => {
  return (
    <>
      <div className=" flex">
        <aside className=" bg-gray-900 text-white p-5 w-1/5 h-screen">
          <ul className=" flex flex-col ">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </aside>
        {children}
      </div>
    </>
  );
};


export default SidebarLayout