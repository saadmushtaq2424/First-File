var bakeryitems = ["mufti","qari","site","sir","miss"];
var userinput = prompt('enter your item').toLocaleLowerCase();
if (bakeryitems.includes(userinput)) {

    alert('order place');
}

else {
    alert('not found');
}