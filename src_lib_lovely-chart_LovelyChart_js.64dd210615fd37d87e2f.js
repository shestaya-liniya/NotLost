"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_lib_lovely-chart_LovelyChart_js"],{

/***/ "./src/lib/lovely-chart/Axes.js":
/*!**************************************!*\
  !*** ./src/lib/lovely-chart/Axes.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAxes: () => (/* binding */ createAxes)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format.js */ "./src/lib/lovely-chart/format.js");
/* harmony import */ var _skin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skin.js */ "./src/lib/lovely-chart/skin.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projection.js */ "./src/lib/lovely-chart/Projection.js");





function createAxes(context, data, plotSize, colors) {
  function drawXAxis(state, projection) {
    context.clearRect(0, plotSize.height - _constants_js__WEBPACK_IMPORTED_MODULE_0__.X_AXIS_HEIGHT + 1, plotSize.width, _constants_js__WEBPACK_IMPORTED_MODULE_0__.X_AXIS_HEIGHT + 1);
    const topOffset = plotSize.height - _constants_js__WEBPACK_IMPORTED_MODULE_0__.X_AXIS_HEIGHT / 2;
    const scaleLevel = Math.floor(state.xAxisScale);
    const step = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.xScaleLevelToStep)(scaleLevel);
    const opacityFactor = 1 - (state.xAxisScale - scaleLevel);
    context.font = _constants_js__WEBPACK_IMPORTED_MODULE_0__.AXES_FONT;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    for (let i = state.labelFromIndex; i <= state.labelToIndex; i++) {
      const shiftedI = i - _constants_js__WEBPACK_IMPORTED_MODULE_0__.X_AXIS_SHIFT_START;
      if (shiftedI % step !== 0) {
        continue;
      }
      const label = data.xLabels[i];
      const [xPx] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_4__.toPixels)(projection, i, 0);
      let opacity = shiftedI % (step * 2) === 0 ? 1 : opacityFactor;
      opacity = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.applyYEdgeOpacity)(opacity, xPx, plotSize.width);
      context.fillStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'x-axis-text', opacity);
      context.fillText(label.text, xPx, topOffset);
    }
  }
  function drawYAxis(state, projection, secondaryProjection) {
    const {
      yAxisScale,
      yAxisScaleFrom,
      yAxisScaleTo,
      yAxisScaleProgress = 0,
      yMinViewport,
      yMinViewportFrom,
      yMinViewportTo,
      yMaxViewport,
      yMaxViewportFrom,
      yMaxViewportTo,
      yMinViewportSecond,
      yMinViewportSecondFrom,
      yMinViewportSecondTo,
      yMaxViewportSecond,
      yMaxViewportSecondFrom,
      yMaxViewportSecondTo
    } = state;
    const colorKey = secondaryProjection && `dataset#${data.datasets[0].key}`;
    const isYChanging = yMinViewportFrom !== undefined || yMaxViewportFrom !== undefined;
    if (data.isPercentage) {
      _drawYAxisPercents(projection);
    } else if (data.isCurrency) {
      _drawYAxisCurrency(projection, data);
    } else {
      _drawYAxisScaled(state, projection, Math.round(yAxisScaleTo || yAxisScale), yMinViewportTo !== undefined ? yMinViewportTo : yMinViewport, yMaxViewportTo !== undefined ? yMaxViewportTo : yMaxViewport, yAxisScaleFrom ? yAxisScaleProgress : 1, colorKey);
    }
    if (yAxisScaleProgress > 0 && isYChanging) {
      _drawYAxisScaled(state, projection, Math.round(yAxisScaleFrom), yMinViewportFrom !== undefined ? yMinViewportFrom : yMinViewport, yMaxViewportFrom !== undefined ? yMaxViewportFrom : yMaxViewport, 1 - yAxisScaleProgress, colorKey);
    }
    if (secondaryProjection) {
      const {
        yAxisScaleSecond,
        yAxisScaleSecondFrom,
        yAxisScaleSecondTo,
        yAxisScaleSecondProgress = 0
      } = state;
      const secondaryColorKey = `dataset#${data.datasets[data.datasets.length - 1].key}`;
      const isYChanging = yMinViewportSecondFrom !== undefined || yMaxViewportSecondFrom !== undefined;
      _drawYAxisScaled(state, secondaryProjection, Math.round(yAxisScaleSecondTo || yAxisScaleSecond), yMinViewportSecondTo !== undefined ? yMinViewportSecondTo : yMinViewportSecond, yMaxViewportSecondTo !== undefined ? yMaxViewportSecondTo : yMaxViewportSecond, yAxisScaleSecondFrom ? yAxisScaleSecondProgress : 1, secondaryColorKey, true);
      if (yAxisScaleSecondProgress > 0 && isYChanging) {
        _drawYAxisScaled(state, secondaryProjection, Math.round(yAxisScaleSecondFrom), yMinViewportSecondFrom !== undefined ? yMinViewportSecondFrom : yMinViewportSecond, yMaxViewportSecondFrom !== undefined ? yMaxViewportSecondFrom : yMaxViewportSecond, 1 - yAxisScaleSecondProgress, secondaryColorKey, true);
      }
    }
  }
  function _drawYAxisScaled(state, projection, scaleLevel, yMin, yMax, opacity = 1, colorKey = null, isSecondary = false) {
    const step = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.yScaleLevelToStep)(scaleLevel);
    const firstVisibleValue = Math.ceil(yMin / step) * step;
    const lastVisibleValue = Math.floor(yMax / step) * step;
    context.font = _constants_js__WEBPACK_IMPORTED_MODULE_0__.AXES_FONT;
    context.textAlign = isSecondary ? 'right' : 'left';
    context.textBaseline = 'bottom';
    context.lineWidth = 1;
    context.beginPath();
    for (let value = firstVisibleValue; value <= lastVisibleValue; value += step) {
      const [, yPx] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_4__.toPixels)(projection, 0, value);
      const textOpacity = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.applyXEdgeOpacity)(opacity, yPx);
      context.fillStyle = colorKey ? (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, colorKey, textOpacity) : (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'y-axis-text', textOpacity);
      if (!isSecondary) {
        context.fillText((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.humanize)(value), _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER / 2);
      } else {
        context.fillText((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.humanize)(value), plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER / 2);
      }
      if (isSecondary) {
        context.strokeStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, colorKey, opacity);
        context.moveTo(plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
        context.lineTo(plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER * 2, yPx);
      } else {
        context.moveTo(_constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
        context.strokeStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'grid-lines', opacity);
        context.lineTo(plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
      }
    }
    context.stroke();
  }
  function _drawYAxisPercents(projection) {
    const percentValues = [0, 0.25, 0.50, 0.75, 1];
    const [, height] = projection.getSize();
    context.font = _constants_js__WEBPACK_IMPORTED_MODULE_0__.AXES_FONT;
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.lineWidth = 1;
    context.beginPath();
    percentValues.forEach(value => {
      const yPx = height - height * value + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLOT_TOP_PADDING;
      context.fillStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'y-axis-text', 1);
      context.fillText(`${value * 100}%`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER / 4);
      context.moveTo(_constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
      context.strokeStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'grid-lines', 1);
      context.lineTo(plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
    });
    context.stroke();
  }
  function _drawYAxisCurrency(projection, data) {
    const formatValue = data.datasets[0].values.map(value => (0,_format_js__WEBPACK_IMPORTED_MODULE_1__.formatCryptoValue)(value));
    const total = formatValue.reduce((sum, value) => sum + value, 0);
    const avg1 = total / formatValue.length;
    const avg2 = total / (formatValue.length / 2);
    const avg3 = total / (formatValue.length / 3);
    const averageRate1 = avg1 * data.currencyRate;
    const averageRate2 = avg2 * data.currencyRate;
    const averageRate3 = avg3 * data.currencyRate;
    const totalAvg = [0, avg1, avg2, avg3];
    const totalRate = [0, averageRate1, averageRate2, averageRate3];
    const [, height] = projection.getSize();
    context.font = _constants_js__WEBPACK_IMPORTED_MODULE_0__.AXES_FONT;
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.lineWidth = 1;
    context.beginPath();
    totalAvg.forEach((value, index) => {
      const yPx = height - height * (value / Math.max(...formatValue)) + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLOT_TOP_PADDING;
      context.fillStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'y-axis-text', 1);
      context.fillText(`${value.toFixed(2)} TON`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER / 4);
      context.textAlign = 'right';
      context.fillText(`$${totalRate[index].toFixed(2)}`, plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER / 4);
      context.textAlign = 'left';
      context.moveTo(_constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
      context.strokeStyle = (0,_skin_js__WEBPACK_IMPORTED_MODULE_2__.getCssColor)(colors, 'grid-lines', 1);
      context.lineTo(plotSize.width - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, yPx);
    });
    context.stroke();
  }
  return {
    drawXAxis,
    drawYAxis
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/Header.js":
/*!****************************************!*\
  !*** ./src/lib/lovely-chart/Header.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _toggleText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleText.js */ "./src/lib/lovely-chart/toggleText.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");



function createHeader(container, title, zoomOutLabel = 'Zoom out', zoomOutCallback) {
  let _element;
  let _titleElement;
  let _zoomOutElement;
  let _captionElement;
  let _isZooming;
  const setCaptionThrottled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.throttle)(setCaption, 100, false);
  _setupLayout();
  function setCaption(caption) {
    if (_isZooming) {
      return;
    }
    _captionElement.innerHTML = caption;
  }
  function zoom(caption) {
    _zoomOutElement = (0,_toggleText_js__WEBPACK_IMPORTED_MODULE_1__.toggleText)(_titleElement, zoomOutLabel, 'lovely-chart--header-title lovely-chart--header-zoom-out-control');
    setTimeout(() => {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(_zoomOutElement, 'click', _onZoomOut);
    }, 500);
    setCaption(caption);
  }
  function toggleIsZooming(isZooming) {
    _isZooming = isZooming;
  }
  function _setupLayout() {
    _element = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)();
    _element.className = 'lovely-chart--header';
    _titleElement = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)();
    _titleElement.className = 'lovely-chart--header-title';
    _titleElement.innerHTML = title;
    _element.appendChild(_titleElement);
    _captionElement = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)();
    _captionElement.className = 'lovely-chart--header-caption lovely-chart--position-right';
    _element.appendChild(_captionElement);
    container.appendChild(_element);
  }
  function _onZoomOut() {
    _titleElement = (0,_toggleText_js__WEBPACK_IMPORTED_MODULE_1__.toggleText)(_zoomOutElement, title, 'lovely-chart--header-title', true);
    _titleElement.classList.remove('lovely-chart--transition');
    zoomOutCallback();
  }
  return {
    setCaption: setCaptionThrottled,
    zoom,
    toggleIsZooming
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/LovelyChart.js":
/*!*********************************************!*\
  !*** ./src/lib/lovely-chart/LovelyChart.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _StateManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager.js */ "./src/lib/lovely-chart/StateManager.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./src/lib/lovely-chart/Header.js");
/* harmony import */ var _Axes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Axes.js */ "./src/lib/lovely-chart/Axes.js");
/* harmony import */ var _Minimap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Minimap.js */ "./src/lib/lovely-chart/Minimap.js");
/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tooltip.js */ "./src/lib/lovely-chart/Tooltip.js");
/* harmony import */ var _Tools_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools.js */ "./src/lib/lovely-chart/Tools.js");
/* harmony import */ var _Zoomer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Zoomer.js */ "./src/lib/lovely-chart/Zoomer.js");
/* harmony import */ var _skin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skin.js */ "./src/lib/lovely-chart/skin.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.js */ "./src/lib/lovely-chart/data.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvas.js */ "./src/lib/lovely-chart/canvas.js");
/* harmony import */ var _preparePoints_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preparePoints.js */ "./src/lib/lovely-chart/preparePoints.js");
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Projection.js */ "./src/lib/lovely-chart/Projection.js");
/* harmony import */ var _drawDatasets_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drawDatasets.js */ "./src/lib/lovely-chart/drawDatasets.js");
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./format.js */ "./src/lib/lovely-chart/format.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles/index.scss */ "./src/lib/lovely-chart/styles/index.scss");



















