const contentUl = document.querySelector("div > ul");
function handleClick(evt){
    if(evt.target.id === "remover"|| evt.target.parentElement.id === "remover") {
		evt.target.closest("li")?.remove();
	} else if(evt.target.localName === "li") {
        evt.target.classList.toggle("clicked");
        if(evt.target.className){
            const idText = document.createElement("span");
            idText.innerText = `${evt.target.id}.`;
            evt.target.prepend(idText);
        } else {
            evt.target.firstElementChild.remove();
        }
}}
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const listItem = document.createElement("li");
            const removerSpan = document.createElement("span");
            const removerImg = document.createElement("img");
            listItem.id = item.id;
            listItem.innerText = item.title;
            removerImg.src = "icon-remove.png";
            removerSpan.id = "remover"
            removerSpan.append(removerImg);
            listItem.append(removerSpan);
            contentUl.append(listItem);
        });
    })
contentUl.addEventListener("click",handleClick);