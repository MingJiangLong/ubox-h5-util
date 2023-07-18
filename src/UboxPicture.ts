class UboxPicture {
  /**
   * File转DataUrl
   * @param file 
   * @returns 
   */
  static async file2DataUrl(file: File) {
    return new Promise<string>(s => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        s(reader.result as string)
      }
    })
  }


  /**
   * dataUrl转File
   * @param dataUrl 
   * @param fileName 
   * @returns 
   */
  static async dataUrl2File(dataUrl: string, fileName: string) {
    return new Promise<File>((resolve, reject) => {
      fetch(dataUrl).then(res => {
        return res.blob()
      }).then(blob => {
        const file = new File([blob], fileName)
        resolve(file)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 文件转图片
   * @param file 
   * @returns 
   */
  static async file2Image(file: File) {
    const str = await this.file2DataUrl(file);
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image()
      image.src = str;
      image.onload = function () {
        resolve(image)
      }
    })
  }

  /**
   * 图片转文件
   * @param image 
   * @param fileName 
   * @param fileType 
   * @returns 
   */
  static image2File(image: HTMLImageElement, fileName: string, fileType: string) {
    const str = this.image2DataUrl(image, fileType, 1);
    return this.dataUrl2File(str, fileName)
  }

  /**
   * 图片转datUrl
   * @param image 
   * @param fileType 
   * @param quality 图片质量
   * @returns 
   */
  static image2DataUrl(
    image: HTMLImageElement,
    fileType: string,
    quality = 1
  ) {
    const canvas = this.drawImageIntoCanvas(image)
    return canvas.toDataURL(fileType, quality)
  }

  /**
   * 把图片画进canvas
   * @param image 
   * @returns 
   */
  static drawImageIntoCanvas(image: HTMLImageElement) {
    const canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext("2d")
    if (!context) throw new Error("canvas is null")
    context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight)
    return canvas
  }

  static fileReader(file: File) {
    return new Promise<string | ArrayBuffer | null>(s => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        s(reader.result)
      }
    })
  }

}