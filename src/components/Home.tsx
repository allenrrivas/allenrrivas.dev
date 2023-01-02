import Image from "next/image";

const Home = () => {
    return (

        <div className="mx-auto flex items-center justify-start lg:w-3/6 2xl:w-2/6 w-4/6 mt-8">
            <Image 
                src="/images/ball.png"
                alt="allen"
                width={60}
                height={60}
                priority
                className="rounded-full"
            />
            <h1 className="ml-4 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">Welcome</h1> 
        </div>
    );
}

export default Home;