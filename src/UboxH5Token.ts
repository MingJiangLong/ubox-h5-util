/**
 * H5 token获取
 */
class UboxH5Token {
  private _token: string
  private lastGetTokenTime: number
  private delay: number
  private static instance?: UboxH5Token;

  private constructor(expired = 1000 * 60 * 30) {
    this._token = window.ucloud?.token?.()
    this.lastGetTokenTime = Date.now();
    this.delay = expired;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new UboxH5Token()
    }
    return this.instance;
  }

  /**
   * 获取token
   * @returns 
   */
  async getToken() {
    if (this._token == undefined) throw new Error("系统异常:token获取失败,ucloud.token调用失败!");
    if (this.isTokenExpired()) {
      await this.refreshToken()
    }
    this.lastGetTokenTime = Date.now();
    return this._token;
  }


  /**
   * 是否token过期
   * @returns 
   */
  isTokenExpired() {
    return this.lastGetTokenTime && Date.now() < this.lastGetTokenTime + this.delay
  }

  /**
   * 刷新token
   * @returns 
   */
  refreshToken() {
    return new Promise<string>((resolve, reject) => {
      try {
        window.uboxClient.getToken((token) => {
          this._token = token;
          resolve(token)
        })
      } catch (error) {
        reject('系统异常:token刷新失败,uboxClient.getToken调用失败!')
      }
    })
  }

  /**
   * 设置过期间隔 单位 ms
   */
  setDelay(delay: number) {
    this.delay = delay
  }
}

export default UboxH5Token