function create(container, originalData) {
  let _stateManager;
  let _element;
  let _plot;
  let _context;
  let _plotSize;
  let _header;
  let _axes;
  let _minimap;
  let _tooltip;
  let _tools;
  let _zoomer;
  let _state;
  let _windowWidth = window.innerWidth;
  const _data = (0,_data_js__WEBPACK_IMPORTED_MODULE_8__.analyzeData)(originalData);
  const _colors = (0,_skin_js__WEBPACK_IMPORTED_MODULE_7__.createColors)(_data.colors);
  const _redrawDebounced = (0,_utils_js__WEBPACK_IMPORTED_MODULE_17__.debounce)(_redraw, 500, false, true);
  _setupComponents();
  _setupGlobalListeners();
  function _setupComponents() {
    _setupContainer();
    _header = (0,_Header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)(_element, _data.title, _data.zoomOutLabel, _onZoomOut);
    _setupPlotCanvas();
    _stateManager = (0,_StateManager_js__WEBPACK_IMPORTED_MODULE_0__.createStateManager)(_data, _plotSize, _onStateUpdate);
    _axes = (0,_Axes_js__WEBPACK_IMPORTED_MODULE_2__.createAxes)(_context, _data, _plotSize, _colors);
    _minimap = (0,_Minimap_js__WEBPACK_IMPORTED_MODULE_3__.createMinimap)(_element, _data, _colors, _onRangeChange);
    _tooltip = (0,_Tooltip_js__WEBPACK_IMPORTED_MODULE_4__.createTooltip)(_element, _data, _plotSize, _colors, _onZoomIn, _onFocus);
    _tools = (0,_Tools_js__WEBPACK_IMPORTED_MODULE_5__.createTools)(_element, _data, _onFilterChange);
    _zoomer = _data.isZoomable && (0,_Zoomer_js__WEBPACK_IMPORTED_MODULE_6__.createZoomer)(_data, originalData, _colors, _stateManager, _element, _header, _minimap, _tooltip, _tools);
    // hideOnScroll(_element);
  }
  function _setupContainer() {
    _element = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_13__.createElement)();
    _element.className = `lovely-chart--container${_data.shouldZoomToPie ? ' lovely-chart--container-type-pie' : ''}`;
    container.appendChild(_element);
  }
  function _setupPlotCanvas() {
    const {
      canvas,
      context
    } = (0,_canvas_js__WEBPACK_IMPORTED_MODULE_9__.setupCanvas)(_element, {
      width: _element.clientWidth,
      height: _constants_js__WEBPACK_IMPORTED_MODULE_15__.PLOT_HEIGHT
    });
    _plot = canvas;
    _context = context;
    _plotSize = {
      width: _plot.offsetWidth,
      height: _plot.offsetHeight
    };
  }
  function _onStateUpdate(state) {
    _state = state;
    const {
      datasets
    } = _data;
    const range = {
      from: state.labelFromIndex,
      to: state.labelToIndex
    };
    const boundsAndParams = {
      begin: state.begin,
      end: state.end,
      totalXWidth: state.totalXWidth,
      yMin: state.yMinViewport,
      yMax: state.yMaxViewport,
      availableWidth: _plotSize.width,
      availableHeight: _plotSize.height - _constants_js__WEBPACK_IMPORTED_MODULE_15__.X_AXIS_HEIGHT,
      xPadding: _constants_js__WEBPACK_IMPORTED_MODULE_15__.GUTTER,
      yPadding: _constants_js__WEBPACK_IMPORTED_MODULE_15__.PLOT_TOP_PADDING
    };
    const visibilities = datasets.map(({
      key
    }) => state[`opacity#${key}`]);
    const points = (0,_preparePoints_js__WEBPACK_IMPORTED_MODULE_10__.preparePoints)(_data, datasets, range, visibilities, boundsAndParams);
    const projection = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_11__.createProjection)(boundsAndParams);
    let secondaryPoints = null;
    let secondaryProjection = null;
    if (_data.hasSecondYAxis) {
      const secondaryDataset = datasets.find(d => d.hasOwnYAxis);
      const bounds = {
        yMin: state.yMinViewportSecond,
        yMax: state.yMaxViewportSecond
      };
      secondaryPoints = (0,_preparePoints_js__WEBPACK_IMPORTED_MODULE_10__.preparePoints)(_data, [secondaryDataset], range, visibilities, bounds)[0];
      secondaryProjection = projection.copy(bounds);
    }
    if (!_data.hideCaption) {
      _header.setCaption(_getCaption(state));
    }
    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_9__.clearCanvas)(_plot, _context);
    const totalPoints = points.reduce((a, p) => a + p.length, 0);
    const simplification = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_16__.getSimplificationDelta)(totalPoints) * _constants_js__WEBPACK_IMPORTED_MODULE_15__.SIMPLIFIER_PLOT_FACTOR;
    (0,_drawDatasets_js__WEBPACK_IMPORTED_MODULE_12__.drawDatasets)(_context, state, _data, range, points, projection, secondaryPoints, secondaryProjection, _constants_js__WEBPACK_IMPORTED_MODULE_15__.PLOT_LINE_WIDTH, visibilities, _colors, false, simplification);
    if (!_data.isPie) {
      _axes.drawYAxis(state, projection, secondaryProjection);
      // TODO check isChanged
      _axes.drawXAxis(state, projection);
    }
    _minimap.update(state);
    _tooltip.update(state, points, projection, secondaryPoints, secondaryProjection);
  }
  function _onRangeChange(range) {
    _stateManager.update({
      range
    });
  }
  function _onFilterChange(filter) {
    _stateManager.update({
      filter
    });
  }
  function _onFocus(focusOn) {
    if (_data.isBars || _data.isPie || _data.isSteps) {
      // TODO animate
      _stateManager.update({
        focusOn
      });
    }
  }
  function _onZoomIn(labelIndex) {
    _zoomer.zoomIn(_state, labelIndex);
  }
  function _onZoomOut() {
    _zoomer.zoomOut(_state);
  }
  function _setupGlobalListeners() {
    document.documentElement.addEventListener('darkmode', () => {
      _stateManager.update();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth !== _windowWidth) {
        _windowWidth = window.innerWidth;
        _redrawDebounced();
      }
    });
    window.addEventListener('orientationchange', () => {
      _redrawDebounced();
    });
  }
  function _redraw() {
    Object.assign(_data, (0,_data_js__WEBPACK_IMPORTED_MODULE_8__.analyzeData)(originalData));
    _element.remove();
    _setupComponents();
  }
  function _getCaption(state) {
    let startIndex;
    let endIndex;
    if (_zoomer && _zoomer.isZoomed()) {
      // TODO Fix label
      startIndex = state.labelFromIndex === 0 ? 0 : state.labelFromIndex + 1;
      endIndex = state.labelToIndex === state.totalXWidth - 1 ? state.labelToIndex : state.labelToIndex - 1;
    } else {
      startIndex = state.labelFromIndex;
      endIndex = state.labelToIndex;
    }
    return (0,_formulas_js__WEBPACK_IMPORTED_MODULE_16__.isDataRange)(_data.xLabels[startIndex], _data.xLabels[endIndex]) ? `${(0,_format_js__WEBPACK_IMPORTED_MODULE_14__.getLabelDate)(_data.xLabels[startIndex])}` + ' — ' + `${(0,_format_js__WEBPACK_IMPORTED_MODULE_14__.getLabelDate)(_data.xLabels[endIndex])}` : (0,_format_js__WEBPACK_IMPORTED_MODULE_14__.getFullLabelDate)(_data.xLabels[startIndex]);
  }
}


/***/ }),

/***/ "./src/lib/lovely-chart/Minimap.js":
/*!*****************************************!*\
  !*** ./src/lib/lovely-chart/Minimap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMinimap: () => (/* binding */ createMinimap)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/lib/lovely-chart/canvas.js");
/* harmony import */ var _preparePoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preparePoints.js */ "./src/lib/lovely-chart/preparePoints.js");
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projection.js */ "./src/lib/lovely-chart/Projection.js");
/* harmony import */ var _drawDatasets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawDatasets.js */ "./src/lib/lovely-chart/drawDatasets.js");
/* harmony import */ var _captureEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./captureEvents.js */ "./src/lib/lovely-chart/captureEvents.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");









function createMinimap(container, data, colors, rangeCallback) {
  let _element;
  let _canvas;
  let _context;
  let _canvasSize;
  let _ruler;
  let _slider;
  let _capturedOffset;
  let _range = {};
  let _state;
  const _updateRulerOnRaf = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.throttleWithRaf)(_updateRuler);
  _setupLayout();
  _updateRange(data.minimapRange || _constants_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RANGE);
  function update(newState) {
    const {
      begin,
      end
    } = newState;
    if (!_capturedOffset) {
      _updateRange({
        begin,
        end
      }, true);
    }
    if (data.datasets.length >= _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_MAX_ANIMATED_DATASETS) {
      newState = newState.static;
    }
    if (!_isStateChanged(newState)) {
      return;
    }
    _state = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.proxyMerge)(newState, {
      focusOn: null
    });
    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)(_canvas, _context);
    _drawDatasets(_state);
  }
  function toggle(shouldShow) {
    _element.classList.toggle('lovely-chart--state-hidden', !shouldShow);
    requestAnimationFrame(() => {
      _element.classList.toggle('lovely-chart--state-transparent', !shouldShow);
    });
  }
  function _setupLayout() {
    _element = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_7__.createElement)();
    _element.className = 'lovely-chart--minimap';
    _element.style.height = `${_constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_HEIGHT}px`;
    _setupCanvas();
    _setupRuler();
    container.appendChild(_element);
    _canvasSize = {
      width: _canvas.offsetWidth,
      height: _canvas.offsetHeight
    };
  }
  function _getSize() {
    return {
      width: container.offsetWidth - _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_MARGIN * 2,
      height: _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_HEIGHT
    };
  }
  function _setupCanvas() {
    const {
      canvas,
      context
    } = (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.setupCanvas)(_element, _getSize());
    _canvas = canvas;
    _context = context;
  }
  function _setupRuler() {
    _ruler = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_7__.createElement)();
    _ruler.className = 'lovely-chart--minimap-ruler';
    _ruler.innerHTML = '<div class="lovely-chart--minimap-mask"></div>' + '<div class="lovely-chart--minimap-slider">' + '<div class="lovely-chart--minimap-slider-handle"><span class="lovely-chart--minimap-slider-handle-pin"></span></div>' + '<div class="lovely-chart--minimap-slider-inner"></div>' + '<div class="lovely-chart--minimap-slider-handle"><span class="lovely-chart--minimap-slider-handle-pin"></span></div>' + '</div>' + '<div class="lovely-chart--minimap-mask"></div>';
    _slider = _ruler.children[1];
    (0,_captureEvents_js__WEBPACK_IMPORTED_MODULE_4__.captureEvents)(_slider.children[1], {
      onCapture: _onDragCapture,
      onDrag: _onSliderDrag,
      onRelease: _onDragRelease,
      draggingCursor: 'grabbing'
    });
    (0,_captureEvents_js__WEBPACK_IMPORTED_MODULE_4__.captureEvents)(_slider.children[0], {
      onCapture: _onDragCapture,
      onDrag: _onLeftEarDrag,
      onRelease: _onDragRelease,
      draggingCursor: 'ew-resize'
    });
    (0,_captureEvents_js__WEBPACK_IMPORTED_MODULE_4__.captureEvents)(_slider.children[2], {
      onCapture: _onDragCapture,
      onDrag: _onRightEarDrag,
      onRelease: _onDragRelease,
      draggingCursor: 'ew-resize'
    });
    _element.appendChild(_ruler);
  }
  function _isStateChanged(newState) {
    if (!_state) {
      return true;
    }
    const {
      datasets
    } = data;
    if (datasets.some(({
      key
    }) => _state[`opacity#${key}`] !== newState[`opacity#${key}`])) {
      return true;
    }
    if (_state.yMaxMinimap !== newState.yMaxMinimap) {
      return true;
    }
    return false;
  }
  function _drawDatasets(state = {}) {
    const {
      datasets
    } = data;
    const range = {
      from: 0,
      to: state.totalXWidth
    };
    const boundsAndParams = {
      begin: 0,
      end: 1,
      totalXWidth: state.totalXWidth,
      yMin: state.yMinMinimap,
      yMax: state.yMaxMinimap,
      availableWidth: _canvasSize.width,
      availableHeight: _canvasSize.height,
      yPadding: 1
    };
    const visibilities = datasets.map(({
      key
    }) => _state[`opacity#${key}`]);
    const points = (0,_preparePoints_js__WEBPACK_IMPORTED_MODULE_1__.preparePoints)(data, datasets, range, visibilities, boundsAndParams, true);
    const projection = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_2__.createProjection)(boundsAndParams);
    let secondaryPoints = null;
    let secondaryProjection = null;
    if (data.hasSecondYAxis) {
      const secondaryDataset = datasets.find(d => d.hasOwnYAxis);
      const bounds = {
        yMin: state.yMinMinimapSecond,
        yMax: state.yMaxMinimapSecond
      };
      secondaryPoints = (0,_preparePoints_js__WEBPACK_IMPORTED_MODULE_1__.preparePoints)(data, [secondaryDataset], range, visibilities, bounds)[0];
      secondaryProjection = projection.copy(bounds);
    }
    const totalPoints = points.reduce((a, p) => a + p.length, 0);
    const simplification = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_8__.getSimplificationDelta)(totalPoints) * _constants_js__WEBPACK_IMPORTED_MODULE_5__.SIMPLIFIER_MINIMAP_FACTOR;
    (0,_drawDatasets_js__WEBPACK_IMPORTED_MODULE_3__.drawDatasets)(_context, state, data, range, points, projection, secondaryPoints, secondaryProjection, _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_LINE_WIDTH, visibilities, colors, true, simplification);
  }
  function _onDragCapture(e) {
    e.preventDefault();
    _capturedOffset = e.target.offsetLeft;
  }
  function _onDragRelease() {
    _capturedOffset = null;
  }
  function _onSliderDrag(moveEvent, captureEvent, {
    dragOffsetX
  }) {
    const minX1 = 0;
    const maxX1 = _canvasSize.width - _slider.offsetWidth;
    const newX1 = Math.max(minX1, Math.min(_capturedOffset + dragOffsetX - _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_EAR_WIDTH, maxX1));
    const newX2 = newX1 + _slider.offsetWidth;
    const begin = newX1 / _canvasSize.width;
    const end = newX2 / _canvasSize.width;
    _updateRange({
      begin,
      end
    });
  }
  function _onLeftEarDrag(moveEvent, captureEvent, {
    dragOffsetX
  }) {
    const minX1 = 0;
    const maxX1 = _slider.offsetLeft + _slider.offsetWidth - _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_EAR_WIDTH * 2;
    const newX1 = Math.min(maxX1, Math.max(minX1, _capturedOffset + dragOffsetX));
    const begin = newX1 / _canvasSize.width;
    _updateRange({
      begin
    });
  }
  function _onRightEarDrag(moveEvent, captureEvent, {
    dragOffsetX
  }) {
    const minX2 = _slider.offsetLeft + _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_EAR_WIDTH * 2;
    const maxX2 = _canvasSize.width;
    const newX2 = Math.max(minX2, Math.min(_capturedOffset + _constants_js__WEBPACK_IMPORTED_MODULE_5__.MINIMAP_EAR_WIDTH + dragOffsetX, maxX2));
    const end = newX2 / _canvasSize.width;
    _updateRange({
      end
    });
  }
  function _updateRange(range, isExternal) {
    let nextRange = Object.assign({}, _range, range);
    if (_state && _state.minimapDelta && !isExternal) {
      nextRange = _adjustDiscreteRange(nextRange);
    }
    if (nextRange.begin === _range.begin && nextRange.end === _range.end) {
      return;
    }
    _range = nextRange;
    _updateRulerOnRaf();
    if (!isExternal) {
      rangeCallback(_range);
    }
  }
  function _adjustDiscreteRange(nextRange) {
    // TODO sometimes beginChange and endChange are different for slider drag because of pixels division
    const begin = Math.round(nextRange.begin / _state.minimapDelta) * _state.minimapDelta;
    const end = Math.round(nextRange.end / _state.minimapDelta) * _state.minimapDelta;
    return {
      begin,
      end
    };
  }
  function _updateRuler() {
    const {
      begin,
      end
    } = _range;
    _ruler.children[0].style.width = `${begin * 100}%`;
    _ruler.children[1].style.width = `${(end - begin) * 100}%`;
    _ruler.children[2].style.width = `${(1 - end) * 100}%`;
  }
  return {
    update,
    toggle
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/Projection.js":
/*!********************************************!*\
  !*** ./src/lib/lovely-chart/Projection.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjection: () => (/* binding */ createProjection),
