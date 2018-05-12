function create_links(aData){
    var aGroups = aData.items;
    var groupCount = aGroups.length;
    for(var i = 0; i < groupCount; i++){
        var elementUl = document.getElementById(aGroups[i].id);
        var items = aGroups[i].items;
        var itemCount = items.length;
        for(var j = 0; j < itemCount; j++){
            // Create new elements li tag
            var newLi = document.createElement("li");
            elementUl.appendChild(newLi);
            // Create new textNode: heading title
            var newText = document.createTextNode(items[j].text);
            newLi.appendChild(newText);
            // Create a new a tag
            var newA = document.createElement("a");
            newA.style.marginLeft = "10px";
            newA.setAttribute('target', 'blank');
            newA.setAttribute('href', items[j].url);
            // Create a textNode: [read more..]
            var newReadMore = document.createTextNode("[read more..]");
            newA.appendChild(newReadMore);
            newLi.appendChild(newA);
        }
    }
}
