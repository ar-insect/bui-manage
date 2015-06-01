/*
 * config
 *
 */
var path = require('path');
var pkg = require('./package.json');
var _ = require('lodash');

var config = {
    debug: true,
    name: 'sprider development resources',
    ui: {
        css: '',
        js: '',
        head: '',
        foot: '',
        title: '',
        charset: '',
        __style: '',
        __script: ''
    },
    template: {
        name: 'velocity',
        engine: require('velocityjs'), // 模板引擎
        extension: 'vm',
        callback: function() {
            var fn = function() {};
            var call = arguments[0];
            return _.isFunction(call) ? call : fn;
        }
    },
    version: pkg.version,
    // site sittings
    host: '10.63.73.38',
    assetsServer: '', // 静态文件存储域名
    charset: 'GB2312',
    keywords: 'front local development resources..',
    description: 'front local development resources',
    port: 3000
};

module.exports = config;
module.exports.config = config;
