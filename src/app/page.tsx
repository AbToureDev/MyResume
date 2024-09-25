'use client'
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:h-screen lg:overflow-hidden lg:items-center sm:flex-row flex-col bg-blue p-7 text-white font-sans">
      <LeftSideBar/>
      <RightSideBar/>
    </main>
  );
}
