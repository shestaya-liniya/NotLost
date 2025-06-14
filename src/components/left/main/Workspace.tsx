import type { FC } from '../../../lib/teact/teact';
import React, { memo, useCallback, useState } from '../../../lib/teact/teact';
import { getActions } from '../../../global';

import type { ApiInlineFolder, ApiWorkspace } from '../../../api/notlost/types';

import buildClassName from '../../../util/buildClassName';

import InlineFolder from '../../ui/InlineFolder';
import WorkspaceRightSidebar from './WorkspaceRightSidebar';

import styles from './Workspace.module.scss';

type OwnProps = {
  workspace: ApiWorkspace;
};

const Workspace: FC<OwnProps> = ({
  workspace,
}) => {
  const { addNewFolderIntoWorkspace, deleteFolderFromWorkspace, renameWorkspaceFolder } = getActions();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState<ApiInlineFolder | undefined>(undefined);
  const [editingFolderId, setEditingFolderId] = useState<string | undefined>(undefined);

  const [isAddingNewFolder, setIsAddingNewFolder] = useState(false);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
    setActiveFolder(undefined);
  }, []);

  const handleOpenSidebar = useCallback((folder: ApiInlineFolder) => {
    return () => {
      setIsSidebarOpen(true);
      setActiveFolder(folder);
    };
  }, []);

  const handleStartAddingNewFolder = useCallback(() => {
    setIsAddingNewFolder(true);
  }, []);

  const handleCancelAddingNewFolder = useCallback(() => {
    setIsAddingNewFolder(false);
  }, []);

  const handleAddNewFolder = useCallback((title: string) => {
    addNewFolderIntoWorkspace({
      workspaceId: workspace.id,
      title,
    });
    handleCancelAddingNewFolder();
  }, [handleCancelAddingNewFolder, workspace.id]);

  const handleRenameWorkspaceFolder = useCallback((folderId: string, newTitle: string) => {
    renameWorkspaceFolder({
      workspaceId: workspace.id,
      folderId,
      newTitle,
    });
    setEditingFolderId(undefined);
  }, [workspace.id]);

  const handleDeleteFolder = useCallback((folderId: string) => {
    deleteFolderFromWorkspace({
      workspaceId: workspace.id,
      folderId,
    });
  }, [workspace.id]);

  const containerClassName = buildClassName(
    styles.container,
    'custom-scroll',
  );

  return (
    <div className={containerClassName}>
      <InlineFolder isSection title="Pinned" orderedIds={workspace.pinnedChatIds} />
      <InlineFolder isSection title="Folders" onAddClick={handleStartAddingNewFolder}>
        {workspace.folders.map((f) => {
          return (
            <InlineFolder
              title={f.title}
              orderedIds={f.chatIds}
              isSelected={f.id === activeFolder?.id}
              isEditing={editingFolderId === f.id}
              onAddClick={handleOpenSidebar(f)}
              // eslint-disable-next-line react/jsx-no-bind
              onEditFinish={(newTitle) => handleRenameWorkspaceFolder(f.id, newTitle)}
              contextActions={[
                {
                  title: 'Rename',
                  icon: 'edit',
                  handler: () => setEditingFolderId(f.id),
                  key: '1',
                },
                {
                  title: 'Delete',
                  icon: 'delete',
                  destructive: true,
                  handler: () => handleDeleteFolder(f.id),
                  key: 'delete',
                },
              ]}
            />
          );
        })}
        {isAddingNewFolder
          && (
            <InlineFolder
              isEditing
              onEditCancel={handleCancelAddingNewFolder}
              onEditFinish={handleAddNewFolder}
            />
          )}
      </InlineFolder>
      <WorkspaceRightSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        activeFolder={activeFolder}
        workspaceId={workspace.id}
      />
    </div>
  );
};

export default memo(Workspace);
