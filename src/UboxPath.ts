type PathType = keyof typeof PATH_TYPE
type PathParams = { [k: string]: string }

export enum PATH_TYPE {
  'history' = "history",
  'hash' = "hash",
}
export class UboxPath {
  private static getParamStr(type: PathType = PATH_TYPE.history) {
    let str = window?.location?.search;
    if (type == PATH_TYPE.hash) str = window?.location?.hash
    const [, paramsStr] = str.split('?');
    if (paramsStr) return paramsStr
    return ''
  }
  private static buildPathObject(str: string) {
    return str.split('&').reduce((count, current) => {
      const [key, value] = current.split('=')
      return {
        ...count,
        [key]: value
      }
    }, {} as PathParams)
  }

  /**
   * 获取路由参数
   * @param key 
   * @param type 
   * @returns 
   */
  static getParam(key: string, type: PathType = PATH_TYPE.history): string {
    const pathStr = this.getParamStr(type);
    const temp = this.buildPathObject(pathStr)
    return temp[key]
  }
}


