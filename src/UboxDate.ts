
export default class UboxDate extends Date {
  constructor()
  constructor(date: number | string | Date)
  constructor(Y: number, M: number, D: number, H: number, m: number, s: number, ms: number)
  constructor() {
    super();
  }

  /**
   * 格式化时间
   * @param format 
   * @returns 
   */
  format(format: string) {
    format = format.replace(/y{4}/i, this.getYearStr())
    format = format.replace(/M{2}/, this.getMonthStr())
    format = format.replace(/D{2}/, this.getDateStr())
    format = format.replace(/H{2}/, this.getHoursStr())
    format = format.replace(/m{2}/, this.getMinutesStr())
    format = format.replace(/s{2}/, this.getSecondsStr())
    return format
  }

  /**
   * 获取本地时间当前年
   * @returns 
   */
  getYearStr() {
    return `${this.getFullYear()}`
  }

  /**
   * 获取本地时间当前月
   * 不需要再+1
   * @param fill 不够两位数会前置补0
   * @returns 
   */
  getMonthStr(fill = true) {
    const month = this.getMonth() + 1
    if (fill) return this.fill(month)
    return `${month}`
  }

  /**
   * 获取本地时间当月第N天
   * @param fill 不够两位数会前置补0
   * @returns 
   */
  getDateStr(fill = true) {
    const date = this.getDate()
    if (fill) return this.fill(date)
    return `${date}`
  }

  /**
   * 获取本地时间当前小时
   * @param fill 不够两位数会前置补0
   * @returns 
   */
  getHoursStr(fill = true) {
    const hours = this.getHours()
    if (fill) return this.fill(hours)
    return `${hours}`
  }

  /**
   * 获取本地时间当前小时分钟
   * @param fill 不够两位数会前置补0
   * @returns 
   */
  getMinutesStr(fill = true) {
    const minutes = this.getMinutes()
    if (fill) return this.fill(minutes)
    return `${minutes}`
  }

  /**
   * 获取本地时间当前小时秒
   * @param fill 不够两位数会前置补0
   * @returns 
   */
  getSecondsStr(fill = true) {
    const seconds = this.getSeconds()
    if (fill) return this.fill(seconds)
    return `${seconds}`
  }

  fill(value: number) {
    if (value < 10) return `0${value}`
    return `${value}`
  }

}

