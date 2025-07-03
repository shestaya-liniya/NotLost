import type { FC } from '@teact';
import { memo, useCallback, useMemo, useState } from '@teact';
import { getActions } from '../../../../global';

import type { ApiWorkspaceChatFolder } from '../../../../api/notlost/types';
import type { IconName } from '../../../../types/icons';
import type { MenuItemContextAction } from '../../../ui/ListItem';

import buildClassName from '../../../../util/buildClassName';
import { compact } from '../../../../util/iteratees';

import Accordion from '../../../ui/accordion/Accordion';
import AccordionSavedState from '../../../ui/accordion/AccordionSavedState';
import WorkspaceChat from './WorkspaceChat';

import styles from './Workspace.module.scss';

type OwnProps = {
  workspaceId: string;
  chatFolder: ApiWorkspaceChatFolder;
  isHighlighted?: boolean;
  selectForAddingChats?: NoneToVoidFunction;
};

const WorkspaceChatFolder: FC<OwnProps> = ({
  workspaceId,
  chatFolder,
  isHighlighted,
  selectForAddingChats,
},
) => {
  const { renameChatFolderInWorkspace, deleteChatFolderFromWorkspace } = getActions();
  const [isRenaming, setIsRenaming] = useState(false);
  const [leftIcon, setLeftIcon] = useState<IconName>('folder');

  const handleRename = useCallback((newTitle: string) => {
    if (newTitle.length === 0) return;

    renameChatFolderInWorkspace({
      chatFolderId: chatFolder.id,
      newTitle,
    });
    setIsRenaming(false);
  }, [chatFolder.id]);

  const handleDelete = useCallback(() => {
    deleteChatFolderFromWorkspace({
      chatFolderId: chatFolder.id,
    });
  }, [chatFolder.id]);

  const contextActions = useMemo(() => {
    const actionRename = {
      title: 'Rename',
      icon: 'edit',
      handler: () => {
        setIsRenaming(true);
      },
    } satisfies MenuItemContextAction;

    const actionDelete = {
      title: 'Delete',
      icon: 'delete',
      destructive: true,
      handler: handleDelete,
    } satisfies MenuItemContextAction;

    return compact([actionRename, actionDelete]);
  }, [handleDelete]);

  const className = buildClassName(
    styles.customListItem,
    styles.workspaceChatFolder,
  );

  return (

    <AccordionSavedState
      id={chatFolder.id}
      isInitiallyExpanded={false}
    >
      {({ isExpandedByDefault, onChange }) => (
        <Accordion
          key={chatFolder.id}
          title={chatFolder.title}
          leftIconName={leftIcon}
          isHighlighted={isHighlighted}
          isExpandedByDefault={isExpandedByDefault}
          withInnerPadding
          onChange={(isExpanded) => {
            onChange(isExpanded);
            if (isExpanded) {
              setLeftIcon('folder-badge');
            } else {
              setLeftIcon('folder');
            }
          }}
          isRenaming={isRenaming}
          onAddClick={selectForAddingChats}
          onRenameFinish={handleRename}
          onRenameCancel={() => setIsRenaming(false)}
          contextActions={contextActions}
          className={className}
        >
          {chatFolder.chats.map((chat) => (
            <WorkspaceChat
              key={chat.chatId}
              workspaceId={workspaceId}
              chatId={chat.chatId}
              chatFolderId={chatFolder.id}
            />
          ))}
        </Accordion>
      )}
    </AccordionSavedState>
  );
};

export default memo(WorkspaceChatFolder);
