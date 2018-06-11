// pages/component/pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1    // 默认滑动到第几页

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setData({
      index: that.index
    })
  },

  bindchange: function (event) {
    console.log("bindchange");

    console.log(event);
  },
  onItemClick: function (event) {
    wx.showToast({
      icon: "none",
      title: "postid=" + event.target.dataset.postid,
    })
  },
  animationfinish: function (event) {
    console.log("animationfinish");
    console.log(event);
  }
})