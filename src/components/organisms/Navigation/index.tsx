import { useState } from 'react';
import Logo from '../../atoms/Logo';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-white px-7">
        <Logo style={{ width: 160 }} />
        <button
          className="btn-square text-2xl text-black"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <i className="bi bi-list"></i>
        </button>
      </nav>
      {toggleMenu && (
        <button
          className="fixed left-0 top-0 z-[55] h-screen w-screen"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      )}
      <div
        className={`fixed right-0 top-0 z-[60] h-screen w-[300px] bg-white p-4 duration-200 ${
          !toggleMenu ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <button
          className="btn-square text-2xl bg-slate-500 text-slate-50"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <i className="bi bi-x-lg "></i>
        </button>
        <ul className="mt-6 flex flex-col gap-3">
          <li>
            <a href="#about-us" className="hover:underline">
              Who We Are
            </a>
          </li>
          <li>
            <a href="#core-values" className="hover:underline">
              Our Values
            </a>
          </li>
          <li>
            <a href="#speciality" className="hover:underline">
              The Perks
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
