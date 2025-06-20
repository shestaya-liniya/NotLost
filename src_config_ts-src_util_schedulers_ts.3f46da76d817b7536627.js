"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_config_ts-src_util_schedulers_ts"],{

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCEPTABLE_USERNAME_ERRORS: () => (/* binding */ ACCEPTABLE_USERNAME_ERRORS),
/* harmony export */   ACCOUNT_QUERY: () => (/* binding */ ACCOUNT_QUERY),
/* harmony export */   ACCOUNT_TTL_OPTIONS: () => (/* binding */ ACCOUNT_TTL_OPTIONS),
/* harmony export */   ALL_FOLDER_ID: () => (/* binding */ ALL_FOLDER_ID),
/* harmony export */   ANIMATION_END_DELAY: () => (/* binding */ ANIMATION_END_DELAY),
/* harmony export */   ANIMATION_LEVEL_CUSTOM: () => (/* binding */ ANIMATION_LEVEL_CUSTOM),
/* harmony export */   ANIMATION_LEVEL_DEFAULT: () => (/* binding */ ANIMATION_LEVEL_DEFAULT),
/* harmony export */   ANIMATION_LEVEL_MAX: () => (/* binding */ ANIMATION_LEVEL_MAX),
/* harmony export */   ANIMATION_LEVEL_MED: () => (/* binding */ ANIMATION_LEVEL_MED),
/* harmony export */   ANIMATION_LEVEL_MIN: () => (/* binding */ ANIMATION_LEVEL_MIN),
/* harmony export */   ANIMATION_WAVE_MIN_INTERVAL: () => (/* binding */ ANIMATION_WAVE_MIN_INTERVAL),
/* harmony export */   ANONYMOUS_USER_ID: () => (/* binding */ ANONYMOUS_USER_ID),
/* harmony export */   API_CHAT_TYPES: () => (/* binding */ API_CHAT_TYPES),
/* harmony export */   API_GENERAL_ID_LIMIT: () => (/* binding */ API_GENERAL_ID_LIMIT),
/* harmony export */   API_THROTTLE_RESET_UPDATES: () => (/* binding */ API_THROTTLE_RESET_UPDATES),
/* harmony export */   API_UPDATE_THROTTLE: () => (/* binding */ API_UPDATE_THROTTLE),
/* harmony export */   APP_CODE_NAME: () => (/* binding */ APP_CODE_NAME),
/* harmony export */   APP_CONFIG_REFETCH_INTERVAL: () => (/* binding */ APP_CONFIG_REFETCH_INTERVAL),
/* harmony export */   APP_NAME: () => (/* binding */ APP_NAME),
/* harmony export */   ARCHIVED_FOLDER_ID: () => (/* binding */ ARCHIVED_FOLDER_ID),
/* harmony export */   ARCHIVE_MINIMIZED_HEIGHT: () => (/* binding */ ARCHIVE_MINIMIZED_HEIGHT),
/* harmony export */   ASSET_CACHE_NAME: () => (/* binding */ ASSET_CACHE_NAME),
/* harmony export */   AUTODOWNLOAD_FILESIZE_MB_LIMITS: () => (/* binding */ AUTODOWNLOAD_FILESIZE_MB_LIMITS),
/* harmony export */   BASE_EMOJI_KEYWORD_LANG: () => (/* binding */ BASE_EMOJI_KEYWORD_LANG),
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   BETA_CHANGELOG_URL: () => (/* binding */ BETA_CHANGELOG_URL),
/* harmony export */   BIRTHDAY_NUMBERS_SET: () => (/* binding */ BIRTHDAY_NUMBERS_SET),
/* harmony export */   BLOCKED_LIST_LIMIT: () => (/* binding */ BLOCKED_LIST_LIMIT),
/* harmony export */   BOOST_PER_SENT_GIFT: () => (/* binding */ BOOST_PER_SENT_GIFT),
/* harmony export */   BOT_FATHER_USERNAME: () => (/* binding */ BOT_FATHER_USERNAME),
/* harmony export */   BOT_VERIFICATION_PEERS_LIMIT: () => (/* binding */ BOT_VERIFICATION_PEERS_LIMIT),
/* harmony export */   CHANNEL_ID_LENGTH: () => (/* binding */ CHANNEL_ID_LENGTH),
/* harmony export */   CHAT_HEIGHT_PX: () => (/* binding */ CHAT_HEIGHT_PX),
/* harmony export */   CHAT_LIST_LOAD_SLICE: () => (/* binding */ CHAT_LIST_LOAD_SLICE),
/* harmony export */   CHAT_LIST_SLICE: () => (/* binding */ CHAT_LIST_SLICE),
/* harmony export */   CHAT_MEDIA_SLICE: () => (/* binding */ CHAT_MEDIA_SLICE),
/* harmony export */   CHAT_STICKER_SET_ID: () => (/* binding */ CHAT_STICKER_SET_ID),
/* harmony export */   COLLECTIBLE_STATUS_SET_ID: () => (/* binding */ COLLECTIBLE_STATUS_SET_ID),
/* harmony export */   COMPOSER_EMOJI_SIZE_PICKER: () => (/* binding */ COMPOSER_EMOJI_SIZE_PICKER),
/* harmony export */   CONTENT_NOT_SUPPORTED: () => (/* binding */ CONTENT_NOT_SUPPORTED),
/* harmony export */   CONTENT_TYPES_WITH_PREVIEW: () => (/* binding */ CONTENT_TYPES_WITH_PREVIEW),
/* harmony export */   COUNTRIES_WITH_12H_TIME_FORMAT: () => (/* binding */ COUNTRIES_WITH_12H_TIME_FORMAT),
/* harmony export */   CUSTOM_APPENDIX_ATTRIBUTE: () => (/* binding */ CUSTOM_APPENDIX_ATTRIBUTE),
/* harmony export */   CUSTOM_BG_CACHE_NAME: () => (/* binding */ CUSTOM_BG_CACHE_NAME),
/* harmony export */   DARK_THEME_BG_COLOR: () => (/* binding */ DARK_THEME_BG_COLOR),
/* harmony export */   DARK_THEME_PATTERN_COLOR: () => (/* binding */ DARK_THEME_PATTERN_COLOR),
/* harmony export */   DATA_BROADCAST_CHANNEL_PREFIX: () => (/* binding */ DATA_BROADCAST_CHANNEL_PREFIX),
/* harmony export */   DC_IDS: () => (/* binding */ DC_IDS),
/* harmony export */   DEBUG: () => (/* binding */ DEBUG),
/* harmony export */   DEBUG_ALERT_MSG: () => (/* binding */ DEBUG_ALERT_MSG),
/* harmony export */   DEBUG_GRAMJS: () => (/* binding */ DEBUG_GRAMJS),
/* harmony export */   DEBUG_LOG_FILENAME: () => (/* binding */ DEBUG_LOG_FILENAME),
/* harmony export */   DEBUG_MORE: () => (/* binding */ DEBUG_MORE),
/* harmony export */   DEBUG_PAYMENT_SMART_GLOCAL: () => (/* binding */ DEBUG_PAYMENT_SMART_GLOCAL),
/* harmony export */   DEFAULT_CHARGE_FOR_MESSAGES: () => (/* binding */ DEFAULT_CHARGE_FOR_MESSAGES),
/* harmony export */   DEFAULT_GIFT_PROFILE_FILTER_OPTIONS: () => (/* binding */ DEFAULT_GIFT_PROFILE_FILTER_OPTIONS),
/* harmony export */   DEFAULT_GIF_SEARCH_BOT_USERNAME: () => (/* binding */ DEFAULT_GIF_SEARCH_BOT_USERNAME),
/* harmony export */   DEFAULT_LIMITS: () => (/* binding */ DEFAULT_LIMITS),
/* harmony export */   DEFAULT_MAXIMUM_CHARGE_FOR_MESSAGES: () => (/* binding */ DEFAULT_MAXIMUM_CHARGE_FOR_MESSAGES),
/* harmony export */   DEFAULT_MAX_MESSAGE_LENGTH: () => (/* binding */ DEFAULT_MAX_MESSAGE_LENGTH),
/* harmony export */   DEFAULT_MESSAGE_TEXT_SIZE_PX: () => (/* binding */ DEFAULT_MESSAGE_TEXT_SIZE_PX),
/* harmony export */   DEFAULT_PATTERN_COLOR: () => (/* binding */ DEFAULT_PATTERN_COLOR),
/* harmony export */   DEFAULT_PLAYBACK_RATE: () => (/* binding */ DEFAULT_PLAYBACK_RATE),
/* harmony export */   DEFAULT_RESALE_GIFTS_FILTER_OPTIONS: () => (/* binding */ DEFAULT_RESALE_GIFTS_FILTER_OPTIONS),
/* harmony export */   DEFAULT_STATUS_ICON_ID: () => (/* binding */ DEFAULT_STATUS_ICON_ID),
/* harmony export */   DEFAULT_TOPIC_ICON_STICKER_ID: () => (/* binding */ DEFAULT_TOPIC_ICON_STICKER_ID),
/* harmony export */   DEFAULT_VOLUME: () => (/* binding */ DEFAULT_VOLUME),
/* harmony export */   DELETED_COMMENTS_CHANNEL_ID: () => (/* binding */ DELETED_COMMENTS_CHANNEL_ID),
/* harmony export */   DOWNLOAD_WORKERS: () => (/* binding */ DOWNLOAD_WORKERS),
/* harmony export */   DRAFT_DEBOUNCE: () => (/* binding */ DRAFT_DEBOUNCE),
/* harmony export */   EDITABLE_INPUT_CSS_SELECTOR: () => (/* binding */ EDITABLE_INPUT_CSS_SELECTOR),
/* harmony export */   EDITABLE_INPUT_ID: () => (/* binding */ EDITABLE_INPUT_ID),
/* harmony export */   EDITABLE_INPUT_MODAL_CSS_SELECTOR: () => (/* binding */ EDITABLE_INPUT_MODAL_CSS_SELECTOR),
/* harmony export */   EDITABLE_INPUT_MODAL_ID: () => (/* binding */ EDITABLE_INPUT_MODAL_ID),
/* harmony export */   EDITABLE_STORY_INPUT_CSS_SELECTOR: () => (/* binding */ EDITABLE_STORY_INPUT_CSS_SELECTOR),
/* harmony export */   EDITABLE_STORY_INPUT_ID: () => (/* binding */ EDITABLE_STORY_INPUT_ID),
/* harmony export */   EFFECT_EMOJIS_SET_ID: () => (/* binding */ EFFECT_EMOJIS_SET_ID),
/* harmony export */   EFFECT_STICKERS_SET_ID: () => (/* binding */ EFFECT_STICKERS_SET_ID),
/* harmony export */   ELECTRON_HOST_URL: () => (/* binding */ ELECTRON_HOST_URL),
/* harmony export */   ELECTRON_WINDOW_DRAG_EVENT_END: () => (/* binding */ ELECTRON_WINDOW_DRAG_EVENT_END),
/* harmony export */   ELECTRON_WINDOW_DRAG_EVENT_START: () => (/* binding */ ELECTRON_WINDOW_DRAG_EVENT_START),
/* harmony export */   EMOJI_IMG_REGEX: () => (/* binding */ EMOJI_IMG_REGEX),
/* harmony export */   EMOJI_SIZES: () => (/* binding */ EMOJI_SIZES),
/* harmony export */   EMOJI_SIZE_MODAL: () => (/* binding */ EMOJI_SIZE_MODAL),
/* harmony export */   EMOJI_SIZE_PICKER: () => (/* binding */ EMOJI_SIZE_PICKER),
/* harmony export */   EMOJI_STATUS_LOOP_LIMIT: () => (/* binding */ EMOJI_STATUS_LOOP_LIMIT),
/* harmony export */   ESTABLISH_BROADCAST_CHANNEL_PREFIX: () => (/* binding */ ESTABLISH_BROADCAST_CHANNEL_PREFIX),
/* harmony export */   FAQ_URL: () => (/* binding */ FAQ_URL),
/* harmony export */   FAVORITE_SYMBOL_SET_ID: () => (/* binding */ FAVORITE_SYMBOL_SET_ID),
/* harmony export */   FEEDBACK_URL: () => (/* binding */ FEEDBACK_URL),
/* harmony export */   FRAGMENT_ADS_URL: () => (/* binding */ FRAGMENT_ADS_URL),
/* harmony export */   FRAGMENT_PHONE_CODE: () => (/* binding */ FRAGMENT_PHONE_CODE),
/* harmony export */   FRAGMENT_PHONE_LENGTH: () => (/* binding */ FRAGMENT_PHONE_LENGTH),
/* harmony export */   FRESH_AUTH_PERIOD: () => (/* binding */ FRESH_AUTH_PERIOD),
/* harmony export */   GENERAL_REFETCH_INTERVAL: () => (/* binding */ GENERAL_REFETCH_INTERVAL),
/* harmony export */   GENERAL_TOPIC_ID: () => (/* binding */ GENERAL_TOPIC_ID),
/* harmony export */   GIF_MIME_TYPE: () => (/* binding */ GIF_MIME_TYPE),
/* harmony export */   GIVEAWAY_BOOST_PER_PREMIUM: () => (/* binding */ GIVEAWAY_BOOST_PER_PREMIUM),
/* harmony export */   GIVEAWAY_MAX_ADDITIONAL_CHANNELS: () => (/* binding */ GIVEAWAY_MAX_ADDITIONAL_CHANNELS),
/* harmony export */   GIVEAWAY_MAX_ADDITIONAL_COUNTRIES: () => (/* binding */ GIVEAWAY_MAX_ADDITIONAL_COUNTRIES),
/* harmony export */   GIVEAWAY_MAX_ADDITIONAL_USERS: () => (/* binding */ GIVEAWAY_MAX_ADDITIONAL_USERS),
/* harmony export */   GLOBAL_SEARCH_CONTACTS_LIMIT: () => (/* binding */ GLOBAL_SEARCH_CONTACTS_LIMIT),
/* harmony export */   GLOBAL_SEARCH_SLICE: () => (/* binding */ GLOBAL_SEARCH_SLICE),
/* harmony export */   GLOBAL_STATE_CACHE_ARCHIVED_CHAT_LIST_LIMIT: () => (/* binding */ GLOBAL_STATE_CACHE_ARCHIVED_CHAT_LIST_LIMIT),
/* harmony export */   GLOBAL_STATE_CACHE_CHAT_LIST_LIMIT: () => (/* binding */ GLOBAL_STATE_CACHE_CHAT_LIST_LIMIT),
/* harmony export */   GLOBAL_STATE_CACHE_CUSTOM_EMOJI_LIMIT: () => (/* binding */ GLOBAL_STATE_CACHE_CUSTOM_EMOJI_LIMIT),
/* harmony export */   GLOBAL_STATE_CACHE_DISABLED: () => (/* binding */ GLOBAL_STATE_CACHE_DISABLED),
/* harmony export */   GLOBAL_STATE_CACHE_PREFIX: () => (/* binding */ GLOBAL_STATE_CACHE_PREFIX),
/* harmony export */   GLOBAL_STATE_CACHE_USER_LIST_LIMIT: () => (/* binding */ GLOBAL_STATE_CACHE_USER_LIST_LIMIT),
/* harmony export */   GLOBAL_SUGGESTED_CHANNELS_ID: () => (/* binding */ GLOBAL_SUGGESTED_CHANNELS_ID),
/* harmony export */   GLOBAL_TOPIC_SEARCH_SLICE: () => (/* binding */ GLOBAL_TOPIC_SEARCH_SLICE),
/* harmony export */   GROUP_CALL_DEFAULT_VOLUME: () => (/* binding */ GROUP_CALL_DEFAULT_VOLUME),
/* harmony export */   GROUP_CALL_PARTICIPANTS_LIMIT: () => (/* binding */ GROUP_CALL_PARTICIPANTS_LIMIT),
/* harmony export */   GROUP_CALL_VOLUME_MULTIPLIER: () => (/* binding */ GROUP_CALL_VOLUME_MULTIPLIER),
/* harmony export */   HEART_REACTION: () => (/* binding */ HEART_REACTION),
/* harmony export */   IGNORE_UNHANDLED_ERRORS: () => (/* binding */ IGNORE_UNHANDLED_ERRORS),
/* harmony export */   INACTIVE_MARKER: () => (/* binding */ INACTIVE_MARKER),
/* harmony export */   IOS_DEFAULT_MESSAGE_TEXT_SIZE_PX: () => (/* binding */ IOS_DEFAULT_MESSAGE_TEXT_SIZE_PX),
/* harmony export */   IS_BETA: () => (/* binding */ IS_BETA),
/* harmony export */   IS_MOCKED_CLIENT: () => (/* binding */ IS_MOCKED_CLIENT),
/* harmony export */   IS_PACKAGED_ELECTRON: () => (/* binding */ IS_PACKAGED_ELECTRON),
/* harmony export */   IS_PERF: () => (/* binding */ IS_PERF),
/* harmony export */   IS_SCREEN_LOCKED_CACHE_KEY: () => (/* binding */ IS_SCREEN_LOCKED_CACHE_KEY),
/* harmony export */   IS_TEST: () => (/* binding */ IS_TEST),
/* harmony export */   LANG_CACHE_NAME: () => (/* binding */ LANG_CACHE_NAME),
/* harmony export */   LANG_PACK: () => (/* binding */ LANG_PACK),
/* harmony export */   LANG_PACKS: () => (/* binding */ LANG_PACKS),
/* harmony export */   LEGACY_PASSCODE_CACHE_NAME: () => (/* binding */ LEGACY_PASSCODE_CACHE_NAME),
/* harmony export */   LIGHT_THEME_BG_COLOR: () => (/* binding */ LIGHT_THEME_BG_COLOR),
/* harmony export */   LOCK_SCREEN_ANIMATION_DURATION_MS: () => (/* binding */ LOCK_SCREEN_ANIMATION_DURATION_MS),
/* harmony export */   LOTTIE_STICKER_MIME_TYPE: () => (/* binding */ LOTTIE_STICKER_MIME_TYPE),
/* harmony export */   MACOS_DEFAULT_MESSAGE_TEXT_SIZE_PX: () => (/* binding */ MACOS_DEFAULT_MESSAGE_TEXT_SIZE_PX),
/* harmony export */   MAX_ACTIVE_PINNED_CHATS: () => (/* binding */ MAX_ACTIVE_PINNED_CHATS),
/* harmony export */   MAX_INT_32: () => (/* binding */ MAX_INT_32),
/* harmony export */   MAX_MEDIA_FILES_FOR_ALBUM: () => (/* binding */ MAX_MEDIA_FILES_FOR_ALBUM),
/* harmony export */   MAX_UNIQUE_REACTIONS: () => (/* binding */ MAX_UNIQUE_REACTIONS),
/* harmony export */   MAX_UPLOAD_FILEPART_SIZE: () => (/* binding */ MAX_UPLOAD_FILEPART_SIZE),
/* harmony export */   MEDIA_CACHE_DISABLED: () => (/* binding */ MEDIA_CACHE_DISABLED),
/* harmony export */   MEDIA_CACHE_MAX_BYTES: () => (/* binding */ MEDIA_CACHE_MAX_BYTES),
/* harmony export */   MEDIA_CACHE_NAME: () => (/* binding */ MEDIA_CACHE_NAME),
/* harmony export */   MEDIA_CACHE_NAME_AVATARS: () => (/* binding */ MEDIA_CACHE_NAME_AVATARS),
/* harmony export */   MEDIA_PROGRESSIVE_CACHE_DISABLED: () => (/* binding */ MEDIA_PROGRESSIVE_CACHE_DISABLED),
/* harmony export */   MEDIA_PROGRESSIVE_CACHE_NAME: () => (/* binding */ MEDIA_PROGRESSIVE_CACHE_NAME),
/* harmony export */   MEDIA_TIMESTAMP_SAVE_MINIMUM_DURATION: () => (/* binding */ MEDIA_TIMESTAMP_SAVE_MINIMUM_DURATION),
/* harmony export */   MEMBERS_LOAD_SLICE: () => (/* binding */ MEMBERS_LOAD_SLICE),
/* harmony export */   MEMBERS_SLICE: () => (/* binding */ MEMBERS_SLICE),
/* harmony export */   MENTION_UNREAD_SLICE: () => (/* binding */ MENTION_UNREAD_SLICE),
/* harmony export */   MENU_TRANSITION_DURATION: () => (/* binding */ MENU_TRANSITION_DURATION),
/* harmony export */   MESSAGE_APPEARANCE_DELAY: () => (/* binding */ MESSAGE_APPEARANCE_DELAY),
/* harmony export */   MESSAGE_CONTENT_CLASS_NAME: () => (/* binding */ MESSAGE_CONTENT_CLASS_NAME),
/* harmony export */   MESSAGE_CONTENT_SELECTOR: () => (/* binding */ MESSAGE_CONTENT_SELECTOR),
/* harmony export */   MESSAGE_ID_REQUIRED_ERROR: () => (/* binding */ MESSAGE_ID_REQUIRED_ERROR),
/* harmony export */   MESSAGE_LIST_SLICE: () => (/* binding */ MESSAGE_LIST_SLICE),
/* harmony export */   MESSAGE_LIST_VIEWPORT_LIMIT: () => (/* binding */ MESSAGE_LIST_VIEWPORT_LIMIT),
/* harmony export */   MESSAGE_SEARCH_SLICE: () => (/* binding */ MESSAGE_SEARCH_SLICE),
/* harmony export */   MINIMUM_CHARGE_FOR_MESSAGES: () => (/* binding */ MINIMUM_CHARGE_FOR_MESSAGES),
/* harmony export */   MINI_APP_TOS_URL: () => (/* binding */ MINI_APP_TOS_URL),
/* harmony export */   MIN_PASSWORD_LENGTH: () => (/* binding */ MIN_PASSWORD_LENGTH),
/* harmony export */   MIN_SCREEN_WIDTH_FOR_STATIC_LEFT_COLUMN: () => (/* binding */ MIN_SCREEN_WIDTH_FOR_STATIC_LEFT_COLUMN),
/* harmony export */   MIN_SCREEN_WIDTH_FOR_STATIC_RIGHT_COLUMN: () => (/* binding */ MIN_SCREEN_WIDTH_FOR_STATIC_RIGHT_COLUMN),
/* harmony export */   MOBILE_SCREEN_LANDSCAPE_MAX_HEIGHT: () => (/* binding */ MOBILE_SCREEN_LANDSCAPE_MAX_HEIGHT),
/* harmony export */   MOBILE_SCREEN_LANDSCAPE_MAX_WIDTH: () => (/* binding */ MOBILE_SCREEN_LANDSCAPE_MAX_WIDTH),
/* harmony export */   MOBILE_SCREEN_MAX_WIDTH: () => (/* binding */ MOBILE_SCREEN_MAX_WIDTH),
/* harmony export */   MULTIACCOUNT_MAX_SLOTS: () => (/* binding */ MULTIACCOUNT_MAX_SLOTS),
/* harmony export */   MULTITAB_LOCALSTORAGE_KEY_PREFIX: () => (/* binding */ MULTITAB_LOCALSTORAGE_KEY_PREFIX),
/* harmony export */   ONE_TIME_MEDIA_TTL_SECONDS: () => (/* binding */ ONE_TIME_MEDIA_TTL_SECONDS),
/* harmony export */   PAGE_TITLE: () => (/* binding */ PAGE_TITLE),
/* harmony export */   PAID_MESSAGES_PURPOSE: () => (/* binding */ PAID_MESSAGES_PURPOSE),
/* harmony export */   PAID_SEND_DELAY: () => (/* binding */ PAID_SEND_DELAY),
/* harmony export */   PEER_COLOR_BG_ACTIVE_OPACITY: () => (/* binding */ PEER_COLOR_BG_ACTIVE_OPACITY),
/* harmony export */   PEER_COLOR_BG_OPACITY: () => (/* binding */ PEER_COLOR_BG_OPACITY),
/* harmony export */   PEER_COLOR_GRADIENT_STEP: () => (/* binding */ PEER_COLOR_GRADIENT_STEP),
/* harmony export */   PEER_PICKER_ITEM_HEIGHT_PX: () => (/* binding */ PEER_PICKER_ITEM_HEIGHT_PX),
/* harmony export */   PINNED_MESSAGES_LIMIT: () => (/* binding */ PINNED_MESSAGES_LIMIT),
/* harmony export */   PLAYBACK_RATE_FOR_AUDIO_MIN_DURATION: () => (/* binding */ PLAYBACK_RATE_FOR_AUDIO_MIN_DURATION),
/* harmony export */   POPULAR_SYMBOL_SET_ID: () => (/* binding */ POPULAR_SYMBOL_SET_ID),
/* harmony export */   PREMIUM_BOTTOM_VIDEOS: () => (/* binding */ PREMIUM_BOTTOM_VIDEOS),
/* harmony export */   PREMIUM_FEATURE_SECTIONS: () => (/* binding */ PREMIUM_FEATURE_SECTIONS),
/* harmony export */   PREMIUM_LIMITS_ORDER: () => (/* binding */ PREMIUM_LIMITS_ORDER),
/* harmony export */   PREVIEW_AVATAR_COUNT: () => (/* binding */ PREVIEW_AVATAR_COUNT),
/* harmony export */   PRIVACY_URL: () => (/* binding */ PRIVACY_URL),
/* harmony export */   PRODUCTION_HOSTNAME: () => (/* binding */ PRODUCTION_HOSTNAME),
/* harmony export */   PRODUCTION_URL: () => (/* binding */ PRODUCTION_URL),
/* harmony export */   PROFILE_SENSITIVE_AREA: () => (/* binding */ PROFILE_SENSITIVE_AREA),
/* harmony export */   PURCHASE_USERNAME: () => (/* binding */ PURCHASE_USERNAME),
/* harmony export */   REACTION_LIST_LIMIT: () => (/* binding */ REACTION_LIST_LIMIT),
/* harmony export */   REACTION_UNREAD_SLICE: () => (/* binding */ REACTION_UNREAD_SLICE),
/* harmony export */   RECENT_REACTIONS_LIMIT: () => (/* binding */ RECENT_REACTIONS_LIMIT),
/* harmony export */   RECENT_STATUS_LIMIT: () => (/* binding */ RECENT_STATUS_LIMIT),
/* harmony export */   RECENT_STICKERS_LIMIT: () => (/* binding */ RECENT_STICKERS_LIMIT),
/* harmony export */   RECENT_SYMBOL_SET_ID: () => (/* binding */ RECENT_SYMBOL_SET_ID),
/* harmony export */   RELEASE_DATETIME: () => (/* binding */ RELEASE_DATETIME),
/* harmony export */   REPLIES_USER_ID: () => (/* binding */ REPLIES_USER_ID),
/* harmony export */   RESALE_GIFTS_LIMIT: () => (/* binding */ RESALE_GIFTS_LIMIT),
/* harmony export */   RESIZE_HANDLE_CLASS_NAME: () => (/* binding */ RESIZE_HANDLE_CLASS_NAME),
/* harmony export */   RESIZE_HANDLE_SELECTOR: () => (/* binding */ RESIZE_HANDLE_SELECTOR),
/* harmony export */   RESTRICTED_EMOJI_SET: () => (/* binding */ RESTRICTED_EMOJI_SET),
/* harmony export */   RESTRICTED_EMOJI_SET_ID: () => (/* binding */ RESTRICTED_EMOJI_SET_ID),
/* harmony export */   RE_LINK_TEMPLATE: () => (/* binding */ RE_LINK_TEMPLATE),
/* harmony export */   RE_MENTION_TEMPLATE: () => (/* binding */ RE_MENTION_TEMPLATE),
/* harmony export */   RE_TELEGRAM_LINK: () => (/* binding */ RE_TELEGRAM_LINK),
/* harmony export */   RE_TG_LINK: () => (/* binding */ RE_TG_LINK),
/* harmony export */   RE_TME_LINK: () => (/* binding */ RE_TME_LINK),
/* harmony export */   SAVED_FOLDER_ID: () => (/* binding */ SAVED_FOLDER_ID),
/* harmony export */   SCHEDULED_WHEN_ONLINE: () => (/* binding */ SCHEDULED_WHEN_ONLINE),
/* harmony export */   SCROLL_MAX_DISTANCE: () => (/* binding */ SCROLL_MAX_DISTANCE),
/* harmony export */   SCROLL_MAX_DURATION: () => (/* binding */ SCROLL_MAX_DURATION),
/* harmony export */   SCROLL_MIN_DURATION: () => (/* binding */ SCROLL_MIN_DURATION),
/* harmony export */   SCROLL_SHORT_TRANSITION_MAX_DISTANCE: () => (/* binding */ SCROLL_SHORT_TRANSITION_MAX_DISTANCE),
/* harmony export */   SEND_MESSAGE_ACTION_INTERVAL: () => (/* binding */ SEND_MESSAGE_ACTION_INTERVAL),
/* harmony export */   SERVICE_NOTIFICATIONS_USER_ID: () => (/* binding */ SERVICE_NOTIFICATIONS_USER_ID),
/* harmony export */   SESSION_ACCOUNT_PREFIX: () => (/* binding */ SESSION_ACCOUNT_PREFIX),
/* harmony export */   SESSION_LEGACY_USER_KEY: () => (/* binding */ SESSION_LEGACY_USER_KEY),
/* harmony export */   SHARED_MEDIA_SLICE: () => (/* binding */ SHARED_MEDIA_SLICE),
/* harmony export */   SHARED_STATE_CACHE_KEY: () => (/* binding */ SHARED_STATE_CACHE_KEY),
/* harmony export */   SLIDE_TRANSITION_DURATION: () => (/* binding */ SLIDE_TRANSITION_DURATION),
/* harmony export */   SNAP_EFFECT_CONTAINER_ID: () => (/* binding */ SNAP_EFFECT_CONTAINER_ID),
/* harmony export */   SNAP_EFFECT_ID: () => (/* binding */ SNAP_EFFECT_ID),
/* harmony export */   SPONSORED_MESSAGE_CACHE_MS: () => (/* binding */ SPONSORED_MESSAGE_CACHE_MS),
/* harmony export */   STARS_CURRENCY_CODE: () => (/* binding */ STARS_CURRENCY_CODE),
/* harmony export */   STARS_ICON_PLACEHOLDER: () => (/* binding */ STARS_ICON_PLACEHOLDER),
/* harmony export */   STATISTICS_PUBLIC_FORWARDS_LIMIT: () => (/* binding */ STATISTICS_PUBLIC_FORWARDS_LIMIT),
/* harmony export */   STICKER_PICKER_MAX_SHARED_COVERS: () => (/* binding */ STICKER_PICKER_MAX_SHARED_COVERS),
/* harmony export */   STICKER_SIZE_AUTH: () => (/* binding */ STICKER_SIZE_AUTH),
/* harmony export */   STICKER_SIZE_AUTH_MOBILE: () => (/* binding */ STICKER_SIZE_AUTH_MOBILE),
/* harmony export */   STICKER_SIZE_DISCUSSION_GROUPS: () => (/* binding */ STICKER_SIZE_DISCUSSION_GROUPS),
/* harmony export */   STICKER_SIZE_FOLDER_SETTINGS: () => (/* binding */ STICKER_SIZE_FOLDER_SETTINGS),
/* harmony export */   STICKER_SIZE_GENERAL_SETTINGS: () => (/* binding */ STICKER_SIZE_GENERAL_SETTINGS),
/* harmony export */   STICKER_SIZE_INLINE_BOT_RESULT: () => (/* binding */ STICKER_SIZE_INLINE_BOT_RESULT),
/* harmony export */   STICKER_SIZE_INLINE_DESKTOP_FACTOR: () => (/* binding */ STICKER_SIZE_INLINE_DESKTOP_FACTOR),
/* harmony export */   STICKER_SIZE_INLINE_MOBILE_FACTOR: () => (/* binding */ STICKER_SIZE_INLINE_MOBILE_FACTOR),
/* harmony export */   STICKER_SIZE_INVITES: () => (/* binding */ STICKER_SIZE_INVITES),
/* harmony export */   STICKER_SIZE_JOIN_REQUESTS: () => (/* binding */ STICKER_SIZE_JOIN_REQUESTS),
/* harmony export */   STICKER_SIZE_MODAL: () => (/* binding */ STICKER_SIZE_MODAL),
/* harmony export */   STICKER_SIZE_PASSCODE: () => (/* binding */ STICKER_SIZE_PASSCODE),
/* harmony export */   STICKER_SIZE_PICKER: () => (/* binding */ STICKER_SIZE_PICKER),
/* harmony export */   STICKER_SIZE_PICKER_HEADER: () => (/* binding */ STICKER_SIZE_PICKER_HEADER),
/* harmony export */   STICKER_SIZE_SEARCH: () => (/* binding */ STICKER_SIZE_SEARCH),
/* harmony export */   STICKER_SIZE_TWO_FA: () => (/* binding */ STICKER_SIZE_TWO_FA),
/* harmony export */   STORY_EXPIRE_PERIOD: () => (/* binding */ STORY_EXPIRE_PERIOD),
/* harmony export */   STORY_LIST_LIMIT: () => (/* binding */ STORY_LIST_LIMIT),
/* harmony export */   STORY_MIN_REACTIONS_SORT: () => (/* binding */ STORY_MIN_REACTIONS_SORT),
/* harmony export */   STORY_VIEWERS_EXPIRE_PERIOD: () => (/* binding */ STORY_VIEWERS_EXPIRE_PERIOD),
/* harmony export */   STORY_VIEWS_MIN_CONTACTS_FILTER: () => (/* binding */ STORY_VIEWS_MIN_CONTACTS_FILTER),
/* harmony export */   STORY_VIEWS_MIN_SEARCH: () => (/* binding */ STORY_VIEWS_MIN_SEARCH),
/* harmony export */   STRICTERDOM_ENABLED: () => (/* binding */ STRICTERDOM_ENABLED),
/* harmony export */   SUPPORTED_AUDIO_CONTENT_TYPES: () => (/* binding */ SUPPORTED_AUDIO_CONTENT_TYPES),
/* harmony export */   SUPPORTED_PHOTO_CONTENT_TYPES: () => (/* binding */ SUPPORTED_PHOTO_CONTENT_TYPES),
/* harmony export */   SUPPORTED_TRANSLATION_LANGUAGES: () => (/* binding */ SUPPORTED_TRANSLATION_LANGUAGES),
/* harmony export */   SUPPORTED_VIDEO_CONTENT_TYPES: () => (/* binding */ SUPPORTED_VIDEO_CONTENT_TYPES),
/* harmony export */   SVG_EXTENSIONS: () => (/* binding */ SVG_EXTENSIONS),
/* harmony export */   SVG_NAMESPACE: () => (/* binding */ SVG_NAMESPACE),
/* harmony export */   TME_LINK_PREFIX: () => (/* binding */ TME_LINK_PREFIX),
/* harmony export */   TME_WEB_DOMAINS: () => (/* binding */ TME_WEB_DOMAINS),
/* harmony export */   TMP_CHAT_ID: () => (/* binding */ TMP_CHAT_ID),
/* harmony export */   TOPICS_SLICE: () => (/* binding */ TOPICS_SLICE),
/* harmony export */   TOPICS_SLICE_SECOND_LOAD: () => (/* binding */ TOPICS_SLICE_SECOND_LOAD),
/* harmony export */   TOPIC_HEIGHT_PX: () => (/* binding */ TOPIC_HEIGHT_PX),
/* harmony export */   TOPIC_LIST_SENSITIVE_AREA: () => (/* binding */ TOPIC_LIST_SENSITIVE_AREA),
/* harmony export */   TOP_CHAT_MESSAGES_PRELOAD_LIMIT: () => (/* binding */ TOP_CHAT_MESSAGES_PRELOAD_LIMIT),
/* harmony export */   TOP_REACTIONS_LIMIT: () => (/* binding */ TOP_REACTIONS_LIMIT),
/* harmony export */   TOP_SYMBOL_SET_ID: () => (/* binding */ TOP_SYMBOL_SET_ID),
/* harmony export */   UPLOAD_WORKERS: () => (/* binding */ UPLOAD_WORKERS),
/* harmony export */   USERNAME_PURCHASE_ERROR: () => (/* binding */ USERNAME_PURCHASE_ERROR),
/* harmony export */   VERIFICATION_CODES_USER_ID: () => (/* binding */ VERIFICATION_CODES_USER_ID),
/* harmony export */   VIDEO_STICKER_MIME_TYPE: () => (/* binding */ VIDEO_STICKER_MIME_TYPE),
/* harmony export */   VIDEO_WEBM_TYPE: () => (/* binding */ VIDEO_WEBM_TYPE),
/* harmony export */   VIEW_TRANSITION_CLASS_NAME: () => (/* binding */ VIEW_TRANSITION_CLASS_NAME),
/* harmony export */   WEB_APP_PLATFORM: () => (/* binding */ WEB_APP_PLATFORM),
/* harmony export */   WEB_VERSION_BASE: () => (/* binding */ WEB_VERSION_BASE)
/* harmony export */ });
const APP_CODE_NAME = 'A';
const APP_NAME =  false || `Telegram Web ${APP_CODE_NAME}`;
const RELEASE_DATETIME = 1750429752352;
const PRODUCTION_HOSTNAME = 'web.telegram.org';
const PRODUCTION_URL = 'https://web.telegram.org/a';
const WEB_VERSION_BASE = 'https://web.telegram.org/'; // Used to redirect to other versions
const BASE_URL = "https://web.telegram.org/a/";
const ACCOUNT_QUERY = 'account';
const IS_MOCKED_CLIENT = "" === '1';
const IS_TEST = "staging" === 'test';
const IS_PERF = "staging" === 'perf';
const IS_BETA = "staging" === 'staging';
const IS_PACKAGED_ELECTRON = "true";
const ELECTRON_WINDOW_DRAG_EVENT_START = 'tt-electron-window-drag-start';
const ELECTRON_WINDOW_DRAG_EVENT_END = 'tt-electron-window-drag-end';
const PAID_MESSAGES_PURPOSE = 'paid_messages';
const DEBUG = "staging" !== 'production';
const DEBUG_MORE = false;
const DEBUG_LOG_FILENAME = 'tt-log.json';
const STRICTERDOM_ENABLED = DEBUG;
const BOT_VERIFICATION_PEERS_LIMIT = 20;
const BETA_CHANGELOG_URL = 'https://telegra.ph/WebA-Beta-03-20';
const ELECTRON_HOST_URL = "https://telegram-a-host";
const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';
const DEBUG_GRAMJS = false;
const PAGE_TITLE = "Telegram Beta";
const INACTIVE_MARKER = '[Inactive]';
const DEBUG_PAYMENT_SMART_GLOCAL = false;
const SESSION_LEGACY_USER_KEY = 'user_auth';
const SESSION_ACCOUNT_PREFIX = 'account';
const LEGACY_PASSCODE_CACHE_NAME = 'tt-passcode';
const MULTIACCOUNT_MAX_SLOTS = 6;
const GLOBAL_STATE_CACHE_DISABLED = false;
const GLOBAL_STATE_CACHE_PREFIX = 'tt-global-state';
const SHARED_STATE_CACHE_KEY = 'tt-shared-state';
const GLOBAL_STATE_CACHE_USER_LIST_LIMIT = 500;
const GLOBAL_STATE_CACHE_CHAT_LIST_LIMIT = 200;
const GLOBAL_STATE_CACHE_ARCHIVED_CHAT_LIST_LIMIT = 10;
const GLOBAL_STATE_CACHE_CUSTOM_EMOJI_LIMIT = 150;
const IS_SCREEN_LOCKED_CACHE_KEY = 'tt-is-screen-locked';
const MEDIA_CACHE_DISABLED = false;
const MEDIA_CACHE_NAME = 'tt-media';
const MEDIA_CACHE_NAME_AVATARS = 'tt-media-avatars';
const MEDIA_PROGRESSIVE_CACHE_DISABLED = false;
const MEDIA_PROGRESSIVE_CACHE_NAME = 'tt-media-progressive';
const MEDIA_CACHE_MAX_BYTES = 512 * 1024; // 512 KB
const CUSTOM_BG_CACHE_NAME = 'tt-custom-bg';
const LANG_CACHE_NAME = 'tt-lang-packs-v49';
const ASSET_CACHE_NAME = 'tt-assets';
const AUTODOWNLOAD_FILESIZE_MB_LIMITS = [1, 5, 10, 50, 100, 500];
const DATA_BROADCAST_CHANNEL_PREFIX = 'tt-global';
const ESTABLISH_BROADCAST_CHANNEL_PREFIX = 'tt-establish';
const MULTITAB_LOCALSTORAGE_KEY_PREFIX = 'tt-multitab';
const DC_IDS = [1, 2, 3, 4, 5];
const DOWNLOAD_WORKERS = 16;
const UPLOAD_WORKERS = 16;
const isBigScreen = typeof window !== 'undefined' && window.innerHeight >= 900;
const MIN_PASSWORD_LENGTH = 1;
const MESSAGE_LIST_SLICE = isBigScreen ? 60 : 40;
const MESSAGE_LIST_VIEWPORT_LIMIT = MESSAGE_LIST_SLICE * 2;
const ARCHIVE_MINIMIZED_HEIGHT = 36;
const CHAT_HEIGHT_PX = 68;
const TOPIC_HEIGHT_PX = 65;
const PEER_PICKER_ITEM_HEIGHT_PX = 56;
const CHAT_LIST_SLICE = isBigScreen ? 30 : 25;
const CHAT_LIST_LOAD_SLICE = 100;
const SHARED_MEDIA_SLICE = 42;
const CHAT_MEDIA_SLICE = 42;
const MESSAGE_SEARCH_SLICE = 42;
const GLOBAL_SEARCH_SLICE = 20;
const GLOBAL_TOPIC_SEARCH_SLICE = 5;
const GLOBAL_SEARCH_CONTACTS_LIMIT = 20;
const MEMBERS_SLICE = 30;
const MEMBERS_LOAD_SLICE = 200;
const PINNED_MESSAGES_LIMIT = 50;
const BLOCKED_LIST_LIMIT = 100;
const PROFILE_SENSITIVE_AREA = 500;
const TOPIC_LIST_SENSITIVE_AREA = 600;
const GROUP_CALL_PARTICIPANTS_LIMIT = 100;
const STORY_LIST_LIMIT = 100;
const API_GENERAL_ID_LIMIT = 100;
const STATISTICS_PUBLIC_FORWARDS_LIMIT = 50;
const RESALE_GIFTS_LIMIT = 50;
const STORY_VIEWS_MIN_SEARCH = 15;
const STORY_MIN_REACTIONS_SORT = 10;
const STORY_VIEWS_MIN_CONTACTS_FILTER = 20;
const MEDIA_TIMESTAMP_SAVE_MINIMUM_DURATION = 30; // 30s

