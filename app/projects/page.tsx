import Image from "next/image"

const Projects = () => {
    const majourprojects = [
        { id: 1, image:"/social.svg", title: "Social Media Web App ", hostlink: "https://social-media-6e8bb.web.app/", gitlink: "https://github.com/Chinmay-P-Patil/social_media", skills: "HTML, CSS, RectJs, Typescript, Firebase. ", about: "This project showcases my expertise in React and TypeScript for frontend development, integrating seamlessly with a backend system. ", features: "It includes features like authentication, real-time updates, Likes, Posting etc." },
        { id: 2, image:"/passop.png", title: "Password Manager ", hostlink: "https://passwordmang.vercel.app/", gitlink: "https://github.com/Chinmay-P-Patil/passwordmang", skills: "HTML, Tailwind CSS, RectJs, NextJs, Typescript, LocalStorage, MongoDB, NodeJs, ExpressJs ", about: "This project showcases my expertise in React, Next and TypeScript for frontend development, integrating seamlessly with a backend system using MongoDB, Node and express.", features: "It includes features like saving the password, deleting, editing ." },

    ]
    const miniprojects = [
        {id: 1, title: "Weather Forecast Web App", hostlink:"https://majour-project.vercel.app/", gitlink:"https://github.com/Chinmay-P-Patil/majour-project", skills: "HTML, CSS, Javascript(fetch)", about: "This is weather web app which fetches data from weathe api and displays the data.", features: "This project includes features like getting the crrent location weather and also three days ahead weather forecast."},

        {id: 2, title: "Calculator", gitlink:"https://github.com/Chinmay-P-Patil", skills: "HTML, CSS, Javascript(fetch)", about: "This is a basic calculator highlighting the javascript skill.", features: "This calculator consist of all basic operations like addition, subtraction, multiplication and division. Making sure it follows the BODMAS rule."},

        {id: 3, title: "Netflix Clone (UI)", gitlink:"https://github.com/Chinmay-P-Patil", skills: "HTML, CSS", about: "This a clone of netflix showcasing my Tailwind CSS skills.", features: "This project is responcive and has perfect UI."},

        {id: 4, title: "To-Do List", gitlink:"https://github.com/Chinmay-P-Patil", skills: "React.js", about: "This a to-do list which allow user to manage there daily task. It make use of hooks in react and state management", features: "It has features like adding task and deleting."},
        {id: 5, title: "Dice Roll", gitlink:"https://github.com/Chinmay-P-Patil", skills: "React.js, CSS", about: "This is normal game highlighting javascript skill.", features: "This project is a simple dice roll game where user can roll the dice and get the random number."},
        {id: 6, title: "Rock Paper Scissors ", gitlink:"https://github.com/Chinmay-P-Patil", skills: "Javascript, HTML", about: "This is game of rock paper scissors.", features: "This project is a simple game where user can play the game with computer."},
    ]
    return (
        <>
            <div className="flex flex-col gap-5 sm:mr-40">
                <div className="bg-[url(/projectsimg.jpg)] bg-no-repeat bg-cover bg-center opacity-70 h-50 w-full flex justify-around sm:h-100 items-center sm:visible sm:relative"><div className="text-amber-400 text-center font-extrabold text-5xl">PROJECTS</div></div>



                <div className="flex flex-col items-center">

                    <div className="text-2xl text-amber-400 font-bold py-5">Majour Full Stack</div>


                    <div className="p-2 grid gap-5 sm:grid-cols-2">

                        {majourprojects.map((project) => (
                            <div className="flex gap-5 p-2 border-2 border-gray-300 shadow-2xl rounded-2xl shadow-gray-300 justify-between sm:h-80 sm:h-max-80 " key={project.id}>


                                <div className="fixed invisible sm:visible sm:static">
                                    <Image src={project.image} alt="" width={30} height={30} className="sm:h-full sm:w-full " loading="lazy"></Image>
                                </div>

                                <div className="flex flex-col gap-5 sm:border-l-3 sm:border-amber-400 sm:pl-2 w-full">
                                    <div className="flex items-center gap-2">
                                        <div className=" h-10 w-10 visible sm:invisible sm:fixed">
                                            <Image src={project.image} alt="" width={30} height={30} className="h-10 w-10" loading="lazy"></Image>
                                        </div>

                                        <span className="text-lg sm:text-2xl font-bold border-l-3 border-amber-400 pl-2 sm:border-0 sm:pl-0">{project.title}</span><a href={project.hostlink} target="_blank" className="text-xl">🌐</a><a href={project.gitlink}>
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

                    <div className="text-2xl text-amber-400 font-bold py-5">Mini Projects</div>

                    <div className="p-2 grid gap-5 sm:grid-cols-3">

                        {miniprojects.map((project) => (
                            <div className="flex gap-5 p-2 border-2 border-gray-300 shadow-2xl rounded-2xl shadow-gray-300 justify-between sm:h-80 sm:h-max-80 " key={project.id}>

                                <div className="flex flex-col gap-5 sm:pl-2 w-full">
                                    <div className="flex items-center gap-2">

                                        <span className="text-lg sm:text-2xl font-bold">{project.title}</span>{project.hostlink && <a href={project.hostlink} target="_blank" className="text-xl">🌐</a>}<a href={project.gitlink}>
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


                </div>
            </div>
        </>
    )
}
export default Projects