import type { FC } from '../../../../lib/teact/teact';
import { memo, useCallback, useEffect, useState } from '../../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../../global';

import type { ApiWorkspace, ApiWorkspaceChatFolder } from '../../../../api/notlost/types';

import buildClassName from '../../../../util/buildClassName';

import Icon from '../../../common/icons/Icon';
import WorkspaceChat from './WorkspaceChat';
import WorkspaceChatFolder from './WorkspaceChatFolder';
import WorkspaceChatFolderNew from './WorkspaceChatFolderNew';
import WorkspaceLink from './WorkspaceLink';
import WorkspaceLinkNew from './WorkspaceLinkNew';
import WorkspaceRightSidebar from './WorkspaceRightSidebar';
import WorkspaceSection from './WorkspaceSection';

import styles from './Workspace.module.scss';

export type ActiveEntityType = 'workspace' | 'chatFolder';
export type ActiveEntity = ApiWorkspace | ApiWorkspaceChatFolder;

type OwnProps = {
  workspace: ApiWorkspace;
};

type StateProps = {
  selectedItemId?: string;
};

const Workspace: FC<OwnProps & StateProps> = ({
  workspace,
  selectedItemId,
}) => {
  const { setWorkspaceSidebarOpen } = getActions();

  const [activeEntity, setActiveEntity] = useState<ActiveEntity | undefined>(undefined);
  const [activeEntityType, setActiveEntityType] = useState<ActiveEntityType | undefined>(undefined);

  const [isAddingNewChatFolder, setIsAddingNewChatFolder] = useState(false);
  const [isAddingNewLink, setIsAddingNewLink] = useState(false);

  const handleUnselectEntityForChatsAdd = useCallback(() => {
    setActiveEntity(undefined);
    setActiveEntityType(undefined);

    setWorkspaceSidebarOpen(false);
  }, []);

  const handleSetActiveEntity = useCallback(
    (entity: ActiveEntity, entityType: ActiveEntityType) => {
      setActiveEntity(entity);
      setActiveEntityType(entityType);

      setWorkspaceSidebarOpen(true);
    }, []);

  useEffect(() => {
    // refresh active entity on workspace update, should refactor somehow
    if (!activeEntity) return;

    if (activeEntityType === 'workspace') {
      handleSetActiveEntity(workspace, 'workspace');
    } else if (activeEntityType === 'chatFolder') {
      const updatedSection = workspace.chatFolders.find((f) => f.id === activeEntity.id)!;
      handleSetActiveEntity(updatedSection, 'chatFolder');
    }
  }, [activeEntity, activeEntityType, handleSetActiveEntity, workspace]);

  useEffect(() => {
    // reset active entity when workspace changes
    handleUnselectEntityForChatsAdd();
  }, [handleUnselectEntityForChatsAdd, workspace.id]);

  const containerClassName = buildClassName(
    styles.container,
    'custom-scroll',
  );

  const headerClassName = buildClassName(
    styles.header,
    activeEntityType === 'workspace' && styles.selected,
  );

  return (
    <div className={containerClassName}>
      <div className={headerClassName}>
        <div className={styles.headerTitle}>{workspace?.title}</div>
        <div className={styles.headerButtons}>
          <Icon
            className={styles.addLinkButton}
            name="link"
            onClick={() => setIsAddingNewLink(true)}
          />
          <Icon
            className={styles.addFolderButton}
            name="folder"
            onClick={() => setIsAddingNewChatFolder(true)}
          />
          <Icon
            className={styles.addSectionButton}
            name="add"
            onClick={() => handleSetActiveEntity(workspace, 'workspace')}
          />
        </div>
      </div>
      <div className={styles.chats}>
        {workspace?.chats.map((chat) => (
          <WorkspaceChat
            key={chat.chatId}
            workspaceId={workspace.id}
            chatId={chat.chatId}
          />
        ))}
      </div>
      {(workspace.chatFolders.length > 0 || isAddingNewChatFolder) && (
        <WorkspaceSection
          workspaceId={workspace.id}
          sectionTitle="Folders"
          onAddClick={() => setIsAddingNewChatFolder(true)}
        >
          {workspace.chatFolders.map((chatFolder) => (
            <WorkspaceChatFolder
              key={chatFolder.id}
              workspaceId={workspace.id}
              chatFolder={chatFolder}
              isHighlighted={activeEntity?.id === chatFolder.id}
              selectForAddingChats={() => handleSetActiveEntity(chatFolder, 'chatFolder')}
            />
          ))}
          {isAddingNewChatFolder && (
            <WorkspaceChatFolderNew
              workspaceId={workspace.id}
              onCreationFinishOrCancel={() => setIsAddingNewChatFolder(false)}
            />
          )}
        </WorkspaceSection>
      )}
      {(workspace.links.length > 0 || isAddingNewLink) && (
        <WorkspaceSection
          workspaceId={workspace.id}
          sectionTitle="Links"
          onAddClick={() => setIsAddingNewLink(true)}
        >
          {workspace.links.map((link) => (
            <WorkspaceLink
              key={link.id}
              id={link.id}
              url={link.url}
              title={link.title}
              selected={selectedItemId === link.id}
            />
          ))}
          {isAddingNewLink && (
            <WorkspaceLinkNew
              workspaceId={workspace.id}
              onCreationFinishOrCancel={() => setIsAddingNewLink(false)}
            />
          )}
        </WorkspaceSection>
      )}
      <WorkspaceRightSidebar
        activeEntity={activeEntity}
        activeEntityType={activeEntityType}
        onClose={handleUnselectEntityForChatsAdd}
        handleStartAddingNewSection={() => setIsAddingNewChatFolder(true)}
      />
    </div>
  );
};

export default memo(withGlobal(
  (global): StateProps => {
    return {
      selectedItemId: global.workspaces.selectedItemId,
    };
  },
)(Workspace));
