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

//

const bios = document.querySelector(".bio-section");

const renderSingleBio = (bio) => {
    const {
      name,
      characterImageLink,
      description,
      species,
      age,
      gender,
      habitat,
      occupation,
      personality,
      background,
    } = bio;
  
    return `
    <div class="bio-section">
        <div class="bio-container">
            <div class="bio-image">
            <img src="${characterImageLink}" alt="${name}" />
            </div>
            <div class="bio-text">
            <h3>${name}</h3>
            <p><strong>Description</strong>: ${description}</p>
            <p><strong>Species</strong>: ${species}</p>
            <p><strong>Age</strong>: ${age}</p>
            <p><strong>Gender</strong>: ${gender}</p>
            <p><strong>Habitat</strong>: ${habitat}</p>
            <p><strong>Occupation</strong>: ${occupation}</p>
            <p><strong>Personality</strong>: ${personality}</p>
            <p><strong>Background</strong>: ${background}</p>
            </div>
        </div>
    </div>
    `;
  };
  
  const renderBios = (biosArray) => {
    const transformedBios = biosArray.map((bio) => renderSingleBio(bio));
    return transformedBios.join("");
  };
  
  bios.innerHTML = renderBios(characters);