/* harmony export */   toPixels: () => (/* binding */ toPixels)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");

function createProjection(params) {
  const {
    begin,
    end,
    totalXWidth,
    yMin,
    yMax,
    availableWidth,
    availableHeight,
    xPadding = 0,
    yPadding = 0
  } = params;
  let effectiveWidth = availableWidth;

  // TODO bug get rid of padding jumps
  if (begin === 0) {
    effectiveWidth -= xPadding;
  }
  if (end === 1) {
    effectiveWidth -= xPadding;
  }
  const xFactor = effectiveWidth / ((end !== begin ? end - begin : 1) * totalXWidth);
  let xOffsetPx = begin * totalXWidth * xFactor;
  if (begin === 0) {
    xOffsetPx -= xPadding;
  }
  const effectiveHeight = availableHeight - yPadding;
  const yFactor = effectiveHeight / (yMax - yMin);
  const yOffsetPx = yMin * yFactor;
  function getState() {
    return {
      xFactor,
      xOffsetPx,
      availableHeight,
      yFactor,
      yOffsetPx
    };
  }
  function findClosestLabelIndex(xPx) {
    return Math.round((xPx + xOffsetPx) / xFactor);
  }
  function copy(overrides, cons) {
    return createProjection((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.proxyMerge)(params, overrides), cons);
  }
  function getCenter() {
    return [availableWidth / 2, availableHeight - effectiveHeight / 2];
  }
  function getSize() {
    return [availableWidth, effectiveHeight];
  }
  function getParams() {
    return params;
  }
  return {
    findClosestLabelIndex,
    copy,
    getCenter,
    getSize,
    getParams,
    getState
  };
}
function toPixels(projection, labelIndex, value) {
  const {
    xFactor,
    xOffsetPx,
    availableHeight,
    yFactor,
    yOffsetPx
  } = projection.getState();
  return [labelIndex * xFactor - xOffsetPx, availableHeight - (value * yFactor - yOffsetPx)];
}

/***/ }),

/***/ "./src/lib/lovely-chart/StateManager.js":
/*!**********************************************!*\
  !*** ./src/lib/lovely-chart/StateManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStateManager: () => (/* binding */ createStateManager)
/* harmony export */ });
/* harmony import */ var _TransitionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransitionManager.js */ "./src/lib/lovely-chart/TransitionManager.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");




function createStateManager(data, viewportSize, callback) {
  const _range = {
    begin: 0,
    end: 1
  };
  const _filter = _buildDefaultFilter();
  const _transitionConfig = _buildTransitionConfig();
  const _transitions = (0,_TransitionManager_js__WEBPACK_IMPORTED_MODULE_0__.createTransitionManager)(_runCallback);
  const _runCallbackOnRaf = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.throttleWithRaf)(_runCallback);
  let _state = {};
  function update({
    range = {},
    filter = {},
    focusOn,
    minimapDelta
  } = {}, noTransition) {
    Object.assign(_range, range);
    Object.assign(_filter, filter);
    const prevState = _state;
    _state = calculateState(data, viewportSize, _range, _filter, focusOn, minimapDelta, prevState);
    if (!noTransition) {
      _transitionConfig.forEach(({
        prop,
        duration,
        options
      }) => {
        const transition = _transitions.get(prop);
        const currentTarget = transition ? transition.to : prevState[prop];
        if (currentTarget !== undefined && currentTarget !== _state[prop]) {
          const current = transition ? options.includes('fast') ? prevState[prop] : transition.current : prevState[prop];
          if (transition) {
            _transitions.remove(prop);
          }
          _transitions.add(prop, current, _state[prop], duration, options);
        }
      });
    }
    if (!_transitions.isRunning() || !_transitions.isFast()) {
      _runCallbackOnRaf();
    }
  }
  function hasAnimations() {
    return _transitions.isFast();
  }
  function _buildTransitionConfig() {
    const transitionConfig = [];
    const datasetVisibilities = data.datasets.map(({
      key
    }) => `opacity#${key} 300`);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeArrays)([_constants_js__WEBPACK_IMPORTED_MODULE_2__.ANIMATE_PROPS, datasetVisibilities]).forEach(transition => {
      const [prop, duration, ...options] = transition.split(' ');
      transitionConfig.push({
        prop,
        duration,
        options
      });
    });
    return transitionConfig;
  }
  function _buildDefaultFilter() {
    const filter = {};
    data.datasets.forEach(({
      key
    }) => {
      filter[key] = true;
    });
    return filter;
  }
  function _runCallback() {
    const state = _transitions.isFast() ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.proxyMerge)(_state, _transitions.getState()) : _state;
    state.static = _state;
    callback(state);
  }
  return {
    update,
    hasAnimations
  };
}
function calculateState(data, viewportSize, range, filter, focusOn, minimapDelta, prevState) {
  const {
    begin,
    end
  } = range;
  const totalXWidth = data.xLabels.length - 1;
  const labelFromIndex = Math.max(0, Math.ceil(totalXWidth * begin));
  const labelToIndex = Math.min(Math.floor(totalXWidth * end), totalXWidth);
  const xAxisScale = calculateXAxisScale(viewportSize.width, labelFromIndex, labelToIndex);
  const yRanges = data.isStacked ? calculateYRangesStacked(data, filter, labelFromIndex, labelToIndex, prevState) : calculateYRanges(data, filter, labelFromIndex, labelToIndex, prevState);
  const yAxisScale = calculateYAxisScale(viewportSize.height, yRanges.yMinViewport, yRanges.yMaxViewport);
  const yAxisScaleSecond = data.hasSecondYAxis && calculateYAxisScale(viewportSize.height, yRanges.yMinViewportSecond, yRanges.yMaxViewportSecond);
  const yStep = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.yScaleLevelToStep)(yAxisScale);
  yRanges.yMinViewport -= yRanges.yMinViewport % yStep;
  if (yAxisScaleSecond) {
    const yStepSecond = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.yScaleLevelToStep)(yAxisScaleSecond);
    yRanges.yMinViewportSecond -= yRanges.yMinViewportSecond % yStepSecond;
  }
  const datasetsOpacity = {};
  data.datasets.forEach(({
    key
  }) => {
    datasetsOpacity[`opacity#${key}`] = filter[key] ? 1 : 0;
  });

  // TODO perf
  return Object.assign({
    totalXWidth,
    xAxisScale,
    yAxisScale,
    yAxisScaleSecond,
    labelFromIndex: Math.max(0, labelFromIndex - 1),
    labelToIndex: Math.min(labelToIndex + 1, totalXWidth),
    filter: Object.assign({}, filter),
    focusOn: focusOn !== undefined ? focusOn : prevState.focusOn,
    minimapDelta: minimapDelta !== undefined ? minimapDelta : prevState.minimapDelta
  }, yRanges, datasetsOpacity, range);
}
function calculateYRanges(data, filter, labelFromIndex, labelToIndex, prevState) {
  const secondaryYAxisDataset = data.hasSecondYAxis && data.datasets.slice(-1)[0];
  const filteredDatasets = data.datasets.filter(d => filter[d.key] && d !== secondaryYAxisDataset);
  const yRanges = calculateYRangesForGroup(data, labelFromIndex, labelToIndex, prevState, filteredDatasets);
  if (secondaryYAxisDataset) {
    const {
      yMinViewport: yMinViewportSecond,
      yMaxViewport: yMaxViewportSecond,
      yMinMinimap: yMinMinimapSecond,
      yMaxMinimap: yMaxMinimapSecond
    } = calculateYRangesForGroup(data, labelFromIndex, labelToIndex, prevState, [secondaryYAxisDataset]);
    Object.assign(yRanges, {
      yMinViewportSecond,
      yMaxViewportSecond,
      yMinMinimapSecond,
      yMaxMinimapSecond
    });
  }
  return yRanges;
}
function calculateYRangesForGroup(data, labelFromIndex, labelToIndex, prevState, datasets) {
  const {
    min: yMinMinimapReal = prevState.yMinMinimap,
    max: yMaxMinimap = prevState.yMaxMinimap
  } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMaxMin)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeArrays)(datasets.map(({
    yMax,
    yMin
  }) => [yMax, yMin])));
  const yMinMinimap = yMinMinimapReal / yMaxMinimap > _constants_js__WEBPACK_IMPORTED_MODULE_2__.Y_AXIS_ZERO_BASED_THRESHOLD ? yMinMinimapReal : 0;
  let yMinViewport;
  let yMaxViewport;
  if (labelFromIndex === 0 && labelToIndex === data.xLabels.length - 1) {
    yMinViewport = yMinMinimap;
    yMaxViewport = yMaxMinimap;
  } else {
    const filteredValues = datasets.map(({
      values
    }) => values);
    const viewportValues = filteredValues.map(values => values.slice(labelFromIndex, labelToIndex + 1));
    const viewportMaxMin = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMaxMin)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeArrays)(viewportValues));
    const yMinViewportReal = viewportMaxMin.min !== undefined ? viewportMaxMin.min : prevState.yMinViewport;
    yMaxViewport = viewportMaxMin.max !== undefined ? viewportMaxMin.max : prevState.yMaxViewport;
    yMinViewport = yMinViewportReal / yMaxViewport > _constants_js__WEBPACK_IMPORTED_MODULE_2__.Y_AXIS_ZERO_BASED_THRESHOLD ? yMinViewportReal : 0;
  }
  return {
    yMinViewport,
    yMaxViewport,
    yMinMinimap,
    yMaxMinimap
  };
}
function calculateYRangesStacked(data, filter, labelFromIndex, labelToIndex, prevState) {
  const filteredDatasets = data.datasets.filter(d => filter[d.key]);
  const filteredValues = filteredDatasets.map(({
    values
  }) => values);
  const sums = filteredValues.length ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.sumArrays)(filteredValues) : [];
  const {
    max: yMaxMinimap = prevState.yMaxMinimap
  } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMaxMin)(sums);
  const {
    max: yMaxViewport = prevState.yMaxViewport
  } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMaxMin)(sums.slice(labelFromIndex, labelToIndex + 1));
  return {
    yMinViewport: 0,
    yMaxViewport,
    yMinMinimap: 0,
    yMaxMinimap
  };
}
function calculateXAxisScale(plotWidth, labelFromIndex, labelToIndex) {
  const viewportLabelsCount = labelToIndex - labelFromIndex;
  const maxColumns = Math.floor(plotWidth / _constants_js__WEBPACK_IMPORTED_MODULE_2__.AXES_MAX_COLUMN_WIDTH);
  return (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.xStepToScaleLevel)(viewportLabelsCount / maxColumns);
}
function calculateYAxisScale(plotHeight, yMin, yMax) {
  const availableHeight = plotHeight - _constants_js__WEBPACK_IMPORTED_MODULE_2__.X_AXIS_HEIGHT;
  const viewportLabelsCount = yMax - yMin;
  const maxRows = Math.floor(availableHeight / _constants_js__WEBPACK_IMPORTED_MODULE_2__.AXES_MAX_ROW_HEIGHT);
  return (0,_formulas_js__WEBPACK_IMPORTED_MODULE_3__.yStepToScaleLevel)(viewportLabelsCount / maxRows);
}

/***/ }),

/***/ "./src/lib/lovely-chart/Tools.js":
/*!***************************************!*\
  !*** ./src/lib/lovely-chart/Tools.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTools: () => (/* binding */ createTools)
/* harmony export */ });
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _captureEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captureEvents.js */ "./src/lib/lovely-chart/captureEvents.js");


function createTools(container, data, filterCallback) {
  let _element;
  _setupLayout();
  _updateFilter();
  function redraw() {
    if (_element) {
      const oldElement = _element;
      oldElement.classList.add('lovely-chart--state-hidden');
      setTimeout(() => {
        oldElement.parentNode.removeChild(oldElement);
      }, 500);
    }
    _setupLayout();
    _element.classList.add('lovely-chart--state-transparent');
    requestAnimationFrame(() => {
      _element.classList.remove('lovely-chart--state-transparent');
    });
  }
  function _setupLayout() {
    _element = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)();
    _element.className = 'lovely-chart--tools';
    if (data.datasets.length < 2) {
      _element.className += ' lovely-chart--state-hidden';
    }
    data.datasets.forEach(({
      key,
      name
    }) => {
      const control = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a');
      control.href = '#';
      control.dataset.key = key;
      control.className = `lovely-chart--button lovely-chart--color-${data.colors[key].slice(1)} lovely-chart--state-checked`;
      control.innerHTML = `<span class="lovely-chart--button-check"></span><span class="lovely-chart--button-label">${name}</span>`;
      control.addEventListener('click', e => {
        e.preventDefault();
        if (!control.dataset.clickPrevented) {
          _updateFilter(control);
        }
        delete control.dataset.clickPrevented;
      });
      (0,_captureEvents_js__WEBPACK_IMPORTED_MODULE_1__.captureEvents)(control, {
        onLongPress: () => {
          control.dataset.clickPrevented = 'true';
          _updateFilter(control, true);
        }
      });
      _element.appendChild(control);
    });
    container.appendChild(_element);
  }
  function _updateFilter(button, isLongPress = false) {
    const buttons = Array.from(_element.getElementsByTagName('a'));
    const isSingleChecked = _element.querySelectorAll('.lovely-chart--state-checked').length === 1;
    if (button) {
      if (button.classList.contains('lovely-chart--state-checked') && isSingleChecked) {
        if (isLongPress) {
          buttons.forEach(b => b.classList.add('lovely-chart--state-checked'));
          button.classList.remove('lovely-chart--state-checked');
        } else {
          button.classList.remove('lovely-chart--state-shake');
          requestAnimationFrame(() => {
            button.classList.add('lovely-chart--state-shake');
          });
        }
      } else if (isLongPress) {
        buttons.forEach(b => b.classList.remove('lovely-chart--state-checked'));
        button.classList.add('lovely-chart--state-checked');
      } else {
        button.classList.toggle('lovely-chart--state-checked');
      }
    }
    const filter = {};
    buttons.forEach(input => {
      filter[input.dataset.key] = input.classList.contains('lovely-chart--state-checked');
    });
    filterCallback(filter);
  }
  return {
    redraw
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/Tooltip.js":
/*!*****************************************!*\
  !*** ./src/lib/lovely-chart/Tooltip.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTooltip: () => (/* binding */ createTooltip)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/lib/lovely-chart/canvas.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format.js */ "./src/lib/lovely-chart/format.js");
