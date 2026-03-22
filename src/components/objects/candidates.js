import { bosak, zandberg, mentzen, nawrocki, morawiecki, tusk, biejat, holownia, czarnek, trzaskowski, maciak, braun, biedron, korwin } from "../../images";
import { bosakImage, zandbergImage, mentzenImage, nawrockiImage, morawieckiImage, tuskImage, biejatImage, holowniaImage, czarnekImage, trzaskowskiImage, maciakImage, braunImage, biedronImage, korwinImage } from "../../images";

const candidates = [
    {
        "name": "Krzysztof Bosak",
        "answers": [-1,-1,0.5,-0.5,1,1,0,-1,-1,0.5,0,0.5,-0.5,0.5,1,-1,1,1,1,0.5,-1,0.5,1,-1,-1,-1,-1,0,1,-1,1,1,1,1,1,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,1,1,-1,1,-1,-1,-1,1,1,-1,-1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-0.5,-1,-1,0,1], // bosak
        "description": "Krzysztof Bosak is a Polish right-wing politician serving as Deputy Marshal of the Sejm and a leader in the National Movement and Confederation Liberty and Independence party. His key positions include opposition to deep EU integration, promotion of traditional family values, and advocacy for lower taxes and reduced government intervention in the economy.",
        icon: bosak,
        image: bosakImage
    },
    {
        "name": "Adrian Zandberg",
        "answers": [1,0.5,1,1,0.5,1,-0.5,-0.5,1,1,-1,1,1,1,-1,-0.5,0.5,0,-1,0,1,-1,0,1,1,0,0,-1,-0.5,0.5,-1,1,-1,-1,-1,-1,-1,1,-0.5,1,1,-0.5,1,0,1,-0.5,0,1,0.5,0,-1,1,1,-1,0,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,1,0,1,-0.5,0,1,1,-1,-1,0,1,1,-1,1,0,0,-1,-1,1,1,1,1,0.5,-1,0,0.5,0,-1],
        "description": "Adrian Zandberg is a Polish far-left politician, co-leader of Partia Razem (Together Party), and a member of the Sejm. His key positions include support for progressive taxation to fund social welfare, stronger workers' rights and labor protections, and progressive laws.",
        icon: zandberg,
        image: zandbergImage // zandberg 
    },
    {
        "name": "Sławomir Mentzen",
        "answers": [-1,-1,-1,-1,1,0.5,-1,-1,-1,-0.5,1,-1,-1,-0.5,1,-1,1,1,1,0.5,1,1,1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,0.5,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,1,1,-1,1,-1,-1,-1,1,1,-1,-0.5,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,0.5,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1],
        "description": "Sławomir Mentzen is a Polish right-wing politician and a leader in the Confederation party, known for his social media presence and libertarian-leaning views. His key positions include liberalization of gun laws, protection of unborn children in all cases, and promotion of economic libertarianism with reduced taxes and minimal state intervention.",
        icon: mentzen,
        image: mentzenImage // mentzen
    },
    {
        "name": "Karol Nawrocki",
        "answers": [-1,-1,1,0,1,1,1,0.5,0.5,0,0.5,1,-1,-0.5,1,-1,1,1,1,1,-0.5,-0.5,0.5,-1,1,-1,-1,0.5,1,-1,1,1,1,1,-1,-1,0.5,1,-1,-0.5,-0.5,-1,-1,-1,-0.5,-1,1,-1,1,0.5,-1,1,1,1,0.5,-1,-1,-1,1,0,-1,-1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,1,0.5,-1,-1,-1,-1,-1,-1,0.5,-1,-0.5,-1,-1,-0.5,0.5],
        "description": "Karol Nawrocki is a Polish conservative politician and historian who won the 2025 presidential election as an independent backed by the Law and Justice (PiS) party, and currently serves as President of Poland. His key positions include defense of traditional Polish values, emphasis on national sovereignty and historical memory, and criticism of liberal reforms in areas like judicial independence and abortion laws.",
        icon: nawrocki,
        image: nawrockiImage // nawrocki
    },
    {
        "name": "Mateusz Morawiecki",
        "answers": [1,-1,1,1,1,1,1,1,0.5,0.5,0,1,0.5,0.5,0,-1,0.5,1,1,1,0,-1,0.5,-1,1,-0.5,-1,0.5,1,-1,1,1,1,1,-1,-1,0.5,1,-1,-0.5,0,-1,-1,-1,-0.5,-1,1,0.5,1,0.5,-1,1,1,1,0,-1,-1,-1,1,0,-1,-1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,1,0.5,-1,-1,-1,-1,-1,-1,0.5,-1,-0.5,-1,-1,-0.5,0.5],
        "description": "Mateusz Morawiecki is a Polish conservative politician and former Prime Minister (2017–2023) affiliated with the Law and Justice (PiS) party, now serving as President of the European Conservatives and Reformists (ECR) party. His key positions include support for social transfers and welfare programs, promotion of economic sovereignty and national industries, and advocacy for traditional christian values.",
        icon: morawiecki,
        image: morawieckiImage // morawiecki
    },
    {
        "name": "Donald Tusk",
        "answers": [-0.5,-1,1,-0.5,1,1,0,-0.5,0.5,0.5,0,1,-1,0,0.5,-1,1,0.5,1,1,0,-1,0.5,1,1,0.5,0,0.5,1,-1,0,1,0.5,0,-1,-1,-1,1,-0.5,1,1,-1,0,0.5,1,-1,0.5,1,0.5,0,-1,1,1,1,0,-1,0.5,1,-1,-1,0.5,-1,-1,0,-1,0,0,-1,-1,0,-1,-1,-1,-1,1,1,1,-1,0,-1,0.5,0.5,-1,-1,-1,-0.5,-1,1,1,-1,-1,-1,-1,-1,1],
        "description": "Donald Tusk is a Polish centrist politician and current Prime Minister affiliated with the Civic Platform (PO) party, previously serving as President of the European Council (2014–2019). His key positions include strong support for EU integration, promotion of liberal economic policies, and advocacy for judicial reforms and pro-European foreign relations.",
        icon: tusk,
        image: tuskImage // tusk
    },
    {
        "name": "Magdalena Biejat",
        "answers": [0.5,-1,1,0.5,1,1,-0.5,-0.5,0.5,1,-0.5,1,-0.5,0.5,0.5,-1,0.5,0.5,1,0.5,1,-1,0.5,1,1,0.5,0,-1,-1,0.5,-1,1,-1,-1,-1,-1,-1,1,-0.5,1,1,-0.5,1,0.5,1,-0.5,0,1,0,-0.5,-1,1,1,-1,0,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,1,0,1,-0.5,0,1,1,-1,-1,0,1,1,-1,0.5,1,0,-1,-1,1,1,1,1,0.5,-1,0,0,-0.5,-0.5],
        "description": "Magdalena Biejat is a Polish left-wing politician and social activist serving as Deputy Marshal of the Senate, affiliated with the New Left (Nowa Lewica) party. Her key positions include focus on social policy and family support, promotion of gender equality and women's rights, and advocacy for progressive labor and welfare reforms.",
        icon: biejat,
        image: biejatImage // biejat
    },
    {
        "name": "Szymon Hołownia",
        "answers": [-0.5,-1,1,0,1,1,-0.5,-0.5,0.5,0.5,0,1,-0.5,0.5,0.5,-1,0.5,0.5,1,0.5,0,-1,0.5,1,1,0.5,1,0.5,0.5,-1,0,1,0.5,0,-1,-1,-1,1,-0.5,1,0.5,-1,0,0.5,1,-1,0,1,0,0,-1,1,1,1,0,-1,0,1,0,-1,0.5,-1,-0.5,0,-1,0,-0.5,-1,-1,0,-1,-1,-1,-1,1,1,1,-1,0,0,0,1,-1,-1,-1,-0.5,-1,0,1,-1,-1,-1,-1,-1,0.5],
        "description": "Szymon Hołownia is a Polish centre-right politician and former television personality who founded the Poland 2050 party and served as Marshal of the Sejm (2023–2025). His key positions include support for environmental sustainability and green policies, promotion of demographic reforms, and advocacy for pro-EU integration with a focus on modernization.",
        icon: holownia,
        image: holowniaImage // holownia
    },
    {
        "name": "Przemysław Czarnek",
        "answers": [-0.5,-1,1,0.5,1,1,1,1,1,0.5,0,0.5,-0.5,0.5,0,-1,0.5,1,1,1,0,-1,0.5,-1,1,-1,-0.5,0.5,1,-1,1,1,1,1,-1,-1,0.5,1,-1,-0.5,-0.5,-1,-1,-1,-0.5,-1,0.5,-1,1,1,-1,1,1,1,0.5,-1,-1,-1,1,0.5,-1,-1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,1,0.5,-1,-1,-1,-1,-1,-1,0.5,-1,0,-1,-1,-0.5,0.5],
        "description": "Przemysław Czarnek is a Polish conservative politician affiliated with the Law and Justice (PiS) party, a former Education Minister, and the party's candidate for Prime Minister in the 2027 election. His key positions include emphasis on traditional Catholic education, opposition to LGBTQ+ rights in schools, and support for nationalist policies.",
        icon: czarnek,
        image: czarnekImage // czarnek
    },
    {
        "name": "Rafał Trzaskowski",
        "answers": [-0.5,-1,1,-0.5,1,1,0,-1,0.5,0.5,1,0,1,-0.5,-0.5,0.5,-1,0.5,0.5,1,1,0,-1,0.5,1,1,0.5,0.5,0.5,1,-1,0,1,0.5,0,-1,-1,-1,1,-0.5,1,0.5,-1,0,0.5,1,-1,0.5,1,0.5,0,-1,1,1,1,0,-1,0.5,1,-1,-1,1,-1,-1,0,-1,0,0,-1,-1,0,-1,-1,-1,-1,1,1,1,0,0,-1,0.5,0.5,-1,-1,-1,-0.5,-0.5,1,1,-1,-1,-1,-1,-1],
        "description": "Rafał Trzaskowski is a Polish liberal politician and Mayor of Warsaw affiliated with the Civic Platform (PO) party. His key positions include support for LGBTQ+ rights and secular policies, promotion of pro-EU integration and urban development, and advocacy for liberal reforms in areas like abortion and judicial independence.",
        icon: trzaskowski,
        image: trzaskowskiImage // trzaskowski
    },
    {
        "name": "Maciej Maciak",
        "answers": [1,1,1,1,0,1,1,0,1,1,-1,1,1,1,-1,-0.5,0,1,-0.5,1,-1,-1,0.5,-1,1,-1,-1,0,1,-1,0,-1,1,0,1,-1,-1,-0.5,-1,0,0.5,-1,0,-1,-1,0.5,-1,0,0.5,1,1,0.5,-1,-1,1,1,0,0,0,0,0,-1,0,0,0,1,0,-1,-1,0,-1,-1,-1,-1,1,1,1,0,-1,0,0.5,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,0,0],
        "description": "Maciej Maciak is a Polish journalist-turned-politician and leader of the Prosperity and Peace Movement (RDiP), a socio-political group focused on anti-establishment themes. His key positions include advocacy for peace-oriented foreign policy and reduced involvement in conflicts, support for access to affordable energy sources, and emphasis on economic prosperity through pragmatic diplomatic relations with neighbors.",
        icon: maciak,
        image: maciakImage // maciak
    },
    {
        "name": "Grzegorz Braun",
        "answers": [-1,-1,1,-1,1,1,0,-1,-1,-1,1,-0.5,-0.5,0.5,1,-1,1,1,1,1,1,1,1,-1,1,-1,-1,0.5,1,-1,1,-1,1,1,1,-1,1,-0.5,-1,-1,0.5,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,-1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,1,-1,-1,0,0],
        "description": "Grzegorz Braun is a Polish far-right politician, leader of the Confederation of the Polish Crown, and a current Member of the European Parliament. His key positions include strong nationalism and monarchism, criticism of foreign influence in the country's politics, and advocacy for traditional Catholic values.",
        icon: braun,
        image: braunImage // braun
    },
    {
        "name": "Robert Biedroń",
        "answers": [-0.5,-1,1,0.5,1,1,0,0,1,1,0,1,-0.5,0.5,0.5,-1,0.5,0,1,0,0.5,-1,-0.5,1,1,0.5,0,-1,-1,0.5,-1,1,-1,-1,-1,-1,-1,1,0,1,1,-0.5,1,0.5,1,-0.5,0,1,0.5,0,-1,1,1,-1,0,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,1,0.5,1,-0.5,0.5,1,1,-1,-1,-0.5,1,1,-1,1,1,0.5,-1,-1,1,1,1,1,1,-1,0.5,0.5,-1,0],
        "description": "Robert Biedroń is a Polish far-left politician, co-leader of the New Left (Nowa Lewica), and a Member of the European Parliament, known for his human rights activism. His key positions include promotion of LGBTQ+ rights and equality, support for progressive social policies and separation of church and state, and advocacy for EU-level human rights initiatives.",
        icon: biedron,
        image: biedronImage // biedron
    },
    {
        "name": "Janusz Korwin Mikke",
        "answers": [-1,-1,-1,-1,1,-0.5,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,0.5,1,0.5,1,1,1,-1,1,-1,-1,-1,1,-1,1,0.5,1,0,1,0.5,0.5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,0,0,1,-1,1,0.5,-1,-1,-1,-1,-1,0,-1,-1,-1,1],
        "description": "Janusz Korwin-Mikke is a Polish right-wing politician and founder of parties like the Congress of the New Right, known for his long career in libertarian and conservative circles. His key positions include extreme economic libertarianism with minimal taxes and state intervention, opposition to women's suffrage and gender equality, and Euroscepticism with calls for reduced EU influence.",
        icon: korwin,
        image: korwinImage // korwin
    }
];

export default candidates;