// pages/component/pages/checkbox/checkbox.js
Page({

  data: {
    items: [
      { name: 'USA', value: '美国', color: 'red', disabled:true},
      { name: 'CHN', value: '中国', checked: 'true', color: 'green' },
      { name: 'BRA', value: '巴西', color: 'purple' },
      { name: 'JPN', value: '日本', color: 'orange' },
      { name: 'ENG', value: '英国', color: 'black' },
      { name: 'TUR', value: '法国', color: 'gray' },
    ],
    seletedStr : ""
  },

  checkboxChange : function (event) {
    console.log('checkbox发生change事件，携带value值为：', event.detail.value)

    this.setData({
      seletedStr: "选中的values值：" + event.detail.value
    });
  }
})