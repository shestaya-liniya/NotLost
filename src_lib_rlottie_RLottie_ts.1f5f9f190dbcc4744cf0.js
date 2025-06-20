"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_lib_rlottie_RLottie_ts"],{

/***/ "./src/lib/rlottie/RLottie.ts":
/*!************************************!*\
  !*** ./src/lib/rlottie/RLottie.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/animation */ "./src/util/animation.ts");
/* harmony import */ var _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/browser/windowEnvironment */ "./src/util/browser/windowEnvironment.ts");
/* harmony import */ var _util_cycleRestrict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/cycleRestrict */ "./src/util/cycleRestrict.ts");
/* harmony import */ var _util_Deferred__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Deferred */ "./src/util/Deferred.ts");
/* harmony import */ var _util_generateUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/generateUniqueId */ "./src/util/generateUniqueId.ts");
/* harmony import */ var _util_launchMediaWorkers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/launchMediaWorkers */ "./src/util/launchMediaWorkers.ts");
/* harmony import */ var _fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");







const WAITING = Symbol('WAITING');
const HIGH_PRIORITY_QUALITY = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_ANDROID || _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_IOS ? 0.75 : 1;
const LOW_PRIORITY_QUALITY = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_ANDROID ? 0.5 : 0.75;
const LOW_PRIORITY_QUALITY_SIZE_THRESHOLD = 24;
const HIGH_PRIORITY_CACHE_MODULO = _util_browser_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_SAFARI ? 2 : 4;
const LOW_PRIORITY_CACHE_MODULO = 0;
const CANVAS_CLASS = 'rlottie-canvas';
const workers = (0,_util_launchMediaWorkers__WEBPACK_IMPORTED_MODULE_5__["default"])().map(({
  connector
}) => connector);
const instancesByRenderId = new Map();
const PENDING_CANVAS_RESIZES = new WeakMap();
let lastWorkerIndex = -1;
class RLottie {
  // Config

  views = new Map();
  msPerFrame = 1000 / 60;
  reduceFactor = 1;
  frames = [];
  // State