const GLOBAL_SUGGESTED_CHANNELS_ID = 'global';

// As in Telegram for Android
// https://github.com/DrKLO/Telegram/blob/51e9947527/TMessagesProj/src/main/java/org/telegram/messenger/MediaDataController.java#L7799
const TOP_REACTIONS_LIMIT = 100;

// As in Telegram for Android
// https://github.com/DrKLO/Telegram/blob/51e9947527/TMessagesProj/src/main/java/org/telegram/messenger/MediaDataController.java#L7781
const RECENT_REACTIONS_LIMIT = 50;
const REACTION_LIST_LIMIT = 100;
const REACTION_UNREAD_SLICE = 100;
const MENTION_UNREAD_SLICE = 100;
const TOPICS_SLICE = 20;
const TOPICS_SLICE_SECOND_LOAD = 500;
const TOP_CHAT_MESSAGES_PRELOAD_LIMIT = 20;
const SPONSORED_MESSAGE_CACHE_MS = 300000; // 5 min

const DEFAULT_CHARGE_FOR_MESSAGES = 250;
const MINIMUM_CHARGE_FOR_MESSAGES = 1;
const DEFAULT_MAXIMUM_CHARGE_FOR_MESSAGES = 10000;
const DEFAULT_VOLUME = 1;
const DEFAULT_PLAYBACK_RATE = 1;
const PLAYBACK_RATE_FOR_AUDIO_MIN_DURATION = 20 * 60; // 20 min

