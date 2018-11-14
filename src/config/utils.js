/*
 * @Author: qdlaoxu 
 * @Date: 2018-11-13 15:21:29 
 * @Last Modified by: qdlaoxu
 * @Last Modified time: 2018-11-13 15:29:57
 */
var utils = {
    install(Vue) {

        /**
         * 时间戳格式化
         * @method _dateFormat
         * @param  {Number}   date 时间戳
         * @param  {String}   fmt  日期格式
         */
        const _dateFormat = function (date, fmt) {
            date = new Date(Number(date));
            fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
            date = new Date(date);
            var o = {
                'M+': date.getMonth() + 1, //月份
                'd+': date.getDate(), //日
                'H+': date.getHours(), //小时
                'm+': date.getMinutes(), //分
                's+': date.getSeconds(), //秒
                'q+': Math.floor((date.getMonth() + 3) / 3), //季度
                'S': date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
                }
            var nowDate = new Date();
            if (date.getDate() != nowDate.getDate() || date.getMonth() != nowDate.getMonth() || date.getFullYear() != nowDate.getFullYear()) {
                return fmt;
            }
            return fmt.replace(/\d{4}-\d{2}-\d{2}/, '');
        }
        Vue.prototype.dateFormat = _dateFormat;
        Vue.filter('date', _dateFormat);

        

        /**
         * 对象遍历
         * @method each
         * @param  {Object}   data     遍历的对象
         * @param  {Function} callback 回调
         */
        Vue.prototype.each = function (data, callback) {
            for (var x in data) {
                var d = callback(x, data[x]);
                if(d === false){
                    break;
                }
            }
        }

    }
}
export default utils