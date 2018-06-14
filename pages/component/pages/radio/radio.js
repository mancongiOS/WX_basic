Page({
  data: {
    items: [
      { name: 'USA', value: '美国', disabled: true},
      { name: 'CHN', value: '中国', checked: true },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    seleted : ""
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let value = e.detail.value;
    this.setData({
      seleted : "选中的value：" + value
    })
  }
})