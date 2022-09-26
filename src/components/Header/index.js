import Link from 'next/link';

import Logo from 'images/logo.svg';
import { useCallback, useState } from 'react';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>
        <button className={['w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50', menu ? 'text-white fixed right-4 ' : 'relative text-inherit'].join(' ')} onClick={toggleMenu}>
          <span className="material-icons"> {menu ? 'close' : 'menu'} </span>
        </button>
        <div className={['lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20', menu ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-gray-900/40 ' : 'hidden opacity-0 invisible'].join(' ')}>
          <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
            <li className="">
              <Link href="/destinations">
                <a className="lg:text-gray-800 text-white"> Destinations </a>
              </Link>
            </li>
            <li className="">
              <Link href="/destinations">
                <a className="lg:text-gray-800 px-9 text-white"> Hotels </a>
              </Link>
            </li>
            <li className="">
              <Link href="/flights">
                <a className="lg:text-gray-800 px-9 text-white"> Flights </a>
              </Link>
            </li>
            <li className="">
              <Link href="/bookings">
                <a className="lg:text-gray-800 px-9 text-white"> Bookings </a>
              </Link>
            </li>
            <li className="">
              <Link href="/login">
                <a className="lg:text-gray-800 px-9 text-white"> Login </a>
              </Link>
            </li>
            <li className="">
              <Link href="/sign-up">
                <a className="lg:text-gray-800 text-white px-5 py-1 border lg:border-gray-800 border-white rounded-md mx-3"> Sign up </a>
              </Link>
            </li>
            <li className="">
              <button className="px-9 text-white lg:text-gray-800 relative">
                EN <span className="w-2 h-2 absolute border-b border-r border-white lg:border-gray-800 transform rotate-45 translate-y-1/2 ml-2"> </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
