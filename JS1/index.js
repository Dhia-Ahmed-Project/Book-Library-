function add(){
    var comment=$(".in")
    var val= comment.val()
    var div = document.createElement("div")
    $(div).attr('id', 'comment')
    var para =document.createElement("p")
    $(para).attr('id', 'para')
    para.innerHTML = val
    console.log(para)
    $("#comment").append(para)
    $(".card").append(div)
}
var button =$("#click")
button.on("click",add)

button.on("click",function(){
    $(".Gue").show()
}) 
var like=$(".nl").text()
function counter(){
$(".nl").text(like++)
}
var likeb=$(".like")
likeb.on("click",counter)
