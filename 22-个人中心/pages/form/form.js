// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        id:'0',
        name:'tom',
        checked:true,
        value:'CHA'
      },
      {
        id:'1',
        name:'marry',
        checked:false,
        value:'CHA'
      },
      {
        id:'2',
        name:'jhon',
        checked:false,
        value:'USA'
      }
    ],
    radioItems:[
      {
        name:'usa',
        value:'美国',
        checked:true
      },
      {
        name:'china',
        value:'中国',
        checked:false
      },
      {
        name:'korea',
        value:'韩国',
        checked:false
      }
    ],
    country:['中国','美国','日本','韩国'],
    pickIndex:0,

    multiArr:[
      ["中国","北京","上海"],
      ["美国","纽约","华盛顿"],
      ["日本","大阪","名古屋"]
    ],
    multiIndex:[0,0,0],

    pickTime:0,

    pickDate:0,

    pickAddress:'北京市'
  },

  checkbind(e){
    console.log(e.detail.value);
  },

  checkChange(e){
    console.log(e);
    console.log(e.detail.value);
  },

  onstatusChange(e){
    console.log(e.detail);
  },

  /**
   * 手机键盘输入法 点击完成按钮触发的事件 
   */
  inputConfirm(e){
    console.log(e.detail);
  },

  radioChange(e){
    console.log(e);
    let value = e.detail.value;
    let changed = {};
    for(let i = 0; i < this.data.radioItems.length; i++){
      if(value.indexOf(this.data.radioItems.name) !== -1){
        changed['radioItems['+ i + '].checked'] = true;
      }else{
        changed['radioItems['+ i + '].checked'] = false;
      }
    }
    console.log(changed);
  },

  bindPickChange(e){
    this.setData({
      pickIndex:e.detail.value
    })
  },

  bindMultiPickerChagne(){

  },

  bindMultiPickerColumnChange(e){
    console.log("修改的列为：",e.detail.column, "值为",e.detail.value);
    const arr = [...this.data.multiIndex];
    arr[e.detail.column] = e.detail.value;
    this.setData({
      multiIndex:arr
    });
  },

  bindTimeChange(e){
    this.setData({
      pickTime:e.detail.value
    });
  },

  bindDateChange(e){
    console.log(e.detail);
    this.setData({
      pickDate:e.detail.value
    });
  },

  bindAddressChange(e){
    this.setData({
      pickAddress:e.detail.value
    });
  },

  sliderChange(e){
    console.log(e.detail.value);
  },

  switch1Change(e){
    console.log(e.detail.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})