import { useWorkspaceId } from "@/app/hooks/use-workspace-id"
import { Button } from "@/components/ui/button"
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Loader } from "lucide-react";

export default function WorkspaceSwitcher(){
  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const {data:workspace, isLoading: workspaceLoading} = useGetWorkspace({id: workspaceId});
  const {data:workspaces, isLoading:workspacesLoading} = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter((workspace) => workspace._id !== workspaceId);
  return (
    <>
    <DropdownMenu>
    <DropdownMenuTrigger>
    <Button className="size-9 relative overflow-hidden bg-[#ABABAB] hover:bg-[#ABABAB]/80 text-slate-800 font-semibold text-xl">{workspaceLoading ?  <Loader className="animate-spin size-5 shrink-0"/> : workspace?.name.charAt(0).toUpperCase()}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="bottom" align="start" className="w-64">
    <DropdownMenuItem className="cursor-pointer flex-col justify-start items-start capitalize">{workspace?.name}
    <span className="text-xs text-muted-foreground">Active Workspace</span></DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}