/* harmony import */ var _skin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skin.js */ "./src/lib/lovely-chart/skin.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Projection.js */ "./src/lib/lovely-chart/Projection.js");








function createTooltip(container, data, plotSize, colors, onZoom, onFocus) {
  let _state;
  let _points;
  let _projection;
  let _secondaryPoints;
  let _secondaryProjection;
  let _element;
  let _canvas;
  let _context;
  let _balloon;
  let _offsetX;
  let _offsetY;
  let _clickedOnLabel = null;
  let _isZoomed = false;
  let _isZooming = false;
  const _selectLabelOnRaf = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.throttleWithRaf)(_selectLabel);
  const _throttledUpdateContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.throttle)(_updateContent, 100, true, true);
  _setupLayout();
  function update(state, points, projection, secondaryPoints, secondaryProjection) {
    _state = state;
    _points = points;
    _projection = projection;
    _secondaryPoints = secondaryPoints;
    _secondaryProjection = secondaryProjection;
    _selectLabel(true);
  }
  function toggleLoading(isLoading) {
    _balloon.classList.toggle('lovely-chart--state-loading', isLoading);
    if (!isLoading) {
      _clear();
    }
  }
  function toggleIsZoomed(isZoomed) {
    if (isZoomed !== _isZoomed) {
      _isZooming = true;
    }
    _isZoomed = isZoomed;
    _balloon.classList.toggle('lovely-chart--state-inactive', isZoomed);
  }
  function _setupLayout() {
    _element = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)();
    _element.className = `lovely-chart--tooltip`;
    _setupCanvas();
    _setupBalloon();
    if ('ontouchstart' in window) {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(_element, 'touchmove', _onMouseMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(_element, 'touchstart', _onMouseMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(document, 'touchstart', _onDocumentMove);
    } else {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(_element, 'mousemove', _onMouseMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(_element, 'click', _onClick);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(document, 'mousemove', _onDocumentMove);
    }
    container.appendChild(_element);
  }
  function _setupCanvas() {
    const {
      canvas,
      context
    } = (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.setupCanvas)(_element, plotSize);
    _canvas = canvas;
    _context = context;
  }
  function _setupBalloon() {
    _balloon = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)();
    _balloon.className = `lovely-chart--tooltip-balloon${!data.isZoomable ? ' lovely-chart--state-inactive' : ''}`;
    _balloon.innerHTML = '<div class="lovely-chart--tooltip-title"></div><div class="lovely-chart--tooltip-legend"></div><div class="lovely-chart--spinner"></div>';
    if ('ontouchstart' in window && data.isZoomable) {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(_balloon, 'click', _onBalloonClick);
    }
    _element.appendChild(_balloon);
  }
  function _onMouseMove(e) {
    if (e.target === _balloon || _balloon.contains(e.target) || _clickedOnLabel) {
      return;
    }
    _isZooming = false;
    const pageOffset = _getPageOffset(_element);
    _offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - pageOffset.left;
    _offsetY = (e.touches ? e.touches[0].clientY : e.clientY) - pageOffset.top;
    _selectLabelOnRaf();
  }
  function _onDocumentMove(e) {
    if (_offsetX !== null && e.target !== _element && !_element.contains(e.target)) {
      _clear();
    }
  }
  function _onClick(e) {
    if (_isZooming) {
      return;
    }
    if (data.isZoomable) {
      const oldLabelIndex = _clickedOnLabel;
      _clickedOnLabel = null;
      _onMouseMove(e, true);
      const newLabelIndex = _getLabelIndex();
      if (newLabelIndex !== oldLabelIndex) {
        _clickedOnLabel = newLabelIndex;
      }
      onZoom(newLabelIndex);
    }
  }
  function _onBalloonClick() {
    if (_balloon.classList.contains('lovely-chart--state-inactive')) {
      return;
    }
    const labelIndex = _projection.findClosestLabelIndex(_offsetX);
    onZoom(labelIndex);
  }
  function _clear(isExternal) {
    _offsetX = null;
    _clickedOnLabel = null;
    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)(_canvas, _context);
    _hideBalloon();
    if (!isExternal && onFocus) {
      onFocus(null);
    }
  }
  function _getLabelIndex() {
    const labelIndex = _projection.findClosestLabelIndex(_offsetX);
    return labelIndex < _state.labelFromIndex || labelIndex > _state.labelToIndex ? null : labelIndex;
  }
  function _selectLabel(isExternal) {
    if (!_offsetX || !_state || _isZooming) {
      return;
    }
    const labelIndex = _getLabelIndex();
    if (labelIndex === null) {
      _clear(isExternal);
      return;
    }
    const pointerVector = getPointerVector();
    const shouldShowBalloon = data.isPie ? pointerVector.distance <= (0,_formulas_js__WEBPACK_IMPORTED_MODULE_2__.getPieRadius)(_projection) : true;
    if (!isExternal && onFocus) {
      if (data.isPie) {
        onFocus(pointerVector);
      } else {
        onFocus(labelIndex);
      }
    }
    function getValue(values, labelIndex) {
      if (data.isPie) {
        return values.slice(_state.labelFromIndex, _state.labelToIndex + 1).reduce((a, x) => a + x, 0);
      }
      return values[labelIndex];
    }
    const [xPx] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_7__.toPixels)(_projection, labelIndex, 0);
    const statistics = data.datasets.map(({
      key,
      name,
      values,
      hasOwnYAxis
    }, i) => ({
      key,
      name,
      value: getValue(values, labelIndex),
      hasOwnYAxis,
      originalIndex: i
    })).filter(({
      key
    }) => _state.filter[key]);
    if (statistics.length && shouldShowBalloon) {
      _updateBalloon(statistics, labelIndex);
    } else {
      _hideBalloon();
    }
    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)(_canvas, _context);
    if (data.isLines || data.isAreas) {
      if (data.isLines) {
        _drawCircles(statistics, labelIndex);
      }
      _drawTail(xPx, plotSize.height - _constants_js__WEBPACK_IMPORTED_MODULE_1__.X_AXIS_HEIGHT, (0,_skin_js__WEBPACK_IMPORTED_MODULE_4__.getCssColor)(colors, 'grid-lines'));
    }
  }
  function _drawCircles(statistics, labelIndex) {
    statistics.forEach(({
      value,
      key,
      hasOwnYAxis,
      originalIndex
    }) => {
      const pointIndex = labelIndex - _state.labelFromIndex;
      const point = hasOwnYAxis ? _secondaryPoints[pointIndex] : _points[originalIndex][pointIndex];
      if (!point) {
        return;
      }
      const [x, y] = hasOwnYAxis ? (0,_Projection_js__WEBPACK_IMPORTED_MODULE_7__.toPixels)(_secondaryProjection, labelIndex, point.stackValue) : (0,_Projection_js__WEBPACK_IMPORTED_MODULE_7__.toPixels)(_projection, labelIndex, point.stackValue);

      // TODO animate
      _drawCircle([x, y], (0,_skin_js__WEBPACK_IMPORTED_MODULE_4__.getCssColor)(colors, `dataset#${key}`), (0,_skin_js__WEBPACK_IMPORTED_MODULE_4__.getCssColor)(colors, 'background'));
    });
  }
  function _drawCircle([xPx, yPx], strokeColor, fillColor) {
    _context.strokeStyle = strokeColor;
    _context.fillStyle = fillColor;
    _context.lineWidth = 2;
    _context.beginPath();
    _context.arc(xPx, yPx, 4, 0, 2 * Math.PI);
    _context.fill();
    _context.stroke();
  }
  function _drawTail(xPx, height, color) {
    _context.strokeStyle = color;
    _context.lineWidth = 1;
    _context.beginPath();
    _context.moveTo(xPx, 0);
    _context.lineTo(xPx, height);
    _context.stroke();
  }
  function _getBalloonLeftOffset(labelIndex) {
    const meanLabel = (_state.labelFromIndex + _state.labelToIndex) / 2;
    const {
      angle
    } = getPointerVector();
    const shouldPlaceRight = data.isPie ? angle > Math.PI / 2 : labelIndex < meanLabel;
    const leftOffset = shouldPlaceRight ? _offsetX + _constants_js__WEBPACK_IMPORTED_MODULE_1__.BALLOON_OFFSET : _offsetX - (_balloon.offsetWidth + _constants_js__WEBPACK_IMPORTED_MODULE_1__.BALLOON_OFFSET);
    return Math.min(Math.max(0, leftOffset), container.offsetWidth - _balloon.offsetWidth);
  }
  function _getBalloonTopOffset() {
    return data.isPie ? `${_offsetY}px` : 0;
  }
  function _updateBalloon(statistics, labelIndex) {
    _balloon.style.transform = `translate3D(${_getBalloonLeftOffset(labelIndex)}px, ${_getBalloonTopOffset()}, 0)`;
    _balloon.classList.add('lovely-chart--state-shown');
    if (data.isPie) {
      _updateContent(null, statistics);
    } else {
      _throttledUpdateContent(_getTitle(data, labelIndex), statistics);
    }
  }
  function _getTitle(data, labelIndex) {
    switch (data.tooltipFormatter) {
      case 'statsFormatDayHourFull':
        return (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.statsFormatDayHourFull)(data.xLabels[labelIndex].value);
      case 'statsTooltipFormat(\'day\')':
        return (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.getLabelDate)(data.xLabels[labelIndex]);
      case 'statsTooltipFormat(\'hour\')':
      case 'statsTooltipFormat(\'5min\')':
        return (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.getLabelTime)(data.xLabels[labelIndex]);
      default:
        return data.xLabels[labelIndex].text;
    }
  }
  function _isPieSectorSelected(statistics, value, totalValue, index, pointerVector) {
    const offset = index > 0 ? statistics.slice(0, index).reduce((a, x) => a + x.value, 0) : 0;
    const beginAngle = offset / totalValue * Math.PI * 2 - Math.PI / 2;
    const endAngle = (offset + value) / totalValue * Math.PI * 2 - Math.PI / 2;
    return pointerVector && beginAngle <= pointerVector.angle && pointerVector.angle < endAngle && pointerVector.distance <= (0,_formulas_js__WEBPACK_IMPORTED_MODULE_2__.getPieRadius)(_projection);
  }
  function _updateTitle(title) {
    const titleContainer = _balloon.children[0];
    if (data.isPie) {
      if (titleContainer) {
        titleContainer.style.display = 'none';
      }
    } else {
      if (titleContainer.style.display === 'none') {
        titleContainer.style.display = '';
      }
      const currentTitle = titleContainer.querySelector(':not(.lovely-chart--state-hidden)');
      if (!titleContainer.innerHTML || !currentTitle) {
        titleContainer.innerHTML = `<span>${title}</span>`;
      } else {
        currentTitle.innerHTML = title;
      }
    }
  }
  function _insertNewDataSet(dataSetContainer, {
    name,
    key,
    value
  }, totalValue) {
    const className = `lovely-chart--tooltip-dataset-value lovely-chart--position-right lovely-chart--color-${data.colors[key].slice(1)}`;
    const newDataSet = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)();
    newDataSet.className = 'lovely-chart--tooltip-dataset';
    newDataSet.setAttribute('data-present', 'true');
    newDataSet.setAttribute('data-name', name);
    newDataSet.innerHTML = `<span class="lovely-chart--dataset-title">${name}</span><span class="${className}">${(0,_format_js__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(value)}</span>`;
    _renderPercentageValue(newDataSet, value, totalValue);
    const totalText = dataSetContainer.querySelector(`[data-total="true"]`);
    if (totalText) {
      dataSetContainer.insertBefore(newDataSet, totalText);
    } else {
      dataSetContainer.appendChild(newDataSet);
    }
  }
  function _updateDataSet(currentDataSet, {
    key,
    value
  } = {}, totalValue) {
    currentDataSet.setAttribute('data-present', 'true');
    const valueElement = currentDataSet.querySelector(`.lovely-chart--tooltip-dataset-value.lovely-chart--color-${data.colors[key].slice(1)}:not(.lovely-chart--state-hidden)`);
    if (data.isCurrency) {
      valueElement.innerHTML = (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.formatCryptoValue)(value);
    } else {
      valueElement.innerHTML = (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(value);
    }
    _renderPercentageValue(currentDataSet, value, totalValue);
  }
  function _renderPercentageValue(dataSet, value, totalValue) {
    if (!data.isPercentage) {
      return;
    }
    if (data.isPie) {
      Array.from(dataSet.querySelectorAll(`.lovely-chart--percentage-title`)).forEach(e => e.remove());
      return;
    }
    const percentageValue = totalValue ? Math.round(value / totalValue * 100) : 0;
    const percentageElement = dataSet.querySelector(`.lovely-chart--percentage-title:not(.lovely-chart--state-hidden)`);
    if (!percentageElement) {
      const newPercentageTitle = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)('span');
      newPercentageTitle.className = 'lovely-chart--percentage-title lovely-chart--position-left';
      newPercentageTitle.innerHTML = `${percentageValue}%`;
      dataSet.prepend(newPercentageTitle);
    } else {
      percentageElement.innerHTML = `${percentageValue}%`;
    }
  }
  function _updateDataSets(statistics) {
    const dataSetContainer = _balloon.children[1];
    if (data.isPie) {
      dataSetContainer.classList.add('lovely-chart--tooltip-legend-pie');
    }
    Array.from(dataSetContainer.children).forEach(dataSet => {
      if (!data.isPie && dataSetContainer.classList.contains('lovely-chart--tooltip-legend-pie')) {
        dataSet.remove();
      } else {
        dataSet.setAttribute('data-present', 'false');
      }
    });
    const totalValue = statistics.reduce((a, x) => a + x.value, 0);
    const pointerVector = getPointerVector();
    const finalStatistics = data.isPie ? statistics.filter(({
      value
    }, index) => _isPieSectorSelected(statistics, value, totalValue, index, pointerVector)) : statistics;
    finalStatistics.forEach(statItem => {
      const currentDataSet = dataSetContainer.querySelector(`[data-name="${statItem.name}"]`);
      if (!currentDataSet) {
        _insertNewDataSet(dataSetContainer, statItem, totalValue);
      } else {
        _updateDataSet(currentDataSet, statItem, totalValue);
      }
    });
    if ((data.isBars || data.isSteps) && data.isStacked) {
      _renderTotal(dataSetContainer, (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(totalValue));
    }
    if (data.isCurrency) {
      _renderCurrencyRate(dataSetContainer, (0,_format_js__WEBPACK_IMPORTED_MODULE_3__.formatCryptoValue)(totalValue));
    }
    Array.from(dataSetContainer.querySelectorAll('[data-present="false"]')).forEach(dataSet => {
      dataSet.remove();
    });
  }
  function _updateContent(title, statistics) {
    _updateTitle(title);
    _updateDataSets(statistics);
  }
  function _renderTotal(dataSetContainer, totalValue) {
    const totalText = dataSetContainer.querySelector(`[data-total="true"]`);
    const className = `lovely-chart--tooltip-dataset-value lovely-chart--position-right`;
    if (!totalText) {
      const newTotalText = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)();
      newTotalText.className = 'lovely-chart--tooltip-dataset';
      newTotalText.setAttribute('data-present', 'true');
      newTotalText.setAttribute('data-total', 'true');
      newTotalText.innerHTML = `<span>All</span><span class="${className}">${totalValue}</span>`;
      dataSetContainer.appendChild(newTotalText);
    } else {
      totalText.setAttribute('data-present', 'true');
      const valueElement = totalText.querySelector(`.lovely-chart--tooltip-dataset-value:not(.lovely-chart--state-hidden)`);
      valueElement.innerHTML = totalValue;
    }
  }
  function _renderCurrencyRate(dataSetContainer, totalValue) {
    const totalText = dataSetContainer.querySelector(`[data-total="true"]`);
    const className = `lovely-chart--tooltip-dataset-value lovely-chart--position-right`;
    const totalUsd = (parseFloat(totalValue) * data.currencyRate).toFixed(2);
    if (!totalText) {
      const newTotalText = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_6__.createElement)();
      newTotalText.className = 'lovely-chart--tooltip-dataset';
      newTotalText.setAttribute('data-present', 'true');
      newTotalText.setAttribute('data-total', 'true');
      newTotalText.innerHTML = `<span>USD ≈</span><span class="${className}">$${totalUsd}</span>`;
      dataSetContainer.appendChild(newTotalText);
    } else {
      totalText.setAttribute('data-present', 'true');
      const valueElement = totalText.querySelector(`.lovely-chart--tooltip-dataset-value:not(.lovely-chart--state-hidden)`);
      valueElement.innerHTML = `$${totalUsd}`;
    }
  }
  function _hideBalloon() {
    _balloon.classList.remove('lovely-chart--state-shown');
  }
  function getPointerVector() {
    const {
      width,
      height
    } = _element.getBoundingClientRect();
    const center = [width / 2, height / 2];
    const angle = Math.atan2(_offsetY - center[1], _offsetX - center[0]);
    const distance = Math.sqrt((_offsetX - center[0]) ** 2 + (_offsetY - center[1]) ** 2);
    return {
      angle: angle >= -Math.PI / 2 ? angle : 2 * Math.PI + angle,
      distance
    };
  }
  function _getPageOffset(el) {
    return el.getBoundingClientRect();
  }
  return {
    update,
    toggleLoading,
    toggleIsZoomed
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/TransitionManager.js":
/*!***************************************************!*\
  !*** ./src/lib/lovely-chart/TransitionManager.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransitionManager: () => (/* binding */ createTransitionManager)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");

