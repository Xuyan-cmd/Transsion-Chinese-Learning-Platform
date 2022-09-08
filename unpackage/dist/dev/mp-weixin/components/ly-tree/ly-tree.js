(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ly-tree/ly-tree"],{

/***/ 85:
/*!*******************************************************************!*\
  !*** C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ly-tree.vue?vue&type=template&id=047833c2& */ 86);
/* harmony import */ var _ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ly-tree.vue?vue&type=script&lang=js& */ 88);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ly-tree.vue?vue&type=style&index=0&lang=css& */ 93);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/ly-tree/ly-tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/*!**************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=template&id=047833c2& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ly-tree.vue?vue&type=template&id=047833c2& */ 87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_template_id_047833c2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 87:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=template&id=047833c2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = !_vm.showLoading
    ? _vm.__map(_vm.childNodesId, function(nodeId, __i0__) {
        var $orig = _vm.__get_orig(nodeId)

        var m0 = _vm.getNodeKey(nodeId)
        return {
          $orig: $orig,
          m0: m0
        }
      })
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 88:
/*!********************************************************************************************!*\
  !*** C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ly-tree.vue?vue&type=script&lang=js& */ 89);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _treeStore = _interopRequireDefault(__webpack_require__(/*! ./model/tree-store.js */ 90));
