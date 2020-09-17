var content_tab_caption_a = document.getElementById("content-tab-caption").getElementsByTagName("a");
var block_content_list = document.getElementById("block-content").getElementsByClassName("block-list");

// console.log(block_content_list);

for( var i = 0; i < content_tab_caption_a.length; i++) {
    content_tab_caption_a[i].onclick = function() {
        var test_JJ = block_content_list[i].parentNode;
        console.log(test_JJ);
        // console.log("you clicked",event.target);
    }
}