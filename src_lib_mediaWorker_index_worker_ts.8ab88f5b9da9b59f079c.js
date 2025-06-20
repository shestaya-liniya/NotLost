/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/fastBlur.js":
/*!*****************************!*\
  !*** ./src/lib/fastBlur.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boxBlurCanvasRGB)
/* harmony export */ });
/*
Superfast Blur - a fast Box Blur For Canvas

Version:     0.5
Author:        Mario Klingemann
Contact:     mario@quasimondo.com
Website:    http://www.quasimondo.com/BoxBlurForCanvas
Twitter:    @quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr:
https://flattr.com/thing/140066/Superfast-Blur-a-pretty-fast-Box-Blur-Effect-for-CanvasJavascript

Copyright (c) 2011 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

// eslint-disable-next-line @stylistic/max-len
const mul_table = [1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1];
// eslint-disable-next-line @stylistic/max-len
const shg_table = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18];
function boxBlurCanvasRGB(context, top_x, top_y, width, height, radius, iterations) {
  if (Number.isNaN(radius) || radius < 1) return;
  radius |= 0;
  if (Number.isNaN(iterations)) iterations = 1;
  iterations |= 0;
  if (iterations > 3) iterations = 3;
  if (iterations < 1) iterations = 1;
  const imageData = context.getImageData(top_x, top_y, width, height);
  const pixels = imageData.data;
  let rsum;
  let gsum;
  let bsum;
  let x;
  let y;
  let i;
  let p;
  let p1;
  let p2;
  let yp;
  let yi;
  let yw;
  let wm = width - 1;
  let hm = height - 1;
  let rad1 = radius + 1;
  let r = [];
  let g = [];
  let b = [];
  let mul_sum = mul_table[radius];
  let shg_sum = shg_table[radius];
  let vmin = [];
  let vmax = [];
  while (iterations-- > 0) {
    yw = yi = 0;
    for (y = 0; y < height; y++) {
      rsum = pixels[yw] * rad1;
      gsum = pixels[yw + 1] * rad1;
      bsum = pixels[yw + 2] * rad1;
      for (i = 1; i <= radius; i++) {
        p = yw + ((i > wm ? wm : i) << 2);
        rsum += pixels[p++];
        gsum += pixels[p++];
        bsum += pixels[p++];
      }
      for (x = 0; x < width; x++) {
        r[yi] = rsum;
        g[yi] = gsum;
        b[yi] = bsum;
        if (y == 0) {
          vmin[x] = ((p = x + rad1) < wm ? p : wm) << 2;
          vmax[x] = (p = x - radius) > 0 ? p << 2 : 0;
        }
        p1 = yw + vmin[x];
        p2 = yw + vmax[x];
        rsum += pixels[p1++] - pixels[p2++];
        gsum += pixels[p1++] - pixels[p2++];
        bsum += pixels[p1++] - pixels[p2++];
        yi++;
      }
      yw += width << 2;
    }
    for (x = 0; x < width; x++) {
      yp = x;
      rsum = r[yp] * rad1;
      gsum = g[yp] * rad1;
      bsum = b[yp] * rad1;
      for (i = 1; i <= radius; i++) {
        yp += i > hm ? 0 : width;
        rsum += r[yp];
        gsum += g[yp];
        bsum += b[yp];
      }
      yi = x << 2;
      for (y = 0; y < height; y++) {
        pixels[yi] = rsum * mul_sum >>> shg_sum;
        pixels[yi + 1] = gsum * mul_sum >>> shg_sum;
        pixels[yi + 2] = bsum * mul_sum >>> shg_sum;
        if (x == 0) {
          vmin[y] = ((p = y + rad1) < hm ? p : hm) * width;
          vmax[y] = (p = y - radius) > 0 ? p * width : 0;
        }
        p1 = x + vmin[y];
        p2 = x + vmax[y];
        rsum += r[p1] - r[p2];
        gsum += g[p1] - g[p2];
        bsum += b[p1] - b[p2];
        yi += width << 2;
      }
    }
  }
  context.putImageData(imageData, top_x, top_y);
}

/***/ }),

