// pages/personCenter/personCenter.js
Page({
  personName: '',
  password: '',
  gender: '1',
  hobby: ['toy'],
  birthday: '',
  workYears: '1',
  isMember: 'false',
  /**
   * 页面的初始数据
   */
  data: {

  },

  inputName(e) {
    this.personName = e.detail.value;
  },

  inputPassword(e) {
    this.password = e.detail.value;
  },

  radioGender(e) {
    console.log(e.detail.value);
    this.gender = e.detail.value;
  },

  checkboxHobby(e) {
    this.hobby = e.detail.value;
  },

  pickerBirthday(e) {
    this.birthday = e.detail.value;
  },

  sliderStudyYear(e) {
    this.workYears = e.detail.value;
  },

  switchIsMember(e) {
    this.isMember = e.detail.value;
  },

  regFormSubmit() {
    let memberData = {
      personName: this.personName,
      password: this.password,
      gender: this.gender,
      hobby: this.hobby,
      birthday: this.birthday,
      workYears: this.workYears,
      isMember: this.isMember
    };

    if(memberData.personName == ''){
      wx.showModal({
        title:'error',
        content:'姓名没有填写'
      });
    }

    // 向服务器提交(含云)
    console.log(memberData);
  },

  regFormReset() {

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