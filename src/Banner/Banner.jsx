import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Banner = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-10 py-5 items-center'>
                <div>
                    <h1 className='font-bold text-3xl text-white'>Welcome to The Best Academy Sports </h1>
                    <p className='font-medium text-lg text-gray-400 py-5'>We have the best course about sports . Your Kid will be learn many things about sports . If your kid want to be a professional sports athletics, you came to the right place . We will give our best to support your kid .  </p>
                    <button className='px-8 py-3 me-5 my-3 bg-[#9195ba]  text-white rounded-md'>Buy Now</button>
                    <button className='px-8 py-3  bg-[#0c0a10]  text-white rounded-md'>See More</button>
                </div>
                <div>
                  <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination ={{
                    clickable : true
                  }}
                  modules={[Pagination]}
                  >
                    <SwiperSlide>
                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Basketball</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80" className='h-[350px] rounded-2xl' alt="" /> */}
                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Football</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='h-[350px] rounded-2xl' alt="" /> */}
                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Swimming</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80" className='h-[350px] rounded-2xl' alt="" /> */}

                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Tennis</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="https://images.unsplash.com/photo-1580086229554-1c2a34000456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=805&q=80" className='h-[350px] rounded-2xl' alt="" /> */}
                        
                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/photo-1580086229554-1c2a34000456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=805&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Gymnastics</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className='h-[350px] rounded-2xl' alt="" /> */}

                        <div className="card h-[305px]  shadow-xl image-full">
                        <figure>
                          <img
                            src='https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
                            className="h-full"
                            alt="Destination"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Golf</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </>
    );
};

export default Banner;