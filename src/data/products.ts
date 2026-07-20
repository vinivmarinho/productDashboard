/*  Criar um array para os produtos */

/* Type de um objeto */
export type Product = {
    id: number;
    name: string;
    category: "Electronicos" | "Acessórios" | "Móveis";
    price: number;
    stock: number;
    status: "Ativo" | "Inativo";
}

/* Array de produtos do tipo "PRODUCT" */
export const products: Product[] = [];


/* Cria um produto e adiciona ele ao array "products" */
function createProduct(name: string, category: Product["category"], price: number, stock: number, status: Product["status"]): Product {
    const id = products.length + 1;

    const product = {
        id,
        name,
        category,
        price,
        stock,
        status
    };

    products.push(product);
    console.log(`Produto ${name} criado com sucesso`);
    return product;
}

