Page({
  requestUrl: 'https://www.baidu.com/s?wd=苹果',
  requestTask: '',

  filePath: 'http://www.duyiedu.com/source/img/3/3.png',
  downloadTask: '',
  data: {
    imagePath: '',
    per: ''
  },
  requestOption(e) {
    this.requestTask = wx.request({
      url: this.requestUrl,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success(res) {
        if (res.statusCode == 200) {
          console.log('[success]', res);
        }
      },
      fail(res) {
        console.log('[fail]', res);
      },
      complete(res) {
        console.log('[complete]', res);
      }
    })
  },
  requestAbort() {
    this.requestTask.abort();
  },

  downloadOption(e) {
    let that = this;
    this.downloadTask = wx.downloadFile({
      url: this.filePath,
      success(res) {
        if (res.statusCode == 200) {
          console.log('[success]', res);
          console.log(res.tempFilePath);
          that.setData({
            imagePath: res.tempFilePath
          });
        }
      },
      fail(res) {
        console.log('[fail]', res);
      },
      complete(res) {
        console.log('[complete]', res);
      }
    });

    // 下载时跟进
    this.downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress);
      console.log('已经下载的数据长度', res.totalBytesWritten);
      console.log('预期下载的数据总长度', res.totalBytesExpectedToWrite);
      that.setData({
        per: res.totalBytesWritten / res.totalBytesExpectedToWrite * 100
      });
    });
  },

  downloadTask(e) {
    this.downloadTask.abort();
  },

  uploadOption(e) {
    wx.chooseImage({
      success: function (res) {
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://www.xxx.com', //没有服务器，网址是假的
          filePath: '',
          name: 'pic1'
        },success((res)=>{
          console.log(res.data);
        }));
      }
    });

  }
})