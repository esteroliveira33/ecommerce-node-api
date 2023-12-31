import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase, recuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controller";
import { RecuperarTodasCategoriaExpressController } from "./recuperar-todas-categorias.express.controller";
import { InserirCategoriaExpressController } from "./inserir-categoria.express.controller";
import { AtualizarCategoriaExpressController } from "./atualizar-categoria.express.controller";
import { DeletarCategoriaExpressController } from "./deletar-categoria.express.controller";
import { RecuperarTodosProdutosExpressController } from "./recuperar-todos-produtos.express.controller";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);
const recuperarTodasCategoriasController = new RecuperarTodasCategoriaExpressController(recuperarTodasCategoriasUseCase);
const inserirCategoriaController = new InserirCategoriaExpressController(inserirCategoriaUseCase);
const atualizarCategoriaController = new AtualizarCategoriaExpressController(atualizarCategoriaUseCase);
const deletarCategoriaController = new DeletarCategoriaExpressController(deletarCategoriaUseCase);
const recuperarTodosProdutosController = new RecuperarTodosProdutosExpressController(recuperarTodosProdutosUseCase);

export {
    recuperarCategoriaPorIdController,
    recuperarTodasCategoriasController,
    inserirCategoriaController,
    atualizarCategoriaController,
    deletarCategoriaController,
    recuperarTodosProdutosController 
}