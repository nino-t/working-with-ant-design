webpackHotUpdate(4,{

/***/ "./node_modules/react-chartjs-2/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doughnut; });
/* unused harmony export Pie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Line; });
/* unused harmony export Bar */
/* unused harmony export HorizontalBar */
/* unused harmony export Radar */
/* unused harmony export Polar */
/* unused harmony export Bubble */
/* unused harmony export Scatter */
/* unused harmony export defaults */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("./node_modules/chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isEqual__ = __webpack_require__("./node_modules/lodash/isEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_find__ = __webpack_require__("./node_modules/lodash/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keyBy__ = __webpack_require__("./node_modules/lodash/keyBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keyBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_keyBy__);
/* unused harmony reexport Chart */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var NODE_ENV = typeof process !== 'undefined' && process.env && "development";

var ChartComponent = function (_React$Component) {
  _inherits(ChartComponent, _React$Component);

  function ChartComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, ChartComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleOnClick = function (event) {
      var instance = _this.chartInstance;

      var _this$props = _this.props,
          getDatasetAtEvent = _this$props.getDatasetAtEvent,
          getElementAtEvent = _this$props.getElementAtEvent,
          getElementsAtEvent = _this$props.getElementsAtEvent,
          onElementsClick = _this$props.onElementsClick;


      getDatasetAtEvent && getDatasetAtEvent(instance.getDatasetAtEvent(event), event);
      getElementAtEvent && getElementAtEvent(instance.getElementAtEvent(event), event);
      getElementsAtEvent && getElementsAtEvent(instance.getElementsAtEvent(event), event);
      onElementsClick && onElementsClick(instance.getElementsAtEvent(event), event); // Backward compatibility
    }, _this.ref = function (element) {
      _this.element = element;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ChartComponent.prototype.componentWillMount = function componentWillMount() {
    this.chartInstance = undefined;
  };

  ChartComponent.prototype.componentDidMount = function componentDidMount() {
    this.renderChart();
  };

  ChartComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.redraw) {
      this.chartInstance.destroy();
      this.renderChart();
      return;
    }

    this.updateChart();
  };

  ChartComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _props = this.props,
        redraw = _props.redraw,
        type = _props.type,
        options = _props.options,
        plugins = _props.plugins,
        legend = _props.legend,
        height = _props.height,
        width = _props.width;


    if (nextProps.redraw === true) {
      return true;
    }

    if (height !== nextProps.height || width !== nextProps.width) {
      return true;
    }

    if (type !== nextProps.type) {
      return true;
    }

    if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default()(legend, nextProps.legend)) {
      return true;
    }

    if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default()(options, nextProps.options)) {
      return true;
    }

    var nextData = this.transformDataProp(nextProps);

    if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default()(this.shadowDataProp, nextData)) {
      return true;
    }

    return !__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default()(plugins, nextProps.plugins);
  };

  ChartComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.chartInstance.destroy();
  };

  ChartComponent.prototype.transformDataProp = function transformDataProp(props) {
    var data = props.data;

    if (typeof data == 'function') {
      var node = this.element;
      return data(node);
    } else {
      return data;
    }
  };

  // Chart.js directly mutates the data.dataset objects by adding _meta proprerty
  // this makes impossible to compare the current and next data changes
  // therefore we memoize the data prop while sending a fake to Chart.js for mutation.
  // see https://github.com/chartjs/Chart.js/blob/master/src/core/core.controller.js#L615-L617


  ChartComponent.prototype.memoizeDataProps = function memoizeDataProps() {
    if (!this.props.data) {
      return;
    }

    var data = this.transformDataProp(this.props);

    this.shadowDataProp = _extends({}, data, {
      datasets: data.datasets && data.datasets.map(function (set) {
        return _extends({}, set);
      })
    });

    return data;
  };

  ChartComponent.prototype.checkDatasets = function checkDatasets(datasets) {
    var isDev = NODE_ENV !== 'production' && NODE_ENV !== 'prod';
    var usingCustomKeyProvider = this.props.datasetKeyProvider !== ChartComponent.getLabelAsKey;
    var multipleDatasets = datasets.length > 1;

    if (isDev && multipleDatasets && !usingCustomKeyProvider) {
      var shouldWarn = false;
      datasets.forEach(function (dataset) {
        if (!dataset.label) {
          shouldWarn = true;
        }
      });

      if (shouldWarn) {
        console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.');
      }
    }
  };

  ChartComponent.prototype.updateChart = function updateChart() {
    var _this2 = this;

    var options = this.props.options;


    var data = this.memoizeDataProps(this.props);

    if (!this.chartInstance) return;

    if (options) {
      this.chartInstance.options = __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a.helpers.configMerge(this.chartInstance.options, options);
    }

    // Pipe datasets to chart instance datasets enabling
    // seamless transitions
    var currentDatasets = this.chartInstance.config.data && this.chartInstance.config.data.datasets || [];
    var nextDatasets = data.datasets || [];
    this.checkDatasets(currentDatasets);

    var currentDatasetsIndexed = __WEBPACK_IMPORTED_MODULE_5_lodash_keyBy___default()(currentDatasets, this.props.datasetKeyProvider);

    // We can safely replace the dataset array, as long as we retain the _meta property
    // on each dataset.
    this.chartInstance.config.data.datasets = nextDatasets.map(function (next) {
      var current = currentDatasetsIndexed[_this2.props.datasetKeyProvider(next)];

      if (current && current.type === next.type) {
        // The data array must be edited in place. As chart.js adds listeners to it.
        current.data.splice(next.data.length);
        next.data.forEach(function (point, pid) {
          current.data[pid] = next.data[pid];
        });

        var _data = next.data,
            otherProps = _objectWithoutProperties(next, ['data']);
        // Merge properties. Notice a weakness here. If a property is removed
        // from next, it will be retained by current and never disappears.
        // Workaround is to set value to null or undefined in next.


        return _extends({}, current, otherProps);
      } else {
        return next;
      }
    });

    var datasets = data.datasets,
        rest = _objectWithoutProperties(data, ['datasets']);

    this.chartInstance.config.data = _extends({}, this.chartInstance.config.data, rest);

    this.chartInstance.update();
  };

  ChartComponent.prototype.renderChart = function renderChart() {
    var _props2 = this.props,
        options = _props2.options,
        legend = _props2.legend,
        type = _props2.type,
        redraw = _props2.redraw,
        plugins = _props2.plugins;

    var node = this.element;
    var data = this.memoizeDataProps();

    if (typeof legend !== 'undefined' && !__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default()(ChartComponent.defaultProps.legend, legend)) {
      options.legend = legend;
    }

    this.chartInstance = new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(node, {
      type: type,
      data: data,
      options: options,
      plugins: plugins
    });
  };

  ChartComponent.prototype.render = function render() {
    var _props3 = this.props,
        height = _props3.height,
        width = _props3.width,
        onElementsClick = _props3.onElementsClick;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
      ref: this.ref,
      height: height,
      width: width,
      onClick: this.handleOnClick
    });
  };

  return ChartComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ChartComponent.getLabelAsKey = function (d) {
  return d.label;
};

