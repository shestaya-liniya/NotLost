import type { FC } from '@teact';
import { memo, useCallback } from '@teact';
import { getActions } from '../../../../global';

import type { ApiSection } from '../../../../api/notlost/types';

import Accordion from '../../../ui/accordion/Accordion';

type OwnProps = {
  workspaceId: string;
  onCreationCancel: NoneToVoidFunction;
  onCreationFinish: (section: ApiSection) => void;
};

const WorkspaceSectionNew: FC<OwnProps> = ({
  workspaceId,
  onCreationCancel,
  onCreationFinish,
}) => {
  const { addNewSectionIntoWorkspace } = getActions();

  const handleAddNewSection = useCallback((title: string) => {
    if (title.length === 0) return;

    addNewSectionIntoWorkspace({
      title,
      workspaceId,
      callback: (section) => onCreationFinish(section),
    });
  }, [onCreationFinish, workspaceId]);

  return (
    <Accordion
      isRenaming
      onRenameFinish={(title) => handleAddNewSection(title)}
      onRenameCancel={onCreationCancel}
    />
  );
};

export default memo(WorkspaceSectionNew);
