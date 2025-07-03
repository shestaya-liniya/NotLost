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
  placeholder?: string;
  onRenameCancel?: NoneToVoidFunction;
  onRenameFinish?: (value: string) => void;
};

const AccordionHeaderOnRename: FC<OwnProps> = ({
  leftIconName,
  title,
  placeholder,
  onRenameCancel,
  onRenameFinish,
}) => {
  const inputRef = useRef<HTMLInputElement | undefined>(undefined);

  const [value, setValue] = useState(title || '');

  useEffect(() => {
    const releaseEscListener = captureEscKeyListener(() => onRenameCancel?.());
    const releaseEnterListener = captureEnterKeyListener(() => {
      onRenameFinish?.(value);
      setValue('');
    });

    return () => {
      releaseEscListener();
      releaseEnterListener();
    };
  }, [onRenameCancel, onRenameFinish, value]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setValue(title || '');
  }, [title]);

  const leftIconClassName = buildClassName(
    'leftIcon',
    leftIconName === 'down' && 'rotate',
  );

  return (
    <div className="AccordionHeaderOnRename">
      {leftIconName && (
        <div className="leftIconContainer">
          <Icon
            name={leftIconName}
            className={leftIconClassName}
          />
        </div>
      )}
      <input
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={onRenameCancel}
      />
    </div>
  );
};

export default memo(AccordionHeaderOnRename);