  isAnimating = false;
  isWaiting = true;
  isEnded = false;
  isDestroyed = false;
  isRendererInited = false;
  approxFrameIndex = 0;
  prevFrameIndex = -1;
  stopFrameIndex = 0;
  speed = 1;
  direction = 1;
  static init(...args) {
    const [, canvas, renderId, params, viewId = (0,_util_generateUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])(),, onLoad] = args;
    let instance = instancesByRenderId.get(renderId);
    if (!instance) {
      instance = new RLottie(...args);
      instancesByRenderId.set(renderId, instance);
    } else {
      instance.addView(viewId, canvas, onLoad, params?.coords);
    }
    return instance;
  }
  constructor(tgsUrl, container, renderId, params, viewId = (0,_util_generateUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])(), customColor, onLoad, onEnded, onLoop) {
    this.tgsUrl = tgsUrl;
    this.container = container;
    this.renderId = renderId;
    this.params = params;
    this.customColor = customColor;
    this.onLoad = onLoad;
    this.onEnded = onEnded;
    this.onLoop = onLoop;
    this.addView(viewId, container, onLoad, params.coords);
    this.initConfig();
    this.initRenderer();
  }
  removeView(viewId) {
    const {
      canvas,
      ctx,
      isSharedCanvas,
      coords
    } = this.views.get(viewId);
    if (isSharedCanvas) {
      ctx.clearRect(coords.x, coords.y, this.imgSize, this.imgSize);
    } else {
      canvas.remove();
    }
    this.views.delete(viewId);
    if (!this.views.size) {
      this.destroy();
    }
  }
  isPlaying() {
    return this.isAnimating || this.isWaiting;
  }
  play(forceRestart = false, viewId) {
    if (viewId) {
      this.views.get(viewId).isPaused = false;
    }
    if (this.isEnded && forceRestart) {
      this.approxFrameIndex = Math.floor(0);
    }
    this.stopFrameIndex = undefined;
    this.direction = 1;
    this.doPlay();
  }
  pause(viewId) {
    this.lastRenderAt = undefined;
    if (viewId) {
      this.views.get(viewId).isPaused = true;
      const areAllContainersPaused = Array.from(this.views.values()).every(({
        isPaused
      }) => isPaused);
      if (!areAllContainersPaused) {
        return;
      }
    }
    if (this.isWaiting) {
      this.stopFrameIndex = this.approxFrameIndex;
    } else {
      this.isAnimating = false;
    }
    if (!this.params.isLowPriority) {
      this.frames = this.frames.map((frame, i) => {
        if (i === this.prevFrameIndex) {
          return frame;
        } else {
          if (frame && frame !== WAITING) {
            frame.close();
          }
          return undefined;
        }
      });
    }
  }
  playSegment([startFrameIndex, stopFrameIndex], forceRestart = false, viewId) {
    if (viewId) {
      this.views.get(viewId).isPaused = false;
    }
    const frameIndex = Math.round(this.approxFrameIndex);
    this.stopFrameIndex = Math.floor(stopFrameIndex / this.reduceFactor);
    if (frameIndex !== stopFrameIndex || forceRestart) {
      this.approxFrameIndex = Math.floor(startFrameIndex / this.reduceFactor);
    }
    this.direction = startFrameIndex < stopFrameIndex ? 1 : -1;
    this.doPlay();
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  setNoLoop(noLoop) {
    this.params.noLoop = noLoop;
  }
  async setSharedCanvasCoords(viewId, newCoords) {
    const containerInfo = this.views.get(viewId);
    const {
      canvas,
      ctx
    } = containerInfo;
    const isCanvasDirty = !canvas.dataset.isJustCleaned || canvas.dataset.isJustCleaned === 'false';
    if (!isCanvasDirty) {
      await PENDING_CANVAS_RESIZES.get(canvas);
    }
    let [canvasWidth, canvasHeight] = [canvas.width, canvas.height];
    if (isCanvasDirty) {
      const sizeFactor = this.calcSizeFactor();
      [canvasWidth, canvasHeight] = ensureCanvasSize(canvas, sizeFactor);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      canvas.dataset.isJustCleaned = 'true';
      (0,_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_6__.requestMeasure)(() => {
        canvas.dataset.isJustCleaned = 'false';
      });
    }
    containerInfo.coords = {
      x: Math.round((newCoords?.x || 0) * canvasWidth),
      y: Math.round((newCoords?.y || 0) * canvasHeight)
    };
    const frame = this.getFrame(this.prevFrameIndex) || this.getFrame(Math.round(this.approxFrameIndex));
    if (frame && frame !== WAITING) {
      ctx.drawImage(frame, containerInfo.coords.x, containerInfo.coords.y);
    }
  }
  addView(viewId, container, onLoad, coords) {
    const sizeFactor = this.calcSizeFactor();
    let imgSize;
    if (container instanceof HTMLDivElement) {
      if (!(container.parentNode instanceof HTMLElement)) {
        throw new Error('[RLottie] Container is not mounted');
      }
      const {
        size
      } = this.params;
      imgSize = Math.round(size * sizeFactor);
      if (!this.imgSize) {
        this.imgSize = imgSize;
        this.imageData = new ImageData(imgSize, imgSize);
      }
      (0,_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_6__.requestMutation)(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.classList.add(CANVAS_CLASS);
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        canvas.width = imgSize;
        canvas.height = imgSize;
        container.appendChild(canvas);
        this.views.set(viewId, {
          canvas,
          ctx,
          onLoad
        });
      });
    } else {
      if (!container.isConnected) {
        throw new Error('[RLottie] Shared canvas is not mounted');
      }
      const canvas = container;
      const ctx = canvas.getContext('2d');
      imgSize = Math.round(this.params.size * sizeFactor);
      if (!this.imgSize) {
        this.imgSize = imgSize;
        this.imageData = new ImageData(imgSize, imgSize);
      }
      const [canvasWidth, canvasHeight] = ensureCanvasSize(canvas, sizeFactor);
      this.views.set(viewId, {
        canvas,
        ctx,
        isSharedCanvas: true,
        coords: {
          x: Math.round(coords.x * canvasWidth),
          y: Math.round(coords.y * canvasHeight)
        },
        onLoad
      });
    }
    if (this.isRendererInited) {
      this.doPlay();
    }
  }
  calcSizeFactor() {
    const {
      size,
      isLowPriority,
      // Reduced quality only looks acceptable on big enough images
      quality = isLowPriority && (!size || size > LOW_PRIORITY_QUALITY_SIZE_THRESHOLD) ? LOW_PRIORITY_QUALITY : HIGH_PRIORITY_QUALITY
    } = this.params;

    // Reduced quality only looks acceptable on high DPR screens
    return Math.max(window.devicePixelRatio * quality, 1);
  }
  destroy() {
    this.isDestroyed = true;
    this.pause();
    this.clearCache();
    this.destroyRenderer();
    instancesByRenderId.delete(this.renderId);
  }
  clearCache() {
    this.frames.forEach(frame => {
      if (frame && frame !== WAITING) {
        frame.close();
      }
    });

    // Help GC
    this.imageData = undefined;
    this.frames = [];
  }
  initConfig() {
    const {
      isLowPriority
    } = this.params;
    this.cacheModulo = isLowPriority ? LOW_PRIORITY_CACHE_MODULO : HIGH_PRIORITY_CACHE_MODULO;
  }
  setColor(newColor) {
    this.customColor = newColor;
  }
  initRenderer() {
    this.workerIndex = (0,_util_cycleRestrict__WEBPACK_IMPORTED_MODULE_2__["default"])(_util_launchMediaWorkers__WEBPACK_IMPORTED_MODULE_5__.MAX_WORKERS, ++lastWorkerIndex);
    workers[this.workerIndex].request({
      name: 'rlottie:init',
      args: [this.renderId, this.tgsUrl, this.imgSize, this.params.isLowPriority || false, this.customColor, this.onRendererInit.bind(this)]
    });
  }
  destroyRenderer() {
    workers[this.workerIndex].request({
      name: 'rlottie:destroy',
      args: [this.renderId]
    });
  }
  onRendererInit(reduceFactor, msPerFrame, framesCount) {
    this.isRendererInited = true;
    this.reduceFactor = reduceFactor;
    this.msPerFrame = msPerFrame;
    this.framesCount = framesCount;
    if (this.isWaiting) {
      this.doPlay();
    }
  }
  changeData(tgsUrl) {
    this.pause();
    this.tgsUrl = tgsUrl;
    this.initConfig();
    workers[this.workerIndex].request({
      name: 'rlottie:changeData',
      args: [this.renderId, this.tgsUrl, this.params.isLowPriority || false, this.onChangeData.bind(this)]
    });
  }
  onChangeData(reduceFactor, msPerFrame, framesCount) {
    this.reduceFactor = reduceFactor;
    this.msPerFrame = msPerFrame;
    this.framesCount = framesCount;
    this.isWaiting = false;
    this.isAnimating = false;
    this.doPlay();
  }
  doPlay() {
    if (!this.framesCount) {
      return;
    }
    if (this.isDestroyed) {
      return;
    }
    if (this.isAnimating) {
      return;
    }
    if (!this.isWaiting) {
      this.lastRenderAt = undefined;
    }
    this.isEnded = false;
    this.isAnimating = true;
    this.isWaiting = false;
    (0,_util_animation__WEBPACK_IMPORTED_MODULE_0__.animate)(() => {
      if (this.isDestroyed) {
        return false;
      }

      // Paused from outside
      if (!this.isAnimating) {
        const areAllLoaded = Array.from(this.views.values()).every(({
          isLoaded
        }) => isLoaded);
        if (areAllLoaded) {
          return false;
        }
      }
      const frameIndex = Math.round(this.approxFrameIndex);
      const frame = this.getFrame(frameIndex);
      if (!frame || frame === WAITING) {
        if (!frame) {
          this.requestFrame(frameIndex);
        }
        this.isAnimating = false;
        this.isWaiting = true;
        return false;
      }
      if (this.cacheModulo && frameIndex % this.cacheModulo === 0) {
        this.cleanupPrevFrame(frameIndex);
      }
      if (frameIndex !== this.prevFrameIndex) {
        this.views.forEach(containerData => {
          const {
            ctx,
            isLoaded,
            isPaused,
            coords: {
              x,
              y
            } = {},
            onLoad
          } = containerData;
          if (!isLoaded || !isPaused) {
            ctx.clearRect(x || 0, y || 0, this.imgSize, this.imgSize);
            ctx.drawImage(frame, x || 0, y || 0);
          }
          if (!isLoaded) {
            containerData.isLoaded = true;
            onLoad?.();
          }
        });
        this.prevFrameIndex = frameIndex;
      }
      const now = Date.now();
      const currentSpeed = this.lastRenderAt ? this.msPerFrame / (now - this.lastRenderAt) : 1;
      const delta = this.direction * this.speed / currentSpeed;
      const expectedNextFrameIndex = Math.round(this.approxFrameIndex + delta);
      this.lastRenderAt = now;

      // Forward animation finished
      if (delta > 0 && (frameIndex === this.framesCount - 1 || expectedNextFrameIndex > this.framesCount - 1)) {
        if (this.params.noLoop) {
          this.isAnimating = false;
          this.isEnded = true;
          this.onEnded?.();
          return false;
        }
        this.onLoop?.();
        this.approxFrameIndex = 0;

        // Backward animation finished
      } else if (delta < 0 && (frameIndex === 0 || expectedNextFrameIndex < 0)) {
        if (this.params.noLoop) {
          this.isAnimating = false;
          this.isEnded = true;
          this.onEnded?.();
          return false;
        }
        this.onLoop?.();
        this.approxFrameIndex = this.framesCount - 1;

        // Stop frame reached
      } else if (this.stopFrameIndex !== undefined && (frameIndex === this.stopFrameIndex || delta > 0 && expectedNextFrameIndex > this.stopFrameIndex || delta < 0 && expectedNextFrameIndex < this.stopFrameIndex)) {
        this.stopFrameIndex = undefined;
        this.isAnimating = false;
        return false;

        // Preparing next frame
      } else {
        this.approxFrameIndex += delta;
      }
      const nextFrameIndex = Math.round(this.approxFrameIndex);
      if (!this.getFrame(nextFrameIndex)) {
        this.requestFrame(nextFrameIndex);
        this.isWaiting = true;
        this.isAnimating = false;
        return false;
      }
      return true;
    }, _fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_6__.requestMutation);
  }
  getFrame(frameIndex) {
    return this.frames[frameIndex];
  }
  requestFrame(frameIndex) {
    this.frames[frameIndex] = WAITING;
    workers[this.workerIndex].request({
      name: 'rlottie:renderFrames',
      args: [this.renderId, frameIndex, this.onFrameLoad.bind(this)]
    });
  }
  cleanupPrevFrame(frameIndex) {
    if (this.framesCount < 3) {
      return;
    }
    const prevFrameIndex = (0,_util_cycleRestrict__WEBPACK_IMPORTED_MODULE_2__["default"])(this.framesCount, frameIndex - 1);
    this.frames[prevFrameIndex] = undefined;
  }
  onFrameLoad(frameIndex, imageBitmap) {
    if (this.frames[frameIndex] !== WAITING) {
      return;
    }
    this.frames[frameIndex] = imageBitmap;
    if (this.isWaiting) {
      this.doPlay();
    }
  }
}
function ensureCanvasSize(canvas, sizeFactor) {
  const expectedWidth = Math.round(canvas.offsetWidth * sizeFactor);
  const expectedHeight = Math.round(canvas.offsetHeight * sizeFactor);
  if (canvas.width !== expectedWidth || canvas.height !== expectedHeight) {
    const deferred = new _util_Deferred__WEBPACK_IMPORTED_MODULE_3__["default"]();
    PENDING_CANVAS_RESIZES.set(canvas, deferred.promise);
    (0,_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_6__.requestMutation)(() => {
      canvas.width = expectedWidth;
      canvas.height = expectedHeight;
      deferred.resolve();
    });
  }
  return [expectedWidth, expectedHeight];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RLottie);

