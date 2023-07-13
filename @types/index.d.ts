interface Window {
  ucloud: {
    postMessage: (data: string) => void
    token: () => string
  }
  uboxClient: {
    getToken: (callback: (token: string) => void) => void
  }
}
