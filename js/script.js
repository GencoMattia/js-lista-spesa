const shoppingList = ["Parrucca", "Gelati", "Mozzarelle", "Lanciafiamme", "Spada Vorpal", "Set dadi"];
let listEl = document.querySelector("ul");

let listArticles = 0;

while(listArticles < shoppingList.length) {
    let articleEl = document.createElement("li");
    listEl.appendChild(articleEl);
    articleEl.append(shoppingList[listArticles]);
    listArticles++
}