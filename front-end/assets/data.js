export const categories = [
    {
        id: 1,
        name: 'mineral'
    },
    {
        id: 7,
        name: 'Soda'
    },
    {
        id: 2,
        name: 'non sparking'
    },
    {
        id: 3,
        name: 'alc'
    },
    {
        id: 4,
        name: 'energy'
    },
    {
        id: 5,
        name: 'milk'
    },
    {
        id: 6,
        name: 'juice'
    },
]

export const products = repeatProduct(20)

function repeatProduct(num) {
    let arr = [];
    for (let i=0; i < num; i++) {
        arr.push(
            {
                id: i,
                name: "Pepsi",
                price: 20,
                categoryId: Math.floor((Math.random() * 7) + 1),
                image: "/_nuxt/assets/images/bottle.jpg"
            }
        )
    }
    return arr
}