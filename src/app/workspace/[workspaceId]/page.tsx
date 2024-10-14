'use client';

import { useWorkspaceId } from '@/app/hooks/use-workspace-id';
import { useGetWorkspace } from '@/features/workspaces/api/use-get-workspace';

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();

  const { data } = useGetWorkspace({ id: workspaceId });
  return (
    <>
      <div>Data: {JSON.stringify(data)}</div>
    </>
  );
}
