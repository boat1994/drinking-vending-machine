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
                name: "Pepsi",
                price: 20,
                categoryId: 7,
                image: "https://toppng.com/uploads/preview/transparent-soda-can-11563627768bfzqehmids.png"
            }
        )
    }
}