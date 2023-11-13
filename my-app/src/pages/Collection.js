import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Collection() {
  return (
    <div>
      <Header />

      <>
        <div className="min-h-full">
          <div className="flex justify-between w-full">
            <div className="relative w-full lg:flex lg:items-center px-4 py-6 sm:px-6 lg:px-8">
              <img
                src="./img/collectionbg.png"
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
              />

              <div className="relative z-10">
                <img
                  className="w-15 h-15 shadow-lg"
                  src="./img/collectionprofile.png"
                />

                <div className="flex flex-col mt-2">
                  <div className="flex items-center">
                    <span className="mx-2 text-lg whitespace-nowrap">
                      SolanaMonkeyBusiness(SMB)
                    </span>
                    <img className="align-middle" src="./icons/blue.svg" />
                  </div>

                  <div>
                    <span className="mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                      5000 Solana inspired generative NFTs
                    </span>
                    <div className="flex justify-between">
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        <img src="./icons/birth.svg" className="mr-2" />
                        Min Date: 02.02.2022
                      </span>
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        Mint Price: {""} 0.05
                        <img src="./icons/mintprice.svg" className="ml-2" />
                      </span>
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        Total Supply: {""} 0.05
                      </span>

                      <div className="flex justify-end text-center space-x-4">
                        <span className="flex flex-col  text-sm text-[#D3D3D3]  whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>

                        <span className="flex flex-col text-sm text-[#D3D3D3] whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>

                        <span className="flex flex-col text-sm text-[#D3D3D3] whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-left text-gray-900 mb-4 md:mb-0">
            <img src="./icons/ion_filter.svg" />
            <span className="ml-3 text-xs text-center text-darkgray">
              Tailblocks
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              More From This Collections
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 text-[#D9D9D9] justify-center items-center">
            <img className="h-10" src="./icons/Left.svg" />
            <div className=" mr-5 ml-5 text-center">
              <p>1 2 3 4</p>
            </div>
            <img className="h-10" src="./icons/Right.svg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Collection;