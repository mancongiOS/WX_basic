// pages/component/pages/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:50
  },
  change: function (event) {
    console.log(event.detail.value);
  },
  changing: function (event) {
    console.log(event.detail.value);
  }
})