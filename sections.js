const sections = [
    {
        section: {
            type: "section",
            id: "info-squirtle",
            "aria-labelledby": "info-squirtle-label"
        },
        title: {
            id: "info-squirtle-label",
            content: "Informações sobre Squirtle" 
        }, 
        images: [
            {
                src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                alt: "Squirtle 1"
            },
            {
                src: "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png",
                alt: "Squirtle 2"
            }
        ],
        paragraphs: [
            "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle."
        ]
    },
    {
        section: {
            type: "section",
            id: "caracteristicas",
            "aria-labelledby": "caracteristicas-label"
        },
        title: {
            id: "caracteristicas-label",
            content: "Características" 
        }, 
        paragraphs: [
            "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."
        ]
    },
    {
        section: {
            type: "section",
            id: "curiosidades",
            "aria-labelledby": "curiosidades-label"
        },
        title: {
            id: "curiosidades-label",
            content: "Curiosidades" 
        }, 
        lists: [
            "Squirtle é um dos Pokémon mais populares e adoráveis.",
            "Seu nome deriva das palavras \"squirrel\" (esquilo) e \"turtle\" (tartaruga).",
            "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."
        ]
    },
    {
        section: {
            type: "article",
            id: "artigo-squirtle",
            "aria-labelledby": "artigo-squirtle-label"
        },
        title: {
            id: "artigo-squirtle-label",
            content: "Squirtle: O Amigo Aquático" 
        }, 
        paragraphs: [
            "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
            "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
            "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.."
        ]
    },
    {
        section: {
            type: "section",
            id: "recursos",
            "aria-labelledby": "recursos-label"
        },
        title: {
            id: "recursos-label",
            content: "Recursos Adicionais" 
        }, 
        links: [
            {
                href: "https://www.pokemon.com/br/pokedex/squirtle",
                target: "_blank",
                content: "Pokédex - Squirtle"
            },
            {
                href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
                target: "_blank",
                content: "Bulbapedia - Squirtle"
            }
        ]
    },
    {
        section: {
            type: "section",
            id: "evolucao",
            "aria-labelledby": "evolucao-label"
        },
        title: {
            id: "evolucao-label",
            content: "Evoluções" 
        }, 
        pokemons: [
            {
                image: {
                    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
                    alt: "Squirtle"
                },
                figcaption: "1. Squirtle"
            },
            {
                image: {
                    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
                    alt: "Wartortle"
                },
                figcaption: "2. Wartortle"
            },
            {
                image: {
                    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
                    alt: "Blastoise"
                },
                figcaption: "3. Blastoise"
            }
        ]
    }
];

export default sections;