function create_links(arr_list){
    var elGrid4 = document.getElementById(arr_list.elementId);
    var items = arr_list.items;
    var itemCount = items.length;
    for(var i = 0; i < itemCount; i++){
        // Create new elements li tag
        var newLi = document.createElement("li");
        elGrid4.appendChild(newLi);
        // Create new textNode: heading title
        var newText = document.createTextNode(items[i].text);
        newLi.appendChild(newText);
        // Create a new a tag
        var newA = document.createElement("a");
        newA.style.marginLeft = "10px";
        newA.setAttribute('target', 'blank');
        newA.setAttribute('href', items[i].url);
        // Create a textNode: [read more..]
        var newReadMore = document.createTextNode("[read more..]");
        newA.appendChild(newReadMore);
        newLi.appendChild(newA);
    }

}
