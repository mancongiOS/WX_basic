// pages/component/pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onGotUserInfo:function (event) {
    console.log(event.detail.userInfo.nickName);
    var nickName = event.detail.userInfo.nickName;
    var avatarUrl = event.detail.userInfo.avatarUrl;
    wx.showToast({
      title: nickName,
      image: avatarUrl,
    })
  },
  getphonenumber: function (e) {
    console.log(e)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
    // if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
    //   wx.showModal({
    //     title: '提示',
    //     showCancel: false,
    //     content: '未授权',
    //     success: function (res) { }
    //   })
    // } else {
    //   wx.showModal({
    //     title: '提示',
    //     showCancel: false,
    //     content: '同意授权',
    //     success: function (res) { }
    //   })
    // }  
  },
  launchAppError: function (e) {
    console.log(e.detail.errMsg)
  },
  contact: function (event) {
    console.log(event);
  }

})