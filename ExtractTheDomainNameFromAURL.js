function domainName(url){
    url = url.split(".");
    if (url[0].includes('www')) {
      return url[1];
    } else if (url[0].includes('http://')) {
      return url[0].replace('http://', '');
    } else if (url[0].includes('https://')) {
      return url[0].replace('https://', '');
    } else {
      return url[0];
    }
  }