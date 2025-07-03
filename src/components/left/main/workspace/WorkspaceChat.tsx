import type { FC } from '@teact';
import { memo, useCallback, useMemo } from '@teact';
import { getActions, withGlobal } from '../../../../global';

import type { ApiChat, ApiTopic } from '../../../../api/types';
import type { MenuItemContextAction } from '../../../ui/ListItem';

import { selectChat, selectTopicsInfo } from '../../../../global/selectors';
import { compact } from '../../../../util/iteratees';

import useLang from '../../../../hooks/useLang';
import { ChatAnimationTypes } from '../hooks/useChatAnimationType';

import Chat from '../Chat';

type OwnProps = {
  workspaceId: string;
  chatId: string;
  chatFolderId?: string;
};

type StateProps = {
  chat?: ApiChat;
  topics?: Record<number, ApiTopic>;
};

const WorkspaceChat: FC<OwnProps & StateProps> = ({
  workspaceId,
  chatId,
  chatFolderId,
  chat,
  topics,
}) => {
  const { deleteChatFromWorkspace, deleteChatFromChatsFolder, markChatMessagesRead } = getActions();
  const lang = useLang();

  const handleDelete = useCallback(() => {
    if (chatFolderId) {
      deleteChatFromChatsFolder({
        chatFolderId,
        chatId,
      });
    } else {
      deleteChatFromWorkspace({
        workspaceId,
        chatId,
      });
    }
  }, [chatFolderId, chatId, workspaceId]);

  const contextActions = useMemo(() => {
    const actionDelete = {
      title: 'Remove',
      icon: 'delete',
      destructive: true,
      handler: handleDelete,
    };

    const actionMaskAsRead = (
      chat?.unreadCount || chat?.hasUnreadMark || Object.values(topics || {}).some(({ unreadCount }) => unreadCount)
    ) ? {
        title: lang('ChatListContextMaskAsRead'),
        icon: 'readchats',
        handler: () => markChatMessagesRead({ id: chatId }),
      } : undefined;

    return compact([
      actionMaskAsRead,
      actionDelete,
    ]) as MenuItemContextAction[];
  }, [chat, chatId, handleDelete, lang, topics]);

  return (
    <Chat
      chatId={chatId}
      orderDiff={0}
      animationType={ChatAnimationTypes.Opacity}
      isStatic
      avatarSize="tiny"
      contextActions={contextActions}
    />
  );
};

export default memo(withGlobal<OwnProps>(
  (global, { chatId }): StateProps => {
    const topicsInfo = selectTopicsInfo(global, chatId);

    return {
      chat: selectChat(global, chatId),
      topics: topicsInfo?.topicsById,
    };
  },
)(WorkspaceChat));
