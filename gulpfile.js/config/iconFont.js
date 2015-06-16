var config = require('./')
var fontConfig = require('./fonts')

module.exports = {
  name: 'Gulp Starter Icons',
  src: config.sourceAssets + '/icons/*.svg',
  dest: fontConfig.dest,
  sassDest: config.sourceAssets + '/stylesheets/_generated',
  template: './gulpfile.js/tasks/iconFont/template.sass',
  sassOutputName: '_icons.scss',
  fontPath: '../../assets/fonts',
  className: 'icon',
  options: {
    fontName: 'icons',
    appendCodepoints: true,
    normalize: false
  }
}
