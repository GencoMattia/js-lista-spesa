const shoppingList = ["Parrucca", "Gelati", "Mozzarelle", "Lanciafiamme", "Spada Vorpal", "Set dadi"];
let articleEl = document.createElement("li");
let listEl = document.querySelector("ul");

let listArticles = 0;

while(listArticles < shoppingList.length) {
    articleEl.append(shoppingList[listArticles]);
    listEl.appendChild(articleEl);
    listArticles++
}