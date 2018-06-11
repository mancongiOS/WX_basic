// pages/component/pages/scroll-view/scroll-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  scrolltolower:function(event) {
    console.log(event);
    this.setData({
      top:50
    })
  },
  scrolltoupper:function(event) {
    // console.log(event);
  },
  bindscroll:function(event) {
    console.log(event);
  }
})