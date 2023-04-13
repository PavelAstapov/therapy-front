import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import LogoDesktop from "../img/logo_desktop.svg";
import ArrowDown from "../img/arrow_down.svg";

// console.log(ArrowDown);

const navSection = () => {
  const openSubMenu = (e: any) => {
    console.log(e.currentTarget);
    e.currentTarget.nextSibling.classList.toggle("hidden");
  };

  return (
    <>
      <section className="w-full relative ">
        <div className="bg-dark-purple w-full py-5 lg:block hidden">
          <div className="flex mx-auto w-90% max-w-1560 justify-end gap-10">
            <div className="flex gap-2.5 items-center">
              <Icon
                icon="ic:baseline-local-phone"
                color="white"
                width="20"
                height="20"
              />
              <a
                className="font-medium  text-white leading-5"
                href="tel:045 525 0116"
              >
                045 525 0116
              </a>
            </div>
            <div className="flex gap-2.5 items-center">
              <Icon
                icon="material-symbols:mail-rounded"
                color="white"
                width="20"
                height="20"
              />
              <a
                className="font-medium text-white leading-5"
                href="mailto:info@debundeling.nl"
              >
                info@debundeling.nl
              </a>
            </div>
            <div className="flex gap-2.5 items-center">
              <Icon
                icon="material-symbols:location-on-rounded"
                color="white"
                width="20"
                height="20"
              />
              <p className="font-medium text-white leading-5">
                Sint Gregoriuslaan 1a 6442 AE Brunssum
              </p>
            </div>
          </div>
        </div>
        <nav className="mx-auto hidden xl:flex w-90% max-w-1560 items-start gap-52px justify-end">
          <Link
            className="absolute left-0 mt-4 max-w-sm 2xl:max-w-none"
            href="/"
          >
            <Image className="w-full" src={LogoDesktop} alt="test" />
          </Link>
          <ul className="flex px-0 pt-11 gap-5 2xl:gap-11">
            <li className="relative group flex" tabIndex={0}>
              <a
                className="font-medium text-dark-purple text-base 2xl:text-2xl pb-8 flex items-center gap-2 hover:text-light-purple"
                href="#"
              >
                Klachten
                <svg
                  className=""
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5176 0.260254H0.482354C0.0547936 0.260254 -0.16302 0.776554 0.143533 1.08311L4.66115 5.60073C4.8467 5.78628 5.15325 5.78628 5.33888 5.60073L9.8565 1.08311C10.163 0.776554 9.94516 0.260254 9.5176 0.260254Z"
                    fill="#2C2E80"
                  />
                </svg>
              </a>

              <ul className="hidden group-hover:block absolute left-0 shadow-md max-w-sm min-w-max menu menu-compact w-auto top-14 bg-base-100 p-2 rounded-box text-2xl">
                <li>
                  <a
                    className="font-medium text-dark-purple active:text-white text-base 2xl:text-2xl py-4"
                    href="#"
                  >
                    Kinderfysiotherapie
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-dark-purple active:text-white text-base 2xl:text-2xl py-4"
                    href="#"
                  >
                    Algemene fysiotherapie
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-dark-purple active:text-white text-base 2xl:text-2xl py-4"
                    href="#"
                  >
                    Manuele fysiotherapie
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-dark-purple active:text-white text-base 2xl:text-2xl py-4"
                    href="#"
                  >
                    Fysiotherapie voor ouderen
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="font-medium text-dark-purple text-base 2xl:text-2xl flex items-center gap-2 hover:text-light-purple"
                href="#"
              >
                Specialisaties
              </a>
            </li>
            <li>
              <a
                className="font-medium text-dark-purple text-base 2xl:text-2xl flex items-center gap-2 hover:text-light-purple"
                href="#"
              >
                Locaties
              </a>
            </li>
            <li>
              <a
                className="font-medium text-dark-purple text-base 2xl:text-2xl flex items-center gap-2 hover:text-light-purple"
                href="#"
              >
                Tarieven
              </a>
            </li>
            <li>
              <a
                className="font-medium text-dark-purple text-base 2xl:text-2xl flex items-center gap-2 hover:text-light-purple"
                href="#"
              >
                Over ons
              </a>
            </li>
          </ul>
          <button className="btn btn-primary h-16 px-8 mt-7 text-white normal-case text-base 2xl:text-[18px]">
            Afspraak maken
          </button>
        </nav>

        <nav className="xl:hidden w-full mx-auto flex justify-end">
          <Link className="max-w-250px absolute left-0 top-2" href="/">
            <Image src={LogoDesktop} className="w-full" alt="test" />
          </Link>
          <div>
            <div className="collapse overflow-visible static">
              <input type="checkbox" className="peer" />
              <div className="collapse-title p-5">
                <svg
                  width="40"
                  height="26"
                  viewBox="0 0 40 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="3.5" rx="1" fill="#2E3080" />
                  <rect y="11" width="40" height="3.5" rx="1" fill="#2E3080" />
                  <rect y="22" width="40" height="3.5" rx="1" fill="#2E3080" />
                </svg>
              </div>
              <div className="collapse-content pb-0 pr-0 pl-5 w-full left-0 top-[64px] absolute bg-dark-purple">
                <ul className="[&>*]:text-white pt-1">
                  <li className="flex flex-wrap items-center justify-between">
                    <Link className="text-[22px]" href="#">
                      Klachten
                    </Link>
                    <button
                      onClick={(e) => openSubMenu(e)}
                      className="p-6 bg-arrow-down"
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className="hidden w-full pl-4">
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                    <Link className="text-[22px]" href="#">
                      Specialisaties
                    </Link>
                    <button
                      onClick={(e) => openSubMenu(e)}
                      className="p-6 bg-arrow-down"
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className="hidden w-full pl-4">
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                    <Link className="text-[22px]" href="#">
                      Locaties
                    </Link>
                    <button
                      onClick={(e) => openSubMenu(e)}
                      className="p-6 bg-arrow-down"
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className="hidden w-full pl-4">
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                    <Link className="text-[22px]" href="#">
                      Tarieven
                    </Link>
                    <button
                      onClick={(e) => openSubMenu(e)}
                      className="p-6 bg-arrow-down"
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className="hidden w-full pl-4">
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                    <Link className="text-[22px]" href="#">
                      Over ons
                    </Link>
                    <button
                      onClick={(e) => openSubMenu(e)}
                      className="p-6 bg-arrow-down"
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className="hidden w-full pl-4">
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                      <li className="p-4">
                        <Link className="text-[20px]" href="#">
                          Klachten
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-white pt-6 text-[18px] font-medium">
                  Wil je eens langskomen?
                </p>
                <button className="btn bg-white hover:bg-light-purple focus:bg-light-purple h-16 px-8 mt-6 text-dark-purple normal-case text-base 2xl:text-[18px]">
                  Maak afspraak
                </button>
                <hr className="relative w-[110%] mt-9 mb-9 left-[-20px] opacity-20" />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default navSection;
