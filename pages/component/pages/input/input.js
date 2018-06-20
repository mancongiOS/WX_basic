// pages/component/pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  focus:function (event) {
    console.log("focus");
  },
  blur: function (event) {
    console.log("blur");
  },
  input: function (event) {
    console.log("input");
  },
  confirm: function (event) {
    console.log("confirm");
  }
})