import axios from 'axios';
import { useEffect, useState } from '../libs';

const list = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/products')
        //     .then((response) => response.json())
        //     .then((data) => setProducts(data));
        axios
            .get('http://localhost:3000/products')
            .then(({ data }) => setProducts(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (const btn of btns) {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;

                fetch(`http://localhost:3000/products/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const data = products.filter((item) => item.id != id);
                    setProducts(data);
                });
            });
        }
    });

    return `<div>
                <table border="1">
                    <thead>
                        <td>Stt</td>
                        <td>name</td>
                        <td>category</td>
                        <td>description</td>
                        <td>image</td>
                        <td>price</td>
                        <td><a href="/add">Them</a></td>
                    </thead>
                    <tbody>
                        ${products
                            .map((product, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${product.name}</td>
                                    <td>${product.category}</td>
                                    <td>${product.description}</td>
                                    <td width="100"><img src="${
                                        product.image
                                    }" alt="" /></td>
                                    <td>${product.price}</td>
                                    <td>
                                        <button class='btn-remove' data-id="${
                                            product.id
                                        }">Xoa</button>
                                        <a href="/edit/${product.id}">Sua</a>
                                    </td>
                                </tr>
                            `;
                            })
                            .join('')}
                        
                    </tbody>
                </table>
    </div>`;
};

export default list;
