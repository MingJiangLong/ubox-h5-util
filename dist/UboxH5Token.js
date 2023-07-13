"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * H5 token获取
 */
class UboxH5Token {
    constructor(expired = 1000 * 60 * 30) {
        var _a, _b;
        this._token = (_b = (_a = window.ucloud) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.lastGetTokenTime = Date.now();
        this.delay = expired;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new UboxH5Token();
        }
        return this.instance;
    }
    /**
     * 获取token
     * @returns
     */
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._token == undefined)
                throw new Error("系统异常:token获取失败,ucloud.token调用失败!");
            if (this.isTokenExpired()) {
                yield this.refreshToken();
            }
            this.lastGetTokenTime = Date.now();
            return this._token;
        });
    }
    /**
     * 是否token过期
     * @returns
     */
    isTokenExpired() {
        return this.lastGetTokenTime && Date.now() < this.lastGetTokenTime + this.delay;
    }
    /**
     * 刷新token
     * @returns
     */
    refreshToken() {
        return new Promise((resolve, reject) => {
            try {
                window.uboxClient.getToken((token) => {
                    this._token = token;
                    resolve(token);
                });
            }
            catch (error) {
                reject('系统异常:token刷新失败,uboxClient.getToken调用失败!');
            }
        });
    }
    /**
     * 设置过期间隔 单位 ms
     */
    setDelay(delay) {
        this.delay = delay;
    }
}
exports.default = UboxH5Token;
