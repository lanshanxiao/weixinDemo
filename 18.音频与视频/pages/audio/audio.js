// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'此时此刻',
    author:'许巍',
    src:'http://music.163.com/song/media/outer/url?id=447925558.mp3',
    poster:'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },

  
audioPlay(){
  this.audioCtx.play();
  console.log("已播放");
  console.log(this.audioCtx);
},

audioPause(){
  this.audioCtx.pause();
},

audio14(){
  this.audioCtx.seek(14);
},

audioStart(){
  this.audioCtx.seek(0);
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
    //创建一个音频对象
    this.audioCtx = wx.createAudioContext("myAudio");
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