const Experiance = () => {
    return (
        <>
            <div className="sm:mr-40">
                <div className="sm:fixed bg-[url(/experiance.jpg)] bg-no-repeat bg-[0px_0px] bg-cover h-60 visible opacity-90 flex items-center justify-around sm:invisible">
                    <div className="font-extrabold text-4xl pb-40 px-4 py-2 rounded-md">
                        EXPERIENCE
                    </div>
                </div>

                <div className="invisible sm:visible fixed sm:relative bg-[url(/experiance.jpg)] bg-no-repeat bg-[500px_0px] h-80 flex justify-around sm:h-100 sm:items-center">
                    <div className="font-extrabold text-4xl text-white bg-indigo-900/50 px-6 py-4 rounded-lg mr-250 pr-50 w-fit">
                        <p>EXPERIENCE</p>
                        <p className="font-normal text-teal-300">Internships</p>
                    </div>
                </div>

                <div className="p-5">
                    <div className="border-2 border-indigo-600 rounded-lg p-4 bg-gray-50 shadow-md">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-indigo-700">Full Stack Developer Intern</h3>
                            <p className="text-lg font-semibold text-gray-800">WiseIN by Sanshi Network Tech Pvt Ltd.</p>
                            <p className="text-sm text-gray-500">24 feb 2025 - ongoing</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Developed responsive web pages using Next and Tailwind CSS.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Experiance