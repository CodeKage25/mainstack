'use client';
import MainstackLogo from "@/assets/icons/MainstackLogo";
import HomeSvg from "@/assets/icons/HomeSvg";
import Analytics from "@/assets/icons/Analytics";
import RevenueSvg from "@/assets/icons/RevenueSvg";
import CRMSvg from "@/assets/icons/CRMSvg";
import MenuSvg from "@/assets/icons/MenuSvg";
import NotificationSvg from "@/assets/icons/NotificationSvg";
import ChatSvg from "@/assets/icons/ChatSvg";
import Widgets from "@/assets/icons/Widgets";
import Ellipse from "@/assets/icons/Ellipse";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '#', key: 1, icon: HomeSvg, href: '/home' },
    { name: 'Analytics', href: '#', key: 2, icon: Analytics, href: '/analytics' },
    { name: 'Revenue', href: '#', key: 3, icon: RevenueSvg, href: '/revenue' },
    { name: 'CRM', href: '#', key: 4, icon: CRMSvg, href: '/crm' },
    { name: 'App', href: '#', key: 5, icon: Widgets, href: '/apps' },
  ];

const NavBar = () => {
    const pathname = usePathname();
  return (
    <nav className="col-start-1 col-end-9 flex pl-4 pr-4 justify-center items-center bg-white w-[100%]">
      <div className="flex w-[97.78%] h-[64px] pl-4 pr-4 justify-between items-center rounded-[100px] border-2 border-solid border-white bg-white shadow-[0_2px_4px_0_rgba(45,59,67,0.05),0_2px_6px_0_rgba(45,59,67,0.06)]">
        <MainstackLogo />
        <div className="flex w-[1%] justify-center items-center gap-5" >
        {navigation.map((item) => (
            <Link
            href={item.href}
            key={item.key}
            className={clsx("flex pt-2 pl-[18px] pb-2 pr-[14px] gap-1 justify-center items-center rounded-[100px]",
            {
                "bg-[#131316] text-white" : pathname === item.href,
            },)}
            >
                {/* <div className="flex pt-2 pl-[18px] pb-2 pr-[14px] gap-1 justify-center items-center rounded-[100px]" key={item.key}> */}
                    <item.icon  />
                    {item.name}
                {/* </div> */}
                </Link>
        ))}
        </div>
              <div className="inline-flex items-center gap-2">
                  <NotificationSvg />
                  <ChatSvg />
                  <div className="flex pt-1 pl-[5px] pr-3 pb-1 items-center gap-2 rounded-[100px] bg-[#EFF1F6]">
                      <div className="flex w-8 h-8 pt-[9px] pl-[6.36px] pr-[6.375px] justify-center items-center rounded-[100px] bg-[#DBDEE5] text-center font-[Degular] text-sm not-italic font-semibold leading-4 tracking-[-0.025em] text-white bg-gradient-to-r from-custom-start to-custom-end"> OJ</div>
                      <MenuSvg />
                  </div>
            </div>   
      </div>
    </nav>
  );
};

export default NavBar;
