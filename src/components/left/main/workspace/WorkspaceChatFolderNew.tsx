import type { FC } from '@teact';
import { memo, useCallback } from '@teact';
import { getActions } from '../../../../global';

import Icon from '../../../common/icons/Icon';
import Accordion from '../../../ui/accordion/Accordion';

import styles from './Workspace.module.scss';

type OwnProps = {
  workspaceId: string;
  onCreationFinishOrCancel: NoneToVoidFunction;
};

const WorkspaceChatFolderNew: FC<OwnProps> = ({
  workspaceId,
  onCreationFinishOrCancel,
}) => {
  const { addChatFolderIntoWorkspace } = getActions();

  const handleRenameFinish = useCallback((title: string) => {
    if (title.length === 0) return;

    addChatFolderIntoWorkspace({
      title,
      workspaceId,
    });

    onCreationFinishOrCancel();
  }, [onCreationFinishOrCancel, workspaceId]);

  return (
    <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem;">
      <div className={styles.linkIconContainer}>
        <Icon name="folder" />
      </div>
      <Accordion
        isRenaming
        onRenameFinish={(title) => handleRenameFinish(title)}
        onRenameCancel={onCreationFinishOrCancel}
        className={styles.customListItem}
      />
    </div>
  );
};

export default memo(WorkspaceChatFolderNew);
