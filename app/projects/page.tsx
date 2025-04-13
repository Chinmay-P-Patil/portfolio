import Image from "next/image"

const Projects = () => {
    const majourprojects = [
        { id: 1, title: "Social Media Web App ", skills: "HTML, CSS, RectJs, Typescript, Firebase. ", about: "This project showcases my expertise in React and TypeScript for frontend development, integrating seamlessly with a backend system. ", features: "It includes features like authentication, real-time updates, Likes, Posting etc." },
        { id: 2, title: "Password Manager ", skills: "HTML, Tailwind CSS, RectJs, NextJs, Typescript, LocalStorage, MongoDB, NodeJs, ExpressJs ", about: "This project showcases my expertise in React, Next and TypeScript for frontend development, integrating seamlessly with a backend system using MongoDB, Node and express ", features: "It includes features like saving the password, deleting, editing ." },

    ]
    const miniprojects = [
        {id: 1, title: "Calculator", skills: "HTML, CSS, Javascript.", about: "", features: ""}
    ]
    return (
        <>
            <div className="flex flex-col gap-5 sm:mr-40">
                <div className="sm:fixed bg-[url(/projectsimg.jpg)] bg-no-repeat bg-[0px_0px] bg-cover h-50 visible opacity-70 flex items-center justify-around sm:invisible"><div className="text-amber-400 text-center font-extrabold text-5xl">PROJECTS</div></div>



                <div className="flex flex-col items-center">

                    <div className="text-2xl text-amber-400 font-bold">Majour Full Stack</div>


                    <div className="p-2 grid gap-5 sm:grid-cols-2">

                        {majourprojects.map((project) => (
                            <div className="flex gap-5 p-2 border-2 border-gray-300 shadow-2xl rounded-2xl shadow-gray-300 justify-between sm:h-80 sm:h-max-80 " key={project.id}>


                                <div className="fixed invisible sm:visible sm:static">
                                    <Image src="/social.svg" alt="" width={30} height={30} className="sm:h-full sm:w-full " loading="lazy"></Image>
                                </div>

                                <div className="flex flex-col gap-5 sm:border-l-3 sm:border-amber-400 sm:pl-2 w-full">
                                    <div className="flex items-center gap-2">
                                        <div className=" h-10 w-10 visible sm:invisible sm:fixed">
                                        <Image src="/social.svg" alt="" width={30} height={30} className="h-10 w-10" loading="lazy"></Image>
                                        </div>

                                        <span className="text-lg sm:text-2xl font-bold border-l-3 border-amber-400 pl-2 sm:border-0 sm:pl-0">{project.title}</span><a href="https://social-media-6e8bb.web.app/" target="_blank" className="text-xl">🌐</a><a href="https://github.com/Chinmay-P-Patil/social-media">
                                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" className="w-5 h-5" loading="lazy" height={30} width={30}></Image>
                                        </a>
                                    </div>
                                    <div className="overflow-y-scroll">
                                        <div className="text-emerald-600 font-bold text-lg ">Skills Used</div>
                                        <div>{project.skills}</div>
                                        <div>
                                            <p className="text-emerald-600 text-lg font-bold">About</p>
                                            <p>{project.about}</p>
                                            <p className="text-emerald-600 text-lg font-bold">Features</p>
                                            <p>{project.features}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
        

                    </div>

                    <div className="text-2xl text-amber-400 font-bold">Mini Projects</div>




                </div>
            </div>
        </>
    )
}
export default Projects