const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3},
];


export default function List() {
    return (
        <ul>
            {
                products.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    )
}



