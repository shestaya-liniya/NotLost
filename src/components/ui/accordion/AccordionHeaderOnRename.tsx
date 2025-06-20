import type { FC } from '@teact';
import { memo, useEffect, useRef, useState } from '@teact';

import type { IconName } from '../../../types/icons';

import buildClassName from '../../../util/buildClassName';
import captureEnterKeyListener from '../../../util/captureEnterKeyListener';
import captureEscKeyListener from '../../../util/captureEscKeyListener';

import Icon from '../../common/icons/Icon';

import './Accordion.scss';

type OwnProps = {
  leftIconName?: IconName;
  title?: string;
  onRenameCancel?: NoneToVoidFunction;
  onRenameFinish?: (value: string) => void;
};

const AccordionHeaderOnRename: FC<OwnProps> = ({
  leftIconName,
  title,
  onRenameCancel,
  onRenameFinish,
}) => {
  const inputRef = useRef<HTMLInputElement | undefined>(undefined);

  const [value, setValue] = useState(title || '');

  captureEscKeyListener(() => onRenameCancel?.());
  captureEnterKeyListener(() => onRenameFinish?.(value));

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const leftIconClassName = buildClassName(
    'leftIcon',
    leftIconName === 'down' && 'rotate',
  );

  return (
    <div className="AccordionHeaderOnRename">
      {leftIconName && <Icon className={leftIconClassName} name={leftIconName} />}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={onRenameCancel}
      />
    </div>
  );
};

export default memo(AccordionHeaderOnRename);
