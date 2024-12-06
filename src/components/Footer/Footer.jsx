import { Link } from "react-router-dom"
import { Logo } from '../index'

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-1 inline-flex justify-center items-center">
                                <Logo width="100px" height="100px"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. Made By Romus Shrestha
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6  text-xs font-semibold uppercase text-gray-500">
                                SOCIAL
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        GITHUB
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        LINKEDIN
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                                CONTACT ME
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        EMAIL
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer
