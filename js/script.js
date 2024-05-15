const shoppingList = ["Parrucca", "Gelati", "Mozzarelle", "Lanciafiamme", "Spada Vorpal", "Set dadi"];
let articleEl = document.createElement("li");
let listEl = document.querySelector("ul");

const listArticles = 0;

while(listArticles < shoppingList.length) {
    listEl.appendChild(li);
    articleEl.append(shoppingList[listArticles]);
}