var _util = __webpack_require__(/*! ./tool/util.js */ 92);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var LyTreeNode = function LyTreeNode() {__webpack_require__.e(/*! require.ensure | components/ly-tree/ly-tree-node */ "components/ly-tree/ly-tree-node").then((function () {return resolve(__webpack_require__(/*! ./ly-tree-node.vue */ 110));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default2 = { name: 'LyTree', componentName: 'LyTree', components: { LyTreeNode: LyTreeNode }, data: function data() {return { updateKey: new Date().getTime(), // 数据更新的时候，重新渲染树
      elId: "ly_".concat(Math.ceil(Math.random() * 10e5).toString(36)), visible: true, store: { ready: false }, currentNode: null, childNodesId: [] };}, provide: function provide() {return { tree: this };}, props: { // 展示数据
    treeData: Array, // 自主控制loading加载，避免数据还没获取到的空档出现“暂无数据”字样
    ready: {
      type: Boolean,
      default: true },


    // 内容为空的时候展示的文本
    emptyText: {
      type: String,
      default: '暂无数据' },


    // 是否在第一次展开某个树节点后才渲染其子节点
    renderAfterExpand: {
      type: Boolean,
      default: true },


    // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    nodeKey: String,

    // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
    checkStrictly: Boolean,

    // 是否默认展开所有节点
    defaultExpandAll: Boolean,

    // 切换全部展开、全部折叠
    toggleExpendAll: Boolean,

    // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点
    expandOnClickNode: {
      type: Boolean,
      default: true },


    // 选中的时候展开节点
    expandOnCheckNode: {
      type: Boolean,
      default: true },


    // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false },


    // 展开子节点的时候是否自动展开父节点
    autoExpandParent: {
      type: Boolean,
      default: true },


    // 默认勾选的节点的 key 的数组
    defaultCheckedKeys: Array,

    // 默认展开的节点的 key 的数组
    defaultExpandedKeys: Array,

    // 是否展开当前节点的父节点
    expandCurrentNodeParent: Boolean,

    // 当前选中的节点
    currentNodeKey: [String, Number],

    // 是否最后一层叶子节点才显示单选/多选框
    checkOnlyLeaf: {
      type: Boolean,
      default: false },


    // 节点是否可被选择
    showCheckbox: {
      type: Boolean,
      default: false },


    // 节点单选
    showRadio: {
      type: Boolean,
      default: false },


    // 配置选项
    props: {
      type: [Object, Function],
      default: function _default() {
        return {
          children: 'children', // 指定子树为节点对象的某个属性值
          label: 'label', // 指定节点标签为节点对象的某个属性值
          disabled: 'disabled' //	指定节点选择框是否禁用为节点对象的某个属性值
        };
      } },


    // 是否懒加载子节点，需与 load 方法结合使用
    lazy: {
      type: Boolean,
      default: false },


    // 是否高亮当前选中节点，默认值是 false
    highlightCurrent: Boolean,

    // 加载子树数据的方法，仅当 lazy 属性为true 时生效
    load: Function,

    // 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
    filterNodeMethod: Function,

    // 搜索时是否展示匹配项的所有子节点
    childVisibleForFilterNode: {
      type: Boolean,
      default: false },


    // 是否每次只打开一个同级树节点展开
    accordion: Boolean,

    // 相邻级节点间的水平缩进，单位为像素
    indent: {
      type: Number,
      default: 18 },


    // 自定义树节点的展开图标
    iconClass: String,

    // 是否显示节点图标，如果配置为true,需要配置props中对应的图标属性名称
    showNodeIcon: {
      type: Boolean,
      default: false },


    // 当节点图标显示出错时，显示的默认图标
    defaultNodeIcon: {
      type: String,
      default: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/github.svg' },


    // 如果数据量较大，建议不要在node节点中添加parent属性，会造成性能损耗
    isInjectParentInNode: {
      type: Boolean,
      default: false } },



  computed: {
    isEmpty: function isEmpty() {
      if (this.store.root) {
        var childNodes = this.store.root.getChildNodes(this.childNodesId);

        return !childNodes || childNodes.length === 0 || childNodes.every(function (_ref) {var visible = _ref.visible;return !visible;});
      }

      return true;
    },
    showLoading: function showLoading() {
      return !(this.store.ready && this.ready);
    } },


  watch: {
    toggleExpendAll: function toggleExpendAll(newVal) {
      this.store.toggleExpendAll(newVal);
    },
    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
      this.store.setDefaultCheckedKey(newVal);
    },
    defaultExpandedKeys: function defaultExpandedKeys(newVal) {
      this.store.defaultExpandedKeys = newVal;
      this.store.setDefaultExpandedKeys(newVal);
    },
    checkStrictly: function checkStrictly(newVal) {
      this.store.checkStrictly = newVal || this.checkOnlyLeaf;
    },
    'store.root.childNodesId': function storeRootChildNodesId(newVal) {
      this.childNodesId = newVal;
    },
    'store.root.visible': function storeRootVisible(newVal) {
      this.visible = newVal;
    },
    childNodesId: function childNodesId() {var _this = this;
      this.$nextTick(function () {
        _this.$emit('ly-tree-render-completed');
      });
    },
    treeData: {
      handler: function handler(newVal) {
        this.updateKey = new Date().getTime();
        this.store.setData(newVal);
      },
      deep: true } },



  methods: {
    /*
              * @description 对树节点进行筛选操作
              * @method filter
              * @param {all} value 在 filter-node-method 中作为第一个参数
              * @param {Object} data 搜索指定节点的节点数据，不传代表搜索所有节点，假如要搜索A节点下面的数据，那么nodeData代表treeData中A节点的数据
             */
    filter: function filter(value, data) {
      if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
      this.store.filter(value, data);
    },

    /*
        * @description 获取节点的唯一标识符
        * @method getNodeKey
        * @param {String, Number} nodeId
        * @return {String, Number} 匹配到的数据中的某一项数据
       */
    getNodeKey: function getNodeKey(nodeId) {
      var node = this.store.root.getChildNodes([nodeId])[0];
      return (0, _util.getNodeKey)(this.nodeKey, node.data);
    },

    /*
        * @description 获取节点路径
        * @method getNodePath
        * @param {Object} data 节点数据
        * @return {Array} 路径数组
       */
    getNodePath: function getNodePath(data) {
      return this.store.getNodePath(data);
    },

    /*
        * @description 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组
        * @method getCheckedNodes
        * @param {Boolean} leafOnly 是否只是叶子节点，默认false
        * @param {Boolean} includeHalfChecked 是否包含半选节点，默认false
        * @return {Array} 目前被选中的节点所组成的数组
       */
    getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
      return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
    },

    /*
        * @description 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
        * @method getCheckedKeys
        * @param {Boolean} leafOnly 是否只是叶子节点，默认false,若为 true 则仅返回被选中的叶子节点的 keys
        * @param {Boolean} includeHalfChecked 是否返回indeterminate为true的节点，默认false
        * @return {Array} 目前被选中的节点所组成的数组
       */
    getCheckedKeys: function getCheckedKeys(leafOnly, includeHalfChecked) {
      return this.store.getCheckedKeys(leafOnly, includeHalfChecked);
    },

    /*
        * @description 获取当前被选中节点的 data，若没有节点被选中则返回 null
        * @method getCurrentNode
        * @return {Object} 当前被选中节点的 data，若没有节点被选中则返回 null
       */
    getCurrentNode: function getCurrentNode() {
      var currentNode = this.store.getCurrentNode();
      return currentNode ? currentNode.data : null;
    },

    /*
        * @description 获取当前被选中节点的 key，若没有节点被选中则返回 null
        * @method getCurrentKey
        * @return {all} 当前被选中节点的 key， 若没有节点被选中则返回 null
       */
    getCurrentKey: function getCurrentKey() {
      var currentNode = this.getCurrentNode();
      return currentNode ? currentNode[this.nodeKey] : null;
    },

    /*
        * @description 设置全选/取消全选
        * @method setCheckAll
        * @param {Boolean} isCheckAll 选中状态,默认为true
       */
    setCheckAll: function setCheckAll() {var isCheckAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.showRadio) throw new Error('You set the "show-radio" property, so you cannot select all nodes');

      if (!this.showCheckbox) console.warn('You have not set the property "show-checkbox". Please check your settings');

      this.store.setCheckAll(isCheckAll);
    },

    /*
        * @description 设置目前勾选的节点
        * @method setCheckedNodes
        * @param {Array} nodes 接收勾选节点数据的数组
        * @param {Boolean} leafOnly 是否只是叶子节点, 若为 true 则仅设置叶子节点的选中状态，默认值为 false
       */
    setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
      this.store.setCheckedNodes(nodes, leafOnly);
    },

    /*
        * @description 通过 keys 设置目前勾选的节点
        * @method setCheckedKeys
        * @param {Array} keys 勾选节点的 key 的数组 
        * @param {Boolean} leafOnly 是否只是叶子节点, 若为 true 则仅设置叶子节点的选中状态，默认值为 false
       */
    setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
      this.store.setCheckedKeys(keys, leafOnly);
    },

    /*
        * @description 通过 key / data 设置某个节点的勾选状态
        * @method setChecked
        * @param {all} data 勾选节点的 key 或者 data 
        * @param {Boolean} checked 节点是否选中
        * @param {Boolean} deep 是否设置子节点 ，默认为 false
       */
    setChecked: function setChecked(data, checked, deep) {
      this.store.setChecked(data, checked, deep);
    },

    /*
        * @description 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组
        * @method getHalfCheckedNodes
        * @return {Array} 目前半选中的节点所组成的数组
       */
    getHalfCheckedNodes: function getHalfCheckedNodes() {
      return this.store.getHalfCheckedNodes();
    },

    /*
        * @description 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
        * @method getHalfCheckedKeys
        * @return {Array} 目前半选中的节点的 key 所组成的数组
       */
    getHalfCheckedKeys: function getHalfCheckedKeys() {
      return this.store.getHalfCheckedKeys();
    },

    /*
        * @description 通过 node 设置某个节点的当前选中状态
        * @method setCurrentNode
        * @param {Object} node 待被选节点的 node
       */
    setCurrentNode: function setCurrentNode(node) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
      this.store.setUserCurrentNode(node);
    },

    /*
        * @description 通过 key 设置某个节点的当前选中状态
        * @method setCurrentKey
        * @param {all} key 待被选节点的 key，若为 null 则取消当前高亮的节点
       */
    setCurrentKey: function setCurrentKey(key) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
      this.store.setCurrentNodeKey(key);
    },

    /*
        * @description 根据 data 或者 key 拿到 Tree 组件中的 node
        * @method getNode
        * @param {all} data 要获得 node 的 key 或者 data
       */
    getNode: function getNode(data) {
      return this.store.getNode(data);
    },

    /*
        * @description 删除 Tree 中的一个节点
        * @method remove
        * @param {all} data 要删除的节点的 data 或者 node
       */
    remove: function remove(data) {
      this.store.remove(data);
    },

    /*
        * @description 为 Tree 中的一个节点追加一个子节点
        * @method append
        * @param {Object} data 要追加的子节点的 data 
        * @param {Object} parentNode 子节点的 parent 的 data、key 或者 node
       */
    append: function append(data, parentNode) {
      this.store.append(data, parentNode);
    },

    /*
        * @description 为 Tree 的一个节点的前面增加一个节点
        * @method insertBefore
        * @param {Object} data 要增加的节点的 data 
        * @param {all} refNode 要增加的节点的后一个节点的 data、key 或者 node
       */
    insertBefore: function insertBefore(data, refNode) {
      this.store.insertBefore(data, refNode);
    },

    /*
        * @description 为 Tree 的一个节点的后面增加一个节点
        * @method insertAfter
        * @param {Object} data 要增加的节点的 data 
        * @param {all} refNode 要增加的节点的前一个节点的 data、key 或者 node
       */
    insertAfter: function insertAfter(data, refNode) {
      this.store.insertAfter(data, refNode);
    },

    /*
        * @description 通过 keys 设置节点子元素
        * @method updateKeyChildren
        * @param {String, Number} key 节点 key 
        * @param {Object} data 节点数据的数组
       */
    updateKeyChildren: function updateKeyChildren(key, data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
      this.store.updateChildren(key, data);
    } },


  created: function created() {
    this.isTree = true;

    var props = this.props;
    if (typeof this.props === 'function') props = this.props();
    if (typeof props !== 'object') throw new Error('props must be of object type.');

    this.store = new _treeStore.default({
      key: this.nodeKey,
      data: this.treeData,
      lazy: this.lazy,
      props: props,
      load: this.load,
      showCheckbox: this.showCheckbox,
      showRadio: this.showRadio,
      currentNodeKey: this.currentNodeKey,
      checkStrictly: this.checkStrictly || this.checkOnlyLeaf,
      checkDescendants: this.checkDescendants,
      expandOnCheckNode: this.expandOnCheckNode,
      defaultCheckedKeys: this.defaultCheckedKeys,
      defaultExpandedKeys: this.defaultExpandedKeys,
      expandCurrentNodeParent: this.expandCurrentNodeParent,
      autoExpandParent: this.autoExpandParent,
      defaultExpandAll: this.defaultExpandAll,
      filterNodeMethod: this.filterNodeMethod,
      childVisibleForFilterNode: this.childVisibleForFilterNode,
      showNodeIcon: this.showNodeIcon,
      isInjectParentInNode: this.isInjectParentInNode });


    this.childNodesId = this.store.root.childNodesId;
  },

  beforeDestroy: function beforeDestroy() {
    if (this.accordion) {
      uni.$off("".concat(this.elId, "-tree-node-expand"));
    }
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 93:
/*!****************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ly-tree.vue?vue&type=style&index=0&lang=css& */ 94);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ly_tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/传音3.0/components/ly-tree/ly-tree.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ly-tree/ly-tree.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ly-tree/ly-tree-create-component',
    {
        'components/ly-tree/ly-tree-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(85))
        })
    },
    [['components/ly-tree/ly-tree-create-component']]
]);
