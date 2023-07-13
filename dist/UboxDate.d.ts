export default class UboxDate extends Date {
    constructor();
    constructor(date: number | string | Date);
    constructor(Y: number, M: number, D: number, H: number, m: number, s: number, ms: number);
    /**
     * 格式化时间
     * @param format
     * @returns
     */
    format(format: string): string;
    /**
     * 获取本地时间当前年
     * @returns
     */
    getYearStr(): string;
    /**
     * 获取本地时间当前月
     * 不需要再+1
     * @param fill 不够两位数会前置补0
     * @returns
     */
    getMonthStr(fill?: boolean): string;
    /**
     * 获取本地时间当月第N天
     * @param fill 不够两位数会前置补0
     * @returns
     */
    getDateStr(fill?: boolean): string;
    /**
     * 获取本地时间当前小时
     * @param fill 不够两位数会前置补0
     * @returns
     */
    getHoursStr(fill?: boolean): string;
    /**
     * 获取本地时间当前小时分钟
     * @param fill 不够两位数会前置补0
     * @returns
     */
    getMinutesStr(fill?: boolean): string;
    /**
     * 获取本地时间当前小时秒
     * @param fill 不够两位数会前置补0
     * @returns
     */
    getSecondsStr(fill?: boolean): string;
    fill(value: number): string;
}
