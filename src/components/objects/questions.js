const questionItems = [
    {
        "question": "I worry more about Corporate Influence than State Influence",
        "effect": {
            "econ": 10,
            "legal": -5,
            "global": 0,
            "social": 0
        },
    },
    {
        "question": "The means of production should be controlled by the state",
        "effect": {
            "econ": 10,
            "legal": -2,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Some products ought to be banned",
        "effect": {
            "econ": 5,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "We should tax the rich more",
        "effect": {
            "econ": 10,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Taxes overall should be lower for everybody",
        "effect": {
            "econ": -10,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support state projects such as roads",
        "effect": {
            "econ": 5,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support tariffs",
        "effect": {
            "econ": 5,
            "legal": 0,
            "global": -5,
            "social": 0
        }
    },
    {
        "question": "We should tax harmful substances like cigarettes",
        "effect": {
            "econ": 3,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "The government should intervene in the economy",
        "effect": {
            "econ": 7,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support government social programs such as welfare, subsidies, health insurance",
        "effect": {
            "econ": 5,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Nobody is owed someone's service or goods",
        "effect": {
            "econ": -10,
            "legal": 5,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Healthcare is a human right",
        "effect": {
            "econ": 5,
            "legal": -2,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "The root cause of most bad things is rich elites",
        "effect": {
            "econ": 10,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "We're being fooled to fight one another by the powerful and rich",
        "effect": {
            "econ": 10,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "State corruption is worse than corporate corruption",
        "effect": {
            "econ": -10,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support the equality of outcome",
        "effect": {
            "econ": 15,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "People should have the freedom to consentually trade the goods and services they want",
        "effect": {
            "econ": -15,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support the Police",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "There's too many laws on the books",
        "effect": {
            "econ": 0,
            "legal": 10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Law enforcement should have more state funding",
        "effect": {
            "econ": 5,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Marijuana should be legal",
        "effect": {
            "econ": -2,
            "legal": 5,
            "global": 0,
            "social": -2
        }
    },
    {
        "question": "I support the right to own firearms",
        "effect": {
            "econ": -2,
            "legal": 10,
            "global": 0,
            "social": 2
        }
    },
    {
        "question": "I support freedom of speech",
        "effect": {
            "econ": 0,
            "legal": 10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I think we should have hate speech regulations",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Certain political ideologies ought to be banned",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support the introduction of a digital ID",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "Social media should be banned for the underage",
        "effect": {
            "econ": 2,
            "legal": -10,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "Pornography should be banned",
        "effect": {
            "econ": 2,
            "legal": -5,
            "global": 0,
            "social": 10
        }
    },
    {
        "question": "I support the deportation of illegal immigrants",
        "effect": {
            "econ": 2,
            "legal": -15,
            "global": -5,
            "social": 2
        }
    },
    {
        "question": "Nobody's illegal on stolen land",
        "effect": {
            "econ": -2,
            "legal": 10,
            "global": -2,
            "social": -10
        }
    },
    {
        "question": "I think immigration enforcement should be more aggressive",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": 10
        }
    },
    {
        "question": "I support the freedom to protest for any cause",
        "effect": {
            "econ": 0,
            "legal": 15,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support tougher sentences for criminals",
        "effect": {
            "econ": 0,
            "legal": -5,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support cash bail",
        "effect": {
            "econ": 0,
            "legal": -5,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support the death penalty",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Private courts would function better than Public courts",
        "effect": {
            "econ": 0,
            "legal": 5,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I want my atheist/religious values to be enforced upon the rest of the country",
        "effect": {
            "econ": 0,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Humanity should be interconnected",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "I support a World Government",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 15,
            "social": 0
        }
    },
    {
        "question": "I support political unions such as the European Union",
        "effect": {
            "econ": -2,
            "legal": 0,
            "global": 10,
            "social": 0
        }
    },
    {
        "question": "I support federalisation",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 10,
            "social": 0
        }
    },
    {
        "question": "Borders should be abolished",
        "effect": {
            "econ": -2,
            "legal": 2,
            "global": 15,
            "social": -5
        }
    },
    {
        "question": "I support cultural diversity",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 10,
            "social": -10
        }
    },
    {
        "question": "Globalism should be enforced on other countries",
        "effect": {
            "econ": 0,
            "legal": -5,
            "global": 15,
            "social": 0
        }
    },
    {
        "question": "I support world-wide organizations such as the UN or the WHO",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 10,
            "social": 0
        }
    },
    {
        "question": "I am anti-war of any kind",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "It's our responsibility to remove terrorists worldwide",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 10,
            "social": 5
        }
    },
    {
        "question": "It's our responsibility to help refugees",
        "effect": {
            "econ": 2,
            "legal": 0,
            "global": 10,
            "social": -5
        }
    },
    {
        "question": "I support regime change if it benefits the world as a whole",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "I support regime change if it benefits my country",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": -5,
            "social": 0
        }
    },
    {
        "question": "We should demilitarize",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 15,
            "social": 0
        }
    },
    {
        "question": "Countries have a right to defend themselves",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 2,
            "social": 0
        }
    },
    {
        "question": "I support Ukraine",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "I support Israel",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": 0
        }
    },
    {
        "question": "I am against foreign influence in my country's politics",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": -10,
            "social": 0
        }
    },
    {
        "question": "We should have an internet firewall like China",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": -15,
            "social": 0
        }
    },
    {
        "question": "Abortion should be legal till birth for any reason",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "There should be a compromise on abortion",
        "effect": {
            "econ": -2,
            "legal": 0,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Abortion should be criminalized",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Mothers that do abortions should be prosecuted the same as any other murder case",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 10
        }
    },
    {
        "question": "Gay marriage should be legal",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Marriage shouldn't be a state institution at all",
        "effect": {
            "econ": -5,
            "legal": 5,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "Transgender treatments (surgeries, hormones etc.) shouldn't be covered by insurance",
        "effect": {
            "econ": -10,
            "legal": 2,
            "global": 0,
            "social": -2
        }
    },
    {
        "question": "Transgender-affirming treatments (f.e hormones) should be illegal for underage people",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Transgender-affirming treatments (f.e hormones) should be illegal",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Transgender surgeries (f.e phalloplasty) should be illegal",
        "effect": {
            "econ": 2,
            "legal": -5,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Transwomen are women",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Non-binary gender is a real thing",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Neogenders are a real thing",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Sex isn't equal to Gender",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Therian and otherkin should be recognized by the law",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 0,
            "social": -15
        }
    },
    {
        "question": "Poly relationships can be as successful as monogamous relationships",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Poly marriages should be recognized by the law",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "I'm an atheist",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -2
        }
    },
    {
        "question": "I'm religious",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 2
        }
    },
    {
        "question": "Humans are made in the image of God",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Traditions should be cherished",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Human fetuses are neither human nor people",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Black people deserve reparations for slavery",
        "effect": {
            "econ": 5,
            "legal": -5,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Polish people deserve reparations for world war two",
        "effect": {
            "econ": 0,
            "legal": -2,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Group identity is important",
        "effect": {
            "econ": 5,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "I believe in a meritocracy",
        "effect": {
            "econ": -5,
            "legal": 0,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "White people have privilege",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Women shouldn't have the right to vote",
        "effect": {
            "econ": 0,
            "legal": -5,
            "global": 0,
            "social": 15
        }
    },
    {
        "question": "My race is better",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 15
        }
    },
    {
        "question": "All cultures are made equal",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 5,
            "social": -15
        }
    },
    {
        "question": "Kinks have a place in Pride",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Sex education should be available in primary and middle schools",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "The environment needs to be protected",
        "effect": {
            "econ": 10,
            "legal": 0,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "Conservatives are nazis",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "Liberals are communists",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": 5
        }
    },
    {
        "question": "Transwomen should be allowed to participate in women's sports",
        "effect": {
            "econ": 0,
            "legal": 0,
            "global": 0,
            "social": -5
        }
    },
    {
        "question": "I am against law enforcement in general",
        "effect": {
            "econ": 0,
            "legal": 10,
            "global": 0,
            "social": -10
        }
    },
    {
        "question": "I think authority should be centralized in fewer people",
        "effect": {
            "econ": 5,
            "legal": -10,
            "global": 0,
            "social": 0
        }
    },
    {
        "question": "I support the development of AI technologies",
        "effect": {
            "econ": -5,
            "legal": 5,
            "global": 0,
            "social": 0
        }
    }
];

export default questionItems;