const ANIMATION_LEVEL_CUSTOM = -1;
const ANIMATION_LEVEL_MIN = 0;
const ANIMATION_LEVEL_MED = 1;
const ANIMATION_LEVEL_MAX = 2;
const ANIMATION_LEVEL_DEFAULT = ANIMATION_LEVEL_MAX;
const DEFAULT_MESSAGE_TEXT_SIZE_PX = 16;
const IOS_DEFAULT_MESSAGE_TEXT_SIZE_PX = 17;
const MACOS_DEFAULT_MESSAGE_TEXT_SIZE_PX = 15;
const PREVIEW_AVATAR_COUNT = 3;
const DRAFT_DEBOUNCE = 10000; // 10s
const SEND_MESSAGE_ACTION_INTERVAL = 3000; // 3s
// 10000s from https://corefork.telegram.org/api/url-authorization#automatic-authorization
const APP_CONFIG_REFETCH_INTERVAL = 10000 * 1000;
const GENERAL_REFETCH_INTERVAL = 60 * 60 * 1000; // 1h

const EDITABLE_INPUT_ID = 'editable-message-text';
const EDITABLE_INPUT_MODAL_ID = 'editable-message-text-modal';
const EDITABLE_STORY_INPUT_ID = 'editable-story-input-text';
// eslint-disable-next-line @stylistic/max-len
const EDITABLE_INPUT_CSS_SELECTOR = `.messages-layout .Transition_slide-active #${EDITABLE_INPUT_ID}, .messages-layout .Transition > .Transition_slide-to #${EDITABLE_INPUT_ID}`;
const EDITABLE_INPUT_MODAL_CSS_SELECTOR = `#${EDITABLE_INPUT_MODAL_ID}`;
const EDITABLE_STORY_INPUT_CSS_SELECTOR = `#${EDITABLE_STORY_INPUT_ID}`;
const CUSTOM_APPENDIX_ATTRIBUTE = 'data-has-custom-appendix';
const MESSAGE_CONTENT_CLASS_NAME = 'message-content';
const MESSAGE_CONTENT_SELECTOR = '.message-content';
const VIEW_TRANSITION_CLASS_NAME = 'active-view-transition';
const RESIZE_HANDLE_CLASS_NAME = 'resizeHandle';
const RESIZE_HANDLE_SELECTOR = `.${RESIZE_HANDLE_CLASS_NAME}`;
const SNAP_EFFECT_CONTAINER_ID = 'snap-effect-container';
const SNAP_EFFECT_ID = 'snap-effect';
const STARS_ICON_PLACEHOLDER = '⭐';
const STARS_CURRENCY_CODE = 'XTR';
const MIN_SCREEN_WIDTH_FOR_STATIC_RIGHT_COLUMN = 1275; // px
const MIN_SCREEN_WIDTH_FOR_STATIC_LEFT_COLUMN = 925; // px
const MOBILE_SCREEN_MAX_WIDTH = 600; // px
const MOBILE_SCREEN_LANDSCAPE_MAX_WIDTH = 950; // px
const MOBILE_SCREEN_LANDSCAPE_MAX_HEIGHT = 450; // px

