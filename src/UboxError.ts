export class PropertyRequiredError extends Error {
  constructor(message = '必要参数缺失!') {
    super(message);
    this.name = '必要参数缺失'
  }
}

export class SeverSideError extends Error {
  constructor(message = '服务端繁忙,请稍候重试!') {
    super(message);
    this.name = '服务端异常'
  }
}

