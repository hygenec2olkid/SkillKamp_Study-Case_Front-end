import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { AppConfig } from "@/utils/AppConfig";
import Login from "./Login";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Chart from "@/templates/Slide-overs";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  let [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();
  const { getItem } = useLocalStorage();
  const [isChartOpen, setIsChartOpen] = useState(false);

  useEffect(() => {
    const usr = getItem("user");
    if (usr) {
      setUser(JSON.parse(usr));
    }
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeChart() {
    setIsChartOpen(false);
  }

  function openChart() {
    setIsChartOpen(true);
  }

  return (
    <div>
      {props.meta}

      <div className="">
        <header>
          <div className="h-[52px] bg-primary-main1 text-primary-main2 justify-center items-center flex flex-col font-extralight tracking-widest ">
            <div>Get 10% Off- Use Coupon Code HAPPY123</div>
          </div>
          <div className="pt-16 pb-8 ">
            <h1 className="text-5xl text-gray-900 text-center tracking-widest">
              {AppConfig.title}
            </h1>
            {/* <h2 className="text-xl">{AppConfig.description}</h2> */}
          </div>
          <nav className=" h-[60px] border-b-2">
            <ul className="flex flex-wrap text-md font-extralight 2xl:pl-[520px] xl:pl-[400px] lg:pl-[15%] md:pl-[15%]">
              <li className="mr-20">
                <Link href="/" className="border-none text-primary-main3 ">
                  Home
                </Link>
              </li>
              <li className="mr-20">
                <Link
                  href="/shop-collection/"
                  className="border-none text-primary-main1 hover:text-primary-main3"
                >
                  Shop Collection
                </Link>
              </li>
              <li className="mr-20">
                <Link
                  href="/our-story/"
                  className="border-none text-primary-main1 hover:text-primary-main3"
                >
                  Our Story
                </Link>
              </li>
              <li className="mr-20">
                <Link
                  href="/contact/"
                  className="border-none text-primary-main1 hover:text-primary-main3"
                >
                  Contact
                </Link>
              </li>
              <li className="mr-6 flex">
                <Image
                  src={`/assets/images/user.svg`}
                  width={24}
                  height={24}
                  alt="user icon"
                  className="mr-2 cursor-pointer"
                />
                <div
                  onClick={openModal}
                  className=" border-none text-primary-main1 hover:text-primary-main3 cursor-pointer"
                >
                  <Login isOpen={isOpen} closeModal={closeModal} />
                  {user ? user.name : "Login"}
                </div>
              </li>
              <li className="mr-20">
                <Image
                  src={`/assets/images/cart-svgrepo-com.svg`}
                  width={24}
                  height={24}
                  alt="cart icon"
                  className="cursor-pointer"
                  onClick={openChart}
                />
                <Chart isOpen={isChartOpen} closeModal={closeChart} />
              </li>
            </ul>
          </nav>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-primary-main1  text-center text-sm">
          <div className="text-2xl tracking-wider py-12">{AppConfig.title}</div>
          <div className="grid grid-cols-3 px-[250px] pb-10">
            <nav>
              <ul className="font-extralight">
                <li>
                  <Link href="/" className="border-none text-primary-main1 ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop-collection/"
                    className="border-none text-primary-main1 hover:text-primary-main3"
                  >
                    Shop Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-story/"
                    className="border-none text-primary-main1 hover:text-primary-main3"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="border-none text-primary-main1 hover:text-primary-main3"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-wrap justify-center">
              <svg
                className="mr-8"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.7982 11.7172H8.20975V21.6452C8.20975 21.8412 8.36858 22 8.56459 22H12.6535C12.8495 22 13.0083 21.8412 13.0083 21.6452V11.764H15.7806C15.9608 11.764 16.1125 11.6287 16.1331 11.4497L16.5541 7.79467C16.5657 7.69411 16.5338 7.59341 16.4666 7.51797C16.3992 7.44246 16.3028 7.39924 16.2017 7.39924H13.0084V5.10812C13.0084 4.41746 13.3803 4.06723 14.1138 4.06723C14.2184 4.06723 16.2017 4.06723 16.2017 4.06723C16.3977 4.06723 16.5566 3.90834 16.5566 3.71239V0.357465C16.5566 0.161452 16.3977 0.00262581 16.2017 0.00262581H13.3243C13.304 0.00163226 13.259 0 13.1925 0C12.6933 0 10.9579 0.0980064 9.58709 1.3591C8.06824 2.7566 8.27937 4.42988 8.32983 4.71999V7.39917H5.7982C5.60219 7.39917 5.44336 7.55799 5.44336 7.75401V11.3623C5.44336 11.5583 5.60219 11.7172 5.7982 11.7172Z"
                  fill="black"
                />
              </svg>
              <svg
                className="mr-8"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.47872 14.5497C6.90013 17.5791 6.19502 20.4831 4.10393 22C3.45933 17.4218 5.05103 13.9843 5.79133 10.3345C4.52963 8.21154 5.94312 3.94134 8.60182 4.99404C11.8743 6.28764 5.76823 12.8832 9.86683 13.7082C14.1469 14.5673 15.8937 6.28324 13.2394 3.58934C9.40593 -0.302457 2.07883 3.49804 2.98083 9.06954C3.19973 10.4313 4.60663 10.8438 3.54293 12.7237C1.08883 12.1803 0.356225 10.2443 0.450825 7.66374C0.602625 3.43974 4.24472 0.484043 7.89892 0.0737435C12.52 -0.444357 16.8573 1.77104 17.4568 6.11714C18.1311 11.0242 15.3712 16.3394 10.4289 15.9566C9.08913 15.8521 8.52812 15.1877 7.47872 14.5497Z"
                  fill="black"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_37_298)">
                  <path
                    d="M18.3655 2.15216H16.0695C15.3828 2.15216 14.8262 2.70878 14.8262 3.39546V5.6915C14.8262 6.37809 15.3828 6.9348 16.0695 6.9348H18.3655C19.0522 6.9348 19.6088 6.37814 19.6088 5.6915V3.39546C19.6088 2.70878 19.0522 2.15216 18.3655 2.15216ZM18.6523 5.68148C18.6523 5.83957 18.5638 5.97823 18.4054 5.97823H16.1094C15.9511 5.97823 15.7827 5.83957 15.7827 5.68148V3.38545C15.7827 3.22737 15.9511 3.10869 16.1094 3.10869H18.4054C18.5638 3.10869 18.6523 3.22737 18.6523 3.38545V5.68148Z"
                    fill="black"
                  />
                  <path
                    d="M17.3363 0.239136H4.72257C2.14075 0.239136 0 2.33601 0 4.92582V17.0542C0 19.644 2.14075 21.7609 4.72257 21.7609H17.3362C19.9181 21.7609 22 19.644 22 17.0542V4.92582C22 2.33601 19.9181 0.239136 17.3363 0.239136ZM21.0435 17.0542C21.0435 19.1165 19.3908 20.8044 17.3363 20.8044H4.72257C2.66802 20.8044 0.956484 19.1165 0.956484 17.0542V9.32608H6.92184C5.63836 10.4022 4.82255 12.0476 4.82255 13.8645C4.82255 17.161 7.50436 19.8403 10.8008 19.8403C14.0972 19.8403 16.779 17.1622 16.779 13.8658C16.779 12.0488 15.9631 10.4021 14.6796 9.32608H21.0434V17.0542H21.0435ZM10.8008 8.83787C13.5699 8.83787 15.8226 11.0907 15.8226 13.8596C15.8226 16.6286 13.57 18.8814 10.8008 18.8814C8.03163 18.8814 5.77904 16.6286 5.77904 13.8596C5.77904 11.0907 8.03163 8.83787 10.8008 8.83787ZM21.0435 8.3696H13.1426C12.423 8.01089 11.6315 7.89135 10.8008 7.89135C9.97004 7.89135 9.17847 8.01094 8.45887 8.3696H0.956527V4.92587C0.956527 2.86358 2.66806 1.19571 4.72261 1.19571H17.3363C19.3908 1.19571 21.0435 2.86362 21.0435 4.92587V8.3696Z"
                    fill="black"
                  />
                  <path
                    d="M10.8008 10.2726C8.82283 10.2726 7.21387 11.8816 7.21387 13.8596C7.21387 15.8375 8.82287 17.4465 10.8008 17.4465C12.7788 17.4465 14.3878 15.8375 14.3878 13.8596C14.3878 11.8816 12.7788 10.2726 10.8008 10.2726ZM10.8008 16.49C9.35062 16.49 8.17039 15.31 8.17039 13.8596C8.17039 12.4092 9.35062 11.2292 10.8008 11.2292C12.251 11.2292 13.4312 12.4092 13.4312 13.8596C13.4313 15.31 12.251 16.49 10.8008 16.49Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_37_298">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <nav>
                <ul className="font-extralight">
                  <li>
                    <Link
                      href="/shipping-returns/"
                      className="border-none text-primary-main1 "
                    >
                      Shipping & Returns
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/store-policy/"
                      className="border-none text-primary-main1 "
                    >
                      Store Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/store-policy/"
                      className="border-none text-primary-main1 "
                    >
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq/"
                      className="border-none text-primary-main1 "
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-xl font-extralight pb-4">
            Join Our Mailing List
          </div>
          <form className="pb-8">
            <input
              className="border-[1px] hover:border-[3px] border-primary-main1 w-[350px] h-[40px] ml-[-20px] pl-2"
              type="email"
              required
              placeholder="Enter your email here*"
            />
            <button className="bg-primary-main1 h-[40px] w-[130px] font-extralight text-primary-main2 ml-2 hover:bg-primary-main3">
              Subscibe Now
            </button>
          </form>
          <br />
          <div className="flex flex-wrap justify-center">
            © 2035 by happy kids. Powered and secured by
            <a className="ml-1" href="https://creativedesignsguru.com">
              CreativeDesignsGuru
            </a>
            .
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Main };
