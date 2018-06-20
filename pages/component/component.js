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
      { "name": "视图容器 scroll-view", "detail": "可滚动视图" },
      { "name": "视图容器 swiper", "detail": "滑块视图容器" },
      { "name": "视图容器 movable-view", "detail": "移动视图" },
      { "name": "视图容器 cover-view", "detail": "覆盖视图" },
      {},
      {},

      { "name": "基础内容 icon", "detail": "图标" },
      { "name": "基础内容 text", "detail": "文本" },
      { "name": "基础内容 rich-text", "detail": "富文本  ---未完成" },
      { "name": "基础内容 progress", "detail": "进度条" },
      {},
      {},

      { "name": "表单组件 button", "detail": "按钮" },
      { "name": "表单组件 checkbox", "detail": "多项选择器" },
      { "name": "表单组件 slider", "detail": "滑动选择器" },
      { "name": "表单组件 radio", "detail": "单项选择器" },
      { "name": "表单组件 input", "detail": "输入框" },
      { "name": "表单组件 switch", "detail": "开关选择器" },
      { "name": "表单组件 picker-view", "detail": "嵌入页面的滚动选择器" },
      { "name": "表单组件 form", "detail": "表单" },


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
      case "基础内容 rich-text":
        wx.navigateTo({
          url: '/pages/component/pages/rich-text/rich-text',
        });
        break
      case "基础内容 progress":
        wx.navigateTo({
          url: '/pages/component/pages/progress/progress',
        });


      case "表单组件 button":
        wx.navigateTo({
          url: '/pages/component/pages/button/button',
        });
        break
      case "表单组件 checkbox":
        wx.navigateTo({
          url: '/pages/component/pages/checkbox/checkbox',
        });
      case "表单组件 slider":
        wx.navigateTo({
          url: '/pages/component/pages/slider/slider',
        });
        break
      case "表单组件 radio":
        wx.navigateTo({
          url: '/pages/component/pages/radio/radio',
        });
        break
      case "表单组件 input":
        wx.navigateTo({
          url: '/pages/component/pages/input/input',
        });
        break
      case "表单组件 form":
        wx.navigateTo({
          url: '/pages/component/pages/form/form',
        });
        break
      case "表单组件 switch":
        wx.navigateTo({
          url: '/pages/component/pages/switch/switch',
        });
        break
      case "表单组件 picker-view":
        wx.navigateTo({
          url: '/pages/component/pages/picker-view/picker-view',
        });
        break


      default:

        break
    }

  }
})