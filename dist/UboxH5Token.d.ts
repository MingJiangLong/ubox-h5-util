/**
 * H5 token获取
 */
declare class UboxH5Token {
    private _token;
    private lastGetTokenTime;
    private delay;
    private static instance?;
    private constructor();
    static getInstance(): UboxH5Token;
    /**
     * 获取token
     * @returns
     */
    getToken(): Promise<string>;
    /**
     * 是否token过期
     * @returns
     */
    isTokenExpired(): boolean | 0;
    /**
     * 刷新token
     * @returns
     */
    refreshToken(): Promise<string>;
    /**
     * 设置过期间隔 单位 ms
     */
    setDelay(delay: number): void;
}
export default UboxH5Token;
