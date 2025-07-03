import type { FC } from '@teact';
import { memo } from '@teact';

import { LOCAL_TGS_URLS } from '../common/helpers/animatedAssets';

import AnimatedIconWithPreview from '../common/AnimatedIconWithPreview';

import './MiddleColumn.module.scss';

type OwnProps = {
  errorMessage: string;
};

const WebContentsError: FC<OwnProps> = ({
  errorMessage,
}) => {
  return (
    <div className="webContentsError">
      <div className="webContentsErrorTitle">Hmmm...</div>
      <AnimatedIconWithPreview
        size={160}
        tgsUrl={LOCAL_TGS_URLS.SearchingDuck}
        nonInteractive
        noLoop
      />
      <div className="webContentsErrorMessage">
        {errorMessage}
      </div>
    </div>
  );
};

export default memo(WebContentsError);
