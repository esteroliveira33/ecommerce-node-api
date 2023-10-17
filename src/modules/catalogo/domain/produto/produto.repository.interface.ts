import { IRepository } from "@shared/domain/repository.interface";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";

interface IProdutoRepository<T> extends IRepository<T>{

    adicionarCategoria(produto: Produto, categoria: Categoria): Promise<boolean>;
    removerCategoria(produto: Produto, categoria: Categoria): Promise<boolean>;
}

export { IProdutoRepository}