/***/ "./src/lib/mediaWorker/index.worker.ts":
/*!*********************************************!*\
  !*** ./src/lib/mediaWorker/index.worker.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rlottie_rlottie_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rlottie/rlottie.worker */ "./src/lib/rlottie/rlottie.worker.ts");
/* harmony import */ var _video_preview_video_preview_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-preview/video-preview.worker */ "./src/lib/video-preview/video-preview.worker.ts");
/* harmony import */ var _offscreen_canvas_offscreen_canvas_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offscreen-canvas/offscreen-canvas.worker */ "./src/lib/offscreen-canvas/offscreen-canvas.worker.ts");




/***/ }),

/***/ "./src/lib/offscreen-canvas/offscreen-canvas.worker.ts":
/*!*************************************************************!*\
  !*** ./src/lib/offscreen-canvas/offscreen-canvas.worker.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blurThumb: () => (/* binding */ blurThumb),
/* harmony export */   getAppendixColorFromImage: () => (/* binding */ getAppendixColorFromImage)
/* harmony export */ });
/* harmony import */ var _util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/createPostMessageInterface */ "./src/util/createPostMessageInterface.ts");
/* harmony import */ var _fastBlur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fastBlur */ "./src/lib/fastBlur.js");


const FAST_BLUR_ITERATIONS = 2;
async function blurThumb(canvas, thumbData, radius) {
  const imageBitmap = thumbData.startsWith('data:') ? await dataUriToImageBitmap(thumbData) : await blobUrlToImageBitmap(thumbData);
  const {
    width,
    height
  } = canvas;
  const ctx = canvas.getContext('2d');
  const isFilterSupported = 'filter' in ctx;
  if (isFilterSupported) {
    ctx.filter = `blur(${radius}px)`;
  }
  ctx.drawImage(imageBitmap, -radius * 2, -radius * 2, width + radius * 4, height + radius * 4);
  if (!isFilterSupported) {
    (0,_fastBlur__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, 0, 0, width, height, radius, FAST_BLUR_ITERATIONS);
  }
}
async function getAppendixColorFromImage(blobUrl, isOwn) {
  const imageBitmap = await blobUrlToImageBitmap(blobUrl);
  const {
    width,
    height
  } = imageBitmap;
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0, width, height);
  const x = isOwn ? width - 1 : 0;
  const y = height - 1;
  const pixel = Array.from(ctx.getImageData(x, y, 1, 1).data);
  return `rgba(${pixel.join(',')})`;
}
function dataUriToImageBitmap(dataUri) {
  const byteString = atob(dataUri.split(',')[1]);
  const mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];
  const buffer = new ArrayBuffer(byteString.length);
  const dataArray = new Uint8Array(buffer);
  for (let i = 0; i < byteString.length; i++) {
    dataArray[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([buffer], {
    type: mimeString
  });
  return createImageBitmap(blob);
}
async function blobUrlToImageBitmap(blobUrl) {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  return createImageBitmap(blob);
}
const api = {
  'offscreen-canvas:blurThumb': blurThumb,
  'offscreen-canvas:getAppendixColorFromImage': getAppendixColorFromImage
};
(0,_util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_0__.createWorkerInterface)(api, 'media');

/***/ }),

/***/ "./src/lib/rlottie/rlottie-wasm.js":
/*!*****************************************!*\
  !*** ./src/lib/rlottie/rlottie-wasm.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rlottie-wasm.51d175377b5332e82d64.js";

/***/ }),

/***/ "./src/lib/rlottie/rlottie.worker.ts":
/*!*******************************************!*\
  !*** ./src/lib/rlottie/rlottie.worker.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pako_dist_pako_inflate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako/dist/pako_inflate */ "./node_modules/pako/dist/pako_inflate.js");
/* harmony import */ var pako_dist_pako_inflate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pako_dist_pako_inflate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/createPostMessageInterface */ "./src/util/createPostMessageInterface.ts");


