var bakeryItems = ["mufti", "qari", "site", "sir", "miss"];
while (true) {
    var userInput = prompt('Enter the item you want to order, or type "exit" to quit:').toLocaleLowerCase();

    // Check if user wants to exit
    if (userInput === "exit") {
        alert("Thank you for visiting our bakery!");
        break;
    }

    // Check if input is empty
    if (userInput.trim() === "") {
        alert("Please enter a valid item name.");
        continue;
    }

    // Check if item is in the bakeryItems list
    if (bakeryItems.includes(userInput)) {
        alert("Order placed for " + userInput + "!");
    } else {
        alert("Item not found. Available items are: " + bakeryItems.join(", "));
    }
}
