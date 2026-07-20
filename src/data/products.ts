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

