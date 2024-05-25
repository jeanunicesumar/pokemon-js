import sections from "./sections.js";

document.addEventListener("DOMContentLoaded", calls);

function calls() {
    header();
    nav();
    main();
    footer();
}

function header() {
    const header = document.querySelector("header");
    header.id = "header";

    const h1 = createElementText("h1", "Squirtle", null);
    const a = createElementA("./index.html", "", null);
    a.appendChild(h1);
    header.appendChild(a);
}

function nav() {
    
    const links = [
        createElementA("#info-squirtle", "Informações sobre Squirtle", null),
        createElementA("#caracteristicas", "Características", null), 
        createElementA("#curiosidades", "Curiosidades", null),
        createElementA("#artigo-squirtle", "Artigo sobre Squirtle", null), 
        createElementA("#recursos", "Recursos Adicionais", null),
        createElementA("#evolucao", "Evolução", null)
    ]
    
    const ul = document.createElement("ul");

    links.forEach(link => {
        const li = document.createElement("li");
        li.appendChild(link);
        ul.appendChild(li);
    });

    document.querySelector("nav").appendChild(ul);

}

function main() {

    const main = document.querySelector("main");

    main.appendChild(createFirstSection());
    main.appendChild(createSecondSection());
    main.appendChild(createThirdSection());
    main.appendChild(createFourSection());
    main.appendChild(createFiveSection());
    main.appendChild(createSixSection());
}

function footer() {

    const footer = document.querySelector("footer");
    const copy = createElementText("p", "© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.");
    copy["aria-label"] = "Copyright";
    footer.appendChild(copy);
    footer.appendChild(createElementText("p", null).appendChild(createElementA("#header", "Voltar para o topo")));
    footer.appendChild(createElementText("p", null).appendChild(createElementA("mailto:contato@squirtlepage.com", "Contato via e-mail")));
    footer.appendChild(createElementText("p", null).appendChild(createElementA("tel:+5555555555", "Telefone: (55) 5555-5555")));
}

function createFirstSection() {
    const content = sections[0];
    const section = createSectionAndTitle(content);

    const div = createElement("div", null);
    content.images.forEach(image => div.appendChild(createElementImg(image.src, image.alt)));

    section.appendChild(div);
    content.paragraphs.forEach(paragraph => section.appendChild(createElementText("p", paragraph, null)));

    return section;
}

function createSecondSection() {
    const content = sections[1];
    const section = createSectionAndTitle(content);
    content.paragraphs.forEach(paragraph => section.appendChild(createElementText("p", paragraph, null)));
    return section;
}

function createThirdSection() {
    const content = sections[2];
    const section = createSectionAndTitle(content);

    const ul = createElement("ul", null);
    content.lists.forEach(item => ul.appendChild(createElementText("li", item, null)));
    section.appendChild(ul);

    return section;
}

function createFourSection() {
    const content = sections[3];
    const section = createSectionAndTitle(content);
    content.paragraphs.forEach(item => section.appendChild(createElementText("p", item, null)));
    return section;
}

function createFiveSection() {
    const content = sections[4];
    const section = createSectionAndTitle(content);

    const ul = createElement("ul", null);
    content.links.forEach(item => {
        const li = createElement("li", null);
        li.appendChild(createElementA(item.href, item.content, item.target));
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

function createSixSection() {
    const content = sections[5];
    const section = createSectionAndTitle(content);

    const ul = createElement("ul", null);
    content.pokemons.forEach(item => {
        const li = createElement("li", null);
        const figure = createElement("figure", null)
        figure.appendChild(createElementImg(item.image.src, item.image.alt));
        figure.appendChild(createElementText("figcaption", item.figcaption))
        li.appendChild(figure);
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

function createSectionAndTitle(content) {
    const section = createElementSection(content.section.type, content.section.id, content.section["aria-labelledby"]);
    const title = createElementText("h2", content.title.content, content.title.id);
    section.appendChild(title);

    return section;
}

function createElementSection(type, id, aria_labelledby) {
    const section = document.createElement(type);
    section.id = id;
    section.setAttribute("aria-labelledby", aria_labelledby);

    return section;
}

function createElement(element, id) {
    const generic = document.createElement(element)
    if (id) generic.id = id;
    return generic;
}

function createElementA(href, content, target) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = content;
    if (target) a.target = target;
    return a;
}

function createElementText(element, content, id) {
    const text = document.createElement(element);
    if(content) text.textContent = content;
    if (id) text.id = id;
    return text;
}

function createElementImg(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    return img;
}