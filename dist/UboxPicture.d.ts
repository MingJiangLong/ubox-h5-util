declare class UboxPicture {
    /**
     * File转DataUrl
     * @param file
     * @returns
     */
    static file2DataUrl(file: File): Promise<string>;
    /**
     * dataUrl转File
     * @param dataUrl
     * @param fileName
     * @returns
     */
    static dataUrl2File(dataUrl: string, fileName: string): Promise<File>;
    /**
     * 文件转图片
     * @param file
     * @returns
     */
    static file2Image(file: File): Promise<HTMLImageElement>;
    /**
     * 图片转文件
     * @param image
     * @param fileName
     * @param fileType
     * @returns
     */
    static image2File(image: HTMLImageElement, fileName: string, fileType: string): Promise<File>;
    /**
     * 图片转datUrl
     * @param image
     * @param fileType
     * @param quality 图片质量
     * @returns
     */
    static image2DataUrl(image: HTMLImageElement, fileType: string, quality?: number): string;
    /**
     * 把图片画进canvas
     * @param image
     * @returns
     */
    static drawImageIntoCanvas(image: HTMLImageElement): HTMLCanvasElement;
    static fileReader(file: File): Promise<string | ArrayBuffer | null>;
}