const MAX_INT_32 = 2 ** 31 - 1;
const TMP_CHAT_ID = '0';
const ANIMATION_END_DELAY = 100;
const ANIMATION_WAVE_MIN_INTERVAL = 200;
const MESSAGE_APPEARANCE_DELAY = 10;
const PAID_SEND_DELAY = 5000;
const SCROLL_MIN_DURATION = 300;
const SCROLL_MAX_DURATION = 600;
const SCROLL_MAX_DISTANCE = 800;
const SCROLL_SHORT_TRANSITION_MAX_DISTANCE = 300; // px

// Average duration of message sending animation
const API_UPDATE_THROTTLE = Math.round((SCROLL_MIN_DURATION + SCROLL_MAX_DURATION) / 2);
const API_THROTTLE_RESET_UPDATES = new Set(['newMessage', 'newScheduledMessage', 'deleteMessages', 'deleteScheduledMessages', 'deleteHistory', 'deleteParticipantHistory']);
const LOCK_SCREEN_ANIMATION_DURATION_MS = 200;
const STICKER_SIZE_INLINE_DESKTOP_FACTOR = 13;
const STICKER_SIZE_INLINE_MOBILE_FACTOR = 11;
const STICKER_SIZE_AUTH = 160;
const STICKER_SIZE_AUTH_MOBILE = 120;
const STICKER_SIZE_PICKER = 72;
const EMOJI_SIZE_PICKER = 36;
const COMPOSER_EMOJI_SIZE_PICKER = 32;
const STICKER_SIZE_GENERAL_SETTINGS = 40;
const STICKER_SIZE_PICKER_HEADER = 32;
const STICKER_PICKER_MAX_SHARED_COVERS = 20;
const STICKER_SIZE_SEARCH = 72;
const STICKER_SIZE_MODAL = 72;
const EMOJI_SIZE_MODAL = 36;
const STICKER_SIZE_TWO_FA = 160;
const STICKER_SIZE_PASSCODE = 160;
const STICKER_SIZE_DISCUSSION_GROUPS = 140;
const STICKER_SIZE_FOLDER_SETTINGS = 100;
const STICKER_SIZE_INLINE_BOT_RESULT = 100;
const STICKER_SIZE_JOIN_REQUESTS = 140;
const STICKER_SIZE_INVITES = 140;
const RECENT_STICKERS_LIMIT = 20;
const RECENT_STATUS_LIMIT = 20;
const EMOJI_STATUS_LOOP_LIMIT = 2;
const EMOJI_SIZES = 7;
const TOP_SYMBOL_SET_ID = 'top';
const POPULAR_SYMBOL_SET_ID = 'popular';
const RECENT_SYMBOL_SET_ID = 'recent';
const COLLECTIBLE_STATUS_SET_ID = 'collectibleStatus';
const FAVORITE_SYMBOL_SET_ID = 'favorite';
const EFFECT_STICKERS_SET_ID = 'effectStickers';
const EFFECT_EMOJIS_SET_ID = 'effectEmojis';
const CHAT_STICKER_SET_ID = 'chatStickers';
const DEFAULT_TOPIC_ICON_STICKER_ID = 'topic-default-icon';
const DEFAULT_STATUS_ICON_ID = 'status-default-icon';
const EMOJI_IMG_REGEX = /<img[^>]+alt="([^"]+)"(?![^>]*data-document-id)[^>]*>/gm;
const BASE_EMOJI_KEYWORD_LANG = 'en';
const MENU_TRANSITION_DURATION = 200;
const SLIDE_TRANSITION_DURATION = 450;
const BIRTHDAY_NUMBERS_SET = 'FestiveFontEmoji';
const RESTRICTED_EMOJI_SET = 'RestrictedEmoji';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const SVG_EXTENSIONS = new Set(['svg', 'svgz']);
const VIDEO_WEBM_TYPE = 'video/webm';
const GIF_MIME_TYPE = 'image/gif';
const LOTTIE_STICKER_MIME_TYPE = 'application/x-tgsticker';
const VIDEO_STICKER_MIME_TYPE = VIDEO_WEBM_TYPE;
const SUPPORTED_PHOTO_CONTENT_TYPES = new Set(['image/png', 'image/jpeg', GIF_MIME_TYPE]);
const SUPPORTED_VIDEO_CONTENT_TYPES = new Set(['video/mp4', 'video/quicktime']);
const SUPPORTED_AUDIO_CONTENT_TYPES = new Set(['audio/mp3', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/flac', 'audio/aac', 'audio/m4a', 'audio/mp4', 'audio/x-m4a']);
const CONTENT_TYPES_WITH_PREVIEW = new Set([...SUPPORTED_PHOTO_CONTENT_TYPES, ...SUPPORTED_VIDEO_CONTENT_TYPES]);
const CONTENT_NOT_SUPPORTED = 'The message is not supported on this version of Telegram.';

// Taken from https://github.com/telegramdesktop/tdesktop/blob/41d9a9fcbd0c809c60ddbd9350791b1436aff7d9/Telegram/SourceFiles/ui/boxes/choose_language_box.cpp#L28
const SUPPORTED_TRANSLATION_LANGUAGES = [
// Official
'en', 'ar', 'be', 'ca', 'zh', 'nl', 'fr', 'de', 'id', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'es', 'uk',
// Unofficial
'af', 'sq', 'am', 'hy', 'az', 'eu', 'bn', 'bs', 'bg', 'ceb', 'zh-CN', 'zh-TW', 'co', 'hr', 'cs', 'da', 'eo', 'et', 'fi', 'fy', 'gl', 'ka', 'el', 'gu', 'ht', 'ha', 'haw', 'he', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'ga', 'jv', 'kn', 'kk', 'km', 'rw', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ny', 'or', 'ps', 'fa', 'pa', 'ro', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt', 'te', 'th', 'tr', 'tk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];

// eslint-disable-next-line @stylistic/max-len
const RE_LINK_TEMPLATE = '((ftp|https?):\\/\\/)?((www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z][-a-zA-Z0-9]{1,62})\\b([-a-zA-Z0-9()@:%_+.,~#?&/=]*)';
const RE_MENTION_TEMPLATE = '(@[\\w\\d_-]+)';
const RE_TG_LINK = /^tg:(\/\/)?/i;
const RE_TME_LINK = /^(https?:\/\/)?([-a-zA-Z0-9@:%_+~#=]{1,32}\.)?t\.me/i;
const RE_TELEGRAM_LINK = /^(https?:\/\/)?telegram\.org\//i;
const TME_LINK_PREFIX = 'https://t.me/';
const BOT_FATHER_USERNAME = 'botfather';
const USERNAME_PURCHASE_ERROR = 'USERNAME_PURCHASE_AVAILABLE';
const MESSAGE_ID_REQUIRED_ERROR = 'MESSAGE_ID_REQUIRED';
const PURCHASE_USERNAME = 'auction';
const ACCEPTABLE_USERNAME_ERRORS = new Set([USERNAME_PURCHASE_ERROR, 'USERNAME_INVALID']);
const TME_WEB_DOMAINS = new Set(['t.me', 'web.t.me', 'a.t.me', 'k.t.me', 'z.t.me']);
const WEB_APP_PLATFORM = 'weba';
const LANG_PACK = 'weba';

// eslint-disable-next-line @stylistic/max-len
const COUNTRIES_WITH_12H_TIME_FORMAT = new Set(['AU', 'BD', 'CA', 'CO', 'EG', 'HN', 'IE', 'IN', 'JO', 'MX', 'MY', 'NI', 'NZ', 'PH', 'PK', 'SA', 'SV', 'US']);
const API_CHAT_TYPES = ['bots', 'channels', 'chats', 'users', 'groups'];
const HEART_REACTION = {
  type: 'emoji',
  emoticon: '❤'
};

// MTProto constants
const SERVICE_NOTIFICATIONS_USER_ID = '777000';
const REPLIES_USER_ID = '1271266957'; // TODO For Test connection ID must be equal to 708513
const VERIFICATION_CODES_USER_ID = '489000';
const ANONYMOUS_USER_ID = '2666000';
const RESTRICTED_EMOJI_SET_ID = '7173162320003080';
const CHANNEL_ID_LENGTH = 14; // 14 symbols, based on TDLib's `ZERO_CHANNEL_ID = -1000000000000`
const DEFAULT_GIF_SEARCH_BOT_USERNAME = 'gif';
const ALL_FOLDER_ID = 0;
const ARCHIVED_FOLDER_ID = 1;
const SAVED_FOLDER_ID = -1;
const DELETED_COMMENTS_CHANNEL_ID = '-1000000000777';
const MAX_MEDIA_FILES_FOR_ALBUM = 10;
const MAX_ACTIVE_PINNED_CHATS = 5;
const SCHEDULED_WHEN_ONLINE = 0x7FFFFFFE;
const LANG_PACKS = ['android', 'ios', 'tdesktop', 'macos'];
const FEEDBACK_URL = 'https://bugs.telegram.org/?tag_ids=41&sort=time';
const FAQ_URL = 'https://telegram.org/faq';
const PRIVACY_URL = 'https://telegram.org/privacy';
const MINI_APP_TOS_URL = 'https://telegram.org/tos/mini-apps';
const FRAGMENT_ADS_URL = 'https://fragment.com/ads';
const GENERAL_TOPIC_ID = 1;
const STORY_EXPIRE_PERIOD = 86400; // 1 day
const STORY_VIEWERS_EXPIRE_PERIOD = 86400; // 1 day
const FRESH_AUTH_PERIOD = 86400; // 1 day
const GIVEAWAY_BOOST_PER_PREMIUM = 4;
const GIVEAWAY_MAX_ADDITIONAL_CHANNELS = 10;
const GIVEAWAY_MAX_ADDITIONAL_USERS = 10;
const GIVEAWAY_MAX_ADDITIONAL_COUNTRIES = 10;
const BOOST_PER_SENT_GIFT = 3;
const FRAGMENT_PHONE_CODE = '888';
const FRAGMENT_PHONE_LENGTH = 11;
const LIGHT_THEME_BG_COLOR = '#99BA92';
const DARK_THEME_BG_COLOR = '#1E1E1E';
const DEFAULT_PATTERN_COLOR = '#4A8E3A8C';
const DARK_THEME_PATTERN_COLOR = '#0A0A0A8C';
const PEER_COLOR_BG_OPACITY = '1a';
const PEER_COLOR_BG_ACTIVE_OPACITY = '2b';
const PEER_COLOR_GRADIENT_STEP = 5; // px
const MAX_UPLOAD_FILEPART_SIZE = 524288;
const MAX_UNIQUE_REACTIONS = 11;
const IGNORE_UNHANDLED_ERRORS = new Set(['USER_CANCELED']);

// Group calls
const GROUP_CALL_VOLUME_MULTIPLIER = 100;
const GROUP_CALL_DEFAULT_VOLUME = 100 * GROUP_CALL_VOLUME_MULTIPLIER;
const DEFAULT_LIMITS = {
  uploadMaxFileparts: [4000, 8000],
  stickersFaved: [5, 10],
  savedGifs: [200, 400],
  dialogFiltersChats: [100, 200],
  dialogFilters: [10, 20],
  dialogFolderPinned: [5, 10],
  captionLength: [1024, 4096],
  channels: [500, 1000],
  channelsPublic: [10, 20],
  aboutLength: [70, 140],
  chatlistInvites: [3, 100],
  chatlistJoined: [2, 20],
  recommendedChannels: [10, 100],
  savedDialogsPinned: [5, 100],
  moreAccounts: [3, MULTIACCOUNT_MAX_SLOTS]
};
const DEFAULT_MAX_MESSAGE_LENGTH = 4096;
const ONE_TIME_MEDIA_TTL_SECONDS = 2147483647;

// Premium
const PREMIUM_FEATURE_SECTIONS = ['stories', 'double_limits', 'more_upload', 'faster_download', 'voice_to_text', 'no_ads', 'infinite_reactions', 'premium_stickers', 'animated_emoji', 'advanced_chat_management', 'profile_badge', 'animated_userpics', 'emoji_status', 'translations', 'saved_tags', 'last_seen', 'message_privacy', 'effects'];
const PREMIUM_BOTTOM_VIDEOS = ['faster_download', 'voice_to_text', 'advanced_chat_management', 'infinite_reactions', 'profile_badge', 'animated_userpics', 'emoji_status', 'translations', 'saved_tags', 'last_seen', 'message_privacy', 'effects'];
const PREMIUM_LIMITS_ORDER = ['channels', 'dialogFolderPinned', 'channelsPublic', 'savedGifs', 'stickersFaved', 'aboutLength', 'captionLength', 'dialogFilters', 'dialogFiltersChats', 'moreAccounts', 'recommendedChannels'];
const DEFAULT_GIFT_PROFILE_FILTER_OPTIONS = {
  sortType: 'byDate',
  shouldIncludeUnlimited: true,
  shouldIncludeLimited: true,
  shouldIncludeUnique: true,
  shouldIncludeDisplayed: true,
  shouldIncludeHidden: true
};
const DEFAULT_RESALE_GIFTS_FILTER_OPTIONS = {
  sortType: 'byDate'
};
const ACCOUNT_TTL_OPTIONS = [1, 3, 6, 12, 18, 24];

/***/ }),

/***/ "./src/util/schedulers.ts":
/*!********************************!*\
  !*** ./src/util/schedulers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   fastRaf: () => (/* binding */ fastRaf),
/* harmony export */   onBeforeUnload: () => (/* binding */ onBeforeUnload),
/* harmony export */   onIdle: () => (/* binding */ onIdle),
/* harmony export */   onTickEnd: () => (/* binding */ onTickEnd),
/* harmony export */   pause: () => (/* binding */ pause),
/* harmony export */   rafPromise: () => (/* binding */ rafPromise),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   throttleWith: () => (/* binding */ throttleWith),
/* harmony export */   throttleWithTickEnd: () => (/* binding */ throttleWithTickEnd)
/* harmony export */ });
function debounce(fn, ms, shouldRunFirst = true, shouldRunLast = true) {
  let waitingTimeout;
  return (...args) => {
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = undefined;
    } else if (shouldRunFirst) {
      fn(...args);
    }
    waitingTimeout = self.setTimeout(() => {
      if (shouldRunLast) {
        fn(...args);
      }
      waitingTimeout = undefined;
    }, ms);
  };
}
function throttle(fn, ms, shouldRunFirst = true) {
  let interval;
  let isPending;
  let args;
  return (..._args) => {
    isPending = true;
    args = _args;
    if (!interval) {
      if (shouldRunFirst) {
        isPending = false;
        fn(...args);
      }
      interval = self.setInterval(() => {
        if (!isPending) {
          self.clearInterval(interval);
          interval = undefined;
          return;
        }
        isPending = false;
        fn(...args);
      }, ms);
    }
  };
}
function throttleWithTickEnd(fn) {
  return throttleWith(onTickEnd, fn);
}
function throttleWith(schedulerFn, fn) {
  let waiting = false;
  let args;
  return (..._args) => {
    args = _args;
    if (!waiting) {
      waiting = true;
      schedulerFn(() => {
        waiting = false;
        fn(...args);
      });
    }
  };
}
const pause = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
});
function rafPromise() {
  return new Promise(resolve => {
    fastRaf(resolve);
  });
}
const FAST_RAF_TIMEOUT_FALLBACK_MS = 35; // < 30 FPS

