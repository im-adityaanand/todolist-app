let listNum = 0;

function addItem(){
    const item = document.querySelector("#input").value;
    if(item.length != 0){
        listNum++;
        document.querySelector("#todolist").innerHTML += "<li class="+ "a" + listNum +">" + item +"<a onclick=this.parentNode.remove()> x </a>" + "</li>";
    }
    else{
        alert("Please add a value.");
    }
}


document.querySelector("#button").addEventListener("click", function(){
    addItem();
    document.querySelector("#input").value = "";
});

