import type { FC } from '@teact';
import { memo, useCallback, useEffect, useMemo, useState } from '@teact';
import { getActions, withGlobal } from '../../../global';

import type { ApiWorkspace } from '../../../api/notlost/types';
import type { MenuItemContextAction } from '../../ui/ListItem';
import { LeftColumnContent } from '../../../types';

import { selectTabState } from '../../../global/selectors';

import Accordion from '../../ui/accordion/Accordion';
import AccordionSavedState from '../../ui/accordion/AccordionSavedState';
import MainSidebarTab from './MainSidebarTab';

import styles from './MainSidebar.module.scss';

type OwnProps = {
  workspaces: ApiWorkspace[];
};

type StateProps = {
  workspaces: ApiWorkspace[];
  areWorkspacesLoaded: boolean;
  activeWorkspaceId?: string;
  leftColumnContentKey: LeftColumnContent;
};

const MainSidebarWorkspaces: FC<OwnProps & StateProps> = ({
  workspaces,
  areWorkspacesLoaded,
  activeWorkspaceId,
  leftColumnContentKey,
}) => {
  const {
    loadAllWorkspaces,
    addNewWorkspace,
    openLeftColumnContent,
    setActiveWorkspaceId,
    deleteWorkspace,
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
    [leftColumnContentKey, openLeftColumnContent, setActiveWorkspaceId],
  );

  const handleDeleteWorkspace = useCallback(
    (workspaceId: string) => () => {
      deleteWorkspace({ workspaceId });
    },
    [deleteWorkspace],
  );

  const handleAddNewWorkspace = useCallback(
    (title: string) => {
      if (title.length === 0) return;

      addNewWorkspace({
        title,
        iconName: 'lamp',
      });
      setIsAddingNewSpace(false);
    },
    [addNewWorkspace],
  );

  const createWorkspaceContextActions = useCallback(
    (workspace: ApiWorkspace): MenuItemContextAction[] => {
      return [
        {
          title: 'Delete',
          handler: handleDeleteWorkspace(workspace.id),
          icon: 'delete',
          destructive: true,
        },
      ];
    },
    [handleDeleteWorkspace],
  );

  useEffect(() => {
    if (!areWorkspacesLoaded) {
      loadAllWorkspaces();
    } else if (activeWorkspaceId === undefined && workspaces[0]) {
      handleSetActiveWorkspace(workspaces[0].id)();
    }
  }, [activeWorkspaceId, areWorkspacesLoaded, handleSetActiveWorkspace, workspaces]);

  const workspaceTabs = useMemo(() => {
    return workspaces.map((workspace) => (
      <MainSidebarTab
        key={workspace.id}
        iconName={workspace.iconName}
        title={workspace.title}
        onClick={handleSetActiveWorkspace(workspace.id)}
        isSelected={
          leftColumnContentKey === LeftColumnContent.Workspace
          && activeWorkspaceId === workspace.id
        }
        contextActions={createWorkspaceContextActions(workspace)}
      />
    ));
  }, [
    workspaces,
    leftColumnContentKey,
    activeWorkspaceId,
    handleSetActiveWorkspace,
    createWorkspaceContextActions,
  ]);

  return (
    <AccordionSavedState id="main-sidebar-section-Space">
      {({ isExpandedByDefault, onChange }) => (
        <Accordion
          title="Spaces"
          isExpandedByDefault={isExpandedByDefault}
          onChange={onChange}
          onAddClick={handleStartAddingNewSpace}
          className={styles.sidebarAccordionSection}
        >
          {workspaceTabs}
          {isAddingNewSpace && (
            <Accordion
              isRenaming
              leftIconName="lamp"
              onRenameCancel={handleCancelAddingNewSpace}
              onRenameFinish={handleAddNewWorkspace}
            />
          )}
        </Accordion>
      )}
    </AccordionSavedState>

  );
};

export default memo(withGlobal(
  (global): StateProps => {
    const { workspaces } = global;
    const tabState = selectTabState(global);
    const leftColumnContentKey = tabState.leftColumn.contentKey;

    return {
      workspaces: workspaces.byOrder || [],
      areWorkspacesLoaded: workspaces.areLoaded || false,
      activeWorkspaceId: workspaces.activeId,
      leftColumnContentKey,
    };
  },
)(MainSidebarWorkspaces));
