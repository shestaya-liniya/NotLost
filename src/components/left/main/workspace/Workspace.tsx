import type { FC } from '../../../../lib/teact/teact';
import { memo, useCallback, useEffect, useState } from '../../../../lib/teact/teact';

import type { ApiInlineFolder, ApiSection, ApiWorkspace } from '../../../../api/notlost/types';

import buildClassName from '../../../../util/buildClassName';
import { ChatAnimationTypes } from '../hooks';

import Icon from '../../../common/icons/Icon';
import Chat from '../Chat';
import WorkspaceRightSidebar from './WorkspaceRightSidebar';
import WorkspaceSection from './WorkspaceSection';
import WorkspaceSectionNew from './WorkspaceSectionNew';

import styles from './Workspace.module.scss';

export type ActiveEntityType = 'workspace' | 'section' | 'folder';
export type ActiveEntity = ApiWorkspace | ApiSection | ApiInlineFolder;

type OwnProps = {
  workspace: ApiWorkspace;
};

const Workspace: FC<OwnProps> = ({
  workspace,
}) => {
  const [activeEntity, setActiveEntity] = useState<ActiveEntity | undefined>(undefined);
  const [activeEntityType, setActiveEntityType] = useState<ActiveEntityType | undefined>(undefined);

  const [isAddingNewSection, setIsAddingNewSection] = useState(false);

  const handleUnselectEntityForChatsAdd = useCallback(() => {
    setActiveEntity(undefined);
    setActiveEntityType(undefined);
  }, []);

  const handleSetActiveEntity = useCallback(
    (entity: ActiveEntity, entityType: ActiveEntityType) => {
      setActiveEntity(entity);
      setActiveEntityType(entityType);
    }, []);

  useEffect(() => {
    // refresh active entity on workspace update, should refactor somehow
    if (!activeEntity) return;

    if (activeEntityType === 'workspace') {
      handleSetActiveEntity(workspace, 'workspace');
    } else if (activeEntityType === 'section') {
      const updatedSection = workspace.sections.find((s) => s.id === activeEntity.id)!;
      handleSetActiveEntity(updatedSection, 'section');
    }
  }, [activeEntity, activeEntityType, handleSetActiveEntity, workspace]);

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
        <Icon
          className={styles.addSectionButton}
          name="add"
          onClick={() => handleSetActiveEntity(workspace, 'workspace')}
        />
      </div>
      <div className={styles.chats}>
        {workspace?.chatIds.map((id) => (
          <Chat
            chatId={id}
            orderDiff={0}
            animationType={ChatAnimationTypes.Opacity}
            isStatic
            avatarSize="tiny"
          />
        ))}
      </div>
      <div className={styles.sections}>
        {workspace.sections.map((section) => (
          <WorkspaceSection
            section={section}
            isHighlighted={activeEntity?.id === section.id}
            selectForAddingChats={() => handleSetActiveEntity(section, 'section')}
          />
        ))}
        {isAddingNewSection && (
          <WorkspaceSectionNew
            workspaceId={workspace.id}
            onCreationCancel={() => setIsAddingNewSection(false)}
            onCreationFinish={(section) => handleSetActiveEntity(section, 'section')}
          />
        )}
      </div>
      <WorkspaceRightSidebar
        activeEntity={activeEntity}
        activeEntityType={activeEntityType}
        onClose={handleUnselectEntityForChatsAdd}
        handleStartAddingNewSection={() => setIsAddingNewSection(true)}
      />
    </div>
  );
};

export default memo(Workspace);
