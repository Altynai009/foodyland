import axios from "../Axios"

class CategoriesApi {
    async getCategories() {
        const { data } = await axios.get("/categories.php")
        return data.categories
    }
}

export const apiCategories = new CategoriesApi()