importScripts(new URL(/* asset import */ __webpack_require__(/*! ./rlottie-wasm.js */ "./src/lib/rlottie/rlottie-wasm.js"), __webpack_require__.b));
let rLottieApi;
const rLottieApiPromise = new Promise(resolve => {
  Module.onRuntimeInitialized = () => {
    rLottieApi = {
      init: Module.cwrap('lottie_init', '', []),
      destroy: Module.cwrap('lottie_destroy', '', ['number']),
      resize: Module.cwrap('lottie_resize', '', ['number', 'number', 'number']),
      buffer: Module.cwrap('lottie_buffer', 'number', ['number']),
      render: Module.cwrap('lottie_render', '', ['number', 'number']),
      loadFromData: Module.cwrap('lottie_load_from_data', 'number', ['number', 'number'])
    };
    resolve();
  };
});
const HIGH_PRIORITY_MAX_FPS = 60;
const LOW_PRIORITY_MAX_FPS = 30;
const DESTROY_REPEAT_DELAY = 1000;
const renderers = new Map();
async function init(key, tgsUrl, imgSize, isLowPriority, customColor, onInit) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const json = await extractJson(tgsUrl);
  const stringOnWasmHeap = allocate(intArrayFromString(json), 'i8', 0);
  const handle = rLottieApi.init();
  const framesCount = rLottieApi.loadFromData(handle, stringOnWasmHeap);
  rLottieApi.resize(handle, imgSize, imgSize);
  const imageData = new ImageData(imgSize, imgSize);
  const {
    reduceFactor,
    msPerFrame,
    reducedFramesCount
  } = calcParams(json, isLowPriority, framesCount);
  renderers.set(key, {
    imgSize,
    reduceFactor,
    handle,
    imageData,
    customColor
  });
  onInit(reduceFactor, msPerFrame, reducedFramesCount);
}
async function changeData(key, tgsUrl, isLowPriority, onInit) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const json = await extractJson(tgsUrl);
  const stringOnWasmHeap = allocate(intArrayFromString(json), 'i8', 0);
  const {
    handle
  } = renderers.get(key);
  const framesCount = rLottieApi.loadFromData(handle, stringOnWasmHeap);
  const {
    reduceFactor,
    msPerFrame,
    reducedFramesCount
  } = calcParams(json, isLowPriority, framesCount);
  onInit(reduceFactor, msPerFrame, reducedFramesCount);
}
async function extractJson(tgsUrl) {
  const response = await fetch(tgsUrl);
  const contentType = response.headers.get('Content-Type');

  // Support deprecated JSON format cached locally
  if (contentType?.startsWith('text/')) {
    return response.text();
  }
  const arrayBuffer = await response.arrayBuffer();
  return (0,pako_dist_pako_inflate__WEBPACK_IMPORTED_MODULE_0__.inflate)(arrayBuffer, {
    to: 'string'
  });
}
function calcParams(json, isLowPriority, framesCount) {
  const animationData = JSON.parse(json);
  const maxFps = isLowPriority ? LOW_PRIORITY_MAX_FPS : HIGH_PRIORITY_MAX_FPS;
  const sourceFps = animationData.fr || maxFps;
  const reduceFactor = sourceFps % maxFps === 0 ? sourceFps / maxFps : 1;
  return {
    reduceFactor,
    msPerFrame: 1000 / (sourceFps / reduceFactor),
    reducedFramesCount: Math.ceil(framesCount / reduceFactor)
  };
}
async function renderFrames(key, frameIndex, onProgress) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const {
    imgSize,
    reduceFactor,
    handle,
    imageData,
    customColor
  } = renderers.get(key);
  const realIndex = frameIndex * reduceFactor;
  rLottieApi.render(handle, realIndex);
  const bufferPointer = rLottieApi.buffer(handle);
  const data = Module.HEAPU8.subarray(bufferPointer, bufferPointer + imgSize * imgSize * 4);
  if (customColor) {
    const arr = new Uint8ClampedArray(data);
    applyColor(arr, customColor);
    imageData.data.set(arr);
  } else {
    imageData.data.set(data);
  }
  const imageBitmap = await createImageBitmap(imageData);
  onProgress(frameIndex, imageBitmap);
}
function applyColor(arr, color) {
  for (let i = 0; i < arr.length; i += 4) {
    arr[i] = color[0];
    arr[i + 1] = color[1];
    arr[i + 2] = color[2];
  }
}
function destroy(key, isRepeated = false) {
  try {
    const renderer = renderers.get(key);
    rLottieApi.destroy(renderer.handle);
    renderers.delete(key);
  } catch (err) {
    // `destroy` sometimes can be called before the initialization is finished
    if (!isRepeated) {
      setTimeout(() => destroy(key, true), DESTROY_REPEAT_DELAY);
    }
  }
}
const api = {
  'rlottie:init': init,
  'rlottie:changeData': changeData,
  'rlottie:renderFrames': renderFrames,
  'rlottie:destroy': destroy
};
(0,_util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_1__.createWorkerInterface)(api, 'media');

