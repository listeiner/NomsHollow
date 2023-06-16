const sprites = document.querySelector(".sprite-container");

const renderSingleElement = (element) => {
    // extract the info
    const {name, spriteLink} = element;
    return `<div class="sprite-element"><img src=${spriteLink} alt=${name}></img></div>`;
}

const renderElements = (elementsArray) => {
    console.log(elementsArray);
    const transformation1 = elementsArray.map(e => renderSingleElement(e));
    console.log(transformation1);
    const transformation2 = transformation1.join("");
    console.log(transformation2);
    return transformation2;
}

sprites.innerHTML = renderElements(characters);

const bios = document.querySelector(".bio-container");

