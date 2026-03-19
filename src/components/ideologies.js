const ideologies = [
    {
        "name": "Anarcho-Communism",
        "stats": {
            "econ": 100,
            "legal": 100,
            "global": 50,
            "social": 10
        },
        "description": "A stateless, classless communist society based on common ownership of the means of production, voluntary cooperation, and the abolition of both capitalism and all forms of hierarchical authority, including the state."
    },
    {
        "name": "Libertarian Communism",
        "stats": {
            "econ": 100,
            "legal": 70,
            "global": 70,
            "social": 10
        },
        "description": "A form of communism that emphasizes individual liberty, direct democracy, and voluntary association while rejecting state authority and capitalism, often overlapping with anarchist traditions."
    },
    {
        "name": "Trotskyism",
        "stats": {
            "econ": 100,
            "legal": 60,
            "global": 100,
            "social": 20
        },
        "description": "A Marxist tendency advocating permanent revolution, international socialism, opposition to bureaucracy in socialist states, and rejection of socialism in one country."
    },
    {
        "name": "Marxism",
        "stats": {
            "econ": 100,
            "legal": 40,
            "global": 40,
            "social": 20
        },
        "description": "A socioeconomic and political theory based on historical materialism, class struggle, and the analysis of capitalism as exploitative, predicting its replacement by a classless communist society through proletarian revolution."
    },
    {
        "name": "Stalinism",
        "stats": {
            "econ": 100,
            "legal": 10,
            "global": 10,
            "social": 50
        },
        "description": "A political ideology and system associated with Joseph Stalin's rule in the Soviet Union, characterized by centralized state control of the economy, rapid industrialization, forced collectivization of agriculture, one-party rule under the Communist Party, extensive use of secret police and purges, cult of personality, and the doctrine of socialism in one country with strict authoritarian enforcement."
    },
    {
        "name": "Maoism",
        "stats": {
            "econ": 100,
            "legal": 0,
            "global": 0,
            "social": 50
        },
        "description": "A variant of Marxism-Leninism adapted to agrarian societies, emphasizing peasant-based revolution, continuous class struggle, mass mobilization, and anti-revisionism."
    },
    {
        "name": "Nazism",
        "stats": {
            "econ": 80,
            "legal": 0,
            "global": 0,
            "social": 90
        },
        "description": "An authoritarian, ultranationalist ideology characterized by racial hierarchy (with Aryan supremacy), antisemitism, expansionism, total state control, and suppression of opposition."
    },
    {
        "name": "Fascism",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 15,
            "social": 80
        },
        "description": "An authoritarian ultranationalist ideology promoting a centralized dictatorial state, forcible suppression of dissent, militarism, corporatist economic organization, and often a cult of leadership."
    },
    {
        "name": "Theocratic Socialism",
        "stats": {
            "econ": 100,
            "legal": 50,
            "global": 50,
            "social": 90
        },
        "description": "A form of socialism or communism integrated with religious doctrine and clerical authority, where economic collectivism and social policies are justified and guided by religious principles and leadership."
    },
    {
        "name": "Democratic Socialism",
        "stats": {
            "econ": 80,
            "legal": 70,
            "global": 50,
            "social": 20
        },
        "description": "An ideology seeking socialist economic goals (such as collective or public ownership of key industries) achieved through democratic processes, elections, and reforms rather than revolution."
    },
    {
        "name": "Libertarian Socialism",
        "stats": {
            "econ": 80,
            "legal": 80,
            "global": 80,
            "social": 20
        },
        "description": "A socialist tradition opposing both capitalism and state authority, favoring decentralized, voluntary, and directly democratic forms of economic organization and worker self-management."
    },
    {
        "name": "MAGA Socialism",
        "stats": {
            "econ": 80,
            "legal": 30,
            "global": 30,
            "social": 80
        },
        "description": "A loosely used or emerging term referring to policies or tendencies within the Make America Great Again movement that involve significant state intervention in the economy, protectionism, or nationalization elements, sometimes described critically as right-wing or nationalist-inflected socialism."
    },
    {
        "name": "Liberalism",
        "stats": {
            "econ": 60,
            "legal": 60,
            "global": 70,
            "social": 30
        },
        "description": "A political and moral philosophy centered on individual rights, liberty, consent of the governed, equality before the law, private property, free markets, and limited government."
    },
    {
        "name": "Social Democracy",
        "stats": {
            "econ": 60,
            "legal": 65,
            "global": 80,
            "social": 20
        },
        "description": "A political ideology supporting a capitalist mixed economy with strong welfare state provisions, progressive taxation, labor rights, and regulation to reduce inequality, achieved through democratic means."
    },
    {
        "name": "Religious Democracy",
        "stats": {
            "econ": 60,
            "legal": 50,
            "global": 60,
            "social": 65
        },
        "description": "A political system or ideology that combines democratic governance (elections, pluralism, rule of law) with significant influence from religious principles, values, or institutions, often seeking to align policies with religious ethics while maintaining democratic processes and religious freedom."
    },
    {
        "name": "Progressivism",
        "stats": {
            "econ": 60,
            "legal": 70,
            "global": 80,
            "social": 0
        },
        "description": "A political philosophy advocating social, political, and economic reforms to advance social justice, equality, environmental protection, and expanded civil rights, often through government intervention and progressive taxation to address inequalities and modern challenges."
    },
    {
        "name": "Imperialism",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 100,
            "social": 50
        },
        "description": "A policy or ideology advocating the extension of a nation's authority and influence over other territories or peoples, typically through colonization, military conquest, economic domination, or cultural imposition to gain resources, power, or strategic advantages."
    },
    {
        "name": "Moderate",
        "stats": {
            "econ": 50,
            "legal": 50,
            "global": 50,
            "social": 50
        },
        "description": "A centrist or pragmatic political stance that avoids extremes, favoring compromise, incremental change, and balanced policies between left and right ideologies, often emphasizing stability, bipartisanship, and practical solutions over ideological purity."
    },
    {
        "name": "Moderate Conservatism",
        "stats": {
            "econ": 40,
            "legal": 50,
            "global": 50,
            "social": 60
        },
        "description": "A conservative position that supports traditional values, limited government, free markets, and social stability but accepts some progressive reforms, welfare elements, or pragmatic compromises rather than rigid traditionalism or radical change."
    },
    {
        "name": "Conservatism",
        "stats": {
            "econ": 40,
            "legal": 50,
            "global": 50,
            "social": 70
        },
        "description": "A political and social philosophy favoring tradition, social stability, established institutions, limited government intervention in the economy, private property, and gradual change over radical reform, often emphasizing national identity, family values, and moral order."
    },
    {
        "name": "Trumpism",
        "stats": {
            "econ": 50,
            "legal": 30,
            "global": 30,
            "social": 70
        },
        "description": "The political ideology associated with Donald Trump and the Make America Great Again (MAGA) movement, characterized by right-wing populism, economic nationalism, anti-globalism, immigration restrictionism, skepticism of international institutions, and emphasis on strong executive leadership."
    },
    {
        "name": "Religious Fundamentalist",
        "stats": {
            "econ": 50,
            "legal": 30,
            "global": 50,
            "social": 80
        },
        "description": "An ideology advocating strict adherence to literal interpretations of religious texts and doctrines, seeking to apply them comprehensively to personal, social, and political life, often opposing secularism, modernism, and perceived deviations from traditional religious norms."
    },
    {
        "name": "Libertarianism",
        "stats": {
            "econ": 30,
            "legal": 70,
            "global": 50,
            "social": 50
        },
        "description": "A political philosophy emphasizing individual liberty, personal responsibility, minimal government intervention, free markets, private property, and non-aggression, opposing most forms of state coercion including taxation and regulation beyond basic protection of rights."
    },
    {
        "name": "Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "legal": 100,
            "global": 50,
            "social": 50
        },
        "description": "A libertarian ideology advocating the complete abolition of the state in favor of a society based on voluntary contracts, private property, free markets, and private provision of all services (including security and law) through competing agencies and market mechanisms."
    },
    {
        "name": "Capitalist Fascism",
        "stats": {
            "econ": 0,
            "legal": 0,
            "global": 50,
            "social": 70
        },
        "description": "A term sometimes used to describe a system or tendency combining fascist authoritarianism, ultranationalism, and corporatist elements with preservation of private ownership and capitalist economic structures under strong state direction and suppression of opposition."
    },
    {
        "name": "Capitalist Liberalism",
        "stats": {
            "econ": 0,
            "legal": 0,
            "global": 50,
            "social": 30
        },
        "description": "A political and economic ideology that combines classical liberal principles (individual rights, rule of law, limited government, personal freedoms) with a strong emphasis on free-market capitalism, private property, entrepreneurship, and minimal state interference in the economy, often aligning with economic liberalism or neoliberal tendencies in practice."
    },
    {
        "name": "Secular Fascism",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 50,
            "social": 0
        },
        "description": "A form of fascism that emphasizes ultranationalism, authoritarianism, militarism, and suppression of dissent without reliance on religious justification, treating the state, nation, or leader as the supreme secular authority in a quasi-religious manner."
    },
    {
        "name": "Neo-Liberalism",
        "stats": {
            "econ": 30,
            "legal": 50,
            "global": 70,
            "social": 40
        },
        "description": "An economic and political ideology promoting free-market capitalism, deregulation, privatization, reduced government spending on welfare, globalization, free trade, and individual entrepreneurship as drivers of prosperity and efficiency."
    },
    {
        "name": "Minarchism",
        "stats": {
            "econ": 10,
            "legal": 90,
            "global": 50,
            "social": 50
        },
        "description": "A libertarian ideology advocating a minimal state limited strictly to protecting individual rights through police, military, and courts, rejecting broader government roles in welfare, regulation, or economic planning."
    },
    {
        "name": "Neo-Conservatism",
        "stats": {
            "econ": 30,
            "legal": 40,
            "global": 70,
            "social": 60
        },
        "description": "A political ideology combining traditional conservative values with assertive foreign policy (including military intervention to promote democracy), support for a strong welfare state in some areas, and emphasis on moral clarity and American global leadership."
    },
    {
        "name": "Global Anarcho-Communism",
        "stats": {
            "econ": 100,
            "legal": 100,
            "global": 100,
            "social": 0
        },
        "description": "An extension of anarcho-communism envisioning a worldwide stateless, classless society based on voluntary cooperation, common ownership of resources, and abolition of hierarchies and capitalism on a planetary scale."
    },
    {
        "name": "Global Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "legal": 100,
            "global": 100,
            "social": 50
        },
        "description": "An extension of anarcho-capitalism envisioning a borderless, stateless world governed entirely by voluntary market exchanges, private property rights, competing private defense agencies, and free trade without any centralized political authority."
    },
    {
        "name": "Global Theocracy",
        "stats": {
            "econ": 50,
            "legal": 50,
            "global": 100,
            "social": 90
        },
        "description": "A hypothetical or ideological vision of worldwide governance under direct or indirect divine rule, where religious authorities or principles derived from a specific faith dictate laws, policies, and social order across all nations."
    },
    {
        "name": "Global Secular Liberalism",
        "stats": {
            "econ": 60,
            "legal": 50,
            "global": 100,
            "social": 30
        },
        "description": "An ideology promoting universal application of liberal principles (individual rights, democracy, rule of law, free markets, secular governance, human rights, and tolerance) on a worldwide scale, often through international institutions, globalization, and advocacy for liberal democratic norms."
    }
];

export default ideologies;