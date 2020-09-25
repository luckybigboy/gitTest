const path = require('path')
function resolve(dir) {
   return path.join(__dirname, dir) 
}

// 项目的主要配置文件
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))
    }
}