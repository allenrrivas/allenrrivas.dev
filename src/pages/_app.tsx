import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

// const MyApp: AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { session, ...pageProps },
// }) => {
//   return (
//     <>
//       <Head>
//         <title>Allen Rivas</title>
//       </Head>
//       <Home></Home>
//       <Navbar></Navbar>
//       <SessionProvider session={session}>
//         <Component {...pageProps} />
//       </SessionProvider>
//     </>
//   );
// };

// export default trpc.withTRPC(MyApp);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
       <Head>
         <title>Allen Rivas</title>
       </Head>
       <Home></Home>
       <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  
  );
};

export default MyApp;
