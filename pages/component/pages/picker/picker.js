// pages/component/pages/picker/picker.js
Page({
  data: {
    // 普通选择器
    array: ['苹果', '橘子', '香蕉', '西红柿'],  // 字符串数组
    index: 1,  // 默认选中第几行
    objectArray: [    // 对象数组
      { id: 0, name: '苹果' },
      { id: 1, name: '橘子' },
      { id: 2, name: '香蕉' },
      { id: 3, name: '西红柿'}
    ],


    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 1, 2],


    // 时间选择器
    timeValue: "12:00",  // 选中的时间
    start: "00:00", // 开始时间
    end: "24:00",


    // 日期
    dateValue: "2018-06-21",   // 日期选中时间
    dateStart: "2018-01-01",   // 日期开始时间
    dateEnd: "2018-12-30",     // 日期结束时间


    // 省市区  
    regionValue: ["山东省","枣庄市","滕州市"],
    custom : "全部",
  },
  bindPickerChange: function (event) {
    console.log('picker发送选择改变，携带值为', event.detail.value)
    this.setData({
      index: event.detail.value
    })
  },
  cancel: function (event) {
    console.log("取消了");
  },

  multiBindchange: function (event) {
    console.log('picker发送选择改变，携带值为', event.detail.value)
    this.setData({
      multiIndex: [event.detail.value[0], event.detail.value[1], event.detail.value[2]]
    })
  },
  multiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  },

  timeChange: function (event) {
    let time = event.detail.value;

    console.log(event);
    this.setData({
      timeValue: time
    });
  },


  dateChange: function (event) {
    let date = event.detail.value;

    console.log(event);
    this.setData({
      dateValue: date
    });
  },

  regionChange: function (event) {
    let region = event.detail.value;

    console.log(event);
    this.setData({
      regionValue: region
    });
  },
})