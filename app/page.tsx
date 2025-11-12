"use client";

import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const section_2_list = [
  "Spotlight",
  "Top Strategies",
  "Low Drawdown",
  "Medium Drawdown",
  "High Drawdown",
  "New Strategies"
];

const section_4_list = [
  { classname: '', text: 'Install our app, “Blackwell Invest”' },
  { classname: '', text: 'Choose a signal Master and click “Copy”' },
  { classname: '', text: 'Set your trade size preferences' },
  { classname: '', text: 'Click “Agree and Copy”' },
];

const section_5_list = [
  { img: '/img/step-1.png', text: 'Install our app, “Blackwell Invest”' },
  { img: '/img/step-2.png', text: 'Login OR create a new account' },
  { img: '/img/step-3.png', text: 'Click “Account”' },
  { img: '/img/step-4.png', text: 'Click “Link an account” ' },
  { img: '/img/step-5.png', text: 'Select “BlackwellGlobalAsia-Live” server' },
  { img: '/img/step-6.png', text: 'Fill in your Blackwell Global trading account OR create a new account' },
  { img: '/img/step-7.png', text: 'Click “Copy Trades”' },
  { img: '/img/step-8.png', text: 'Click “Done”' },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const section_6_list = [
  { img: '/img/icon-1.png', title: 'Regulated', description: 'The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.' },
  { img: '/img/icon-2.png', title: '0 Commissions', description: 'When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.' },
  { img: '/img/icon-3.png', title: 'User-friendly', description: 'With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder !' },
  { img: '/img/icon-4.png', title: 'Tier 1 liquidity', description: 'Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.' },
];

const section_7_tabs = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png'];
const section_7_tab_panel = [
  { img: '/img/reason-1.png', title: 'Discover', text: 'Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.' },
  { img: '/img/reason-2.png', title: 'Activity', text: 'See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.' },
  { img: '/img/reason-3.png', title: 'Trade', text: 'Seamlessly trade oil CFDs, indices, and currency pairs with ease.' },
  { img: '/img/reason-4.png', title: 'Positions', text: 'Easily track the status of all your trades and monitor your account metrics in real-time.' },
  { img: '/img/reason-5.png', title: 'Account', text: 'Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!' },
];

export default function Home() {
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  // const activeBorder = hoveredIndex !== null ? stepColors[hoveredIndex] : "#4A65E0";

  return (
    <main className="xl:pt-[100px] lg:pt-[100px] md:pt-[91px] pt-[83px]">

      <section className="bg-[var(--bg-color)] xl:py-20 lg:py-10 py-10">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto">
          <div className="flex flex-wrap items-center relative">
            {/* Hide in desktop, show in mobile */}
            <div className="xl:hidden lg:block block w-full text-center mb-10">
              <h1 className="text-5xl uppercase text-[var(--darkblue)] mb-2 relative z-20">copy trading</h1>
              <h3 className="text-4xl italic text-white mb-5 relative z-20">with Blackwell Invest</h3>
              <div className="flex justify-center gap-5 relative">
                <div className="w-[100px] rounded-lg overflow-hidden cursor-pointer z-20">
                  <a href="/"><img className="w-full object-cover select-none" src="/img/google-play.jpg" alt="google-play" /></a>
                </div>
                <div className="w-[100px] rounded-lg overflow-hidden cursor-pointer z-20">
                  <a href="/"><img className="w-full object-cover select-none" src="/img/app-store.jpg" alt="app-store" /></a>
                </div>
                <div className="absolute lg:-bottom-[20px] -bottom-[20px] lg:left-[55%] left-[60%] lg:w-[200px] w-[150px] z-10">
                  <img className="object-cover w-full" src="/img/regular.png" alt="regular" />
                </div>
              </div>
            </div>
            {/* Hide in desktop, show in mobile */}
            <div className="xl:w-1/2 lg:w-full w-full overflow-hidden xl:pr-10">
              <img className="w-full object-cover xl:ml-0 lg:-ml-10 -ml-20" src="/img/hand.png" alt="hand_logo" />
            </div>
            <div className="xl:w-1/2 lg:w-full w-full xl:pl-10">
              {/* Hide in mobile, show in desktop */}
              <div className="xl:block lg:hidden hidden text-center mb-20">
                <h1 className="text-6xl uppercase text-[var(--darkblue)] mb-2">copy trading</h1>
                <h3 className="text-4xl italic text-white mb-5">with Blackwell Invest</h3>
                <div className="flex justify-center gap-5 relative">
                  <div className="xl:w-1/4 rounded-lg overflow-hidden cursor-pointer z-10">
                    <a href="/"><img className="w-full object-cover select-none" src="/img/google-play.jpg" alt="google-play" /></a>
                  </div>
                  <div className="xl:w-1/4 rounded-lg overflow-hidden cursor-pointer z-10">
                    <a href="/"><img className="w-full object-cover select-none" src="/img/app-store.jpg" alt="app-store" /></a>
                  </div>
                  <div className="absolute -bottom-[70px] right-5 xl:w-1/4">
                    <img className="object-cover w-full" src="/img/regular.png" alt="regular" />
                  </div>
                </div>
              </div>
              {/* Hide in mobile, show in desktop */}

              <div className="xl:text-start lg:text-end text-end mb-10 xl:pr-0 lg:pr-2 pr-2 xl:mt-0 lg:-mt-15 -mt-15">
                <h3 className="xl:text-4xl lg:text-3xl text-3xl font-bold text-[var(--darkblue)] font-[var(--main-title)] mb-1">Choose & Trade</h3>
                <h3 className="xl:text-4xl lg:text-3xl text-3xl font-bold italic text-[var(--gold)] font-[var(--main-title)] mb-1">Ready-To-Go Strategies</h3>
                <p className="text-md text-white font-[var(--subtitle)] mb-5 w-[95%] xl:text-start lg:text-end text-end xl:ml-0 lg:ml-auto ml-auto">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
                <div className="flex xl:justify-start lg:justify-end justify-end mb-5 xl:gap-5 lg:gap-3 gap-3">
                  <div className="border border-[var(--gold)] rounded-md px-3 py-1 text-white cursor-default hover:bg-[var(--gold)] transition-colors">Forex</div>
                  <div className="border border-[var(--orange)] rounded-md px-3 py-1 text-white cursor-default hover:bg-[var(--orange)] transition-colors">Precious Metals </div>
                  <div className="border border-red-500 rounded-md px-3 py-1 text-white cursor-default hover:bg-red-500 transition-colors">Oil</div>
                  <div className="border border-[var(--darkblue)] rounded-md px-3 py-1 text-white cursor-default hover:bg-[var(--darkblue)] transition-colors">Indices</div>
                </div>
                <button className="uppercase text-white bg-[var(--orange)] cursor-pointer px-7 py-3 rounded-lg hover:bg-orange-500 transition-colors mb-5">
                  Register Now
                </button>
                <p className="text-white">When you invest, your capital is at risk. Be prudent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-color)] xl:py-20 lg:py-10 py-10">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] xl:mb-20 lg:mb-15 mb-10">Fast Matching</h3>
          <div className="flex flex-wrap justify-center items-center">
            <div className="xl:w-1/2 lg:w-1/2 w-full xl:mb-0 lg:mb-10 mb-10">
              <img className="xl:w-1/3 lg:w-1/2 w-1/3 xl:ml-auto lg:mx-0 lg:ml-auto mx-auto object-cover" src="/img/mobile-1.png" alt="section_two_mobile" />
            </div>
            <div className="xl:w-1/2 lg:w-1/2 w-full flex justify-center xl:mb-0 lg:mb-10 mb-10 xl:pl-20">
              <ul className="xl:w-full lg:w-1/2 md:w-1/3 w-2/3">
                { 
                  section_2_list.map((item, index) => (
                    <li key={index} className="flex items-center gap-6 mb-10">
                      <img className="xl:w-[80px] lg:w-[80px] w-[50px] object-cover" src="/img/list-icon.png" alt="list-logo" />
                      <p className="xl:text-3xl lg:text-xl text-xl text-white -mt-2">{item}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-color)] xl:py-20 lg:py-20 py-20 overflow-hidden">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] xl:mb-10 lg:mb-8 mb-8">Easy Analysis</h3>
          <div className="xl:mb-20 lg:mb-30 mb-30 flex justify-center xl:px-0 lg:px-0 px-5">
            <p className="text-xl xl:w-4/5 lg:w-4/5 w-full text-center text-[var(--gold)]">Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place.</p>
          </div>
          <div className="w-full relative">
            <div className="flex justify-center items-center">
              <div className="relative xl:w-[300px] lg:w-[300px] w-[200px]">
                <img className="xl:w-full object-cover opacity-75" src="/img/mobile-2.png" alt="mobile_section_three" />
                {/* absolute image */}
                <img className="w-full object-cover absolute xl:-top-10 lg:-top-25 -top-20 xl:-left-40 lg:-left-40 -left-25" src="/img/function-1.png" alt="img-1" />
                <img className="w-full object-cover absolute xl:top-30 lg:top-10 top-10 xl:-right-40 lg:-right-40 -right-25" src="/img/function-2.png" alt="img-2" />
                <img className="w-full object-cover absolute xl:top-60 lg:top-40 top-40 xl:-left-40 lg:-left-40 -left-25" src="/img/function-3.png" alt="img-3" />
                <img className="w-full object-cover absolute xl:top-80 lg:top-60 top-60 xl:-right-40 lg:-right-40 -right-25" src="/img/function-4.png" alt="img-4" />
                <img className="w-full object-cover absolute xl:top-120 lg:top-100 top-90 xl:-left-40 lg:-left-40 -left-25" src="/img/function-5.png" alt="img-5" />
                {/* absolute image */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[var(--bg-color)] xl:py-15 lg:py-10 py-10 relative">
        <img className="absolute top-0 w-full" src="/img/bg-1.png" alt="bg-1" />
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto relative z-10 xl:pt-45 lg:pt-30 pt-30">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] mb-10">Trade Like a Pro in Minutes</h3>
          <div className="flex flex-wrap items-center">
            <div className="xl:w-1/2 lg:w-full w-full xl:px-0 lg:px-5 px-5">
                {
                  section_4_list.map((item, index) => (
                    <div key={index} className={`border mb-7 xl:px-10 lg:px-10 px-10 xl:py-5 lg:py-5 py-5 ${(index + 1) % 2 ? "border-[var(--gold)]" : "border-[var(--orange)]"} ${index == 1 ? 'bg-[var(--bg-color)] xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-tr-none xl:rounded-br-none xl:border-r-[var(--bg-color)] xl:w-[100.2%] lg:rounded-lg rounded-lg z-20' : 'rounded-lg xl:mr-5 lg:mr-0 mr-0'}`}>
                      <div className="flex items-center">
                        <span className={`${(index + 1) % 2 ? "text-[var(--gold)]" : "text-[var(--orange)]"} italic text-5xl xl:mr-25 lg:mr-50 mr-20`}>{index + 1}</span>
                        <p className="text-white xl:text-2xl lg:text-xl text-xl ">{item.text}</p>
                      </div>
                      <div className={`xl:hidden ${index == 0 ? 'lg:flex flex' : 'lg:hidden hidden'} justify-center mt-5`}>
                        <img className="w-1/3 object-cover" src="/img/guide-2.png" alt="guide-2" />
                      </div>
                    </div>
                  ))
                }
            </div>
            <div className="xl:w-1/2 lg:w-full w-full xl:block lg:hidden hidden mb-10 -z-20">
              <div className="border border-[var(--orange)] xl:w-full rounded-xl flex justify-center items-center overflow-hidden">
                <img className="w-[500px] object-cover" src="/img/guide-2.png" alt="guide-2" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <div className="xl:w-[200px] lg:w-[200px] w-[150px] overflow-hidden rounded-lg">
              <a href="/">
                <img className=" object-cover" src="/img/google-play.jpg" alt="google-play" />
              </a>
            </div>
            <div className="xl:w-[200px] lg:w-[200px] w-[150px] overflow-hidden rounded-lg">
              <a href="/">
                <img className="w-full object-cover" src="/img/app-store.jpg" alt="app-store" />
              </a>
            </div>
          </div>
        </div> 
      </section>

      <section className="bg-[var(--bg-color)] xl:py-5 lg:py-10 py-10">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto relative z-10 xl:pt-45 lg:pt-30 pt-30">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] mb-10">How to Link MT4 Account</h3>
          <div className="mb-10 px-5">
            <Carousel arrows={true} swipeable={true} responsive={responsive}>
              {
                section_5_list.map((item, index) => (
                  <>
                    <div key={index} className="list-arrow border border-[var(--orange)] rounded-lg mx-2 text-center relative xl:p-10 lg:py-5 py-5 relative h-full xl:p-5 lg:p-5 p-2">
                      <img className="w-full object-cover" src={item.img} alt={`step-${index + 1}`} />
                      <p className="text-xl text-white">{item.text}</p>
                    </div>
                  </>
                ))
              }
            </Carousel>
          </div>
          <div className="flex justify-center items-center">
            <button className="uppercase text-white bg-[var(--orange)] cursor-pointer px-7 py-3 rounded-lg hover:bg-orange-500 transition-colors mb-5">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-color)] xl:py-10 lg:py-10 py-10 relative overflow-hidden px-5">
        <img className="absolute top-0 w-full z-10 object-cover" src="/img/bg-2.png" alt="bg-2" />
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto xl:pt-45 lg:pt-30 pt-30 z-20 relative">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] mb-10">Why Choose Us ?</h3>
          {
            section_6_list.map((item, index) => (
              <div key={index} className="w-full py-5 px-5 bg-white rounded-lg flex xl:flex-row lg:flex-row flex-col gap-5 mb-5">
                <div className="xl:w-1/3 lg:w-1/3 w-full flex items-center">
                  <img className="w-1/5 object-cover xl:mr-20" src={item.img} alt={`icon-${index + 1}`} />
                  <p className="text-[var(--lightblue)] font-bold text-2xl">{item.title}</p>
                </div>
                <div className="xl:w-2/3 lg:w-2/3 w-full flex items-center">
                  <p className="text-md">{item.description}</p>
                </div>
              </div>
            ))
          }
          <div className="flex justify-center items-center">
            <button className="uppercase text-white bg-[var(--orange)] cursor-pointer px-7 py-3 rounded-lg hover:bg-orange-500 transition-colors mb-5">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-color)] xl:py-10 lg:py-10 py-10 relative overflow-hidden px-5">
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto pt-20 z-20 relative">
          <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] mb-20">Navigate Our App in 5 Clicks</h3>
          <div className="mb-10">
            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
              <TabList>
                { 
                  section_7_tabs.map((item, index) => (
                    <Tab key={index}>
                      <div className="px-5">
                        <img className="object-cover xl:w-[60px] lg:w-[60px] w-[60px] aspect-square" src={`/img/${item}`} alt={`icon${index}`} />
                      </div>
                    </Tab>
                  ))
                }
              </TabList>
              {
                section_7_tab_panel.map((item, index) => (
                  <TabPanel key={index}>
                    <div className="flex flex-wrap items-center bg-[var(--gold)]">
                      <div className="xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-15 px-20 xl:pt-0 lg:pt-0 pt-10">
                        <h5 className="text-3xl text-[var(--lightblue)] font-bold mb-5">{item.title}</h5>
                        <p className="text-xl">{item.text}</p>
                      </div>
                      <div className="xl:w-1/2 lg:w-1/2 w-full">
                        <img className="w-full object-cover" src={item.img} alt={`reason-${index + 1}`} />
                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </div>
          <div className="flex justify-center gap-3">
            <div className="xl:w-[200px] lg:w-[200px] w-[150px] overflow-hidden rounded-lg">
              <a href="/">
                <img className=" object-cover" src="/img/google-play.jpg" alt="google-play" />
              </a>
            </div>
            <div className="xl:w-[200px] lg:w-[200px] w-[150px] overflow-hidden rounded-lg">
              <a href="/">
                <img className="w-full object-cover" src="/img/app-store.jpg" alt="app-store" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-color)] relative overflow-hidden">
        <div className="bg-[url(/img/bg-3.png)] bg-cover h-[90dvh]">
          <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto xl:pt-60 lg:pt-30 pt-30 px-5">
            <h3 className="text-4xl text-center font-bold text-[var(--darkblue)] mb-20">Enquire Now</h3>
            <form action="" method="">
              <div className="flex flex-wrap">
                <div className="xl:w-1/2 lg:w-1/2 w-full xl:mb-10 lg:mb-5 mb-5 px-2">
                  <input className="w-full border border-gray-400 px-5 py-5 rounded-md" type="text" placeholder="Name" />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 w-full xl:mb-10 lg:mb-5 mb-5 px-2">
                  <input className="w-full border border-gray-400 px-5 py-5 rounded-md" type="text" placeholder="Email" />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 w-full xl:mb-10 lg:mb-5 mb-5 px-2">
                  <input className="w-full border border-gray-400 px-5 py-5 rounded-md" type="text" placeholder="Mobile No." />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 w-full mb-5 px-2">
                  <select defaultValue="null" className="w-full text-[#EFEFEF] border border-gray-400 px-5 py-5 rounded-md" name="" id="">
                    <option value="null" disabled>Country of Residence</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="thailand">Thailand</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="w-full px-2">
                  <textarea className="w-full border border-gray-400 px-5 py-5 resize-none rounded-md" rows="5" placeholder="Enter your message here"></textarea>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="uppercase text-white bg-[var(--orange)] cursor-pointer px-7 py-3 rounded-lg hover:bg-orange-500 transition-colors mt-5 mb-10">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
