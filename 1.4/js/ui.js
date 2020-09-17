// ** 原生JS实现 **
var par_searchListBtn = document.getElementById("btn_list_parent");
var searchListBtn = document.getElementById("btn_List");
var a_searchListBtn = document.getElementById("btn_List").getElementsByTagName("a");
// console.log(a_searchListBtn.length);
// console.log(a_searchListBtn);

function show(event) {
    // console.log("clicked me!");
    let oevent = event || window.event;
    // 关闭冒泡
    if (document.all) {
        oevent.cancelBubble = true;
    }
    else {
        oevent.stopPropagation();
    }
    // 实现“点击”出现下拉框，再次点击或者点击其他地方，收拢下拉框
    if (searchListBtn.style.display === "none" || searchListBtn.style.display === "") {
        searchListBtn.style.display = "block";
    }
    else {
        searchListBtn.style.display = "none";
    }
}

document.onclick = function() {
    // searchListBtn.style.backgroundColor = "red";
    // 点击下拉框以外的地方，将下拉框收缩
    searchListBtn.style.display = "none";
}

searchListBtn.onclick = function (event) {
    let oevent = event || window.event;
    oevent.stopPropagation();
}


// 注意下面代码为鼠标点击下拉框内内容并激活相应事件，写法思路
for(var i = 0; i < a_searchListBtn.length; i++){
    // a_searchListBtn为取到的div>a的数组，需要以数组的形式来访问
    a_searchListBtn[i].onclick = function () {
        // console.log(this.innerText);
        // 注意this.innerText用法的精妙
        par_searchListBtn.innerHTML = this.innerText;
        searchListBtn.style.display = "none";
        
    }
}

// *** 使用Jquery实现 ***

// $.fn.UiSearch = function(){
//     var ui = $(this);

//     $('.ui-search-selected', ui).on('click', function(){
//         $('.ui-search-selected-list').show();
//         return false;
//     })

//     $('.ui-search-selected-list a', ui).on('click', function(){
//         $('.ui-search-selected').text($(this).text());
//         $('.ui-search-selected-list').hide();
//         return false;
//     })

//     $('body').on('click',function(){
//         $('.ui-search-selected-list').hide();
//     })

// }

// $(function() {
//     $('.ui-search').UiSearch();
// })