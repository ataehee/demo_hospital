// // ** 原生JS实现 **
// var searchListBtn = document.getElementById("btn_List");
// var a_searchListBtn = document.getElementById("btn_List").getElementsByTagName("a");
// // console.log(a_searchListBtn[0].text);

// function show(event) {
//     // console.log("clicked me!");
//     let oevent = event || window.event;
//     // 关闭冒泡
//     if (document.all) {
//         oevent.cancelBubble = true;
//     }
//     else {
//         oevent.stopPropagation();
//     }
//     // 实现“点击”出现下拉框，再次点击或者点击其他地方，收拢下拉框
//     if (searchListBtn.style.display === "none" || searchListBtn.style.display === "") {
//         searchListBtn.style.display = "block";
//     }
//     else {
//         searchListBtn.style.display = "none";
//     }
// }

// document.onclick = function() {
//     // searchListBtn.style.backgroundColor = "red";
//     // 点击下拉框以外的地方，将下拉框收缩
//     searchListBtn.style.display = "none";
// }

// searchListBtn.onclick = function (event) {
//     let oevent = event || window.event;
//     oevent.stopPropagation();
// }


// function changeList(){
//     //卡住：原生JS实现下拉框选定更换文字，后期解决
// }


// *** 使用Jquery实现 ***

$.fn.UiSearch = function(){
    var ui = $(this);

    $('.ui-search-selected', ui).on('click', function(){
        $('.ui-search-selected-list').show();
        return false;
    })

    $('.ui-search-selected-list a', ui).on('click', function(){
        $('.ui-search-selected').text($(this).text());
        $('.ui-search-selected-list').hide();
        return false;
    })

    $('body').on('click',function(){
        $('.ui-search-selected-list').hide();
    })

}

$(function() {
    $('.ui-search').UiSearch();
})