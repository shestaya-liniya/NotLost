/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/serviceWorker/assetCache.ts":
/*!*****************************************!*\
  !*** ./src/serviceWorker/assetCache.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAssetCache: () => (/* binding */ clearAssetCache),
/* harmony export */   respondWithCache: () => (/* binding */ respondWithCache),
/* harmony export */   respondWithCacheNetworkFirst: () => (/* binding */ respondWithCacheNetworkFirst)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/schedulers */ "./src/util/schedulers.ts");


// An attempt to fix freezing UI on iOS
const TIMEOUT = 3000;
async function respondWithCacheNetworkFirst(e) {
  const remote = await withTimeout(() => fetch(e.request), TIMEOUT);
  if (!remote?.ok) {
    return respondWithCache(e);
  }
  const toCache = remote.clone();
  self.caches.open(_config__WEBPACK_IMPORTED_MODULE_0__.ASSET_CACHE_NAME).then(cache => {
    return cache?.put(e.request, toCache);
  });
  return remote;
}
async function respondWithCache(e) {
  const cacheResult = await withTimeout(async () => {
    const cache = await self.caches.open(_config__WEBPACK_IMPORTED_MODULE_0__.ASSET_CACHE_NAME);
    const cached = await cache.match(e.request);
    return {
      cache,
      cached
    };
  }, TIMEOUT);
  const {
    cache,
    cached
  } = cacheResult || {};
  if (cache && cached) {
    if (cached.ok) {
      return cached;
    } else {
      await cache.delete(e.request);
    }
  }
  const remote = await fetch(e.request);
  if (remote.ok && cache) {
    cache.put(e.request, remote.clone());
  }
  return remote;
}
async function withTimeout(cb, timeout) {
  let isResolved = false;
  try {
    return await Promise.race([(0,_util_schedulers__WEBPACK_IMPORTED_MODULE_1__.pause)(timeout).then(() => isResolved ? undefined : Promise.reject(new Error('TIMEOUT'))), cb()]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  } finally {
    isResolved = true;
  }
}
function clearAssetCache() {
  return self.caches.delete(_config__WEBPACK_IMPORTED_MODULE_0__.ASSET_CACHE_NAME);
}

/***/ }),

/***/ "./src/serviceWorker/download.ts":
/*!***************************************!*\
  !*** ./src/serviceWorker/download.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   respondForDownload: () => (/* binding */ respondForDownload)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _progressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressive */ "./src/serviceWorker/progressive.ts");


const DOWNLOAD_PART_SIZE = 1024 * 1024;
const TEST_PART_SIZE = 64 * 1024;
const QUEUE_SIZE = 8;
class FilePartQueue {
  constructor() {
    this.queue = [];
  }
  push(task) {
    this.queue.push(task);
  }
  async pop() {
    const result = await this.queue.shift();
    return result;
  }
  get size() {
    return this.queue.length;
  }
}
async function respondForDownload(e) {
  const {
    url
  } = e.request;
  let partInfo;
  try {
    partInfo = await (0,_progressive__WEBPACK_IMPORTED_MODULE_1__.requestPart)(e, {
      url,
      start: 0,
      end: TEST_PART_SIZE
    });
  } catch (err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
      // eslint-disable-next-line no-console
      console.error('FETCH DOWNLOAD', err);
    }
  }
  if (!partInfo) {
    return new Response('', {
      status: 500,
      statusText: 'Failed to fetch file to download'
    });
  }
  const matchedFilename = e.request.url.match(/filename=(.*)/);
  const filenameHeader = matchedFilename ? `filename="${decodeURIComponent(matchedFilename[1])}"` : '';
  const {
    fullSize,
    mimeType
  } = partInfo;
  const headers = [['Content-Length', String(fullSize)], ['Content-Type', mimeType], ['Content-Disposition', `attachment; ${filenameHeader}`]];
  const queue = new FilePartQueue();
  const enqueue = offset => {
    queue.push((0,_progressive__WEBPACK_IMPORTED_MODULE_1__.requestPart)(e, {
      url,
      start: offset,
      end: offset + DOWNLOAD_PART_SIZE - 1
    }).then(part => part?.arrayBuffer));
    return offset + DOWNLOAD_PART_SIZE;
  };
  let lastOffset = 0;
  const stream = new ReadableStream({
    start() {
      for (let i = 0; i < QUEUE_SIZE; i++) {
        if (lastOffset >= fullSize) break;
        lastOffset = enqueue(lastOffset);
      }
    },
    async pull(controller) {
      const buffer = await queue.pop();
      if (!buffer) {
        controller.close();
        return;
      }
      controller.enqueue(new Uint8Array(buffer));
      if (buffer.byteLength < DOWNLOAD_PART_SIZE) {
        controller.close();
        return;
      }
      if (lastOffset < fullSize) {
        lastOffset = enqueue(lastOffset);
      }
    }
  });
  return new Response(stream, {
    status: 200,
    statusText: 'OK',
    headers
  });
}