let fastRafCallbacks;
let fastRafFallbackCallbacks;
let fastRafFallbackTimeout;

// May result in an immediate execution if called from another RAF callback which was scheduled
// (and therefore is executed) earlier than RAF callback scheduled by `fastRaf`
function fastRaf(callback, withTimeoutFallback = false) {
  if (!fastRafCallbacks) {
    fastRafCallbacks = new Set([callback]);
    requestAnimationFrame(() => {
      const currentCallbacks = fastRafCallbacks;
      fastRafCallbacks = undefined;
      fastRafFallbackCallbacks = undefined;
      if (fastRafFallbackTimeout) {
        clearTimeout(fastRafFallbackTimeout);
        fastRafFallbackTimeout = undefined;
      }
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    fastRafCallbacks.add(callback);
  }
  if (withTimeoutFallback) {
    if (!fastRafFallbackCallbacks) {
      fastRafFallbackCallbacks = new Set([callback]);
    } else {
      fastRafFallbackCallbacks.add(callback);
    }
    if (!fastRafFallbackTimeout) {
      fastRafFallbackTimeout = window.setTimeout(() => {
        const currentTimeoutCallbacks = fastRafFallbackCallbacks;
        if (fastRafCallbacks) {
          const currentCallbacks = fastRafCallbacks;
          currentTimeoutCallbacks.forEach(callback => currentCallbacks.delete(callback));
        }
        fastRafFallbackCallbacks = undefined;
        if (fastRafFallbackTimeout) {
          clearTimeout(fastRafFallbackTimeout);
          fastRafFallbackTimeout = undefined;
        }
        currentTimeoutCallbacks.forEach(cb => cb());
      }, FAST_RAF_TIMEOUT_FALLBACK_MS);
    }
  }
}
let onTickEndCallbacks;
function onTickEnd(callback) {
  if (!onTickEndCallbacks) {
    onTickEndCallbacks = [callback];
    Promise.resolve().then(() => {
      const currentCallbacks = onTickEndCallbacks;
      onTickEndCallbacks = undefined;
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    onTickEndCallbacks.push(callback);
  }
}
const IDLE_TIMEOUT = 500;
let onIdleCallbacks;
function onIdle(callback) {
  if (!self.requestIdleCallback) {
    onTickEnd(callback);
    return;
  }
  if (!onIdleCallbacks) {
    onIdleCallbacks = [callback];
    requestIdleCallback(deadline => {
      const currentCallbacks = onIdleCallbacks;
      onIdleCallbacks = undefined;
      while (currentCallbacks.length) {
        const cb = currentCallbacks.shift();
        cb();
        if (!deadline.timeRemaining()) break;
      }
      if (currentCallbacks.length) {
        if (onIdleCallbacks) {
          // Prepend the remaining callbacks if the next pass is already planned
          onIdleCallbacks = currentCallbacks.concat(onIdleCallbacks);
        } else {
          currentCallbacks.forEach(onIdle);
        }
      }
    }, {
      timeout: IDLE_TIMEOUT
    });
  } else {
    onIdleCallbacks.push(callback);
  }
}
let beforeUnloadCallbacks;
function onBeforeUnload(callback, isLast = false) {
  if (!beforeUnloadCallbacks) {
    beforeUnloadCallbacks = [];
    self.addEventListener('beforeunload', () => {
      beforeUnloadCallbacks.forEach(cb => cb());
    });
  }
  if (isLast) {
    beforeUnloadCallbacks.push(callback);
  } else {
    beforeUnloadCallbacks.unshift(callback);
  }
  return () => {
    beforeUnloadCallbacks = beforeUnloadCallbacks.filter(cb => cb !== callback);
  };
}

/***/ })

}]);
//# sourceMappingURL=src_config_ts-src_util_schedulers_ts.3f46da76d817b7536627.js.map