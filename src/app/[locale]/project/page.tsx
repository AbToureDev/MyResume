import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";

const people = [
    { name: '2024', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]
const Page = () => {
    return (
        <div className="h-screen text-white bg-blue">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900 py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <a href="/public" className=" flex items-center text-base font-semibold leading-6 text-green py-3">
                                        <AiOutlineArrowRight size={15} className='-rotate-180'/>
                                    <h1 className="px-2 ">Toure Aboubacar</h1>
                                </a>
                                <h1 className="mt-2 font-semibold text-4xl text-gray">
                                All Projects
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                        <tr>
                                            <th scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                Year
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Project
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Made at
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Built with
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Link
                                            </th>
                                            {/*<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0 text-white">*/}
                                            {/*    <span className="sr-only">Edit</span>*/}
                                            {/*</th>*/}
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                        {people.map((person) => (
                                            <tr key={person.email}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {person.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.title}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green">{person.email}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.role}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                                        Edit<span className="sr-only">, {person.name}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
            };

            export default Page;