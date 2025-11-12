"'use client';"
import { FaUser, FaBars } from "react-icons/fa";
import styles from './Header.module.scss'

export default function Header() {
  return ( 
    <header className="fixed w-full bg-[var(--bg-header)] flex justify-center items-center px-5 xl:py-5 lg:py-5 md:py-4 py-3 z-40">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full flex items-center justify-between">
            <div className="flex items-center">
                <img className="me-1" src="/img/logo.png" alt="Logo" width={60} height={60} />
                <p className="uppercase leading-5 font-[var(--main-title)] text-white">blackwell<br/>global</p>
            </div>
            <div className="xl:flex lg:flex hidden items-center">
                <div className="xl:me-25 lg:me-15 me-0">
                    <p className="uppercase text-white text-center font-light text-sm">promotion<br />end in</p>
                </div>
                <div className="flex gap-10">
                    <div className={`${styles['promotion-datetime']} text-center relative`}>
                        <div className="text-white text-4xl mb-1">27</div>
                        <div className="text-white text-xs font-light">Days</div>
                    </div>
                    <div className={`${styles['promotion-datetime']} text-center relative`}>
                        <div className="text-white text-4xl mb-1">23</div>
                        <div className="text-white text-xs font-light">Hours</div>
                    </div>
                    <div className={`${styles['promotion-datetime']} text-center relative`}>
                        <div className="text-white text-4xl mb-1">45</div>
                        <div className="text-white text-xs font-light">Minutes</div>
                    </div>
                    <div className={`${styles['promotion-datetime']} text-center relative`}>
                        <div className="text-white text-4xl mb-1">07</div>
                        <div className="text-white text-xs font-light">Seconds</div>
                    </div>
                </div>
            </div>
            <div className="xl:flex lg:flex hidden items-center gap-7">
                <button className="uppercase text-white bg-[var(--orange)] cursor-pointer px-5 py-2 rounded-full hover:bg-orange-500 transition-colors">
                    register now
                </button>
                <div className={`${styles['user-icon-bottom-line']} relative`}>
                    <FaUser className="text-2xl text-gray-500" />
                </div>
            </div>
            {/* Hamburger in small screen*/}
            <div className="xl:hidden lg:hidden block">
                <FaBars className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>
    </header>
  );
}