// pages/component/pages/moveable-view/moveable-view.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    x: "100px",
    y: "10px"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  change: function (event) {
    // console.log(event);
  },
  scale: function (event) {
    // console.log(event);
  },
  vtouchmove: function (event) {
    console.log("纵向");
  },
  htouchmove: function (event) {
    console.log("横向");
  }
})