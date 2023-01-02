import Body from "../components/Body";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <>
            {/* <Home/> */}
            <Body/>
            <div className="flex flex-col items-center justify-center">

                <div className="mt-10 lg:w-3/6 2xl:w-2/6 w-4/6">
                    <p className="font-bold pb-2 text-3xl">
                        Projects
                    </p>
                    <p className="pb-4 pl-0.5">Here are some of the things I&apos;ve built myself and with friends.</p>
                </div>

                {/* bg-neutral-900 text-neutral-100 indigo-500 */}
                
                <div className="grid grid-rows-4 grid-flow-col md:grid-rows-2 lg:grid-rows-2 gap-4 mb-6 lg:w-3/6 2xl:w-2/6 w-4/6">
                    <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <div>
                            <a href="https://github.com/RpaceIV/muzyka" target="_blank" rel="noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-neutral-800">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">Muzyka</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">A decision support software that recommends users music genres.</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <div>
                            <a href="https://github.com/allenrrivas/COVID-19" target="_blank" rel="noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-neutral-800">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">COVID-19</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Composing linear models of COVID-19 dataset.</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <div>
                            <a href="https://github.com/allenrrivas/HotelReservationSystem" target="_blank" rel="noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-neutral-800">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">Hotel Res. System</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">A basic hotel room reservation system. Made for users reserving a hotel room.</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <div>
                            <a href="https://github.com/allenrrivas/allenrrivas.dev" target="_blank" rel="noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-neutral-800">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">allenrrivas.dev</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">My personal creation, this fantastic website.</p>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
      );
}

export default HomePage;