import UserButton from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "./workspace-switcher";

export default function Sidebar(){
  return (
    <>
      <aside className="w-[70xp] h-full bg-[#481349] flex flex-col items-center gap-y-4 pt-[9px] pb-4">
      <WorkspaceSwitcher />
  <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
  <UserButton />
  </div>
      </aside>
    </>
  )
}
