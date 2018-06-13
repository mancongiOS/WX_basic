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
      { "name": "视图容器 view",         "detail": "视图容器" },
      { "name": "视图容器 scroll-view",  "detail": "可滚动视图" },
      { "name": "视图容器 swiper",       "detail": "滑块视图容器" },
      { "name": "视图容器 movable-view", "detail": "移动视图" },
      { "name": "视图容器 cover-view",   "detail": "覆盖视图" },
      {},
      {},

      { "name": "基础内容 icon", "detail": "图标" },
      { "name": "基础内容 text", "detail": "文本" },
      { "name": "基础内容 rich-text", "detail": "富文本" },
      { "name": "基础内容 progress", "detail": "进度条" },
      {},
      {},


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
      case "视图容器 swiper":
        wx.navigateTo({
          url: '/pages/component/pages/swiper/swiper',
        });
        break
      case "视图容器 movable-view":
        wx.navigateTo({
          url: '/pages/component/pages/moveable-view/moveable-view',
        });
        break
      case "视图容器 cover-view":
        wx.navigateTo({
          url: '/pages/component/pages/cover-view/cover-view',
        });
        break


      case "基础内容 icon":
        wx.navigateTo({
          url: '/pages/component/pages/icon/icon',
        });
        break
      case "基础内容 text":
        wx.navigateTo({
          url: '/pages/component/pages/text/text',
        });
        break
      case "基础内容 text-rich":
        wx.navigateTo({
          url: '/pages/component/pages/text-rich/text-rich',
        });
        break
      case "基础内容 progress":
        wx.navigateTo({
          url: '/pages/component/pages/progress/progress',
        });
        break
      default:
        break
    }

  }
})