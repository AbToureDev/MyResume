import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link";

const RightSideBar = () => {
    return (
        <div className='sm:w-1/2 flex flex-col gap-5 overflow-y-scroll h-full'>
            <section className="">
                <h1 className={'sm:hidden py-2 text-xl'}>
                    ABOUT
                </h1>
                <p className=" text-gray-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam at atque consequatur
                    corporis dolorem enim excepturi, expedita explicabo fugit illum in iste minus nulla officia pariatur
                    perferendis porro qui quibusdam recusandae repudiandae saepe, sequi soluta sunt suscipit tempore vel
                    voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis harum id
                    impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem sequi
                    temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae repudiandae!
                    Assumenda at, blanditiis commodi, consectetur consequuntur dolorem doloribus ducimus ea eaque
                    eveniet ex fugit laboriosam modi molestias nostrum obcaecati possimus rem sed veritatis.
                </p>

            </section>
            <section className={' flex flex-col gap-6'} id="#experience">
                <h1 className={'sm:hidden text-xl'}>Experience</h1>
                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <h2 className='sm:text-start text-center'>2023<span className="px-1">-</span>PRESENT</h2>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center'}><h2 className="font-bold">Senior Backend Enginee,
                                Codingart</h2> <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                harum id
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                sequi
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                                Assumenda at, blanditiis commodi, consectetur consequuntur dolorem doloribus ducimus ea
                                eaque
                                eveniet ex fugit laboriosam modi molestias nostrum obcaecati possimus rem sed veritatis.
                            </p>
                            <div className="sm:flex sm:flex-row flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className={`lang`}>javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <h2 className='sm:text-start text-center'>2022<span className="px-1">-</span>2023</h2>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center'}><h2>Senior Backend Enginee, Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                harum id
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                sequi
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                                Assumenda at, blanditiis commodi, consectetur consequuntur dolorem doloribus ducimus ea
                                eaque
                                eveniet ex fugit laboriosam modi molestias nostrum obcaecati possimus rem sed veritatis.
                            </p>
                            <div className="sm:flex sm:flex-row flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <h2 className='sm:text-start text-center'>2022<span className="px-1">-</span>2023</h2>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center'}><h2>Senior Backend Enginee, Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                harum id
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                sequi
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                                Assumenda at, blanditiis commodi, consectetur consequuntur dolorem doloribus ducimus ea
                                eaque
                                eveniet ex fugit laboriosam modi molestias nostrum obcaecati possimus rem sed veritatis.
                            </p>
                            <div className="sm:flex sm:flex-row flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div className={'flex gap-2 items-center font-bold'}>
                    <a href="" download>View Full Resume </a>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>
            <section>
                <h1 className="sm:hidden p-2 text-xl">Projects</h1>
                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={'flex gap-2 items-center font-bold'}>
                    <Link href="/project" download>View Full Project Archive </Link>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>

            <section>
                <h1>lAST SEction</h1>
            </section>

        </div>
    );
};

export default RightSideBar;