/***/ }),

/***/ "./src/util/PostMessageConnector.ts":
/*!******************************************!*\
  !*** ./src/util/PostMessageConnector.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnector: () => (/* binding */ createConnector)
/* harmony export */ });
/* harmony import */ var _generateUniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateUniqueId */ "./src/util/generateUniqueId.ts");
/* harmony import */ var _schedulers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulers */ "./src/util/schedulers.ts");



// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents

class ConnectorClass {
  requestStates = new Map();
  requestStatesByCallback = new Map();
  pendingPayloads = [];
  pendingTransferables = [];
  constructor(target, onUpdate, channel) {
    this.target = target;
    this.onUpdate = onUpdate;
    this.channel = channel;
  }
  destroy() {}
  init(...args) {
    this.postMessageOnTickEnd({
      type: 'init',
      args
    });
  }
  request(messageData) {
    const {
      requestStates,
      requestStatesByCallback
    } = this;
    const {
      transferables,
      ...restMessageData
    } = messageData;
    const messageId = (0,_generateUniqueId__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const payload = {
      type: 'callMethod',
      messageId,
      ...restMessageData
    };
    const requestState = {
      messageId
    };

    // Re-wrap type because of `postMessage`
    const promise = new Promise((resolve, reject) => {
      Object.assign(requestState, {
        resolve,
        reject
      });
    });
    if (typeof payload.args[payload.args.length - 1] === 'function') {
      payload.withCallback = true;
      const callback = payload.args.pop();
      requestState.callback = callback;
      requestStatesByCallback.set(callback, requestState);
    }
    requestStates.set(messageId, requestState);
    promise.catch(() => undefined).finally(() => {
      requestStates.delete(messageId);
      if (requestState.callback) {
        requestStatesByCallback.delete(requestState.callback);
      }
    });
    this.postMessageOnTickEnd(payload, transferables);
    return promise;
  }
  cancelCallback(progressCallback) {
    progressCallback.isCanceled = true;
    const {
      messageId
    } = this.requestStatesByCallback.get(progressCallback) || {};
    if (!messageId) {
      return;
    }
    this.postMessageOnTickEnd({
      type: 'cancelProgress',
      messageId
    });
  }
  onMessage(data) {
    const {
      requestStates,
      channel
    } = this;
    if (data.channel !== channel) {
      return;
    }
    data.payloads.forEach(payload => {
      if (payload.type === 'update' && this.onUpdate) {
        this.onUpdate(payload.update);
      }
      if (payload.type === 'methodResponse') {
        const requestState = requestStates.get(payload.messageId);
        if (requestState) {
          if (payload.error) {
            requestState.reject(payload.error);
          } else {
            requestState.resolve(payload.response);
          }
        }
      } else if (payload.type === 'methodCallback') {
        const requestState = requestStates.get(payload.messageId);
        requestState?.callback?.(...payload.callbackArgs);
      } else if (payload.type === 'unhandledError') {
        throw new Error(payload.error?.message);
      }
    });
  }
  postMessageOnTickEnd(payload, transferables) {
    this.pendingPayloads.push(payload);
    if (transferables) {
      this.pendingTransferables.push(...transferables);
    }
    this.postMessagesOnTickEnd();
  }
  postMessagesOnTickEnd = (0,_schedulers__WEBPACK_IMPORTED_MODULE_1__.throttleWithTickEnd)(() => {
    const {
      channel
    } = this;
    const payloads = this.pendingPayloads;
    const transferables = this.pendingTransferables;
    this.pendingPayloads = [];
    this.pendingTransferables = [];
    this.target.postMessage({
      channel,
      payloads
    }, transferables);
  });
}
function createConnector(worker, onUpdate, channel) {
  const connector = new ConnectorClass(worker, onUpdate, channel);
  function handleMessage({
    data
  }) {
    connector.onMessage(data);
  }
  worker.addEventListener('message', handleMessage);
  connector.destroy = () => {
    worker.removeEventListener('message', handleMessage);
  };
  return connector;
}

/***/ }),