/***/ }),

/***/ "./src/lib/video-preview/MP4Demuxer.ts":
/*!*********************************************!*\
  !*** ./src/lib/video-preview/MP4Demuxer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MP4Demuxer: () => (/* binding */ MP4Demuxer)
/* harmony export */ });
/* harmony import */ var mp4box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mp4box */ "./node_modules/mp4box/dist/mp4box.all.js");
/* harmony import */ var _requestPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestPart */ "./src/lib/video-preview/requestPart.ts");


const META_PART_SIZE = 128 * 1024;
const MIN_PART_SIZE = 1024;
var Status = /*#__PURE__*/function (Status) {
  Status["loading"] = "loading";
  Status["ready"] = "ready";
  Status["closed"] = "closed";
  return Status;
}(Status || {});
class MP4Demuxer {
  status = Status.loading;
  decodedSamples = new Set();
  lastSample = 0;
  constructor(url, {
    onConfig,
    onChunk,
    stepOffset,
    stepMultiplier,
    isPolyfill,
    maxFrames
  }) {
    this.url = url;
    this.stepOffset = stepOffset;
    this.stepMultiplier = stepMultiplier;
    this.maxFrames = maxFrames;
    this.isPolyfill = isPolyfill;
    this.onConfig = onConfig;
    this.onChunk = onChunk;
    this.file = mp4box__WEBPACK_IMPORTED_MODULE_0__.createFile();
    this.file.onError = e => {
      // eslint-disable-next-line no-console
      console.error(e);
    };
    this.file.onReady = this.onReady.bind(this);
    this.file.onSamples = this.onSamples.bind(this);
    void this.loadMetadata();
  }
  async loadMetadata() {
    let offset = 0;
    while (offset !== undefined) {
      try {
        offset = await this.requestPart(offset, META_PART_SIZE);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      if (this.status === Status.ready) break;
    }
  }
  async loadNextFrames(step, duration, partSize) {
    let tick = step * this.stepOffset;
    let lastSample = 0;
    let rap = this.file.seek(tick, true);
    while (this.status !== Status.closed) {
      try {
        await this.requestPart(rap.offset, partSize);
        if (tick > duration) break;
        if (this.lastSample > 1 && lastSample < this.lastSample) {
          tick += step * this.stepMultiplier;
          lastSample = this.lastSample;
        }
        rap = this.file.seek(tick, true);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
    this.file.flush();
  }
  async requestPart(offset, partSize, useRap = true) {
    const reminder = offset % MIN_PART_SIZE;
    const start = offset - reminder;
    const end = start + partSize - 1;
    let arrayBuffer = await (0,_requestPart__WEBPACK_IMPORTED_MODULE_1__.requestPart)({
      url: this.url,
      start,
      end
    });
    if (!arrayBuffer) {
      return undefined;
    }
    if (reminder) {
      arrayBuffer = arrayBuffer.slice(reminder);
    }
    arrayBuffer.fileStart = offset;
    const nextOffset = this.file.appendBuffer(arrayBuffer);
    if (!useRap) return offset + arrayBuffer.byteLength;
    return nextOffset;
  }
  description(track) {
    const t = this.file.getTrackById(track.id);
    for (const entry of t.mdia.minf.stbl.stsd.entries) {
      if (entry.avcC || entry.hvcC || entry.av1C) {
        const stream = new mp4box__WEBPACK_IMPORTED_MODULE_0__.DataStream(undefined, 0, mp4box__WEBPACK_IMPORTED_MODULE_0__.DataStream.BIG_ENDIAN);
        if (entry.avcC) {
          entry.avcC.write(stream);
        } else if (entry.hvcC) {
          entry.hvcC.write(stream);
        } else if (entry.av1C) {
          entry.av1C.write(stream);
        }
        return new Uint8Array(stream.buffer, 8); // Remove the box header.
      }
    }
    throw new Error('avcC, hvcC ro av1C not found');
  }
  onReady(info) {
    const track = info.videoTracks[0];
    let codec = track.codec;
    if (codec.startsWith('avc1')) {
      // Somehow this is the only avc1 codec that works.
      codec = 'avc1.4d001f';
    }

    // Generate and emit an appropriate VideoDecoderConfig.
    this.onConfig({
      codec,
      codedHeight: track.video.height,
      codedWidth: track.video.width,
      description: this.description(track)
    });
    const duration = info.duration / info.timescale;

    // If we set a part size too small, the onSamples callback is not called.
    // If we use polyfill, we need to set a smaller part size to avoid decoding multiple frames.
    const partSizeDivider = this.isPolyfill ? 24 : 12;
    const partSize = roundPartSize(track.bitrate / partSizeDivider);
    const step = calculateStep(duration, this.maxFrames);

    // Start demuxing.
    this.file.setExtractionOptions(track.id, undefined, {
      nbSamples: 1
    });
    this.file.start();
    this.status = Status.ready;

    // // Load frames
    void this.loadNextFrames(step, duration, partSize);
  }
  onSamples(trackId, ref, samples) {
    if (this.status !== Status.ready) return;
    // Generate and emit an EncodedVideoChunk for each demuxed sample.
    for (const sample of samples) {
      const time = sample.cts / sample.timescale;
      const type = sample.is_sync ? 'key' : 'delta';
      const id = `${type}${sample.number}`;

      // Skip already decoded samples.
      if (this.decodedSamples.has(id)) continue;

      // @ts-ignore
      this.onChunk(new EncodedVideoChunk({
        type,
        timestamp: 1e6 * time,
        duration: 1e6 * sample.duration / sample.timescale,
        data: sample.data
      }));
      this.decodedSamples.add(id);
      this.lastSample = parseInt(sample.number, 10);
      if (sample.is_sync) {
        this.file.releaseUsedSamples(trackId, sample.number);
      }
    }
  }
  close() {
    this.file.flush();
    this.file.stop();
    this.status = Status.closed;
  }
}
function roundPartSize(size) {
  return size + MIN_PART_SIZE - size % MIN_PART_SIZE;
}
function calculateStep(duration, max) {
  return Math.round((duration + max) / max);
}

/***/ }),

/***/ "./src/lib/video-preview/requestPart.ts":
/*!**********************************************!*\
  !*** ./src/lib/video-preview/requestPart.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestPart: () => (/* binding */ requestPart)
