import instance from "./instance"; 

const getAllCategory = () => {
    return instance.get('/categories')
}
const getOneCategory = (id: number) => {
    return instance.get('/categories/' + id)
}

export { getAllCategory, getOneCategory }