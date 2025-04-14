import Link from "next/link"
import Image from "next/image"
const Skills = () => {
    const FrontEnd = [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", text: "HTML" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", text: "Vanila CSS" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", text: "Tailwind CSS" },
        { id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", text: "JavaScript" },
        { id: 5, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", text: "ReactJs" },
        { id: 6, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", text: "NextJs" },
        { id: 7, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", text: "TypeScript" },
        { id: 8, image: "/pugg.png", text: "PUG" }
      ]
      const BackEnd = [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", text: "NodeJs" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", text: "ExpressJs" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", text: "MongoDb" },
        { id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", text: "FireBase" },
      ]
      const Programming = [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", text: "C prgramming" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", text: "C++" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", text: "Java" },
      ]
      const tolls = [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", text: "Vs Code" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", text: "Figma" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", text: "Git" },
        { id: 4, image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", text: "GitHub" }
      ]
    return (
        <>
        <div className="sm:fixed bg-[url(/skills.jpg)] bg-no-repeat bg-[0px_0px] bg-cover h-50 visible flex items-center justify-around sm:invisible "></div>
        <div className="flex flex-col gap-8 pl-5 bg-white pt-8">
          <div className="text-3xl font-bold text-amber-400">💡Skills And Tolls</div>

          <div className="text-2xl font-extrabold text-emerald-600">Front End :</div>

          <div className=" grid grid-cols-2 gap-10 sm:gap-5 sm:grid-cols-8 sm:grid">
            {FrontEnd.map((skill) => (

              <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                <Image src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy" width={30} height={30}></Image>{skill.text}
              </Link>
            ))}
            <Link href="/projects" className="smskill flex items-center w-35 h-40 text-black font-semibold sm:h-45"><div className="w-25 h-25 text-center text-pink-700 bg-lime-500 rounded-full pt-9 sm:pt-12 sm:w-30 sm:h-30">&lt;%=EJS%&gt;</div> Ejs</Link>
          </div>

          <div className="text-2xl font-extrabold text-emerald-600">Back End :</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {BackEnd.map((skill) => (

              <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                <Image src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy" width={30} height={30}></Image>{skill.text}
              </Link>
            ))}
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">Programming</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {Programming.map((skill) => (

              <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                <Image src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy" width={30} height={30}></Image>{skill.text}
              </Link>
            ))}
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">Tolls</div>
          <div className=" grid grid-cols-2 gap-10 sm:flex sm:gap-5">
            {tolls.map((skill) => (

              <Link href="/projects" key={skill.id} className="smskill flex items-center text-black font-semibold w-35 h-40 sm:h-45">
                <Image src={skill.image} alt="" className="w-25 h-25 sm:w-30 sm:h-30 " loading="lazy" width={30} height={30}></Image>
                {skill.text}
              </Link>
            ))}
          </div>
        </div>
        </>
    )
}

export default Skills