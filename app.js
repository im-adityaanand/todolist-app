let listNum = 0;


function removeItem(){
    const element = document.querySelector(".a"+listNum);
    element.remove();
    listNum--;
}

function addItem(){
    listNum++;
    const item = document.querySelector("#input").value;
    document.querySelector("#todolist").innerHTML += "<li class="+ "a" + listNum +" onclick=removeItem()>" + item +"<a class=" + 'remove' + listNum + "> x </a>" + "</li>";
}


document.querySelector("#button").addEventListener("click", function(){
    addItem();
    document.querySelector("#input").value = "";
});

// document.getElementsByClassName("remove" + listNum).addEventListener("click", function(){
//     removeItem();
// });