/***/ }),

/***/ "./src/serviceWorker/index.ts":
/*!************************************!*\
  !*** ./src/serviceWorker/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _assetCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assetCache */ "./src/serviceWorker/assetCache.ts");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download */ "./src/serviceWorker/download.ts");
/* harmony import */ var _progressive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressive */ "./src/serviceWorker/progressive.ts");
/* harmony import */ var _pushNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushNotification */ "./src/serviceWorker/pushNotification.ts");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share */ "./src/serviceWorker/share.ts");







const RE_NETWORK_FIRST_ASSETS = /\.(wasm|html)$/;
const RE_CACHE_FIRST_ASSETS = /[\da-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|tgs|json|wasm)$/;
const ACTIVATE_TIMEOUT = 3000;
self.addEventListener('install', e => {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
    // eslint-disable-next-line no-console
    console.log('ServiceWorker installed');
  }

  // Activate worker immediately
  e.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', e => {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
    // eslint-disable-next-line no-console
    console.log('ServiceWorker activated');
  }
  e.waitUntil(Promise.race([
  // An attempt to fix freezing UI on iOS
  (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_1__.pause)(ACTIVATE_TIMEOUT), Promise.all([(0,_assetCache__WEBPACK_IMPORTED_MODULE_2__.clearAssetCache)(),
  // Become available to all pages
  self.clients.claim()])]));
});
self.addEventListener('fetch', e => {
  const {
    url
  } = e.request;
  const scope = _config__WEBPACK_IMPORTED_MODULE_0__.IS_PACKAGED_ELECTRON ? _config__WEBPACK_IMPORTED_MODULE_0__.ELECTRON_HOST_URL : self.registration.scope;
  if (!url.startsWith(scope)) {
    return false;
  }
  const {
    pathname,
    protocol
  } = new URL(url);
  const {
    pathname: scopePathname
  } = new URL(scope);
  if (pathname.includes('/progressive/')) {
    e.respondWith((0,_progressive__WEBPACK_IMPORTED_MODULE_4__.respondForProgressive)(e));
    return true;
  }
  if (pathname.includes('/download/')) {
    e.respondWith((0,_download__WEBPACK_IMPORTED_MODULE_3__.respondForDownload)(e));
    return true;
  }
  if (pathname.includes('/share/')) {
    e.respondWith((0,_share__WEBPACK_IMPORTED_MODULE_6__.respondForShare)(e));
  }
  if (protocol === 'http:' || protocol === 'https:') {
    if (pathname === scopePathname || pathname.match(RE_NETWORK_FIRST_ASSETS)) {
      e.respondWith((0,_assetCache__WEBPACK_IMPORTED_MODULE_2__.respondWithCacheNetworkFirst)(e));
      return true;
    }
    if (pathname.match(RE_CACHE_FIRST_ASSETS)) {
      e.respondWith((0,_assetCache__WEBPACK_IMPORTED_MODULE_2__.respondWithCache)(e));
      return true;
    }
  }
  return false;
});
self.addEventListener('push', _pushNotification__WEBPACK_IMPORTED_MODULE_5__.handlePush);
self.addEventListener('notificationclick', _pushNotification__WEBPACK_IMPORTED_MODULE_5__.handleNotificationClick);
self.addEventListener('message', event => {
  (0,_pushNotification__WEBPACK_IMPORTED_MODULE_5__.handleClientMessage)(event);
  (0,_share__WEBPACK_IMPORTED_MODULE_6__.handleClientMessage)(event);
});