function transition(t) {
  // faster
  // return -t * (t - 2);
  // easeOut
  return 1 - Math.pow(1 - t, 1.675);
}
function createTransitionManager(onTick) {
  const _transitions = {};
  let _nextFrame = null;
  let _testStartedAt = null;
  let _fps = null;
  let _testingFps = null;
  let _slowDetectedAt = null;
  let _startedAsSlow = null;
  function add(prop, from, to, duration, options) {
    _transitions[prop] = {
      from,
      to,
      duration,
      options,
      current: from,
      startedAt: Date.now(),
      progress: 0
    };
    if (!_nextFrame) {
      _resetSpeedTest();
      _nextFrame = requestAnimationFrame(_tick);
    }
  }
  function remove(prop) {
    delete _transitions[prop];
    if (!isRunning()) {
      cancelAnimationFrame(_nextFrame);
      _nextFrame = null;
    }
  }
  function get(prop) {
    return _transitions[prop];
  }
  function getState() {
    const state = {};
    Object.keys(_transitions).forEach(prop => {
      const {
        current,
        from,
        to,
        progress
      } = _transitions[prop];
      state[prop] = current;
      // TODO perf lazy
      state[`${prop}From`] = from;
      state[`${prop}To`] = to;
      state[`${prop}Progress`] = progress;
    });
    return state;
  }
  function isRunning() {
    return Boolean(Object.keys(_transitions).length);
  }
  function isFast(forceCheck) {
    if (!forceCheck && (_startedAsSlow || _slowDetectedAt)) {
      return false;
    }
    return _fps === null || _fps >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.SPEED_TEST_FAST_FPS;
  }
  function _tick() {
    const isSlow = !isFast();
    _speedTest();
    const state = {};
    Object.keys(_transitions).forEach(prop => {
      const {
        startedAt,
        from,
        to,
        duration = _constants_js__WEBPACK_IMPORTED_MODULE_0__.TRANSITION_DEFAULT_DURATION,
        options
      } = _transitions[prop];
      const progress = Math.min(1, (Date.now() - startedAt) / duration);
      let current = from + (to - from) * transition(progress);
      if (options.includes('ceil')) {
        current = Math.ceil(current);
      } else if (options.includes('floor')) {
        current = Math.floor(current);
      }
      _transitions[prop].current = current;
      _transitions[prop].progress = progress;
      state[prop] = current;
      if (progress === 1) {
        remove(prop);
      }
    });
    if (!isSlow) {
      onTick(state);
    }
    if (isRunning()) {
      _nextFrame = requestAnimationFrame(_tick);
    }
  }
  function _resetSpeedTest() {
    _testStartedAt = null;
    _testingFps = null;
    if (_slowDetectedAt && Date.now() - _slowDetectedAt > 5000) {
      _slowDetectedAt = null;
    }
    _startedAsSlow = Boolean(_slowDetectedAt) || !isFast(true);
  }
  function _speedTest() {
    if (!_testStartedAt || Date.now() - _testStartedAt >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.SPEED_TEST_INTERVAL) {
      if (_testingFps) {
        _fps = _testingFps;
        if (!_slowDetectedAt && !isFast(true)) {
          _slowDetectedAt = Date.now();
        }
      }
      _testStartedAt = Date.now();
      _testingFps = 0;
    } else {
      _testingFps++;
    }
  }
  return {
    add,
    remove,
    get,
    getState,
    isRunning,
    isFast
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/Zoomer.js":
/*!****************************************!*\
  !*** ./src/lib/lovely-chart/Zoomer.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createZoomer: () => (/* binding */ createZoomer)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/lib/lovely-chart/data.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format.js */ "./src/lib/lovely-chart/format.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _skin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skin.js */ "./src/lib/lovely-chart/skin.js");




function createZoomer(data, overviewData, colors, stateManager, container, header, minimap, tooltip, tools) {
  let _isZoomed = false;
  let _stateBeforeZoomIn;
  let _stateBeforeZoomOut;
  function zoomIn(state, labelIndex) {
    if (_isZoomed) {
      return;
    }
    const label = data.xLabels[labelIndex];
    _stateBeforeZoomIn = state;
    header.toggleIsZooming(true);
    tooltip.toggleLoading(true);
    tooltip.toggleIsZoomed(true);
    if (data.shouldZoomToPie) {
      container.classList.add('lovely-chart--state-zoomed-in');
      container.classList.add('lovely-chart--state-animating');
    }
    const {
      value
    } = label;
    const dataPromise = data.shouldZoomToPie ? Promise.resolve(_generatePieData(labelIndex)) : data.onZoom(value);
    dataPromise.then(newData => _replaceData(newData, labelIndex, label));
  }
  function zoomOut(state) {
    if (!_isZoomed) {
      return;
    }
    _stateBeforeZoomOut = state;
    header.toggleIsZooming(true);
    tooltip.toggleLoading(true);
    tooltip.toggleIsZoomed(false);
    if (data.shouldZoomToPie) {
      container.classList.remove('lovely-chart--state-zoomed-in');
      container.classList.add('lovely-chart--state-animating');
    }
    const labelIndex = Math.round((state.labelFromIndex + state.labelToIndex) / 2);
    _replaceData(overviewData, labelIndex);
  }
  function isZoomed() {
    return _isZoomed;
  }
  function _replaceData(newRawData, labelIndex, zoomInLabel) {
    if (!newRawData) {
      tooltip.toggleLoading(false);
      tooltip.toggleIsZoomed(false);
      header.toggleIsZooming(false);
      return;
    }
    tooltip.toggleLoading(false);
    const labelWidth = 1 / data.xLabels.length;
    const labelMiddle = labelIndex / (data.xLabels.length - 1);
    const filter = {};
    data.datasets.forEach(({
      key
    }) => filter[key] = false);
    const newData = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.analyzeData)(newRawData, _isZoomed || data.shouldZoomToPie ? 'day' : 'hour');
    const shouldZoomToLines = Object.keys(data.datasets).length !== Object.keys(newData.datasets).length;
    stateManager.update({
      range: {
        begin: labelMiddle - labelWidth / 2,
        end: labelMiddle + labelWidth / 2
      },
      filter
    });
    setTimeout(() => {
      Object.assign(data, newData);
      if (shouldZoomToLines && newRawData.colors) {
        Object.assign(colors, (0,_skin_js__WEBPACK_IMPORTED_MODULE_3__.createColors)(newRawData.colors));
      }
      if (shouldZoomToLines) {
        minimap.toggle(_isZoomed);
        tools.redraw();
        container.style.width = `${container.scrollWidth}px`;
        container.style.height = `${container.scrollHeight}px`;
      }
      stateManager.update({
        range: {
          begin: _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_MIDDLE - _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_DELTA,
          end: _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_MIDDLE + _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_DELTA
        },
        focusOn: null
      }, true);
      const daysCount = _isZoomed || data.shouldZoomToPie ? data.xLabels.length : data.xLabels.length / 24;
      const halfDayWidth = 1 / daysCount / 2;
      let range;
      let filter;
      if (_isZoomed) {
        range = {
          begin: _stateBeforeZoomIn.begin,
          end: _stateBeforeZoomIn.end
        };
        filter = shouldZoomToLines ? _stateBeforeZoomIn.filter : _stateBeforeZoomOut.filter;
      } else {
        if (shouldZoomToLines) {
          range = {
            begin: 0,
            end: 1
          };
          filter = {};
          data.datasets.forEach(({
            key
          }) => filter[key] = true);
        } else {
          range = data.shouldZoomToPie ? {
            begin: _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_MIDDLE - halfDayWidth,
            end: _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_RANGE_MIDDLE + halfDayWidth
          } : newData.minimapRange;
          filter = _stateBeforeZoomIn.filter;
        }
      }
      stateManager.update({
        range,
        filter,
        minimapDelta: _isZoomed ? null : range.end - range.begin
      });
      if (zoomInLabel) {
        header.zoom((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.getFullLabelDate)(zoomInLabel));
      }
      _isZoomed = !_isZoomed;
      header.toggleIsZooming(false);
    }, stateManager.hasAnimations() ? _constants_js__WEBPACK_IMPORTED_MODULE_2__.ZOOM_TIMEOUT : 0);
    setTimeout(() => {
      if (data.shouldZoomToPie) {
        container.classList.remove('lovely-chart--state-animating');
      }
    }, stateManager.hasAnimations() ? 1000 : 0);
  }
  function _generatePieData(labelIndex) {
    return Object.assign({}, overviewData, {
      type: 'pie',
      labels: overviewData.labels.slice(labelIndex - 3, labelIndex + 4),
      datasets: overviewData.datasets.map(dataset => {
        return {
          ...dataset,
          values: dataset.values.slice(labelIndex - 3, labelIndex + 4)
        };
      })
    });
  }
  return {
    zoomIn,
    zoomOut,
    isZoomed
  };
}

/***/ }),

/***/ "./src/lib/lovely-chart/canvas.js":
/*!****************************************!*\
  !*** ./src/lib/lovely-chart/canvas.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCanvas: () => (/* binding */ clearCanvas),
/* harmony export */   setupCanvas: () => (/* binding */ setupCanvas)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");


function setupCanvas(container, {
  width,
  height
}) {
  const canvas = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('canvas');
  canvas.width = width * _constants_js__WEBPACK_IMPORTED_MODULE_0__.DPR;
  canvas.height = height * _constants_js__WEBPACK_IMPORTED_MODULE_0__.DPR;
  canvas.style.width = '100%';
  canvas.style.height = `${height}px`;
  const context = canvas.getContext('2d');
  context.scale(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DPR, _constants_js__WEBPACK_IMPORTED_MODULE_0__.DPR);
  container.appendChild(canvas);
  return {
    canvas,
    context
  };
}
function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

/***/ }),

/***/ "./src/lib/lovely-chart/captureEvents.js":
/*!***********************************************!*\
  !*** ./src/lib/lovely-chart/captureEvents.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureEvents: () => (/* binding */ captureEvents)
/* harmony export */ });
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");


