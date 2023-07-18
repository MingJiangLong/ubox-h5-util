type PathType = keyof typeof PATH_TYPE;
export declare enum PATH_TYPE {
    'history' = "history",
    'hash' = "hash"
}
export declare class UboxPath {
    private static getParamStr;
    private static buildPathObject;
    /**
     * 获取路由参数
     * @param key
     * @param type
     * @returns
     */
    static getParam(key: string, type?: PathType): string;
}
export {};
