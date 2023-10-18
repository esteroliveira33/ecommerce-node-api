import { IRepository } from "@shared/domain/repository.interface";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";
import { StatusProduto } from "./produto.types";


interface IProdutoRepository<T> extends IRepository<T>{

    adicionarCategoria(produto: Produto, categoria: Categoria): Promise<boolean>;
    removerCategoria(produto: Produto, categoria: Categoria): Promise<boolean>;
    alterarStatus(produto: Produto, status: StatusProduto): Promise<boolean>;
    recuperarPorCategoria(idCategoria: string): Promise<Produto[]>;
}

export { IProdutoRepository}