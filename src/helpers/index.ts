export default function cleanQueryParams(query:any) {
    for (var propName in query) {
      if (!query[propName]) {
        delete query[propName];
      }
    }
    return query;
}

/**
 * 
 * @param {url} string 
 * @returns {object} 
 */

 function parseURL(url:string) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret:any = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        hash: a.hash.replace('#','')
    };
}


const generatorMediaURL=(id:any,urlDefault="")=>{
  return id;
}

  
export { parseURL, cleanQueryParams, generatorMediaURL };