function captureEvents(element, options) {
  let captureEvent = null;
  let longPressTimeout = null;
  function onCapture(e) {
    captureEvent = e;
    if (e.type === 'mousedown') {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(document, 'mousemove', onMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(document, 'mouseup', onRelease);
    } else if (e.type === 'touchstart') {
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(document, 'touchmove', onMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(document, 'touchend', onRelease);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(document, 'touchcancel', onRelease);

      // https://stackoverflow.com/questions/11287877/how-can-i-get-e-offsetx-on-mobile-ipad
      // Android does not have this value, and iOS has it but as read-only.
      if (e.pageX === undefined) {
        e.pageX = e.touches[0].pageX;
      }
    }
    if (options.draggingCursor) {
      document.body.classList.add(`cursor-${options.draggingCursor}`);
    }
    options.onCapture && options.onCapture(e);
    if (options.onLongPress) {
      longPressTimeout = setTimeout(() => options.onLongPress(), _constants_js__WEBPACK_IMPORTED_MODULE_1__.LONG_PRESS_TIMEOUT);
    }
  }
  function onRelease(e) {
    if (captureEvent) {
      if (longPressTimeout) {
        clearTimeout(longPressTimeout);
        longPressTimeout = null;
      }
      if (options.draggingCursor) {
        document.body.classList.remove(`cursor-${options.draggingCursor}`);
      }
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)(document, 'mouseup', onRelease);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)(document, 'mousemove', onMove);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)(document, 'touchcancel', onRelease);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)(document, 'touchend', onRelease);
      (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)(document, 'touchmove', onMove);
      captureEvent = null;
      options.onRelease && options.onRelease(e);
    }
  }
  function onMove(e) {
    if (captureEvent) {
      if (longPressTimeout) {
        clearTimeout(longPressTimeout);
        longPressTimeout = null;
      }
      if (e.type === 'touchmove' && e.pageX === undefined) {
        e.pageX = e.touches[0].pageX;
      }
      options.onDrag && options.onDrag(e, captureEvent, {
        dragOffsetX: e.pageX - captureEvent.pageX
      });
    }
  }
  (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(element, 'mousedown', onCapture);
  (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(element, 'touchstart', onCapture);
}

/***/ }),

/***/ "./src/lib/lovely-chart/constants.js":
/*!*******************************************!*\
  !*** ./src/lib/lovely-chart/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATE_PROPS: () => (/* binding */ ANIMATE_PROPS),
/* harmony export */   AXES_FONT: () => (/* binding */ AXES_FONT),
/* harmony export */   AXES_MAX_COLUMN_WIDTH: () => (/* binding */ AXES_MAX_COLUMN_WIDTH),
/* harmony export */   AXES_MAX_ROW_HEIGHT: () => (/* binding */ AXES_MAX_ROW_HEIGHT),
/* harmony export */   BALLOON_OFFSET: () => (/* binding */ BALLOON_OFFSET),
/* harmony export */   DEFAULT_RANGE: () => (/* binding */ DEFAULT_RANGE),
/* harmony export */   DPR: () => (/* binding */ DPR),
/* harmony export */   GUTTER: () => (/* binding */ GUTTER),
/* harmony export */   LONG_PRESS_TIMEOUT: () => (/* binding */ LONG_PRESS_TIMEOUT),
/* harmony export */   MILISECONDS_IN_DAY: () => (/* binding */ MILISECONDS_IN_DAY),
/* harmony export */   MINIMAP_EAR_WIDTH: () => (/* binding */ MINIMAP_EAR_WIDTH),
/* harmony export */   MINIMAP_HEIGHT: () => (/* binding */ MINIMAP_HEIGHT),
/* harmony export */   MINIMAP_LINE_WIDTH: () => (/* binding */ MINIMAP_LINE_WIDTH),
/* harmony export */   MINIMAP_MARGIN: () => (/* binding */ MINIMAP_MARGIN),
/* harmony export */   MINIMAP_MAX_ANIMATED_DATASETS: () => (/* binding */ MINIMAP_MAX_ANIMATED_DATASETS),
/* harmony export */   MONTHS: () => (/* binding */ MONTHS),
/* harmony export */   PIE_MINIMUM_VISIBLE_PERCENT: () => (/* binding */ PIE_MINIMUM_VISIBLE_PERCENT),
/* harmony export */   PLOT_BARS_WIDTH_SHIFT: () => (/* binding */ PLOT_BARS_WIDTH_SHIFT),
/* harmony export */   PLOT_HEIGHT: () => (/* binding */ PLOT_HEIGHT),
/* harmony export */   PLOT_LINE_WIDTH: () => (/* binding */ PLOT_LINE_WIDTH),
/* harmony export */   PLOT_PIE_RADIUS_FACTOR: () => (/* binding */ PLOT_PIE_RADIUS_FACTOR),
/* harmony export */   PLOT_PIE_SHIFT: () => (/* binding */ PLOT_PIE_SHIFT),
/* harmony export */   PLOT_TOP_PADDING: () => (/* binding */ PLOT_TOP_PADDING),
/* harmony export */   SIMPLIFIER_MINIMAP_FACTOR: () => (/* binding */ SIMPLIFIER_MINIMAP_FACTOR),
/* harmony export */   SIMPLIFIER_MIN_POINTS: () => (/* binding */ SIMPLIFIER_MIN_POINTS),
/* harmony export */   SIMPLIFIER_PLOT_FACTOR: () => (/* binding */ SIMPLIFIER_PLOT_FACTOR),
/* harmony export */   SPEED_TEST_FAST_FPS: () => (/* binding */ SPEED_TEST_FAST_FPS),
/* harmony export */   SPEED_TEST_INTERVAL: () => (/* binding */ SPEED_TEST_INTERVAL),
/* harmony export */   TRANSITION_DEFAULT_DURATION: () => (/* binding */ TRANSITION_DEFAULT_DURATION),
/* harmony export */   WEEK_DAYS: () => (/* binding */ WEEK_DAYS),
/* harmony export */   WEEK_DAYS_SHORT: () => (/* binding */ WEEK_DAYS_SHORT),
/* harmony export */   X_AXIS_HEIGHT: () => (/* binding */ X_AXIS_HEIGHT),
/* harmony export */   X_AXIS_SHIFT_START: () => (/* binding */ X_AXIS_SHIFT_START),
/* harmony export */   Y_AXIS_ZERO_BASED_THRESHOLD: () => (/* binding */ Y_AXIS_ZERO_BASED_THRESHOLD),
/* harmony export */   ZOOM_RANGE_DELTA: () => (/* binding */ ZOOM_RANGE_DELTA),
/* harmony export */   ZOOM_RANGE_MIDDLE: () => (/* binding */ ZOOM_RANGE_MIDDLE),
/* harmony export */   ZOOM_TIMEOUT: () => (/* binding */ ZOOM_TIMEOUT)
/* harmony export */ });
const DPR = window.devicePixelRatio || 1;
const DEFAULT_RANGE = {
  begin: 0.8,
  end: 1
};
const TRANSITION_DEFAULT_DURATION = 300;
const LONG_PRESS_TIMEOUT = 500;
const GUTTER = 10;
const PLOT_HEIGHT = 320;
const PLOT_TOP_PADDING = 15;
const PLOT_LINE_WIDTH = 2;
const PLOT_PIE_RADIUS_FACTOR = 0.9 / 2;
const PLOT_PIE_SHIFT = 10;
const PLOT_BARS_WIDTH_SHIFT = 0.5;
const PIE_MINIMUM_VISIBLE_PERCENT = 0.02;
const BALLOON_OFFSET = 20;
const AXES_FONT = '300 10px Helvetica, Arial, sans-serif';
const AXES_MAX_COLUMN_WIDTH = 45;
const AXES_MAX_ROW_HEIGHT = 50;
const X_AXIS_HEIGHT = 30;
const X_AXIS_SHIFT_START = 1;
const Y_AXIS_ZERO_BASED_THRESHOLD = 0.1;
const MINIMAP_HEIGHT = 40;
const MINIMAP_MARGIN = 10;
const MINIMAP_LINE_WIDTH = 1;
const MINIMAP_EAR_WIDTH = 8;
const MINIMAP_MAX_ANIMATED_DATASETS = 4;
const ZOOM_TIMEOUT = TRANSITION_DEFAULT_DURATION;
const ZOOM_RANGE_DELTA = 0.1;
const ZOOM_RANGE_MIDDLE = .5;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEK_DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MILISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const SPEED_TEST_INTERVAL = 200;
const SPEED_TEST_FAST_FPS = 4;
const SIMPLIFIER_MIN_POINTS = 1000;
const SIMPLIFIER_PLOT_FACTOR = 1;
const SIMPLIFIER_MINIMAP_FACTOR = 0.5;
const ANIMATE_PROPS = [
// Viewport X-axis
'begin 200 fast', 'end 200 fast', 'labelFromIndex 200 fast floor', 'labelToIndex 200 fast ceil',
// X-axis labels
'xAxisScale 400',
// Viewport Y-axis
'yMinViewport', 'yMaxViewport', 'yMinViewportSecond', 'yMaxViewportSecond',
// Minimap Y-axis
'yMinMinimap', 'yMaxMinimap', 'yMinMinimapSecond', 'yMaxMinimapSecond',
// Y-axis labels
'yAxisScale', 'yAxisScaleSecond'];

/***/ }),

/***/ "./src/lib/lovely-chart/data.js":
/*!**************************************!*\
  !*** ./src/lib/lovely-chart/data.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyzeData: () => (/* binding */ analyzeData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format.js */ "./src/lib/lovely-chart/format.js");


function analyzeData(data) {
  const {
    title,
    labelFormatter,
    tooltipFormatter,
    isStacked,
    isPercentage,
    isCurrency,
    currencyRate,
    hasSecondYAxis,
    onZoom,
    minimapRange,
    hideCaption,
    zoomOutLabel
  } = data;
  const {
    datasets,
    labels
  } = prepareDatasets(data);
  const colors = {};
  let totalYMin = Infinity;
  let totalYMax = -Infinity;
  datasets.forEach(({
    key,
    color,
    yMin,
    yMax
  }) => {
    colors[key] = color;
    if (yMin < totalYMin) {
      totalYMin = yMin;
    }
    if (yMax > totalYMax) {
      totalYMax = yMax;
    }
  });
  let effectiveLabelFormatter = labelFormatter;
  if (isCurrency) {
    effectiveLabelFormatter = 'statsFormat(\'day\')';
  }
  let xLabels;
  switch (effectiveLabelFormatter) {
    case 'statsFormatDayHour':
      xLabels = (0,_format_js__WEBPACK_IMPORTED_MODULE_1__.statsFormatDayHour)(labels);
      break;
    case 'statsFormat(\'day\')':
      xLabels = (0,_format_js__WEBPACK_IMPORTED_MODULE_1__.statsFormatDay)(labels);
      break;
    case 'statsFormat(\'hour\')':
    case 'statsFormat(\'5min\')':
      xLabels = (0,_format_js__WEBPACK_IMPORTED_MODULE_1__.statsFormatMin)(labels);
      break;
    default:
      xLabels = (0,_format_js__WEBPACK_IMPORTED_MODULE_1__.statsFormatText)(labels);
      break;
  }
  const analyzed = {
    title,
    labelFormatter,
    tooltipFormatter,
    xLabels,
    datasets,
    isStacked,
    isPercentage,
    isCurrency,
    currencyRate,
    hasSecondYAxis,
    onZoom,
    isLines: data.type === 'line',
    isBars: data.type === 'bar',
    isSteps: data.type === 'step',
    isAreas: data.type === 'area',
    isPie: data.type === 'pie',
    yMin: totalYMin,
    yMax: totalYMax,
    colors,
    minimapRange,
    hideCaption,
    zoomOutLabel
  };
  analyzed.shouldZoomToPie = !analyzed.onZoom && analyzed.isPercentage;
  analyzed.isZoomable = analyzed.onZoom || analyzed.shouldZoomToPie;
  return analyzed;
}
function prepareDatasets(data) {
  const {
    type,
    labels,
    datasets,
    hasSecondYAxis
  } = data;
  return {
    labels: cloneArray(labels),
    datasets: datasets.map(({
      name,
      color,
      values
    }, i) => {
      const {
        min: yMin,
        max: yMax
      } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getMaxMin)(values);
      return {
        type,
        key: `y${i}`,
        name,
        color,
        values: cloneArray(values),
        hasOwnYAxis: hasSecondYAxis && i === datasets.length - 1,
        yMin,
        yMax
      };
    })
  };
}
function cloneArray(array) {
  return array.slice(0);
}

/***/ }),

/***/ "./src/lib/lovely-chart/drawDatasets.js":
/*!**********************************************!*\
  !*** ./src/lib/lovely-chart/drawDatasets.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawDatasets: () => (/* binding */ drawDatasets)
/* harmony export */ });
/* harmony import */ var _skin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skin.js */ "./src/lib/lovely-chart/skin.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");
/* harmony import */ var _formulas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulas.js */ "./src/lib/lovely-chart/formulas.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");
/* harmony import */ var _simplify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simplify.js */ "./src/lib/lovely-chart/simplify.js");
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Projection.js */ "./src/lib/lovely-chart/Projection.js");






function drawDatasets(context, state, data, range, points, projection, secondaryPoints, secondaryProjection, lineWidth, visibilities, colors, pieToBar, simplification) {
  data.datasets.forEach(({
    key,
    type,
    hasOwnYAxis
  }, i) => {
    if (!visibilities[i]) {
      return;
    }
    const options = {
      color: (0,_skin_js__WEBPACK_IMPORTED_MODULE_0__.getCssColor)(colors, `dataset#${key}`),
      lineWidth,
      opacity: data.isStacked ? 1 : visibilities[i],
      simplification
    };
    const datasetType = type === 'pie' && pieToBar ? 'bar' : type;
    let datasetPoints = hasOwnYAxis ? secondaryPoints : points[i];
    let datasetProjection = hasOwnYAxis ? secondaryProjection : projection;
    if (datasetType === 'area') {
      const {
        yMin,
        yMax
      } = projection.getParams();
      const yHeight = yMax - yMin;
      const bottomLine = [{
        labelIndex: range.from,
        stackValue: 0
      }, {
        labelIndex: range.to,
        stackValue: 0
      }];
      const topLine = [{
        labelIndex: range.to,
        stackValue: yHeight
      }, {
        labelIndex: range.from,
        stackValue: yHeight
      }];
      datasetPoints = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeArrays)([points[i - 1] || bottomLine, topLine]);
    }
    if (datasetType === 'pie') {
      options.center = projection.getCenter();
      options.radius = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_2__.getPieRadius)(projection);
      options.pointerVector = state.focusOn;
    }
    if (datasetType === 'bar') {
      const [x0] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, 0, 0);
      const [x1] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, 1, 0);
      options.lineWidth = x1 - x0;
      options.focusOn = state.focusOn;
    }
    drawDataset(datasetType, context, datasetPoints, datasetProjection, options);
  });
  if (state.focusOn && (data.isBars || data.isSteps)) {
    const [x0] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, 0, 0);
    const [x1] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, 1, 0);
    drawBarsMask(context, projection, {
      focusOn: state.focusOn,
      color: (0,_skin_js__WEBPACK_IMPORTED_MODULE_0__.getCssColor)(colors, 'mask'),
      lineWidth: data.isSteps ? x1 - x0 + lineWidth : x1 - x0
    });
  }
}
function drawDataset(type, ...args) {
  switch (type) {
    case 'line':
      return drawDatasetLine(...args);
    case 'bar':
      return drawDatasetBars(...args);
    case 'step':
      return drawDatasetSteps(...args);
    case 'area':
      return drawDatasetArea(...args);
    case 'pie':
      return drawDatasetPie(...args);
  }
}
function drawDatasetLine(context, points, projection, options) {
  context.beginPath();
  let pixels = [];
  for (let j = 0, l = points.length; j < l; j++) {
    const {
      labelIndex,
      stackValue
    } = points[j];
    pixels.push((0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex, stackValue));
  }
  if (options.simplification) {
    const simplifierFn = (0,_simplify_js__WEBPACK_IMPORTED_MODULE_4__.simplify)(pixels);
    pixels = simplifierFn(options.simplification).points;
  }
  pixels.forEach(([x, y]) => {
    context.lineTo(x, y);
  });
  context.save();
  context.strokeStyle = options.color;
  context.lineWidth = options.lineWidth;
  context.globalAlpha = options.opacity;
  context.lineJoin = 'bevel';
  context.lineCap = 'butt';
  context.stroke();
  context.restore();
}

