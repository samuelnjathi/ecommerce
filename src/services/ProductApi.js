
export const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    } catch (error) {
        console.error("Error fetching products: ", error);
    }
}