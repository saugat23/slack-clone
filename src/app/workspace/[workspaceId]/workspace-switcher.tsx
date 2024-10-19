import { useWorkspaceId } from '@/app/hooks/use-workspace-id';
import { Button } from '@/components/ui/button';
import { useGetWorkspace } from '@/features/workspaces/api/use-get-workspace';
import { useGetWorkspaces } from '@/features/workspaces/api/use-get-workspaces';
import { useCreateWorkspaceModal } from '@/features/workspaces/store/use-create-workspace-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Loader, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WorkspaceSwitcher() {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });
  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace._id !== workspaceId
  );
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl'>
            {workspaceLoading ? (
              <Loader className='animate-spin size-5 shrink-0' />
            ) : (
              workspace?.name.charAt(0).toUpperCase()
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='bottom' align='start' className='w-64 bg-white p-3 rounded-md flex flex-col mt-2 shadow-md gap-y-2'>
          <DropdownMenuItem
            onClick={() => router.push(`/workspace/${workspaceId}`)}
            className='cursor-pointer flex flex-col justify-start items-start capitalize hover:bg-accent'
          >
            {workspace?.name}
            <span className='text-xs text-muted-foreground'>
              Active Workspace
            </span>
          </DropdownMenuItem>
          {filteredWorkspaces?.map((workspace) => (
            <DropdownMenuItem
              key={workspace._id}
              className='cursor-pointer capitalize overflow-hidden flex items-center justify-start hover:bg-accent'
              onClick={() => router.push(`/workspace/${workspace._id}`)}
            >
              <div className='shrink-0 size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 hover:bg-accent'>
                {workspace.name.charAt(0).toUpperCase()}
              </div>
              <p className='truncate'>{workspace.name}</p>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            className='cursor-pointer flex items-center justify-start hover:bg-accent'
            onClick={() => setOpen(true)}
          >
            <div className='size-9 relative overflow-hidden bg-[#F2F2F2] text-slate-800 font-semibold text-xl rounded-md flex items-center justify-center mr-2'>
              <Plus />
            </div>
            Create a new workspace
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
