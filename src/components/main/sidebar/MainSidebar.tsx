import type { FC } from '../../../lib/teact/teact';
import React, {
  memo, useCallback, useEffect, useState,
} from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { ApiWorkspace } from '../../../api/notlost/types';
import { LeftColumnContent } from '../../../types';

import { selectTabState } from '../../../global/selectors';
import buildClassName from '../../../util/buildClassName';

import InlineFolder from '../../ui/InlineFolder';
import MainSidebarTab from './MainSidebarTab';
import MainSidebarTabProfile from './MainSidebarTabProfile';

import styles from './MainSidebar.module.scss';

type StateProps = {
  workspaces: ApiWorkspace[];
  areWorkspacesLoaded: boolean;
  leftColumnContentKey: LeftColumnContent;
  activeWorkspaceId: string | undefined;
};

const MainSidebar: FC<StateProps> = ({
  workspaces,
  areWorkspacesLoaded,
  leftColumnContentKey,
  activeWorkspaceId,
}) => {
  const {
    loadAllWorkspaces, addNewWorkspace, openLeftColumnContent, setActiveWorkspaceId, deleteWorkspace,
  } = getActions();
  const [isAddingNewSpace, setIsAddingNewSpace] = useState(false);

  const handleStartAddingNewSpace = useCallback(() => {
    setIsAddingNewSpace(true);
  }, []);

  const handleCancelAddingNewSpace = useCallback(() => {
    setIsAddingNewSpace(false);
  }, []);

  const handleSetActiveWorkspace = useCallback(
    (id: string) => () => {
      if (leftColumnContentKey !== LeftColumnContent.Workspace) {
        openLeftColumnContent({ contentKey: LeftColumnContent.Workspace });
      }
      setActiveWorkspaceId(id);
    },
    [leftColumnContentKey],
  );

  const handleAddNewWorkspace = useCallback((title: string) => {
    addNewWorkspace({
      title,
      iconName: 'lamp',
    });
    handleCancelAddingNewSpace();
  }, [handleCancelAddingNewSpace]);

  const handleDeleteWorkspace = useCallback((workspaceId: string) => {
    deleteWorkspace({ workspaceId });
  }, []);

  useEffect(() => {
    if (!areWorkspacesLoaded) {
      loadAllWorkspaces();
    } else if (activeWorkspaceId === undefined) {
      handleSetActiveWorkspace(workspaces[0].id)();
    }
  }, [activeWorkspaceId, areWorkspacesLoaded, handleSetActiveWorkspace, workspaces]);

  const containerClassName = buildClassName(
    styles.container,
    'custom-scroll',
  );

  return (
    <div className={containerClassName}>
      <div className={styles.tabs}>
        <InlineFolder isSection title="Account" isSidebarTab>
          <MainSidebarTabProfile />
        </InlineFolder>
        <InlineFolder
          title="Spaces"
          isSection
          isSidebarTab
          onAddClick={handleStartAddingNewSpace}
        >
          {workspaces.map((w) => (
            <MainSidebarTab
              iconName={w.iconName}
              title={w.title}
              onClick={handleSetActiveWorkspace(w.id)}
              isSelected={leftColumnContentKey === LeftColumnContent.Workspace && activeWorkspaceId === w.id}
              contextActions={[
                {
                  title: 'Delete',
                  handler: () => handleDeleteWorkspace(w.id),
                  icon: 'delete',
                  destructive: true,
                },
              ]}
            />
          ))}
          {isAddingNewSpace
          && (
            <InlineFolder
              isEditing
              isSidebarTab
              onEditCancel={handleCancelAddingNewSpace}
              onEditFinish={handleAddNewWorkspace}
            />
          )}

        </InlineFolder>
        <InlineFolder isSection title="Chats" isSidebarTab orderedIds={[]}>
          <MainSidebarTab
            title="Unreads"
            iconName="check"
            leftColumnContent={LeftColumnContent.AllUnread}
          />
          <MainSidebarTab
            title="All"
            iconName="message-read"
            leftColumnContent={LeftColumnContent.ChatList}
          />
          <MainSidebarTab
            title="Groups"
            iconName="group"
            leftColumnContent={LeftColumnContent.Groups}
          />
          <MainSidebarTab
            title="Channels"
            iconName="channel"
            leftColumnContent={LeftColumnContent.Channels}
          />
          <MainSidebarTab
            title="Bots"
            iconName="bots"
            leftColumnContent={LeftColumnContent.Bots}
          />
          <MainSidebarTab
            title="Archive"
            iconName="archive"
            leftColumnContent={LeftColumnContent.Archived}
          />
        </InlineFolder>
        <InlineFolder isSection title="Saved" isSidebarTab orderedIds={[]}>
          <MainSidebarTab
            title="All"
            iconName="tag"
            leftColumnContent={LeftColumnContent.Saved}
          />
        </InlineFolder>
      </div>
    </div>
  );
};

export default memo(withGlobal(
  (global): StateProps => {
    const { workspaces } = global;

    const tabState = selectTabState(global);
    const leftColumnContentKey = tabState.leftColumn.contentKey;

    return {
      workspaces: workspaces.byOrder,
      areWorkspacesLoaded: workspaces.areLoaded,
      activeWorkspaceId: workspaces.activeId,
      leftColumnContentKey,
    };
  },
)(MainSidebar));
