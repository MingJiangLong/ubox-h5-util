"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UboxPath = exports.PATH_TYPE = void 0;
var PATH_TYPE;
(function (PATH_TYPE) {
    PATH_TYPE["history"] = "history";
    PATH_TYPE["hash"] = "hash";
})(PATH_TYPE = exports.PATH_TYPE || (exports.PATH_TYPE = {}));
class UboxPath {
    static getParamStr(type = PATH_TYPE.history) {
        var _a, _b;
        let str = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.search;
        if (type == PATH_TYPE.hash)
            str = (_b = window === null || window === void 0 ? void 0 : window.location) === null || _b === void 0 ? void 0 : _b.hash;
        const [, paramsStr] = str.split('?');
        if (paramsStr)
            return paramsStr;
        return '';
    }
    static buildPathObject(str) {
        return str.split('&').reduce((count, current) => {
            const [key, value] = current.split('=');
            return Object.assign(Object.assign({}, count), { [key]: value });
        }, {});
    }
    /**
     * 获取路由参数
     * @param key
     * @param type
     * @returns
     */
    static getParam(key, type = PATH_TYPE.history) {
        const pathStr = this.getParamStr(type);
        const temp = this.buildPathObject(pathStr);
        return temp[key];
    }
}
exports.UboxPath = UboxPath;
