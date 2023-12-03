export const player = {
    name: `${names}`,
    class: `${classType}`,
    health: `${health}`,
    level: `${level}`,
    exp: `${exp}`,
    skills: [
        {
            name: "Strength",
            level: 1,
        },
        {
            name: "Dexterity",
            level: 1,
        },
        {
            name: "Intelligence",
            level: 1,
        },
        {
            name: "Endurance",
            level: 1,
        }
    ],
    inventory: {
        gold: `${gold}`,
        items: [
            {
                name: "Beginner Sword",
                damage: 10,
                type: "weapon",
                quantity: 1,
                durability: 100,
                description: "This is a sword",
                itemlevel: 1,
            },
            {
                name: "Beginner Shield",
                defense: 10,
                type: "armor",
                quantity: 1,
                durability: 100,
                description: "This is a shield",
                itemlevel: 1,
            },
            {
                name: "Beginner Potion",
                heal: 10,
                type: "consumable",
                quantity: 3,
                description: "This is a potion",
                itemlevel: 1,
            },
        ],
    },
};
