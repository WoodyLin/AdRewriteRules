if($request.url.indexOf('PackSourceEnum_FEED') != -1)
{
    $done({path : '/'});
}
else{
    $done({});
}
