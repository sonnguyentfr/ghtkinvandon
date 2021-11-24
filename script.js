$(document).ready(function () {
    $("div.sheet").removeAttr("style");
});
'use strict';

function modifyDOM() {
    var idWidth = $('#idWidth').val();
    var idHeight = $('#idHeight').val();
    if (idWidth > 0 && idHeight > 0) {
        //$('div.sheet').attr('style', 'height:' + idHeight + 'mm; width: ' + idWidth + 'mm');
        $('div.sheet').css({ 'height': + idHeight * 3.78 +'px' });
        $('div.sheet').css({ 'width': + idWidth * 3.78 + 'px' });
    }
    else {
        $('div.sheet').css({ 'height': '500px'});
        $('div.sheet').css({ 'width': '480px'});
    }
    return true;
}
$('#btnchayde').click(function () {
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();'
    }, function (selection) {
        alert(selection);
    });
});
