// Common functions
import Vue from 'vue'

// vue plugin
const common = {
  install (options) {
    // USE LIKE THIS --> this.loadImage(imgUrl).then(() => {});
    Vue.prototype.loadImage = (url) => {
      return new Promise((resolve, reject) => {
        var img = new Image()
        img.onload = () => {
          resolve(url)
        }
        img.onerror = () => {
          reject(url)
        }
        img.src = url
      })
    }
    // USE LIKE THIS --> this.loadImage([imgUrls]).then(() => {});
    Vue.prototype.loadImages = (urls) => {
      let promises = []
      urls.forEach((url) => {
        let promise = new Promise((resolve, reject) => {
          var img = new Image()
          img.onload = () => {
            resolve(url)
          }
          img.onerror = () => {
            reject(url)
          }
          img.src = url
        })
        promises.push(promise)
      })
      return promises
    }
  }
}

Vue.use(common)