/***/ }),

/***/ "./src/serviceWorker/progressive.ts":
/*!******************************************!*\
  !*** ./src/serviceWorker/progressive.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestPart: () => (/* binding */ requestPart),
/* harmony export */   respondForProgressive: () => (/* binding */ respondForProgressive)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_generateUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/generateUniqueId */ "./src/util/generateUniqueId.ts");
/* harmony import */ var _util_multiaccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/multiaccount */ "./src/util/multiaccount.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/schedulers */ "./src/util/schedulers.ts");




const MB = 1024 * 1024;
const DEFAULT_PART_SIZE = 0.5 * MB;
const MAX_END_TO_CACHE = 2 * MB - 1; // We only cache the first 2 MB of each file
const PART_TIMEOUT = 60000;
const requestStates = new Map();
async function respondForProgressive(e) {
  const {
    url
  } = e.request;
  const accountSlot = (0,_util_multiaccount__WEBPACK_IMPORTED_MODULE_2__.getAccountSlot)(url);
  const range = e.request.headers.get('range');
  const bytes = /^bytes=(\d+)-(\d+)?$/g.exec(range || '');
  const start = Number(bytes[1]);
  const originalEnd = Number(bytes[2]);
  let end = originalEnd;
  if (!end || end - start + 1 > DEFAULT_PART_SIZE) {
    end = start + DEFAULT_PART_SIZE - 1;
  }
  const parsedUrl = new URL(url);

  // Optimization for Safari
  if (start === 0 && end === 1) {
    const fileSizeParam = parsedUrl.searchParams.get('fileSize');
    const fileSize = fileSizeParam && Number(fileSizeParam);
    const mimeType = parsedUrl.searchParams.get('mimeType');
    if (fileSize && mimeType) {
      return new Response(new Uint8Array(2).buffer, {
        status: 206,
        statusText: 'Partial Content',
        headers: [['Content-Range', `bytes 0-1/${fileSize}`], ['Accept-Ranges', 'bytes'], ['Content-Length', '2'], ['Content-Type', mimeType]]
      });
    }
  }
  parsedUrl.searchParams.set('start', String(start));
  parsedUrl.searchParams.set('end', String(end));
  const cacheKey = parsedUrl.href;
  const [cachedArrayBuffer, cachedHeaders] = !_config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_DISABLED ? await fetchFromCache(accountSlot, cacheKey) : [];
  if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
    // eslint-disable-next-line no-console
    console.log(`FETCH PROGRESSIVE ${cacheKey} (request: ${start}-${originalEnd}) CACHED: ${Boolean(cachedArrayBuffer)}`);
  }
  if (cachedArrayBuffer) {
    return new Response(cachedArrayBuffer, {
      status: 206,
      statusText: 'Partial Content',
      headers: cachedHeaders
    });
  }
  let partInfo;
  try {
    partInfo = await requestPart(e, {
      url,
      start,
      end
    });
  } catch (err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
      // eslint-disable-next-line no-console
      console.error('FETCH PROGRESSIVE', err);
    }
  }
  if (!partInfo) {
    return new Response('', {
      status: 500,
      statusText: 'Failed to fetch progressive part'
    });
  }
  const {
    arrayBuffer,
    fullSize,
    mimeType
  } = partInfo;
  const partSize = Math.min(end - start + 1, arrayBuffer.byteLength);
  end = start + partSize - 1;
  const arrayBufferPart = arrayBuffer.slice(0, partSize);
  const headers = [['Content-Range', `bytes ${start}-${end}/${fullSize}`], ['Accept-Ranges', 'bytes'], ['Content-Length', String(partSize)], ['Content-Type', mimeType]];
  if (!_config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_DISABLED && partSize <= _config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_CACHE_MAX_BYTES && end < MAX_END_TO_CACHE) {
    saveToCache(accountSlot, cacheKey, arrayBufferPart, headers);
  }
  return new Response(arrayBufferPart, {
    status: 206,
    statusText: 'Partial Content',
    headers
  });
}