// TODO try areas
function drawDatasetBars(context, points, projection, options) {
  const {
    yMin
  } = projection.getParams();
  context.save();
  context.globalAlpha = options.opacity;
  context.fillStyle = options.color;
  for (let j = 0, l = points.length; j < l; j++) {
    const {
      labelIndex,
      stackValue,
      stackOffset = 0
    } = points[j];
    const [, yFrom] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex, Math.max(stackOffset, yMin));
    const [x, yTo] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex, stackValue);
    const rectX = x - options.lineWidth / 2;
    const rectY = yTo;
    const rectW = options.opacity === 1 ? options.lineWidth + _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_BARS_WIDTH_SHIFT : options.lineWidth + _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_BARS_WIDTH_SHIFT * options.opacity;
    const rectH = yFrom - yTo;
    context.fillRect(rectX, rectY, rectW, rectH);
  }
  context.restore();
}
function drawDatasetSteps(context, points, projection, options) {
  context.beginPath();
  let pixels = [];
  for (let j = 0, l = points.length; j < l; j++) {
    const {
      labelIndex,
      stackValue
    } = points[j];
    pixels.push((0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex - _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_BARS_WIDTH_SHIFT, stackValue), (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex + _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_BARS_WIDTH_SHIFT, stackValue));
  }
  pixels.forEach(([x, y]) => {
    context.lineTo(x, y);
  });
  context.save();
  context.strokeStyle = options.color;
  context.lineWidth = options.lineWidth;
  context.globalAlpha = options.opacity;
  context.stroke();
  context.restore();
}
function drawBarsMask(context, projection, options) {
  const [xCenter, yCenter] = projection.getCenter();
  const [width, height] = projection.getSize();
  const [x] = (0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, options.focusOn, 0);
  context.fillStyle = options.color;
  context.fillRect(xCenter - width / 2, yCenter - height / 2, x - options.lineWidth / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_BARS_WIDTH_SHIFT, height);
  context.fillRect(x + options.lineWidth / 2, yCenter - height / 2, width - (x + options.lineWidth / 2), height);
}
function drawDatasetArea(context, points, projection, options) {
  context.beginPath();
  let pixels = [];
  for (let j = 0, l = points.length; j < l; j++) {
    const {
      labelIndex,
      stackValue
    } = points[j];
    pixels.push((0,_Projection_js__WEBPACK_IMPORTED_MODULE_5__.toPixels)(projection, labelIndex, stackValue));
  }
  if (options.simplification) {
    const simplifierFn = (0,_simplify_js__WEBPACK_IMPORTED_MODULE_4__.simplify)(pixels);
    pixels = simplifierFn(options.simplification).points;
  }
  pixels.forEach(([x, y]) => {
    context.lineTo(x, y);
  });
  context.save();
  context.fillStyle = options.color;
  context.lineWidth = options.lineWidth;
  context.globalAlpha = options.opacity;
  context.lineJoin = 'bevel';
  context.lineCap = 'butt';
  context.fill();
  context.restore();
}
function drawDatasetPie(context, points, projection, options) {
  const {
    visibleValue,
    stackValue,
    stackOffset = 0
  } = points[0];
  if (!visibleValue) {
    return;
  }
  const {
    yMin,
    yMax
  } = projection.getParams();
  const percentFactor = 1 / (yMax - yMin);
  const percent = visibleValue * percentFactor;
  const beginAngle = stackOffset * percentFactor * Math.PI * 2 - Math.PI / 2;
  const endAngle = stackValue * percentFactor * Math.PI * 2 - Math.PI / 2;
  const {
    radius = 120,
    center: [x, y],
    pointerVector
  } = options;
  const shift = pointerVector && beginAngle <= pointerVector.angle && pointerVector.angle < endAngle && pointerVector.distance <= radius ? _constants_js__WEBPACK_IMPORTED_MODULE_3__.PLOT_PIE_SHIFT : 0;
  const shiftAngle = (beginAngle + endAngle) / 2;
  const directionX = Math.cos(shiftAngle);
  const directionY = Math.sin(shiftAngle);
  const shiftX = directionX * shift;
  const shiftY = directionY * shift;
  context.save();
  context.beginPath();
  context.fillStyle = options.color;
  context.moveTo(x + shiftX, y + shiftY);
  context.arc(x + shiftX, y + shiftY, radius, beginAngle, endAngle);
  context.lineTo(x + shiftX, y + shiftY);
  context.fill();
  if (percent >= _constants_js__WEBPACK_IMPORTED_MODULE_3__.PIE_MINIMUM_VISIBLE_PERCENT) {
    context.font = `700 ${(0,_formulas_js__WEBPACK_IMPORTED_MODULE_2__.getPieTextSize)(percent, radius)}px Helvetica, Arial, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'white';
    const textShift = (0,_formulas_js__WEBPACK_IMPORTED_MODULE_2__.getPieTextShift)(percent, radius);
    context.fillText(`${Math.round(percent * 100)}%`, x + directionX * textShift + shiftX, y + directionY * textShift + shiftY);
  }
  context.restore();
}

/***/ }),

/***/ "./src/lib/lovely-chart/format.js":
/*!****************************************!*\
  !*** ./src/lib/lovely-chart/format.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCryptoValue: () => (/* binding */ formatCryptoValue),
/* harmony export */   formatInteger: () => (/* binding */ formatInteger),
/* harmony export */   getFullLabelDate: () => (/* binding */ getFullLabelDate),
/* harmony export */   getLabelDate: () => (/* binding */ getLabelDate),
/* harmony export */   getLabelTime: () => (/* binding */ getLabelTime),
/* harmony export */   humanize: () => (/* binding */ humanize),
/* harmony export */   statsFormatDay: () => (/* binding */ statsFormatDay),
/* harmony export */   statsFormatDayHour: () => (/* binding */ statsFormatDayHour),
/* harmony export */   statsFormatDayHourFull: () => (/* binding */ statsFormatDayHourFull),
/* harmony export */   statsFormatMin: () => (/* binding */ statsFormatMin),
/* harmony export */   statsFormatText: () => (/* binding */ statsFormatText)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");

function statsFormatDayHour(labels) {
  return labels.map(value => ({
    value,
    text: `${value}:00`
  }));
}
function statsFormatDayHourFull(value) {
  return `${value}:00`;
}
function statsFormatDay(labels) {
  return labels.map(value => {
    const date = new Date(value);
    const day = date.getDate();
    const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTHS[date.getMonth()];
    return {
      value,
      text: `${day} ${month}`
    };
  });
}
function statsFormatMin(labels) {
  return labels.map(value => ({
    value,
    text: new Date(value).toString().match(/(\d+:\d+):/)[1]
  }));
}
function statsFormatText(labels) {
  return labels.map((value, i) => {
    return {
      value: i,
      text: value
    };
  });
}
function humanize(value, decimals = 1) {
  if (value >= 1e6) {
    return keepThreeDigits(value / 1e6, decimals) + 'M';
  } else if (value >= 1e3) {
    return keepThreeDigits(value / 1e3, decimals) + 'K';
  }
  return value;
}

// TODO perf
function keepThreeDigits(value, decimals) {
  return value.toFixed(decimals).replace(/(\d{3,})\.\d+/, '$1').replace(/\.0+$/, '');
}
function formatInteger(n) {
  return String(n).replace(/\d(?=(\d{3})+$)/g, '$& ');
}
function formatCryptoValue(n) {
  return Number(n / 10 ** 9);
}
function getFullLabelDate(label, {
  isShort = false
} = {}) {
  return getLabelDate(label, {
    isShort,
    displayWeekDay: true
  });
}
function getLabelDate(label, {
  isShort = false,
  displayWeekDay = false,
  displayYear = true,
  displayHours = false
} = {}) {
  const {
    value
  } = label;
  const date = new Date(value);
  const weekDaysArray = isShort ? _constants_js__WEBPACK_IMPORTED_MODULE_0__.WEEK_DAYS_SHORT : _constants_js__WEBPACK_IMPORTED_MODULE_0__.WEEK_DAYS;
  let string = `${date.getUTCDate()} ${_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTHS[date.getUTCMonth()]}`;
  if (displayWeekDay) {
    string = `${weekDaysArray[date.getUTCDay()]}, ` + string;
  }
  if (displayYear) {
    string += ` ${date.getUTCFullYear()}`;
  }
  if (displayHours) {
    string += `, ${('0' + date.getUTCHours()).slice(-2)}:${('0' + date.getUTCMinutes()).slice(-2)}`;
  }
  return string;
}
function getLabelTime(label) {
  return new Date(label.value).toString().match(/(\d+:\d+):/)[1];
}

/***/ }),

/***/ "./src/lib/lovely-chart/formulas.js":
/*!******************************************!*\
  !*** ./src/lib/lovely-chart/formulas.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyXEdgeOpacity: () => (/* binding */ applyXEdgeOpacity),
/* harmony export */   applyYEdgeOpacity: () => (/* binding */ applyYEdgeOpacity),
/* harmony export */   getPieRadius: () => (/* binding */ getPieRadius),
/* harmony export */   getPieTextShift: () => (/* binding */ getPieTextShift),
/* harmony export */   getPieTextSize: () => (/* binding */ getPieTextSize),
/* harmony export */   getSimplificationDelta: () => (/* binding */ getSimplificationDelta),
/* harmony export */   isDataRange: () => (/* binding */ isDataRange),
/* harmony export */   xScaleLevelToStep: () => (/* binding */ xScaleLevelToStep),
/* harmony export */   xStepToScaleLevel: () => (/* binding */ xStepToScaleLevel),
/* harmony export */   yScaleLevelToStep: () => (/* binding */ yScaleLevelToStep),
/* harmony export */   yStepToScaleLevel: () => (/* binding */ yStepToScaleLevel)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/lib/lovely-chart/constants.js");

function xScaleLevelToStep(scaleLevel) {
  return Math.pow(2, scaleLevel);
}
function xStepToScaleLevel(step) {
  return Math.ceil(Math.log2(step || 1));
}
const SCALE_LEVELS = [1, 2, 8, 18, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000, 25000000, 50000000, 100000000];
function yScaleLevelToStep(scaleLevel) {
  return SCALE_LEVELS[scaleLevel] || SCALE_LEVELS[SCALE_LEVELS.length - 1];
}
function yStepToScaleLevel(neededStep) {
  return SCALE_LEVELS.findIndex(step => step >= neededStep) || SCALE_LEVELS.length - 1;
}
function applyYEdgeOpacity(opacity, xPx, plotWidth) {
  const edgeOffset = Math.min(xPx + _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER, plotWidth - xPx);
  if (edgeOffset <= _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER * 4) {
    opacity = Math.min(1, opacity, edgeOffset / (_constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER * 4));
  }
  return opacity;
}
function applyXEdgeOpacity(opacity, yPx) {
  return yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER <= _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER * 2 ? Math.min(1, opacity, (yPx - _constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER) / (_constants_js__WEBPACK_IMPORTED_MODULE_0__.GUTTER * 2)) : opacity;
}
function getPieRadius(projection) {
  return Math.min(...projection.getSize()) * _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLOT_PIE_RADIUS_FACTOR;
}
function getPieTextSize(percent, radius) {
  return (radius + percent * 200) / 10;
}
function getPieTextShift(percent, radius, shift) {
  return percent >= 0.99 ? 0 : Math.min(1 - Math.log(percent * 30) / 5, 4 / 5) * radius;
}
function isDataRange(labelFrom, labelTo) {
  return Math.abs(labelTo.value - labelFrom.value) > _constants_js__WEBPACK_IMPORTED_MODULE_0__.MILISECONDS_IN_DAY;
}
function getSimplificationDelta(pointsLength) {
  return pointsLength >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.SIMPLIFIER_MIN_POINTS ? Math.min(pointsLength / 1000, 1) : 0;
}

/***/ }),

/***/ "./src/lib/lovely-chart/minifiers.js":
/*!*******************************************!*\
  !*** ./src/lib/lovely-chart/minifiers.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   removeEventListener: () => (/* binding */ removeEventListener)
/* harmony export */ });
const createElement = (tagName = 'div') => {
  return document.createElement(tagName);
};
function addEventListener(element, event, cb) {
  element.addEventListener(event, cb);
}
function removeEventListener(element, event, cb) {
  element.removeEventListener(event, cb);
}

/***/ }),

/***/ "./src/lib/lovely-chart/preparePoints.js":
/*!***********************************************!*\
  !*** ./src/lib/lovely-chart/preparePoints.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preparePoints: () => (/* binding */ preparePoints)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/lib/lovely-chart/utils.js");

function preparePoints(data, datasets, range, visibilities, bounds, pieToArea) {
  let values = datasets.map(({
    values
  }) => values.slice(range.from, range.to + 1));
  if (data.isPie && !pieToArea) {
    values = prepareSumsByX(values);
  }
  const points = values.map((datasetValues, i) => datasetValues.map((value, j) => {
    let visibleValue = value;
    if (data.isStacked) {
      visibleValue *= visibilities[i];
    }
    return {
      labelIndex: range.from + j,
      value,
      visibleValue,
      stackOffset: 0,
      stackValue: visibleValue
    };
  }));
  if (data.isPercentage) {
    preparePercentage(points, bounds);
  }
  if (data.isStacked) {
    prepareStacked(points);
  }
  return points;
}
function getSumsByY(points) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sumArrays)(points.map(datasetPoints => datasetPoints.map(({
    visibleValue
  }) => visibleValue)));
}

// TODO perf cache for [0..1], use in state
function preparePercentage(points, bounds) {
  const sumsByY = getSumsByY(points);
  points.forEach(datasetPoints => {
    datasetPoints.forEach((point, j) => {
      point.percent = point.visibleValue / sumsByY[j];
      point.visibleValue = point.percent * bounds.yMax;
    });
  });
}
function prepareStacked(points) {
  const accum = [];
  points.forEach(datasetPoints => {
    datasetPoints.forEach((point, j) => {
      if (accum[j] === undefined) {
        accum[j] = 0;
      }
      point.stackOffset = accum[j];
      accum[j] += point.visibleValue;
      point.stackValue = accum[j];
    });
  });
}
function prepareSumsByX(values) {
  return values.map(datasetValues => [datasetValues.reduce((sum, value) => sum + value, 0)]);
}

/***/ }),

/***/ "./src/lib/lovely-chart/simplify.js":
/*!******************************************!*\
  !*** ./src/lib/lovely-chart/simplify.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simplify: () => (/* binding */ simplify)
/* harmony export */ });
const simplify = (() => {
  function simplify(points, indexes, fixedPoints) {
    if (points.length < 6) {
      return function () {
        return {
          points: points,
          indexes: indexes,
          removed: []
        };
      };
    }
    let worker = precalculate(points, fixedPoints);
    return function (delta) {
      let result = [],
        resultIndexes = [],
        removed = [];
      let delta2 = delta * delta,
        markers = worker(delta2);
      for (let i = 0, l = points.length; i < l; i++) {
        if (markers[i] >= delta2 || i == 0 || i == l - 1) {
          result.push(points[i]);
          resultIndexes.push(indexes ? indexes[i] : i);
        } else {
          removed.push(i);
        }
      }
      return {
        points: result,
        indexes: resultIndexes,
        removed: removed
      };
    };
  }
  let E1 = 1.0 / Math.pow(2, 22),
    // максимальная дельта
    MAXLIMIT = 100000;
  function precalculate(points, fixedPoints) {
    let len = points.length,
      distances = [],
      queue = [],
      maximumDelta;
    for (let i = 0, l = points.length; i < l; ++i) {
      distances[i] = 0;
    }
    if (!fixedPoints) {
      fixedPoints = [];
    }

    //инициализируем дерево срединным значением
    //чтобы не попадает в ситуации когда начало линии близко к концу(те полигон)
    //и правильные расчеты сложны
    let subdivisionTree = 0;
    for (let i = 0, l = fixedPoints.length; i < l; ++i) {
      distances[fixedPoints[i]] = MAXLIMIT;
    }
    function worker(params) {
      let start = params.start,
        end = params.end,
        record = params.record,
        currentLimit = params.currentLimit,
        usedDistance = 0;
      if (!record) {
        //let deltaShifts = getDeltaShifts(points);
        let usedIndex = -1,
          vector = [points[end][0] - points[start][0], points[end][1] - points[start][1]];
        for (let i = 0, l = fixedPoints.length; i < l; ++i) {
          let fixId = fixedPoints[i];
          if (fixId > start) {
            if (fixId < end) {
              usedIndex = fixId;
              usedDistance = MAXLIMIT;
              break;
            } else {
              break;
            }
          }
        }
        if (usedIndex < 0) {
          if (Math.abs(vector[0]) > E1 || Math.abs(vector[1]) > E1) {
            let vectorLength = vector[0] * vector[0] + vector[1] * vector[1],
              vectorLength_1 = +1.0 / vectorLength;
            for (let i = start + 1; i < end; ++i) {
              let segmentDistance = pointToSegmentDistanceSquare(points[i], points[start], points[end], vector, vectorLength_1);
              if (segmentDistance > usedDistance) {
                usedIndex = i;
                usedDistance = segmentDistance;
              }
            }
          } else {
            //фиксируем на среднинной точке
            usedIndex = Math.round((start + end) * 0.5);
            usedDistance = currentLimit;
          }
          distances[usedIndex] = usedDistance;
        }
        record = {
          start: start,
          end: end,
          index: usedIndex,
          distance: usedDistance
        };
      }
      if (record.index && record.distance > maximumDelta) {
        if (record.index - start >= 2) {
          queue.push({
            start: start,
            end: record.index,
            record: record.left,
            currentLimit: record.distance,
            parent: record,
            parentProperty: 'left'
          });
        }
        if (end - record.index >= 2) {
          queue.push({
            start: record.index,
            end: end,
            record: record.right,
            currentLimit: record.distance,
            parent: record,
            parentProperty: 'right'
          });
        }
      }
      return record;
    }
    function tick() {
      let request = queue.pop(),
        result = worker(request);
      if (request.parent && request.parentProperty) {
        request.parent[request.parentProperty] = result;
      }
      return result;
    }
    return function (delta) {
      maximumDelta = delta;
      queue.push({
        start: 0,
        end: len - 1,
        record: subdivisionTree,
        currentLimit: MAXLIMIT
      });
      subdivisionTree = tick();
      while (queue.length) {
        tick();
      }
      return distances;
    };
  }
  function pointToSegmentDistanceSquare(p, v1, v2, dv, dvlen_1) {
    let t;
    let vx = +v1[0],
      vy = +v1[1];
    t = +((p[0] - vx) * dv[0] + (p[1] - vy) * dv[1]) * dvlen_1;
    if (t > 1) {
      vx = +v2[0];
      vy = +v2[1];
    } else if (t > 0) {
      vx += +dv[0] * t;
      vy += +dv[1] * t;
    }
    let a = +p[0] - vx,
      b = +p[1] - vy;
    return +a * a + b * b;
  }
  return simplify;
})();

/***/ }),

/***/ "./src/lib/lovely-chart/skin.js":
/*!**************************************!*\
  !*** ./src/lib/lovely-chart/skin.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createColors: () => (/* binding */ createColors),
/* harmony export */   getCssColor: () => (/* binding */ getCssColor)
/* harmony export */ });
function detectSkin() {
  return document.documentElement.classList.contains('theme-dark') ? 'skin-night' : 'skin-day';
}
let skin = detectSkin();
const COLORS = {
  'skin-day': {
    'background': '#FFFFFF',
    'text-color': '#222222',
    'minimap-mask': '#E2EEF9/0.6',
    'minimap-slider': '#C0D1E1',
    'grid-lines': '#182D3B/0.1',
    'zoom-out-text': '#108BE3',
    'tooltip-background': '#FFFFFF',
    'tooltip-arrow': '#D2D5D7',
    'mask': '#FFFFFF/0.5',
    'x-axis-text': '#252529/0.6',
    'y-axis-text': '#252529/0.6'
  },
  'skin-night': {
    'background': '#242F3E',
    'text-color': '#FFFFFF',
    'minimap-mask': '#304259/0.6',
    'minimap-slider': '#56626D',
    'grid-lines': '#FFFFFF/0.1',
    'zoom-out-text': '#48AAF0',
    'tooltip-background': '#1c2533',
    'tooltip-arrow': '#D2D5D7',
    'mask': '#242F3E/0.5',
    'x-axis-text': '#A3B1C2/0.6',
    'y-axis-text': '#A3B1C2/0.6'
  }
};
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.appendChild(document.createTextNode(''));
document.head.appendChild(styleElement);
const styleSheet = styleElement.sheet;
document.documentElement.addEventListener('darkmode', () => {
  skin = detectSkin();
});
function createColors(datasetColors) {
  const colors = {};
  const baseClass = `.lovely-chart--color`;
  ['skin-day', 'skin-night'].forEach(skin => {
    colors[skin] = {};
    Object.keys(COLORS[skin]).forEach(prop => {
      colors[skin][prop] = hexToChannels(COLORS[skin][prop]);
    });
    Object.keys(datasetColors).forEach(key => {
      colors[skin][`dataset#${key}`] = hexToChannels(datasetColors[key]);
      addCssRule(styleSheet, `.lovely-chart--tooltip-dataset-value${baseClass}-${datasetColors[key].slice(1)}`, `color: ${datasetColors[key]}`);
      addCssRule(styleSheet, `.lovely-chart--button${baseClass}-${datasetColors[key].slice(1)}`, `border-color: ${datasetColors[key]}; color: ${datasetColors[key]}`);
      addCssRule(styleSheet, `.lovely-chart--button.lovely-chart--state-checked${baseClass}-${datasetColors[key].slice(1)}`, `background-color: ${datasetColors[key]}`);
    });
  });
  return colors;
}
function getCssColor(colors, key, opacity) {
  return buildCssColor(colors[skin][key], opacity);
}
function hexToChannels(hexWithAlpha) {
  const [hex, alpha] = hexWithAlpha.replace('#', '').split('/');
  return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16), alpha ? parseFloat(alpha) : 1];
}
function buildCssColor([r, g, b, a = 1], opacity = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a * opacity})`;
}
function addCssRule(sheet, selector, rule) {
  sheet.insertRule(`${selector} { ${rule} }`, sheet.cssRules.length);
}

/***/ }),

/***/ "./src/lib/lovely-chart/styles/index.scss":
/*!************************************************!*\
  !*** ./src/lib/lovely-chart/styles/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lib/lovely-chart/toggleText.js":
/*!********************************************!*\
  !*** ./src/lib/lovely-chart/toggleText.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleText: () => (/* binding */ toggleText)
/* harmony export */ });
/* harmony import */ var _minifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minifiers.js */ "./src/lib/lovely-chart/minifiers.js");

function toggleText(element, newText, className = '', inverse = false) {
  const container = element.parentNode;
  container.classList.add('lovely-chart--transition-container');
  const newElement = (0,_minifiers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(element.tagName);
  newElement.className = `${className} lovely-chart--transition lovely-chart--position-${inverse ? 'top' : 'bottom'} lovely-chart--state-hidden`;
  newElement.innerHTML = newText;
  const selector = className.length ? `.${className.split(' ').join('.')}` : '';
  const oldElements = container.querySelectorAll(`${selector}.lovely-chart--state-hidden`);
  oldElements.forEach(e => e.remove());
  element.classList.add('lovely-chart--transition');
  element.classList.remove('lovely-chart--position-bottom', 'lovely-chart--position-top');
  element.classList.add(inverse ? 'lovely-chart--position-bottom' : 'lovely-chart--position-top');
  container.insertBefore(newElement, element.nextSibling);
  toggleElementIn(newElement);
  toggleElementOut(element);
  return newElement;
}
function toggleElementIn(element) {
  // Remove and add `animated` class to re-trigger animation
  element.classList.remove('lovely-chart--state-animated');
  element.classList.add('lovely-chart--state-animated');
  element.classList.remove('lovely-chart--state-hidden');
}
function toggleElementOut(element) {
  // Remove and add `animated` class to re-trigger animation
  element.classList.remove('lovely-chart--state-animated');
  element.classList.add('lovely-chart--state-animated');
  element.classList.add('lovely-chart--state-hidden');
}

/***/ }),

/***/ "./src/lib/lovely-chart/utils.js":
/*!***************************************!*\
  !*** ./src/lib/lovely-chart/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getMaxMin: () => (/* binding */ getMaxMin),
/* harmony export */   mergeArrays: () => (/* binding */ mergeArrays),
/* harmony export */   proxyMerge: () => (/* binding */ proxyMerge),
/* harmony export */   sumArrays: () => (/* binding */ sumArrays),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   throttleWithRaf: () => (/* binding */ throttleWithRaf)
/* harmony export */ });
// https://jsperf.com/finding-maximum-element-in-an-array
function getMaxMin(array) {
  const length = array.length;
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < length; i++) {
    const value = array[i];
    if (value > max) {
      max = value;
    } else if (value < min) {
      min = value;
    }
  }
  return {
    max,
    min
  };
}

// https://jsperf.com/multi-array-concat/24
function mergeArrays(arrays) {
  return [].concat.apply([], arrays);
}
function sumArrays(arrays) {
  const sums = [];
  const n = arrays.length;
  for (let i = 0, l = arrays[0].length; i < l; i++) {
    sums[i] = 0;
    for (let j = 0; j < n; j++) {
      sums[i] += arrays[j][i];
    }
  }
  return sums;
}
function proxyMerge(obj1, obj2) {
  return new Proxy({}, {
    get: (obj, prop) => {
      if (obj[prop] !== undefined) {
        return obj[prop];
      } else if (obj2[prop] !== undefined) {
        return obj2[prop];
      } else {
        return obj1[prop];
      }
    }
  });
}
function throttle(fn, ms, shouldRunFirst = true) {
  let interval = null;
  let isPending;
  let args;
  return (..._args) => {
    isPending = true;
    args = _args;
    if (!interval) {
      if (shouldRunFirst) {
        isPending = false;
        // @ts-ignore
        fn(...args);
      }
      interval = window.setInterval(() => {
        if (!isPending) {
          window.clearInterval(interval);
          interval = null;
          return;
        }
        isPending = false;
        // @ts-ignore
        fn(...args);
      }, ms);
    }
  };
}
function throttleWithRaf(fn) {
  let waiting = false;
  let args;
  return function (..._args) {
    args = _args;
    if (!waiting) {
      waiting = true;
      requestAnimationFrame(() => {
        waiting = false;
        fn(...args);
      });
    }
  };
}
function debounce(fn, ms, shouldRunFirst = true, shouldRunLast = true) {
  let waitingTimeout = null;
  return function () {
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = null;
    } else if (shouldRunFirst) {
      fn();
    }
    waitingTimeout = setTimeout(() => {
      if (shouldRunLast) {
        fn();
      }
      waitingTimeout = null;
    }, ms);
  };
}

/***/ })

}]);
//# sourceMappingURL=src_lib_lovely-chart_LovelyChart_js.64dd210615fd37d87e2f.js.map