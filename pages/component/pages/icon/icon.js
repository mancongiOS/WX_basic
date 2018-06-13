// pages/component/pages/icon/icon.js
Page({
  data: {
    iconData: [
      {
        iconSize : 20,
        iconColor: 'red',
        iconType : "success"
      },
      {
        iconSize: 30,
        iconColor: "orange",
        iconType: "success_no_circle"
      },
      {
        iconSize: 40,
        iconColor: "yellow",
        iconType: "info"
      },
      {
        iconSize: 50,
        iconColor: "green",
        iconType: "warn"
      },
      {
        iconSize: 60,
        iconColor: "rgb(0,255,255)",
        iconType: "waiting"
      },
      {
        iconSize: 70,
        iconColor: "blue",
        iconType: "cancel"
      },
      {
        iconSize: 80,
        iconColor: "purple",
        iconType: "download"
      },
      {
        iconSize: 90,
        iconColor: "black",
        iconType: "search"
      },
      {
        iconSize: 100,
        iconColor: "lightGreen",
        iconType: "clear"
      }
    ]
  },
  
  iconTap:function(event) {
    var iconIndex = event.target.dataset.icon;
    var dict = this.data.iconData[iconIndex];
    var iconType = dict["iconType"];
    wx.showToast({
      title: iconType,
      icon : "none",
      duration : 1500
    })

    console.log(dict);
  }
})