/* harmony export */ });
/* harmony import */ var _util_generateUniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/generateUniqueId */ "./src/util/generateUniqueId.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/schedulers */ "./src/util/schedulers.ts");


const PART_TIMEOUT = 30000;
const requestStates = new Map();
function requestPart(params) {
  const messageId = (0,_util_generateUniqueId__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const requestState = {};
  let isResolved = false;
  const promise = Promise.race([(0,_util_schedulers__WEBPACK_IMPORTED_MODULE_1__.pause)(PART_TIMEOUT).then(() => isResolved ? undefined : Promise.reject(new Error('ERROR_PART_TIMEOUT'))), new Promise((resolve, reject) => {
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
  const message = {
    type: 'requestPart',
    messageId,
    params
  };
  postMessage(message);
  return promise;
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

/***/ "./src/lib/video-preview/video-preview.worker.ts":
/*!*******************************************************!*\
  !*** ./src/lib/video-preview/video-preview.worker.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/createPostMessageInterface */ "./src/util/createPostMessageInterface.ts");
/* harmony import */ var _MP4Demuxer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MP4Demuxer */ "./src/lib/video-preview/MP4Demuxer.ts");


let decoder;
let demuxer;
let onDestroy;
function init(url, maxFrames, workerIndex, workersTotal, onFrame) {
  const hasWebCodecs = 'VideoDecoder' in globalThis;
  if (!hasWebCodecs) {
    // eslint-disable-next-line no-console
    console.log('[Video Preview] WebCodecs not supported');
    return new Promise(resolve => {
      onDestroy = resolve;
    });
  }
  const decodedFrames = new Set();

  // @ts-ignore
  decoder = new VideoDecoder({
    async output(frame) {
      const time = frame.timestamp / 1e6;
      const seconds = Math.floor(time);
      // Only render whole second frames
      if (!decodedFrames.has(seconds)) {
        const bitmap = await createImageBitmap(frame);
        decodedFrames.add(seconds);
        onFrame(seconds, bitmap);
      }
      frame.close();
    },
    error(e) {
      // eslint-disable-next-line no-console
      console.error('[Video Preview] error', e);
    }
  });
  demuxer = new _MP4Demuxer__WEBPACK_IMPORTED_MODULE_1__.MP4Demuxer(url, {
    stepOffset: workerIndex,
    stepMultiplier: workersTotal,
    isPolyfill: !hasWebCodecs,
    maxFrames,
    onConfig(config) {
      decoder?.configure(config);
    },
    onChunk(chunk) {
      if (decoder?.state !== 'configured') return;
      decoder?.decode(chunk);
    }
  });
  return new Promise(resolve => {
    onDestroy = resolve;
  });
}
function destroy() {
  try {
    decoder?.close();
    demuxer?.close();
  } catch {
    // Ignore
  }
  decoder = undefined;
  demuxer = undefined;
  onDestroy?.();
}
const api = {
  'video-preview:init': init,
  'video-preview:destroy': destroy
};
(0,_util_createPostMessageInterface__WEBPACK_IMPORTED_MODULE_0__.createWorkerInterface)(api, 'media');

/***/ }),

/***/ "./src/util/callbacks.ts":
/*!*******************************!*\
  !*** ./src/util/callbacks.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCallbackManager: () => (/* binding */ createCallbackManager)
/* harmony export */ });
function createCallbackManager() {
  const callbacks = new Set();
  function addCallback(cb) {
    callbacks.add(cb);
    return () => {
      removeCallback(cb);
    };
  }
  function removeCallback(cb) {
    callbacks.delete(cb);
  }
  function runCallbacks(...args) {
    callbacks.forEach(callback => {
      callback(...args);
    });
  }
  function hasCallbacks() {
    return Boolean(callbacks.size);
  }
  return {
    runCallbacks,
    addCallback,
    removeCallback,
    hasCallbacks
  };
}

