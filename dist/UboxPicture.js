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
class UboxPicture {
    /**
     * File转DataUrl
     * @param file
     * @returns
     */
    static file2DataUrl(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(s => {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    s(reader.result);
                };
            });
        });
    }
    /**
     * dataUrl转File
     * @param dataUrl
     * @param fileName
     * @returns
     */
    static dataUrl2File(dataUrl, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fetch(dataUrl).then(res => {
                    return res.blob();
                }).then(blob => {
                    const file = new File([blob], fileName);
                    resolve(file);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }
    /**
     * 文件转图片
     * @param file
     * @returns
     */
    static file2Image(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const str = yield this.file2DataUrl(file);
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.src = str;
                image.onload = function () {
                    resolve(image);
                };
            });
        });
    }
    /**
     * 图片转文件
     * @param image
     * @param fileName
     * @param fileType
     * @returns
     */
    static image2File(image, fileName, fileType) {
        const str = this.image2DataUrl(image, fileType, 1);
        // const canvas = this.drawImageIntoCanvas(image);
        // canvas.toBlob((result) => {
        //   new File([result || ''], fileName,)
        // }, fileType, 1)
        return this.dataUrl2File(str, fileName);
    }
    /**
     * 图片转datUrl
     * @param image
     * @param fileType
     * @param quality 图片质量
     * @returns
     */
    static image2DataUrl(image, fileType, quality = 1) {
        const canvas = this.drawImageIntoCanvas(image);
        return canvas.toDataURL(fileType, quality);
    }
    /**
     * 把图片画进canvas
     * @param image
     * @returns
     */
    static drawImageIntoCanvas(image) {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        if (!context)
            throw new Error("canvas is null");
        context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
        return canvas;
    }
    static fileReader(file) {
        return new Promise(s => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                s(reader.result);
            };
        });
    }
}