ChartComponent.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
  getDatasetAtEvent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  getElementAtEvent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  getElementsAtEvent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  legend: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onElementsClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  plugins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object),
  redraw: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  type: function type(props, propName, componentName) {
    if (!__WEBPACK_IMPORTED_MODULE_2_chart_js___default.a.controllers[props[propName]]) {
      return new Error('Invalid chart type `' + props[propName] + '` supplied to' + ' `' + componentName + '`.');
    }
  },
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  datasetKeyProvider: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
ChartComponent.defaultProps = {
  legend: {
    display: true,
    position: 'bottom'
  },
  type: 'doughnut',
  height: 150,
  width: 300,
  redraw: false,
  options: {},
  datasetKeyProvider: ChartComponent.getLabelAsKey
};


/* unused harmony default export */ var _unused_webpack_default_export = (ChartComponent);

var Doughnut = function (_React$Component2) {
  _inherits(Doughnut, _React$Component2);

  function Doughnut() {
    _classCallCheck(this, Doughnut);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Doughnut.prototype.render = function render() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref) {
        return _this4.chartInstance = _ref && _ref.chartInstance;
      },
      type: 'doughnut'
    }));
  };

  return Doughnut;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Pie = function (_React$Component3) {
  _inherits(Pie, _React$Component3);

  function Pie() {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Pie.prototype.render = function render() {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref2) {
        return _this6.chartInstance = _ref2 && _ref2.chartInstance;
      },
      type: 'pie'
    }));
  };

  return Pie;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Line = function (_React$Component4) {
  _inherits(Line, _React$Component4);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this8 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref3) {
        return _this8.chartInstance = _ref3 && _ref3.chartInstance;
      },
      type: 'line'
    }));
  };

  return Line;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Bar = function (_React$Component5) {
  _inherits(Bar, _React$Component5);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  Bar.prototype.render = function render() {
    var _this10 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref4) {
        return _this10.chartInstance = _ref4 && _ref4.chartInstance;
      },
      type: 'bar'
    }));
  };

  return Bar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var HorizontalBar = function (_React$Component6) {
  _inherits(HorizontalBar, _React$Component6);

  function HorizontalBar() {
    _classCallCheck(this, HorizontalBar);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  HorizontalBar.prototype.render = function render() {
    var _this12 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref5) {
        return _this12.chartInstance = _ref5 && _ref5.chartInstance;
      },
      type: 'horizontalBar'
    }));
  };

  return HorizontalBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Radar = function (_React$Component7) {
  _inherits(Radar, _React$Component7);

  function Radar() {
    _classCallCheck(this, Radar);

    return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
  }

  Radar.prototype.render = function render() {
    var _this14 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref6) {
        return _this14.chartInstance = _ref6 && _ref6.chartInstance;
      },
      type: 'radar'
    }));
  };

  return Radar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Polar = function (_React$Component8) {
  _inherits(Polar, _React$Component8);

  function Polar() {
    _classCallCheck(this, Polar);

    return _possibleConstructorReturn(this, _React$Component8.apply(this, arguments));
  }

  Polar.prototype.render = function render() {
    var _this16 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref7) {
        return _this16.chartInstance = _ref7 && _ref7.chartInstance;
      },
      type: 'polarArea'
    }));
  };

  return Polar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Bubble = function (_React$Component9) {
  _inherits(Bubble, _React$Component9);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, _React$Component9.apply(this, arguments));
  }

  Bubble.prototype.render = function render() {
    var _this18 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref8) {
        return _this18.chartInstance = _ref8 && _ref8.chartInstance;
      },
      type: 'bubble'
    }));
  };

  return Bubble;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Scatter = function (_React$Component10) {
  _inherits(Scatter, _React$Component10);

  function Scatter() {
    _classCallCheck(this, Scatter);

    return _possibleConstructorReturn(this, _React$Component10.apply(this, arguments));
  }

  Scatter.prototype.render = function render() {
    var _this20 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, _extends({}, this.props, {
      ref: function ref(_ref9) {
        return _this20.chartInstance = _ref9 && _ref9.chartInstance;
      },
      type: 'scatter'
    }));
  };

  return Scatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var defaults = __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a.defaults;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("./node_modules/antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__ = __webpack_require__("./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card__ = __webpack_require__("./node_modules/antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker__ = __webpack_require__("./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_headHtml__ = __webpack_require__("./components/headHtml.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_chartjs_2__ = __webpack_require__("./node_modules/react-chartjs-2/es/index.js");








var _jsxFileName = "/home/nino/Documents/JS/working-with-antd/pages/index.js";




var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Member',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#bdc3c7',
    borderColor: '#bdc3c7',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#bdc3c7',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#bdc3c7',
    pointHoverBorderColor: '#bdc3c7',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: 'Mentor',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#00d2d3',
    borderColor: '#00d2d3',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#00d2d3',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#00d2d3',
    pointHoverBorderColor: '#00d2d3',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [21, 12, 23, 54, 34, 67, 23]
  }]
};
var data2 = [{
  title: 'Ant Design Title 1'
}, {
  title: 'Ant Design Title 2'
}, {
  title: 'Ant Design Title 3'
}, {
  title: 'Ant Design Title 4'
}];
var data3 = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_layouts__["a" /* MainLayout */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_headHtml__["a" /* default */], {
    subTitle: "Hello World",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "circle-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
    type: "shopping-cart",
    style: {
      fontSize: 50,
      color: '#3498db'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      paddingLeft: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Listening Dashboard"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "One morning, when Gregor Samsa woke from troubled dreams."))))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item wrap-filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "pull-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_date_picker___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default.a, {
    type: "default",
    icon: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "Export")), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item wrap-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well no-padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, "8931"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#3498db'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "+150%")))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, "1221"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#f39c12'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, "-110%")))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }, "2311"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#3498db'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, "-120%"))))))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Member Overview",
    bordered: false,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_chartjs_2__["b" /* Line */], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item wrap-top-resource",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Top Resource",
    bordered: false,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, "8931"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#3498db'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, "+150%")))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    }
  }, "1221"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#f39c12'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    }
  }, "-110%")))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "well-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  }, "Member"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  }, "2311"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "badge-kotak",
    style: {
      background: '#3498db'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }, "-120%"))))))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Language",
    bordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_chartjs_2__["a" /* Doughnut */], {
    data: data3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Regional",
    bordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    }
  }, "Hello")))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
    className: "wrap-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Top Member",
    bordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a, {
    itemLayout: "horizontal",
    dataSource: data2,
    renderItem: function renderItem(item) {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item.Meta, {
        avatar: __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a, {
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }),
        title: __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("a", {
          href: "https://ant.design",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        }, item.title),
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    }
  }))), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a, {
    title: "Top Mentor",
    bordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    }
  }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a, {
    itemLayout: "horizontal",
    dataSource: data2,
    renderItem: function renderItem(item) {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item.Meta, {
        avatar: __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a, {
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }),
        title: __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("a", {
          href: "https://ant.design",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }, item.title),
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    }
  })))))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.77906345b8fffde7d9ab.hot-update.js.map