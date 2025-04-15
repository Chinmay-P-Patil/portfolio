import Image from "next/image"
const Connect = () => {
    return (
        <>
            <div className="sm:mr-40">
                <div className=" bg-[url(/connect.jpg)] bg-no-repeat bg-cover bg-center h-80 flex justify-around sm:h-100 sm:items-center">
                    <div className="text-emerald-700 font-extrabold text-5xl top-1 mt-10 sm:mt-0">CONNECT</div>
                </div>
                <div className="p-5 flex flex-col gap-5 items-center justify-center">
                    <p className="text-center sm:w-100 font-bold">Feel free to reach out to me via email or LinkedIn. I am excited to explore new opportunities, collaborate with like-minded professionals, and contribute to the success of innovative projects.</p>
                    <a
                        href="mailto:chinmay.patil.work.11@gmail.com?subject=Hello%20Chinmay&body=Hi%20Chinmay,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
                        className="flex gap-3 items-center p-2 w-fit px-3 bg-blue-500 text-white font-semibold rounded-md shadow-md "
                    >
                        <span>Send Me an Email</span><Image src="/mail.jpg" alt="" width={30} height={30} className="rounded-2xl"></Image>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chinmay-patil-0533012b3/"
                        className="flex gap-3 items-center p-2 w-fit px-3 bg-blue-500 text-white font-semibold rounded-md shadow-md "
                    >
                        <span>Connect with Me</span><Image src="/linkedin.png" alt="" width={30} height={30} className="rounded-2xl"></Image>
                    </a>
                </div>
            </div>

        </>
    )
}
export default Connect 