/***/ "./src/util/cycleRestrict.ts":
/*!***********************************!*\
  !*** ./src/util/cycleRestrict.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cycleRestrict)
/* harmony export */ });
function cycleRestrict(length, index) {
  return index - Math.floor(index / length) * length;
}

/***/ }),

/***/ "./src/util/launchMediaWorkers.ts":
/*!****************************************!*\
  !*** ./src/util/launchMediaWorkers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_WORKERS: () => (/* binding */ MAX_WORKERS),
/* harmony export */   "default": () => (/* binding */ launchMediaWorkers),
/* harmony export */   requestMediaWorker: () => (/* binding */ requestMediaWorker)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _PostMessageConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostMessageConnector */ "./src/util/PostMessageConnector.ts");


const MAX_WORKERS = Math.min(navigator.hardwareConcurrency || 4, 4);
let instances;
function launchMediaWorkers() {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.IS_TEST) return [];
  if (!instances) {
    instances = new Array(MAX_WORKERS).fill(undefined).map(() => {
      const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_lib_mediaWorker_index_worker_ts"), __webpack_require__.b));
      const connector = (0,_PostMessageConnector__WEBPACK_IMPORTED_MODULE_1__.createConnector)(worker, undefined, 'media');
      return {
        worker,
        connector
      };
    });
  }
  return instances;
}
function requestMediaWorker(payload, index) {
  return launchMediaWorkers()[index].connector.request(payload);
}

/***/ })

}]);
//# sourceMappingURL=src_lib_rlottie_RLottie_ts.1f5f9f190dbcc4744cf0.js.map