// We can not cache 206 responses: https://github.com/GoogleChrome/workbox/issues/1644#issuecomment-638741359
async function fetchFromCache(accountSlot, cacheKey) {
  const cacheName = !accountSlot ? _config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_NAME : `${_config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_NAME}_${accountSlot}`;
  const cache = await self.caches.open(cacheName);
  return Promise.all([cache.match(`${cacheKey}&type=arrayBuffer`).then(r => r ? r.arrayBuffer() : undefined), cache.match(`${cacheKey}&type=headers`).then(r => r ? r.json() : undefined)]);
}
async function saveToCache(accountSlot, cacheKey, arrayBuffer, headers) {
  const cacheName = !accountSlot ? _config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_NAME : `${_config__WEBPACK_IMPORTED_MODULE_0__.MEDIA_PROGRESSIVE_CACHE_NAME}_${accountSlot}`;
  const cache = await self.caches.open(cacheName);
  return Promise.all([cache.put(new Request(`${cacheKey}&type=arrayBuffer`), new Response(arrayBuffer)), cache.put(new Request(`${cacheKey}&type=headers`), new Response(JSON.stringify(headers)))]);
}
async function requestPart(e, params) {
  const isDownload = params.url.includes('/download/');
  const client = await (isDownload ? getClientForRequest(params.url) : self.clients.get(e.clientId));
  if (!client) {
    return undefined;
  }
  const messageId = (0,_util_generateUniqueId__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const requestState = {};
  let isResolved = false;
  const promise = Promise.race([(0,_util_schedulers__WEBPACK_IMPORTED_MODULE_3__.pause)(PART_TIMEOUT).then(() => isResolved ? undefined : Promise.reject(new Error('ERROR_PART_TIMEOUT'))), new Promise((resolve, reject) => {
    Object.assign(requestState, {
      resolve,
      reject
    });
  })]);
  requestStates.set(messageId, requestState);
  promise.catch(() => undefined).finally(() => {
    requestStates.delete(messageId);
    isResolved = true;
  });
  client.postMessage({
    type: 'requestPart',
    messageId,
    params
  });
  return promise;
}
async function getClientForRequest(url) {
  const urlAccountSlot = (0,_util_multiaccount__WEBPACK_IMPORTED_MODULE_2__.getAccountSlot)(url);
  const clients = await self.clients.matchAll();
  return clients.find(c => c.type === 'window' && c.frameType === 'top-level' && (0,_util_multiaccount__WEBPACK_IMPORTED_MODULE_2__.getAccountSlot)(c.url) === urlAccountSlot);
}
self.addEventListener('message', e => {
  const {
    type,
    messageId,
    result
  } = e.data;
  if (type === 'partResponse') {
    const requestState = requestStates.get(messageId);
    if (requestState) {
      requestState.resolve(result);
    }
  }
});

/***/ }),

/***/ "./src/serviceWorker/pushNotification.ts":
/*!***********************************************!*\
  !*** ./src/serviceWorker/pushNotification.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleClientMessage: () => (/* binding */ handleClientMessage),
/* harmony export */   handleNotificationClick: () => (/* binding */ handleNotificationClick),
/* harmony export */   handlePush: () => (/* binding */ handlePush)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

