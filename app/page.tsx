
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

export default function Home() {
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
          <h3 className="xl:text-4xl lg:tex-4xl text-4xl text-center font-bold text-[var(--darkblue)] xl:mb-10 lg:mb-8 mb-8">Easy Analysis</h3>
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
      
      <section className="bg-[var(--bg-color)] xl:py-20 lg:py-10 py-10 relative">
        <img className="absolute top-0 w-full" src="/img/bg-1.png" alt="bg-1" />
        <div className="max-w-[1520px] xl:w-[80%] lg:w-[90%] w-full mx-auto relative z-10 xl:pt-45 lg:pt-30 pt-30">
          <h3 className="xl:text-4xl lg:text-4xl text-4xl text-center font-bold text-[var(--darkblue)] mb-10">Trade Like a Pro in Minutes</h3>

          <div className="flex flex-wrap">
            <div className="xl:w-1/2 lg:w-1/2 w-full mb-10 px-5">
                {
                  section_4_list.map((item, index) => (
                    <div key={index} className={`border ${(index + 1) % 2 ? "border-[var(--gold)]" : "border-[var(--orange)]"} flex items-center mb-7 rounded-lg xl:px-10 xl:py-5`}>
                      <span className={`${(index + 1) % 2 ? "text-[var(--gold)]" : "text-[var(--orange)]"} italic xl:text-5xl mr-25`}>{index + 1}</span>
                      <p className="text-white xl:text-2xl">{item.text}</p>
                    </div>
                  ))
                }
            </div>
            <div className="xl:w-1/2 lg:w-1/2 w-full mb-10 px-5">
              <div className="xl:w-[500px] rounded-lg overflow-hidden">
                <img className="w-full object-cover" src="/img/guide-2.png" alt="guide-2" />
              </div>
            </div>
            
          </div>

          <div className="flex justify-center gap-3">
            <div className="xl:w-[100px] overflow-hidden rounded-lg">
              <a href="/">
                <img className=" object-cover" src="/img/google-play.jpg" alt="google-play" />
              </a>
            </div>
            <div className="xl:w-[100px] overflow-hidden rounded-lg">
              <a href="/">
                <img className="w-full object-cover" src="/img/app-store.jpg" alt="app-store" />
              </a>
            </div>
          </div>
        </div> 
      </section>

      <section>

      </section>
    </main>
  );
}
