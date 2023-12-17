/**
 * Displays an alert if the user is not using Chrome, since
 * it is the only fully supported browser.
 */
function alertIfNotChrome() {
    if (navigator.userAgent.indexOf("Chrome") === -1) {
      alert(
        "이 페이지는 크롬에 최적화된 페이지입니다.\n사용중 문제 발생시, 크롬 브라우저로 접속하시길 권장드립니다."
      );
    }
  }
  