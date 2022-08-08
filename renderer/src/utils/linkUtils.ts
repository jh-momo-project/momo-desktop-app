import { Url } from "renderer/src/types/browser";

/**
 * openBrowser
 * : electron에서 웹 브라우저로 링크를 열기 위한 함수
 */

export function openBrowser(url: Url) {
  require("electron").shell.openExternal(url);
}
