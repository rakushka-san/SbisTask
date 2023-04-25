function changeTab(tab) {
    if (selectedTab) {
        selectedTab.classList.remove('menu-button-active')
    }

    selectedTab = tab;

    selectedTab.classList.add('menu-button-active')

    const chosenTab = tab.innerHTML;
    let imgSrc = 'img/';

    switch (chosenTab) {
        case 'Food Menu': imgSrc += 'menuFood.png'; break;
        case 'Drinks Menu': imgSrc += 'menuDrinks.png'; break;
        case 'Takeaway Menu': imgSrc += 'menuTakeaway.png'; break;
    }

    const menuImg = document.querySelector('#menu_img');

    menuImg.setAttribute('src', imgSrc);
}

let selectedTab;

window.onload = function () {
    const menuButtonsContainer = document.querySelector('#menuButtonsContainer');

    menuButtonsContainer.onclick = function(event) {
        const selectedMenuButton = event.target.closest('button');

        if (!selectedMenuButton) return;

        changeTab(selectedMenuButton);
    }

    const menuButtons = document.querySelectorAll('.menu-button');
    changeTab(menuButtons[0]);
}