var Boolean = /*#__PURE__*/function (Boolean) {
  Boolean["True"] = "1";
  Boolean["False"] = "0";
  return Boolean;
}(Boolean || {});
let lastSyncAt = new Date().valueOf();
const shownNotifications = new Set();
const clickBuffer = {};
function getPushData(e) {
  try {
    return e.data.json();
  } catch (error) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
      // eslint-disable-next-line no-console
      console.log('[SW] Unable to parse push notification data', e.data);
    }
    return undefined;
  }
}
function getChatId(data) {
  if (data.custom.from_id) {
    return data.custom.from_id;
  }

  // Chats and channels have “negative” IDs
  if (data.custom.chat_id || data.custom.channel_id) {
    return `-${data.custom.chat_id || data.custom.channel_id}`;
  }
  return undefined;
}
function getMessageId(data) {
  if (!data.custom.msg_id) return undefined;
  return parseInt(data.custom.msg_id, 10);
}
function getNotificationData(data) {
  let title = data.title || _config__WEBPACK_IMPORTED_MODULE_0__.APP_NAME;
  const isSilent = data.custom?.silent === Boolean.True;
  if (isSilent) {
    title += ' 🔕';
  }
  return {
    chatId: getChatId(data),
    messageId: getMessageId(data),
    body: data.description,
    isSilent,
    title
  };
}
async function getClients() {
  const appUrl = new URL(self.registration.scope).origin;
  const clients = await self.clients.matchAll({
    type: 'window'
  });
  return clients.filter(client => {
    return new URL(client.url).origin === appUrl;
  });
}
async function playNotificationSound(id) {
  const clients = await getClients();
  const client = clients[0];
  if (!client) return;
  client.postMessage({
    type: 'playNotificationSound',
    payload: {
      id
    }
  });
}
function showNotification({
  chatId,
  messageId,
  body,
  title,
  icon,
  reaction,
  isSilent,
  shouldReplaceHistory
}) {
  const isFirstBatch = new Date().valueOf() - lastSyncAt < 1000;
  const tag = String(isFirstBatch ? 0 : chatId || 0);
  const options = {
    body,
    data: {
      chatId,
      messageId,
      reaction,
      count: 1,
      shouldReplaceHistory
    },
    icon: icon || 'icon-192x192.png',
    badge: 'icon-192x192.png',
    tag,
    // @ts-ignore
    vibrate: [200, 100, 200]
  };
  return Promise.all([
  // TODO Update condition when reaction badges are implemented
  !reaction && !isSilent ? playNotificationSound(String(messageId) || chatId || '') : undefined, self.registration.showNotification(title, options)]);
}
async function closeNotifications({
  chatId,
  lastReadInboxMessageId
}) {
  const notifications = await self.registration.getNotifications();
  const lastMessageId = lastReadInboxMessageId || Number.MAX_VALUE;
  notifications.forEach(notification => {
    if (notification.tag === '0' || notification.data.chatId === chatId && notification.data.messageId <= lastMessageId) {
      notification.close();
    }
  });
}
function handlePush(e) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
    // eslint-disable-next-line no-console
    console.log('[SW] Push received event', e);
    if (e.data) {
      // eslint-disable-next-line no-console
      console.log('[SW] Push received with data', e.data.json());
    }
  }
  const data = getPushData(e);

  // Do not show muted notifications
  if (!data || data.mute === Boolean.True) return;
  const notification = getNotificationData(data);

  // Don't show already triggered notification
  if (shownNotifications.has(notification.messageId)) {
    shownNotifications.delete(notification.messageId);
    return;
  }
  e.waitUntil(showNotification(notification));
}
async function focusChatMessage(client, data) {
  if (!data.chatId) return;
  client.postMessage({
    type: 'focusMessage',
    payload: data
  });
  if (!client.focused) {
    // Catch "focus not allowed" DOM Exceptions
    try {
      await client.focus();
    } catch (error) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
        // eslint-disable-next-line no-console
        console.warn('[SW] ', error);
      }
    }
  }
}
function handleNotificationClick(e) {
  const appUrl = self.registration.scope;
  e.notification.close(); // Android needs explicit close.
  const {
    data
  } = e.notification;
  const notifyClients = async () => {
    const clients = await getClients();
    await Promise.all(clients.map(client => {
      clickBuffer[client.id] = data;
      return focusChatMessage(client, data);
    }));
    if (!self.clients.openWindow || clients.length > 0) return undefined;
    // Store notification data for default client (fix for android)
    clickBuffer[0] = data;
    // If there is no opened client we need to open one and wait until it is fully loaded
    try {
      const newClient = await self.clients.openWindow(appUrl);
      if (newClient) {
        // Store notification data until client is fully loaded
        clickBuffer[newClient.id] = data;
      }
    } catch (error) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
        // eslint-disable-next-line no-console
        console.warn('[SW] ', error);
      }
    }
    return undefined;
  };
  e.waitUntil(notifyClients());
}
function handleClientMessage(e) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG_MORE) {
    // eslint-disable-next-line no-console
    console.log('[SW] New message from client', e);
  }
  if (!e.data) return;
  const source = e.source;
  if (e.data.type === 'clientReady') {
    // focus on chat message when client is fully ready
    const data = clickBuffer[source.id] || clickBuffer[0];
    if (data) {
      delete clickBuffer[source.id];
      delete clickBuffer[0];
      e.waitUntil(focusChatMessage(source, data));
    }
  }
  if (e.data.type === 'showMessageNotification') {
    // store messageId for already shown notification
    const notification = e.data.payload;
    e.waitUntil((async () => {
      // Close existing notification if it is already shown
      if (notification.chatId) {
        const notifications = await self.registration.getNotifications({
          tag: notification.chatId
        });
        notifications.forEach(n => n.close());
      }
      // Mark this notification as shown if it was handled locally
      shownNotifications.add(notification.messageId);
      return showNotification(notification);
    })());
  }
  if (e.data.type === 'closeMessageNotifications') {
    e.waitUntil(closeNotifications(e.data.payload));
  }
}
self.addEventListener('sync', () => {
  lastSyncAt = Date.now();
});

