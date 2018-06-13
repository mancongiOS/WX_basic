Page({
  onReady: function (options) {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play: function (event) {
    this.videoCtx.play()

    wx.showToast({
      title: '开始播放',
      icon: "none",
      duration: 1500
    })
  },
  pause: function (event) {
    this.videoCtx.pause()
    wx.showToast({
      title: '暂停播放',
      icon: "none",
      duration: 1500
    })
  }
})