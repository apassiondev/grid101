function create_links(elementId){
    var arr_list = [
        {
            "text": "Understand the CSS Auto-Placement Algorithm from Envato Tuts+",
            "url": "https://webdesign.tutsplus.com/tutorials/understanding-the-css-grid-auto-placement-algorithm--cms-27563"
        },
        {
            "text": "Auto-Placement in CSS Grid Layout - MDN",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout"
        }
    ];

    var elGrid4 = document.getElementById(elementId);
    for(var i = 0; i < arr_list.length; i++){
        // Create new elements li
        var newLi = document.createElement("li");
        elGrid4.appendChild(newLi);
        // Create new elements textNode (heading title)
        var newText = document.createTextNode(arr_list[i].text);
        newLi.appendChild(newText);
        // Create a new a
        var newA = document.createElement("a");
        newA.style.marginLeft = "10px";
        newA.setAttribute('target', 'blank');
        newA.setAttribute('href', arr_list[i].url);
        // Create [read more..]
        var newReadMore = document.createTextNode("[read more..]");
        newA.appendChild(newReadMore);
        newLi.appendChild(newA);

    }

}
