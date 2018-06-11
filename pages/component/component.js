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
      { "name": "视图容器 view", "detail": "视图容器" },
      { "name": "视图容器 scroll-view", "detail": "可滚动视图区域" },
      { "name": "滑块视图 swiper", "detail": "滑块视图容器" }
    ];

    this.setData({
      dataArr: arr
    })
  },

  // 点击事件
  onEntryTap: function (event) {
    var name = event.currentTarget.dataset.name;

    switch (name) {
      case "视图容器 view":
        wx.navigateTo({
          url: '/pages/component/pages/view/view',
        });
        break
      case "视图容器 scroll-view":
        wx.navigateTo({
          url: '/pages/component/pages/scroll-view/scroll-view',
        });
        break
      case "滑块视图 swiper":
        wx.navigateTo({
          url: '/pages/component/pages/swiper/swiper',
        });
        break
      default:
        break
    }

  }
})