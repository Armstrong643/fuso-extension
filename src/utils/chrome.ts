class Extension {
  /**
   * getStorage
   * @param key string
   */
  getStorage(key: string) {
    const { local } = chrome.storage;
    return new Promise((resolve) => {
      local.get(key, (res) => {
        resolve(res);
      });
    });
  }
  /**
   * setStorage
   * @param key string
   * @param value any
   */
  setStorage(key: string, value: any) {
    const { local } = chrome.storage;
    const obj = {
      [key]: value,
    };
    return new Promise((resolve) => {
      local.set(obj);
      resolve(true);
    });
  }
  /**
   * createWindow
   */
  createWindow() {
    const { create } = chrome.windows;
    return new Promise((resolve, reject) => {
      try {
        create(
          {
            url: "window.html",
            type: "popup",
            height: 620,
            width: 360,
            top: 150,
            left: 150,
          },
          (details) => {
            resolve(details);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * getWindow
   * @param id number
   */
  getWindow(id: number) {
    const { get } = chrome.windows;
    return new Promise((resolve, reject) => {
      try {
        get(id, (window) => {
          resolve(window);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * getAllWindows
   */
  getAllWindows() {
    const { getAll } = chrome.windows;
    return new Promise((resolve, reject) => {
      try {
        getAll({}, (windows) => {
          resolve(windows);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * removeWindow
   * @param id number
   */
  removeWindow(id: number) {
    const { remove } = chrome.windows;
    return new Promise((resolve, reject) => {
      try {
        remove(id, () => {
          resolve(true);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * updateWindow
   * @param id number
   */
  updateWindow(id: number) {
    const { update } = chrome.windows;
    return new Promise((resolve, reject) => {
      try {
        update(
          id,
          {
            focused: true,
          },
          (result) => {
            resolve(result);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
  sendMessage(message: any, responseCallback: (response: any) => void) {
    let { sendMessage } = chrome.runtime;
    sendMessage(message, responseCallback);
  }
  onMessage(
    fn: (
      message: any,
      sender: chrome.runtime.MessageSender,
      sendResponse: (response?: any) => void
    ) => void
  ) {
    let { onMessage } = chrome.runtime;
    onMessage.addListener(fn);
  }
}
const extension = new Extension();
export default extension;
