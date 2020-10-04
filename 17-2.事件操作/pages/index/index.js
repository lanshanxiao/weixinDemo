//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navArr: ["王者荣耀", "神都探奇", "活下去", "黑暗料理王", "英魂之刃", "最强蜗牛"],
    swiperArr: ["11", "22", "33", "44", "55", "66"],
    swiperRPXHeight: 0,
    currentTab:0,
    classArr:['color-red', 'color-black', 'color-black', 'color-black', 'color-black', 'color-black']
  },

  /**
   * 点击导航栏跳转到对应的轮播页面 && 导航栏文字变红
   */
  clickNav(e){
    let colorArr = [];
    
    for(let i = 0; i < this.data.classArr.length; i++){
      if(e.currentTarget.dataset.index == i){
        colorArr.push('color-red');
      }else{
        colorArr.push('color-black');
      }
    }

    this.setData({
      currentTab:e.currentTarget.dataset.index,
      classArr:colorArr
    });
  },

  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success(res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let rpxHeight = clientHeight * ratio;
        that.setData({
          swiperRPXHeight: rpxHeight
        });
      }
    });
  }
})