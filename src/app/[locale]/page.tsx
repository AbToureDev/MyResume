'use client'
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <main className="sm:flex gap-3 min-h-screen leading-relaxed lg:h-screen lg:items-center sm:flex-row py-3 px-5 text-sm text-white 2xl:text-lg">
      <LeftSideBar/>
      <RightSideBar/>
    </main>
  );
}
