import { IUseCase } from "@shared/application/use-case.interface";
import { IProduto } from "@modules/catalogo/domain/produto/produto.types";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { ProdutoMap } from "@modules/catalogo/infra/mappers/produto.map";

class RecuperarTodosProdutosUseCase implements IUseCase<void,Array<IProduto>> {
    private _produtoRepositorio: IProdutoRepository<Produto>;

    constructor(repositorio: IProdutoRepository<Produto>){
        this._produtoRepositorio = repositorio;
    }

    async execute(): Promise<IProduto[]> {
       
        const todosProdutos: Array<Produto> = await this._produtoRepositorio.recuperarTodos();

        const todosprodutosDTO = todosProdutos.map(
            (produto) => ProdutoMap.toDTO(produto)
        );

        return todosprodutosDTO;
    }
   
}

export { RecuperarTodosProdutosUseCase }