/***/ }),

/***/ "./src/util/createPostMessageInterface.ts":
/*!************************************************!*\
  !*** ./src/util/createPostMessageInterface.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkerInterface: () => (/* binding */ createWorkerInterface)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbacks */ "./src/util/callbacks.ts");
/* harmony import */ var _schedulers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedulers */ "./src/util/schedulers.ts");



const callbackState = new Map();
const messageHandlers = (0,_callbacks__WEBPACK_IMPORTED_MODULE_1__.createCallbackManager)();
onmessage = messageHandlers.runCallbacks;
function createWorkerInterface(api, channel) {
  let pendingPayloads = [];
  let pendingTransferables = [];
  const sendToOriginOnTickEnd = (0,_schedulers__WEBPACK_IMPORTED_MODULE_2__.throttleWithTickEnd)(() => {
    const data = {
      channel,
      payloads: pendingPayloads
    };
    const transferables = pendingTransferables;
    pendingPayloads = [];
    pendingTransferables = [];
    if (transferables.length) {
      postMessage(data, transferables);
    } else {
      postMessage(data);
    }
  });
  function sendToOrigin(payload, transferables) {
    pendingPayloads.push(payload);
    if (transferables) {
      pendingTransferables.push(...transferables);
    }
    sendToOriginOnTickEnd();
  }
  handleErrors(sendToOrigin);
  messageHandlers.addCallback(message => {
    if (message.data?.channel === channel) {
      onMessage(api, message.data, sendToOrigin);
    }
  });
}
function onMessage(api, data, sendToOrigin, onUpdate) {
  if (!onUpdate) {
    onUpdate = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
  }
  data.payloads.forEach(async payload => {
    switch (payload.type) {
      case 'init':
        {
          const {
            args
          } = payload;
          if (typeof api === 'function') {
            await api('init', onUpdate, ...args);
          } else {
            await api.init?.(onUpdate, ...args);
          }
          break;
        }
      case 'callMethod':
        {
          const {
            messageId,
            name,
            args,
            withCallback
          } = payload;
          try {
            if (typeof api !== 'function' && !api[name]) return;
            if (messageId && withCallback) {
              const callback = (...callbackArgs) => {
                const lastArg = callbackArgs[callbackArgs.length - 1];
                sendToOrigin({
                  type: 'methodCallback',
                  messageId,
                  callbackArgs
                }, isTransferable(lastArg) ? [lastArg] : undefined);
              };
              callbackState.set(messageId, callback);
              args.push(callback);
            }
            const response = typeof api === 'function' ? await api(name, ...args) : await api[name](...args);
            const {
              arrayBuffer
            } = typeof response === 'object' && 'arrayBuffer' in response && response || {};
            if (messageId) {
              sendToOrigin({
                type: 'methodResponse',
                messageId,
                response
              }, arrayBuffer ? [arrayBuffer] : undefined);
            }
          } catch (error) {
            if (_config__WEBPACK_IMPORTED_MODULE_0__.DEBUG) {
              // eslint-disable-next-line no-console
              console.error(error);
            }
            if (messageId) {
              sendToOrigin({
                type: 'methodResponse',
                messageId,
                error: {
                  message: error.message
                }
              });
            }
          }
          if (messageId) {
            callbackState.delete(messageId);
          }
          break;
        }
      case 'cancelProgress':
        {
          const callback = callbackState.get(payload.messageId);
          if (callback) {
            callback.isCanceled = true;
          }
          break;
        }
    }
  });
}
function isTransferable(obj) {
  return obj instanceof ArrayBuffer || obj instanceof ImageBitmap;
}
function handleErrors(sendToOrigin) {
  self.onerror = e => {
    // eslint-disable-next-line no-console
    console.error(e);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message: e.error.message || 'Uncaught exception in worker'
      }
    });
  };
  self.addEventListener('unhandledrejection', e => {
    // eslint-disable-next-line no-console
    console.error(e);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message: e.reason.message || 'Uncaught rejection in worker'
      }
    });
  });
}

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_pako_dist_pako_inflate_js","vendors-node_modules_mp4box_dist_mp4box_all_js","src_config_ts-src_util_schedulers_ts"], () => (__webpack_require__("./src/lib/mediaWorker/index.worker.ts")))
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			return "" + chunkId + "." + {"vendors-node_modules_pako_dist_pako_inflate_js":"5f75bdcaf063c6c088d2","vendors-node_modules_mp4box_dist_mp4box_all_js":"53d34976bcce94d6d1b5","src_config_ts-src_util_schedulers_ts":"3f46da76d817b7536627"}[chunkId] + ".js";
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
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_lib_mediaWorker_index_worker_ts": 1
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
/******/ 			return Promise.all(["vendors-node_modules_pako_dist_pako_inflate_js","vendors-node_modules_mp4box_dist_mp4box_all_js","src_config_ts-src_util_schedulers_ts"].map(__webpack_require__.e, __webpack_require__)).then(next);
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
//# sourceMappingURL=src_lib_mediaWorker_index_worker_ts.8ab88f5b9da9b59f079c.js.map