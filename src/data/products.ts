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
// Primeiro busca products no localStore
const savedProducts = localStorage.getItem("products");
// Se houver, vai para "products"
export const products: Product[] = savedProducts ? JSON.parse(savedProducts): [];


/* Cria um produto e adiciona ele ao array "products" */
export function createProduct(name: string, category: Product["category"], price: number, stock: number, status: Product["status"]): Product {
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

    localStorage.setItem("products", JSON.stringify(products));
    return product;
};

/* Deletar pelo id */
export function deleteProduct(id: number) {

    /* Remove produto que tenha o mesmo id do parâmetro e cria novo array */
    const updatedProducts = products.filter(product => product.id !== id);
    
    products.length = 0; // Esvazia array original
    products.push(...updatedProducts); // Adiciona ao array original o array atualizado

    localStorage.setItem("products", JSON.stringify(products));

    console.log(`Produto com o id ${id} removido`)

}

/* Atualizar o produto pelo id;
    - updates => Objeto contento apenas os campos que serão alterados
    - Partial<> => Torna todas as propriedades opcionais, permitindo atualizar somente os campos desejados
    - Omit<Product, "id"> => Cria um tipo baseado em Product, mas remove a propriedade "id", impedindo que ela seja alterada
*/
export function updateProduct( id: number, updates: Partial<Omit<Product, "id">>): void {
    /* Procurando o produto pelo id */
    const product = products.find(product => product.id === id);

    if (!product) {
        console.log("Produto não encontrado");
        return;
    };

    /* Atualiza somente os campos enviados*/
    Object.assign(product, updates)

    localStorage.setItem("products", JSON.stringify(products));
    console.log("Produto atualizado")
};

export function ReadAllProducts():Product[] {
    /* Pega array no localStorage e depois mostra ele em formato JSON*/
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : []
};