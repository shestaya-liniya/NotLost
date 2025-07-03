import type { FC } from '@teact';
import { memo, useCallback, useState } from '@teact';
import { getActions } from '../../../../global';

import Icon from '../../../common/icons/Icon';
import Accordion from '../../../ui/accordion/Accordion';

import styles from './Workspace.module.scss';

type OwnProps = {
  workspaceId: string;
  onCreationFinishOrCancel: NoneToVoidFunction;
};

const WorkspaceLinkNew: FC<OwnProps> = ({
  workspaceId,
  onCreationFinishOrCancel,
}) => {
  const { addLinkIntoWorkspace } = getActions();
  const [newLinkState, setNewLinkState] = useState({
    title: '',
    url: '',
  });
  const [step, setStep] = useState<'url' | 'title'>('url');

  const handleStep = useCallback((value: string) => {
    if (value.length === 0) return;

    if (step === 'url') {
      setNewLinkState((prevState) => ({
        ...prevState,
        url: value,
      }));
      setStep('title');
    } else {
      const finalLinkData = {
        ...newLinkState,
        title: value,
      };

      addLinkIntoWorkspace({
        workspaceId,
        title: finalLinkData.title,
        url: finalLinkData.url,
      });

      onCreationFinishOrCancel();
    }
  }, [step, newLinkState, addLinkIntoWorkspace, workspaceId, onCreationFinishOrCancel]);

  const getPlaceholderText = () => {
    return step === 'url' ? 'Enter URL...' : 'Enter title...';
  };

  return (
    <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem;">
      <div className={styles.linkIconContainer}>
        <Icon name="link" />
      </div>
      <Accordion
        isRenaming
        placeholder={getPlaceholderText()}
        onRenameFinish={handleStep}
        onRenameCancel={onCreationFinishOrCancel}
        className={styles.customListItem}
      />
    </div>
  );
};

export default memo(WorkspaceLinkNew);
