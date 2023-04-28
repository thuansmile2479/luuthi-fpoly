import axios from 'axios';
import { useEffect, useState, router } from '../libs';

const edit = ({ id }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:3000/products/${id}`)
        //     .then((response) => response.json())
        //     .then((data) => setProduct(data));
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then(({ data }) => setProduct(data));
    }, []);

    useEffect(() => {
        const form = document.querySelector('#form');
        const name = document.querySelector('.name');
        const category = document.querySelector('.category');
        const description = document.querySelector('.description');
        const image = document.querySelector('.image');
        const price = document.querySelector('.price');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: name.value,
                category: category.value,
                description: description.value,
                image: image.value,
                price: price.value,
            };

            // fetch(`http://localhost:3000/products/${id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // }).then(() => router.navigate('/'));
            axios
                .put(`http://localhost:3000/products/${id}`, formData)
                .then(() => router.navigate('/'));
        });
    });

    return `<div>
                <div>
                    <form action="" id="form">
                        <div>
                            <label for="">Name</label>
                            <input type="text" class="name" value="${
                                product.name
                            }"/>
                        </div>
                        <div>
                            <label for="">category</label>
                            <select name="" id="" class="category">
                                <option value="danh muc 1" ${
                                    product.category == 'danh muc 1'
                                        ? 'selected=selected'
                                        : ''
                                }>Danh muc 1</option>
                                <option value="danh muc 2" ${
                                    product.category == 'danh muc 2'
                                        ? 'selected=selected'
                                        : ''
                                }>Danh muc 2</option>
                            </select>
                        </div>
                        <div>
                            <label for="">description</label>
                            <textarea cols="30" rows="10" class="description">${
                                product.description
                            }</textarea>
                        </div>
                        <div>
                            <label for="">image</label>
                            <input type="text" class="image" value="${
                                product.image
                            }"/>
                        </div>
                        <div>
                            <label for="">price</label>
                            <input type="number" class="price" value="${
                                product.price
                            }"/>
                        </div>
                        <button type="submit">Sua</button>
                    </form>
                </div>
            </div>`;
};

export default edit;
