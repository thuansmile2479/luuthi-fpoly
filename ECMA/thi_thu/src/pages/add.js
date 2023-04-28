import axios from 'axios';
import { router, useEffect } from '../libs';

const add = () => {
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

            // fetch('http://localhost:3000/products', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // }).then(() => router.navigate('/'));
            axios
                .post('http://localhost:3000/products', formData)
                .then(() => router.navigate('/'));
        });
    });

    return /*html*/`<div>
                <form action="" id="form">
                    <div>
                        <label for="">Name</label>
                        <input type="text" class="name" />
                    </div>
                    <div>
                        <label for="">category</label>
                        <select name="" id="" class="category">
                            <option value="danh muc 1">Danh muc 1</option>
                            <option value="danh muc 2">Danh muc 2</option>
                        </select>
                    </div>
                    <div>
                        <label for="">description</label>
                        <textarea cols="30" rows="10" class="description"></textarea>
                    </div>
                    <div>
                        <label for="">image</label>
                        <input type="text" class="image" />
                    </div>
                    <div>
                        <label for="">price</label>
                        <input type="number" class="price" />
                    </div>
                    <button type="submit">add</button>
                </form>
        </div>`;
};

export default add;
