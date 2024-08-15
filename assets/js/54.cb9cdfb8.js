(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{380:function(t,e,r){"use strict";r.r(e);var v=r(4),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Vue 组件生命周期包括创建、挂载、更新和销毁四个阶段。在父子组件关系中，每个组件都有自己的生命周期，而且它们的生命周期钩子函数会按照一定的顺序执行。")]),t._v(" "),e("h3",{attrs:{id:"父组件生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父组件生命周期"}},[t._v("#")]),t._v(" 父组件生命周期：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("beforeCreate")]),t._v(": 在实例初始化之后，数据观测 (data observation) 和 event/watcher 事件配置之前被调用。")]),t._v(" "),e("li",[e("strong",[t._v("created")]),t._v(": 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observation)，属性和方法的运算，watch/event 事件回调。但是，挂载阶段还没开始，$el 属性目前不可见。")]),t._v(" "),e("li",[e("strong",[t._v("beforeMount")]),t._v(": 在挂载开始之前被调用：相关的 render 函数首次被调用。")]),t._v(" "),e("li",[e("strong",[t._v("mounted")]),t._v(": el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子函数。此时组件已经完成挂载，可以访问到组件中的 DOM 节点。")])]),t._v(" "),e("h3",{attrs:{id:"子组件生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子组件生命周期"}},[t._v("#")]),t._v(" 子组件生命周期：")]),t._v(" "),e("p",[t._v("父组件挂载阶段涉及到子组件的生命周期：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("beforeCreate")]),t._v(" 和 "),e("strong",[t._v("created")]),t._v("：子组件在父组件的这两个生命周期阶段之后执行。")]),t._v(" "),e("li",[e("strong",[t._v("beforeMount")]),t._v(" 和 "),e("strong",[t._v("mounted")]),t._v("：子组件的挂载生命周期与父组件的挂载生命周期是同步的，即子组件在父组件挂载到 DOM 前后分别执行。\n当子组件")])]),t._v(" "),e("h3",{attrs:{id:"更新阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("beforeUpdate")]),t._v(": 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。")]),t._v(" "),e("li",[e("strong",[t._v("updated")]),t._v(": 在数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。")])]),t._v(" "),e("h3",{attrs:{id:"销毁阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁阶段"}},[t._v("#")]),t._v(" 销毁阶段：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("beforeDestroy")]),t._v(": 实例销毁之前调用。在这一步，实例仍然完全可用。")]),t._v(" "),e("li",[e("strong",[t._v("destroyed")]),t._v(": 实例销毁后调用。在这一步，Vue 实例的所有指令都被解绑定，所有事件监听器被移除，所有子实例被销毁。")])]),t._v(" "),e("p",[t._v("在父子组件关系中，父组件的生命周期函数会在子组件的生命周期函数之前调用。在更新和销毁阶段，父子组件的生命周期函数执行顺序是先子后父。")])])}),[],!1,null,null,null);e.default=_.exports}}]);