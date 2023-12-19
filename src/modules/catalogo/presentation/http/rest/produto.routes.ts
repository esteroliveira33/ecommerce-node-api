import { expr}
import { recuperarTodosProdutosController } from './controllers';

produtoRouter.get(
    '/',
    (reques, response, next) =>  recuperarTodosProdutosController.recuperar(request, response, next)
)

export { produtoRouter }