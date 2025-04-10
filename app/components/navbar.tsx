"use client"
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>

            <div className="invisible sm:visible fixed right-0 top-0 h-full w-40 p-4 shadow-xl flex flex-col space-y-4 gap-10 items-center bg-white z-1">
                <div className="text-3xl h-20 w-20 pt-6 font-bold text-center bg-amber-400 rounded-full ">&lt; / &gt;</div>
                <nav className="flex flex-col space-y-2 items-center gap-10 text-lg font-semibold ">
                    <Link className="hover:underline hover:text-emerald-600" href="/">Home</Link>
                    <Link className="hover:underline hover:text-emerald-600" href="/connect">Connect</Link>
                    <Link className="hover:underline hover:text-emerald-600" href="/projects">Projects</Link>
                    <Link className="hover:underline hover:text-emerald-600" href="/experiance">Experiance</Link>
                    <a className="hover:underline hover:text-emerald-600" href="https://www.linkedin.com/in/chinmay-patil-0533012b3/" target="_blank">LinkedIn</a>
                    <a className="hover:underline hover:text-emerald-600" href="https://github.com/Chinmay-P-Patil" target="_blank">GitHub</a>
                    <a className="hover:underline hover:text-emerald-600" href="https://leetcode.com/u/o2Ntk5TxLi/" target="_blank">LeetCode</a>
                </nav>
            </div>

            <div className="sm:fixed flex justify-between shadow-lg py-2 text-emerald-500 font-bold items-center bg-white w-full sm:invisible">
                <div className="flex justify-around w-full">
                    <Link href="/projects">PROJECTS</Link>
                    <Link href="/experiance">EXPERIANCE</Link>
                </div>

                <div className="relative"> {/* Add relative positioning container */}
                    <button className="flex flex-col gap-1 border-2 border-gray-600 rounded-lg p-1 w-fit mr-3" onClick={handleToggle}>
                        <div className="border-b-2 border-gray-600 w-4"></div>
                        <div className="border-b-2 border-gray-600 w-4"></div>
                        <div className="border-b-2 border-gray-600 w-4"></div>
                    </button>

                    {isOpen && (
                        <div className="absolute flex flex-col gap-2 px-2 text-center top-full right-0 mt-2 bg-white shadow-lg rounded-b-lg z-50">
                            <Link href="/" onClick={handleToggle}>Home</Link>
                            <Link href="/connect" onClick={handleToggle}>Connect</Link>
                            <a href="https://www.linkedin.com/in/chinmay-patil-0533012b3/" target="_blank" onClick={handleToggle}>LinkedIn</a>
                            <a href="https://github.com/Chinmay-P-Patil" target="_blank" onClick={handleToggle}>GitHub</a>
                            <a href="https://leetcode.com/u/o2Ntk5TxLi/" target="_blank" onClick={handleToggle}>LeetCode</a>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
export default Navbar;