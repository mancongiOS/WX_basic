// pages/组件/组件.js
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
      { "name": "视图容器", "image": "/images/kind/view.png" },
      { "name": "基础内容", "image": "/images/kind/content.png" }
    ];

    this.setData({
      dataArr: arr
    })
  },

  // 点击事件
  onEntryTap: function (event) {
    var entryId = event.currentTarget.dataset.entryid;
  }
})