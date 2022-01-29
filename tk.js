if($request.url.indexOf('tos-cn-ve-51-alinc2') != -1)
 {
     let modifiedPath = '/';
     $done({path : modifiedPath});
     $done({path : '/'});
 }
 else{
     $done({});
