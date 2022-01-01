if($request.url.indexOf('PackSourceEnum_FEED') != -1)
{
    let modifiedPath = '/';
    $done({path : modifiedPath});
}
else{
    $done({});
}
