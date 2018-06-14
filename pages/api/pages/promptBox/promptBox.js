// pages/api/pages/promptBox/promptBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 点击事件 
   */

  // 消息提示框
  oneTap: function (event) {
    wx.showToast({
      // 提示内容
      title: "显示消息提示框",
      /** 系统默认的icon样式
       * 
       * "success" -> 成功        此时 title 文本最多显示 7 个汉字长度
       * "loading" -> 加载中      此时 title 文本最多显示 7 个汉字长度
       * "none"    -> 纯文字展示   此时 title 文本最多可显示两行
      */
      icon: "none",

      /** 自定义图标的本地路径
       * image 的优先级高于 icon
       * */
      image: "/images/kind_api/feedback.png",
      /** 提示的延迟时间
       * 单位毫秒，默认：1500
      */
      duration: 2000,
      /** 是否显示透明蒙层
       * 防止触摸穿透，默认：false
      */
      mask: false,
    })
  },
  // 隐藏消息提示框
  twoTap: function (event) {
    wx.hideToast()
  },
  // loading提示框
  threeTap: function (event) {
    wx.showLoading({
      title: 'loading提示框',
      mask: false,
    })
  },
  // 隐藏loading提示框
  fourTap: function (event) {
    wx.hideLoading()
  },
  // 显示模态弹窗
  fiveTap: function (event) {
    wx.showModal({
      // title: '模态弹窗',
      content: '显示模态弹窗的详情',
      showCancel: true,           // 是否显示取消按钮，默认为 true
      // cancelText : "自定取消",
      // cancelColor: "red",
      confirmText : "确定",
      // confirmColor : "green",

      /** success返回参数说明
       * confirm 为 true 时，表示用户点击了确定按钮
       * cancel 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
      */
      success: function(res) {
        if (res.confirm) {
          console.log("点击了确定");
        }
        if (res.cancel) {
          console.log("点击了取消");
        }
      }
    })
  },
  // ​显示操作菜单
  sixTap: function (event) {
    wx.showActionSheet({
      itemList: ["A","B","C"],
      success : function(res) {
        console.log(res.tapIndex);
      },
      fail : function(res) {
        console.log(res.errMsg);
      }
    })
  },
})