/***/ }),

/***/ "./src/serviceWorker/share.ts":
/*!************************************!*\
  !*** ./src/serviceWorker/share.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleClientMessage: () => (/* binding */ handleClientMessage),
/* harmony export */   respondForShare: () => (/* binding */ respondForShare)
/* harmony export */ });
/* harmony import */ var _util_Deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred */ "./src/util/Deferred.ts");

const READY_CLIENT_DEFERREDS = new Map();
async function respondForShare(e) {
  if (e.request.method === 'POST') {
    try {
      const formData = await e.request.formData();
      const data = parseFormData(formData);
      requestShare(data, e.resultingClientId);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[SHARE] Failed to parse input data', err);
    }
  }
  return Response.redirect('.');
}
function handleClientMessage(e) {
  const {
    source,
    data
  } = e;
  if (!source) return;
  if (data.type === 'clientReady') {
    const {
      id
    } = source;
    const deferred = READY_CLIENT_DEFERREDS.get(id);
    if (deferred) {
      deferred.resolve();
    } else {
      READY_CLIENT_DEFERREDS.set(id, _util_Deferred__WEBPACK_IMPORTED_MODULE_0__["default"].resolved());
    }
  }
}
async function requestShare(data, clientId) {
  const client = await self.clients.get(clientId);
  if (!client) {
    return;
  }
  await getClientReadyDeferred(clientId);
  client.postMessage({
    type: 'share',
    payload: data
  });
}
function getClientReadyDeferred(clientId) {
  const deferred = READY_CLIENT_DEFERREDS.get(clientId);
  if (deferred) {
    return deferred.promise;
  }
  const newDeferred = new _util_Deferred__WEBPACK_IMPORTED_MODULE_0__["default"]();
  READY_CLIENT_DEFERREDS.set(clientId, newDeferred);
  return newDeferred.promise;
}
function parseFormData(formData) {
  const files = formData.getAll('files');
  const title = formData.get('title');
  const text = formData.get('text');
  const url = formData.get('url');
  return {
    title,
    text,
    url,
    files
  };
}

/***/ }),

/***/ "./src/util/Deferred.ts":
/*!******************************!*\
  !*** ./src/util/Deferred.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deferred)
/* harmony export */ });
class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
  static resolved(value) {
    const deferred = new Deferred();
    deferred.resolve(value);
    return deferred;
  }
}

