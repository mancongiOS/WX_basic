// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = [
      { "name": "界面-提示语", "image": "/images/kind_api/page.png" },
      { "name": "开放接口", "image": "/images/kind_api/api.png" }
    ];

    this.setData({
      dataArr: arr
    })
  },

  // 点击事件
  onJumpTap: function (event) {
    let name = event.currentTarget.dataset.apiid;

    switch (name) {
      case "界面-提示语":
      wx.navigateTo({
        url: '/pages/api/pages/promptBox/promptBox',
      });
      console.log("界面");
      default:
      break
    }
  }
})