import Image from "next/image";
import { Inter } from "next/font/google";
import GoogleApps from "./googleapps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#202124] h-screen flex flex-col justify-between">
<div className="flex justify-end p-6">

      <span className="mr-4">Gmail</span>
      <span>Images</span>
      {/* <GoogleApps/> */}
      <div className="border bg-black rounded-full w-8 h-8 ml-8 text-center">gg</div>

</div>
    <div className={`flex  flex-col items-center justify-center p-24 `}>
      <Image alt="Logo Google" src="/googlelogo.webp" width={290} height={500}/>
      <input className="rounded-3xl lg:w-[650px] sm:w-[500px] w-[300px]  mt-8 mb-4 p-4 h-12 bg-transparent border focus:bg-[#282a2c] text-white"/>
    <div>
      <button className="pl-4 pr-4 pt-2 pb-2 m-2 bg-[#303134] hover:border">Google Search</button>
      <button className="pl-4 pr-4 pt-2 pb-2 m-2 bg-[#303134] hover:border">I´m Feeling Lucky</button>
    </div>
    <p className="text-sm m-8">Google offered in: <a className="text-blue-300 hover:underline" href="https://www.google.com">Español (Latinoamérica)</a></p>
    </div>

  <div>
    <div className="flex justify-end flex-col p-4 pl-8 hover:underline bg-[#171717] border-b">Argentina</div>
      <div className="flex justify-between flex-row p-4 pl-8  bg-[#171717]">
        <div>
          <span className="hover:underline">About</span>
          <span className="hover:underline ml-8 mr-8">Advertising</span>
          <span className="hover:underline mr-8">Business</span>
          <span className="hover:underline">How Search works</span>
        </div>
        <div>
          <span>Privacy</span>
          <span className="ml-8 mr-8">Terms</span>
          <span>Settings</span>
        </div>
      </div>
  </div>

    </main>
  );
}