/***/ }),

/***/ "./src/util/browser/globalEnvironment.ts":
/*!***********************************************!*\
  !*** ./src/util/browser/globalEnvironment.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARE_WEBCODECS_SUPPORTED: () => (/* binding */ ARE_WEBCODECS_SUPPORTED),
/* harmony export */   IS_BAD_URL_PARSER: () => (/* binding */ IS_BAD_URL_PARSER),
/* harmony export */   IS_INTL_LIST_FORMAT_SUPPORTED: () => (/* binding */ IS_INTL_LIST_FORMAT_SUPPORTED),
/* harmony export */   IS_MULTIACCOUNT_SUPPORTED: () => (/* binding */ IS_MULTIACCOUNT_SUPPORTED)
/* harmony export */ });
const IS_MULTIACCOUNT_SUPPORTED = 'SharedWorker' in globalThis;
const IS_INTL_LIST_FORMAT_SUPPORTED = 'ListFormat' in Intl;
const IS_BAD_URL_PARSER = new URL('tg://host').host !== 'host';
const ARE_WEBCODECS_SUPPORTED = 'VideoDecoder' in globalThis;

/***/ }),

/***/ "./src/util/generateUniqueId.ts":
/*!**************************************!*\
  !*** ./src/util/generateUniqueId.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateUniqueId)
/* harmony export */ });
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/***/ }),

/***/ "./src/util/multiaccount.ts":
/*!**********************************!*\
  !*** ./src/util/multiaccount.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCOUNT_SLOT: () => (/* binding */ ACCOUNT_SLOT),
/* harmony export */   DATA_BROADCAST_CHANNEL_NAME: () => (/* binding */ DATA_BROADCAST_CHANNEL_NAME),
/* harmony export */   ESTABLISH_BROADCAST_CHANNEL_NAME: () => (/* binding */ ESTABLISH_BROADCAST_CHANNEL_NAME),
/* harmony export */   GLOBAL_STATE_CACHE_KEY: () => (/* binding */ GLOBAL_STATE_CACHE_KEY),
/* harmony export */   MULTITAB_STORAGE_KEY: () => (/* binding */ MULTITAB_STORAGE_KEY),
/* harmony export */   getAccountSlot: () => (/* binding */ getAccountSlot),
/* harmony export */   getAccountSlotUrl: () => (/* binding */ getAccountSlotUrl),
/* harmony export */   getAccountsInfo: () => (/* binding */ getAccountsInfo),
/* harmony export */   loadSlotSession: () => (/* binding */ loadSlotSession),
/* harmony export */   storeAccountData: () => (/* binding */ storeAccountData),
/* harmony export */   writeSlotSession: () => (/* binding */ writeSlotSession)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _browser_globalEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser/globalEnvironment */ "./src/util/browser/globalEnvironment.ts");


