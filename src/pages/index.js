import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from 'components/Header';
import Testimonials from 'components/Testimonials';

import DecoreIntersect from 'images/DecoreIntersect.svg';
import DecoreTextUnderline from 'images/DecoreTextUnderline.svg';
import DecorePlus from 'images/decor-plus-style-1.svg';
import DecoreSwirl from 'images/decore-swirl.svg';
import DecorEllips1 from 'images/decor-ellips-style-1.svg';
import Facebook from 'images/ic-facebook.svg';
import Twitter from 'images/ic-twitter.svg';
import Instagram from 'images/ic-instagram.svg';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Jadoo</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo" />
        <meta name="description" content="travel app, aplikasi jalan, pesan guide, dan sebaginya" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="fixed z-50 w-full lg:py-12 py-6">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
          <DecoreIntersect className="fill-accent-2" />
        </span>
        <span className="w-96 h-96 absolute bg-accent-3/50 rounded-full -top-10 -left-80 blur-3xl"></span>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-full lg:w-6/12 pt-52">
              <h1 className="text-accent-4 font-bold lg:text-xl uppercase mb-6 text-sm">Best Destinations around the world</h1>
              <h2 className="text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[89px] tracking-tighter mb-8">
                Travel,
                <span className="relative">
                  {' '}
                  enjoy
                  <span className="absolute left-0 top-full -mt-3 -lg:mt-8 -ml-4 -z-10">
                    <DecoreTextUnderline className="w-[100px] lg:w-[385px] h-1 lg:h-[12px] fill-accent-4" />
                  </span>
                </span>{' '}
                <br />
                and live a new and full life
              </h2>
              <p className="text-gray-500 text-sm lg:text-base max-w-lg leading-6 lg:leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
              </p>
              <div className="flex">
                <Link href="/">
                  <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-lg text-lg font-sans">Find out more</a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-4 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-4/30 shadow-[0_15px_30px]">
                    <span className="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray-500 hidden lg:block">Play Demo</span>
                </button>
              </div>
            </div>
            <div className="w-6/12 relative pt-24 hidden lg:block">
              <div className="w-[137px] h-[95px] absolute top-44 left-36 z-30">
                <Image layout="responsive" width="100%" height="100%" src="/images/plane.png" alt="Ilustration Plane" />
              </div>
              <div className="w-[137px] h-[95px] absolute top-56 -right-16 z-10">
                <Image layout="responsive" width="100%" height="100%" src="/images/plane.png" alt="Ilustration Plane" />
              </div>
              <div className="relative z-20 transform translate-x-16 top-6">
                <Image priority layout="responsive" width="100%" height="100%" src="/images/hero-traveller.png" alt="Hero Traveller" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="absolute w-36 h-36 -right-10 -top-10">
            <DecorePlus className="decor-plus-style-1" />
          </div>
          <div className="text-center flex flex-col mb-28">
            <h3 className="uppercase text-gray-500 text-lg mb-2">category</h3>
            <h3 className="text-4xl lg:text-5xl font-serif text-gray-800 capitalize leading-tight lg:leading-snug">We Offer Best Services</h3>
          </div>
          <div className="flex flex-wrap text-gray-900">
            <div className="w-full lg:w-3/12 px-8 mb-4 lg:mb-0">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 group-hover:opacity-100 opacity-0 -z-10 bottom-12 bg-accent-4 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image layout="fixed" width={60} height={60} src="/images/ilustration-radar.png" alt="Ilustration Radar" />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-2 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3 text-gray-900">Calculated Weather</h4>
                <h5 className="lg:px-8 mb-8 px-0 text-gray-800">Built Wicket longer admire do barton vanity itself do in it.</h5>
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-8 mb-4 lg:mb-0">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 group-hover:opacity-100 opacity-0 -z-10 bottom-12 bg-accent-4 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 flex h-28">
                  <div className="z-10 absolute transform translate-y-4 translate-x-1/2 -right-11">
                    <Image layout="fixed" width={137} height={95} src="/images/plane.png" alt="Ilustration Plane" />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-2 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3 text-gray-900">Best Flights</h4>
                <h5 className="lg:px-8 mb-8 px-0 text-gray-800">Engrossed listening. Park gate sell they west hard for the.</h5>
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-8 mb-4 lg:mb-0">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 group-hover:opacity-100 opacity-0 -z-10 bottom-12 bg-accent-4 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image layout="fixed" width={67} height={75} src="/images/ilustration-mic.png" alt="Ilustration Mic" />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-2 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3 text-gray-900">Local Events</h4>
                <h5 className="lg:px-8 mb-8 px-0 text-gray-800">Barton vanity itself do in it. Preferd to men it engrossed listening. </h5>
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-8 mb-4 lg:mb-0">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 group-hover:opacity-100 opacity-0 -z-10 bottom-12 bg-accent-4 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image layout="fixed" width={60} height={60} src="/images/ilustration-setting.png" alt="Ilustration Setting" />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-2 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3 text-gray-900">Customization</h4>
                <h5 className="lg:px-8 mb-8 px-0 text-gray-800">We deliver outsourced aviation services for military customers</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center flex flex-col mb-16">
            <h3 className="capitalize  text-5xl mb-2 text-gray-500">top selling</h3>
            <h3 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug capitalize">top destinations</h3>
          </div>
          <div className="flex flex-wrap relative pr-0 lg:pr-10">
            <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
              <DecoreSwirl className="stroke-gray-500" />
            </div>
            <div className="w-full lg:w-4/12 mb-10 lg:mb-0 px-4 z-20 relative">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image layout="fill" className="object-cover" src="/images/image-destination-1.png" alt="image destinations" />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Rome, Italy</h6>
                    <h6 className="text-lg">$5, 42K</h6>
                  </div>
                  <div className="flex items-center pt-4 px-5">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">10 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 mb-10 lg:mb-0 px-4 z-20 relative">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image layout="fill" className="object-cover" src="/images/image-destination-2.png" alt="image destinations" />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">London, UK</h6>
                    <h6 className="text-lg">$4, 2K</h6>
                  </div>
                  <div className="flex items-center pt-4 px-5">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">12 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 mb-10 lg:mb-0 px-4 z-20 relative">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                  <Image layout="fill" className="object-cover" src="/images/image-destination-3.png" alt="image destinations" />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Full Europa</h6>
                    <h6 className="text-lg">$15K</h6>
                  </div>
                  <div className="flex items-center pt-4 px-5">
                    <span className="material-icons mr-2">near_me</span>
                    <span className="">28 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-28">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 lg:pl-8 px-0 lg:pr-20">
              <div className="flex flex-col mb-16">
                <h3 className="text-lg mb-2 text-gray-500">Easy and Fast</h3>
                <h3 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight lg:leading-snug mb-10">Book your next trip in 3 easy steps</h3>
                <ul className="flex flex-col gap-y-10 pr-0 lg:pr-10">
                  <li className="flex items-center mb-10">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">navigation</span>
                    </span>
                    <div className="flex flex-col ml-4 leading">
                      <h6 className="font-bold mb-1 text-gray-500">Choose Destinations</h6>
                      <p className="font-[400] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </li>
                  <li className="flex items-center mb-10">
                    <span className="bg-accent-4 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">credit_card</span>
                    </span>
                    <div className="flex flex-col ml-4 leading">
                      <h6 className="font-bold mb-1 text-gray-500">Make Payment</h6>
                      <p className="font-[400] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#006380] rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">plane</span>
                    </span>
                    <div className="flex flex-col ml-4 leading">
                      <h6 className="font-bold mb-1 text-gray-500">Reach Airport on Selected Date</h6>
                      <p className="font-[400] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" w-full lg:w-5/12 flex items-center justify-center">
              <div className="w-[370px] relative">
                <div className="w-60 h-60 rounded-full blur-3xl bg-accent-7/40"></div>
                <div className="absolute bottom-16 -right-4 lg:right-0 transform translate-x-0 lg:translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7">
                  <div className="flex">
                    <span className="w-12 h-12 overflow-hidden rounded-full flex-none mr-3">
                      <Image layout="responsive" width="100%" height="100%" src="/images/image-destination-5.png" alt="Image Destination" />
                    </span>
                    <div className="flex flex-col w-full">
                      <p className="text-sm text-gray-500">Ongoing</p>
                      <h6 className="text-gray-900 mb-2">Trip to Rome</h6>
                      <p className="text-xs mb-1">
                        <span className="text-accent-5">40%</span>
                        <span className="text-gray-900"></span>
                      </p>
                      <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div className="rounded-full bg-accent-5 w-20 h-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl w-full h-full relative z-20 shadow-great pt-4 pb-5">
                  <div className="mx-4 rounded-3xl h-40 relative overflow-hidden mb-6">
                    <Image layout="fill" width="100%" height="100%" src="/images/image-destination-4.jpg" className="object-cover" alt="Image Destination" />
                  </div>
                  <h6 className="font-bold text-gray-500 px-4 mb-2">Rome, Italy</h6>
                  <div className="flex text-gray-500 px-4 mb-4">
                    <h6 className="">14-29 June</h6>
                    <span className="mx-2">|</span>
                    <h6 className="">by Robbin Joseph</h6>
                  </div>
                  <div className="flex gap-x-3 mx-4 mb-6">
                    <span className="bg-gray-300 text-gray-600 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="material-icons">spa</span>
                    </span>
                    <span className="bg-gray-300 text-gray-600 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="material-icons">map</span>
                    </span>
                    <span className="bg-gray-300 text-gray-600 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="material-icons">near_me</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between mx-4">
                    <span className="material-icons mr-3 text-gray-500 text-xl">apartment</span>
                    <span className="mr-auto text-gray-500">24 people going</span>
                    <span className="text-xl material-icons text-accent-5">favorite_border</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="mb-28">
        <div className="max-w-full lg:max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image alt="client 1" className="object-contain lg:object-none" layout="fill" src={`/images/image 27.png`} />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image alt="client 2" className="object-contain lg:object-none" layout="fill" src={`/images/image 28.png`} />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image alt="client 3" className="object-contain lg:object-none" layout="fill" src={`/images/image 29.png`} />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image alt="client 4" className="object-contain lg:object-none" layout="fill" src={`/images/image 30.png`} />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image alt="client 5" className="object-contain lg:object-none" layout="fill" src={`/images/image 31.png`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-full lg:max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-20 -bottom-20 -z-10 transform rotate-90 translate-y-2">
            <DecorePlus className="decor-plus-style-1" />
          </div>
          <div className="w-full relative bg-white">
            <div className="relative">
              <div className="relative lg:absolute flex justify-center items-center text-white rounded-full transform translate-y-0 lg:-translate-y-1/2 -translate-x-1/2 lg:translate-x-1/2 z-30 left-1/2 top-8 lg:top-0 right-auto lg:right-0 w-16 h-16 bg-gradient-to-b from-accent-6/60 to-accent-6">
                <span className="material-icons">near_me</span>
              </div>
              <div className="bg-accent-3/20 overflow-hidden rounded-tl-3xl lg:rounded-tl-[120px] rounded-lg lg:rounded-3xl relative z-20 pt-20 pb-20 mb-8">
                <div className="w-[390px] h-[390px] absolute z-0 -top-32 -right-32 transform -rotate-45">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>
                <div className="w-[390px] h-[390px] absolute z-0 -bottom-32 left-4 transform ">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>
                <div className="relative ">
                  <div className="relative z-10">
                    <h6 className="text-gray-500 font-bold text-lg lg:text-3xl px-4 lg:px-36 text-center leading-normal mb-10">Subscribe to get information, latest news and other interesting offers about Cobham</h6>
                    <form className="flex justify-center">
                      <fieldset className="relative mr-0 lg:mr-8">
                        <div className="w-16 h-16 flex justify-center items-center absolute">
                          <span className="material-icons text-gray-500">mail_outline</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="appearance-none rounded-tr-none rounded-br-none lg:rounded-tr-lg lg:rounded-br-lg rounded-lg py-5 pl-14 bg-white w-auto lg:w-96 focus:outline-none transition duration-300 border-20 border-transparent focus:border-accent-6"
                        />
                      </fieldset>

                      <button className="rounded-tl-none rounded-bl-none lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg text-white bg-gradient-to-b from-accent-2/90 to-accent-2 py-5 px-4 lg:px-16">
                        <span className="hidden lg:block">Subscribe</span>
                        <span className="block lg:hidden material-icons">search</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 relative overflow-hidden">
        <div className="absolute w-80 h-80 bottom-0 right-0 overflow-hidden">
          <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-6/20"></div>
        </div>
        <div className="max-w-full lg:max-w-7xl mx-auto relative px-4">
          <div className="flex flex-wrap mb-12">
            <div className="w-full lg:w-3/12 px-4">
              <h6 className="text-5xl tracking-tight text-gray-900 mb-4">Jadoo.</h6>
              <p className="text-sm text-gray-500 pr-8">Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">Company</h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/carerrs">
                    <a>Carerrs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mobile">
                    <a>Mobile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">Contact</h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/faq">
                    <a>Help/FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <a>Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates">
                    <a>Affiliates</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">More</h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/airlinefees">
                    <a>Airlinefees</a>
                  </Link>
                </li>
                <li>
                  <Link href="/airline">
                    <a>Airline</a>
                  </Link>
                </li>
                <li>
                  <Link href="/low-fare-tips">
                    <a>Low fare tips</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/12 px-4">
              <ul className="text-lg text-gray-500 flex gap-x-5">
                <li>
                  <a href="https://facebook.com/yein.narayana" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full" target="_blank" rel="noreferrer noopener">
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Facebook className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/yein.narayana" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full" target="_blank" rel="noreferrer noopener">
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Instagram className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yein.narayana" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full" target="_blank" rel="noreferrer noopener">
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Twitter className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>

              <h6 className="text-xl tracking-tight text-gray-500 mt-7 mb-3">Discover our app</h6>

              <ul className="flex gap-x-4">
                <li className="relative w-[107px] h-[35px]">
                  <a href="https://google.com/" target="_blank" rel="noreferrer noopener" className="relative w-full h-full flex overflow-hidden rounded-full">
                    <Image alt="download google play" className="object-contain" layout="fill" src="/images/Google Play.png" />
                  </a>
                </li>
                <li className="relative w-[107px] h-[35px]">
                  <a href="https://apple.com/" target="_blank" rel="noreferrer noopener" className="relative w-full h-full flex overflow-hidden rounded-full">
                    <Image alt="download apple store" className="object-contain" layout="fill" src="/images/Play Store.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">All rights reserved@jadoo.co</div>
        </div>
      </section>
    </div>
  );
}