const WORKER_NAME = typeof WorkerGlobalScope !== 'undefined' && globalThis.self instanceof WorkerGlobalScope ? globalThis.self.name : undefined;
const WORKER_ACCOUNT_SLOT = WORKER_NAME ? Number(new URLSearchParams(WORKER_NAME).get(_config__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_QUERY)) : undefined;
const ACCOUNT_SLOT = WORKER_ACCOUNT_SLOT || (_browser_globalEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_MULTIACCOUNT_SUPPORTED ? getAccountSlot(globalThis.location.href) : undefined);
const DATA_BROADCAST_CHANNEL_NAME = `${_config__WEBPACK_IMPORTED_MODULE_0__.DATA_BROADCAST_CHANNEL_PREFIX}_${ACCOUNT_SLOT || 1}`;
const ESTABLISH_BROADCAST_CHANNEL_NAME = `${_config__WEBPACK_IMPORTED_MODULE_0__.ESTABLISH_BROADCAST_CHANNEL_PREFIX}_${ACCOUNT_SLOT || 1}`;
const MULTITAB_STORAGE_KEY = `${_config__WEBPACK_IMPORTED_MODULE_0__.MULTITAB_LOCALSTORAGE_KEY_PREFIX}_${ACCOUNT_SLOT || 1}`;
const GLOBAL_STATE_CACHE_KEY = ACCOUNT_SLOT ? `${_config__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_STATE_CACHE_PREFIX}_${ACCOUNT_SLOT}` : _config__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_STATE_CACHE_PREFIX;
function getAccountSlot(url) {
  const params = new URL(url).searchParams;
  const slot = params.get(_config__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_QUERY);
  const slotNumber = slot ? Number(slot) : 1;
  if (!slotNumber || Number.isNaN(slotNumber) || slotNumber === 1) return undefined;
  return slotNumber;
}
function getAccountsInfo() {
  if (!_browser_globalEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_MULTIACCOUNT_SUPPORTED) return {};
  const accountInfo = {};
  for (let i = 1; i <= _config__WEBPACK_IMPORTED_MODULE_0__.MULTIACCOUNT_MAX_SLOTS; i++) {
    const info = getAccountInfo(i);
    if (info) {
      accountInfo[i] = info;
    }
  }
  return accountInfo;
}
function getAccountInfo(slot) {
  const sessionData = loadSlotSession(slot);
  const {
    userId,
    avatarUri,
    color,
    emojiStatusId,
    firstName,
    lastName,
    isPremium,
    isTest,
    phone
  } = sessionData || {};
  if (!userId) return undefined;
  return {
    userId,
    avatarUri,
    color,
    emojiStatusId,
    firstName,
    lastName,
    isPremium,
    isTest,
    phone
  };
}
function loadSlotSession(slot) {
  try {
    const data = JSON.parse(localStorage.getItem(`${_config__WEBPACK_IMPORTED_MODULE_0__.SESSION_ACCOUNT_PREFIX}${slot || 1}`) || '{}');
    if (!data.dcId) return undefined;
    return data;
  } catch (e) {
    return undefined;
  }
}
function storeAccountData(slot, data) {
  const currentSlotData = loadSlotSession(slot);
  if (!currentSlotData) return;
  const updatedSharedData = {
    ...currentSlotData,
    ...data
  };
  if (!updatedSharedData.userId) return;
  writeSlotSession(slot, updatedSharedData);
}
function writeSlotSession(slot, data) {
  localStorage.setItem(`${_config__WEBPACK_IMPORTED_MODULE_0__.SESSION_ACCOUNT_PREFIX}${slot || 1}`, JSON.stringify(data));
}
function getAccountSlotUrl(slot, forLogin) {
  const url = new URL(globalThis.location.href);
  if (slot !== 1) {
    url.searchParams.set(_config__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_QUERY, String(slot));
  } else {
    url.searchParams.delete(_config__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_QUERY);
  }
  url.hash = forLogin ? 'login' : '';
  return url.toString();
}

// Validate current version across all tabs to avoid conflicts
if (typeof window === 'object') {
  const versionChannel = new BroadcastChannel('tt-version');
  versionChannel.postMessage({
    version: "10.9.52"
  });
  versionChannel.addEventListener('message', event => {
    const {
      version
    } = event.data;
    if (!version) return;
    if (semverCompare("10.9.52", version) === -1) {
      window.location.reload();
    }

    // If incoming version is older, send back the current version
    if (semverCompare("10.9.52", version) === 1) {
      versionChannel.postMessage({
        version: "10.9.52"
      });
    }
  });
}
function semverCompare(a, b) {
  if (a.startsWith(`${b}-`)) return -1;
  if (b.startsWith(`${a}-`)) return 1;
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'case',
    caseFirst: 'upper'
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["src_config_ts-src_util_schedulers_ts"], () => (__webpack_require__("./src/serviceWorker/index.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "3f46da76d817b7536627" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_serviceWorker_index_ts": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("src_config_ts-src_util_schedulers_ts").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=src_serviceWorker_index_ts.6acf98bf68e614686a27.js.map