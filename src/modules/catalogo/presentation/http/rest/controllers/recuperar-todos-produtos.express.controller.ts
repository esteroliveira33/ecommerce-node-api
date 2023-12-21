import { NextFunction, Request, Response } from "express";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { RecuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case/recuperar-todos-produtos/recuperar-todos-produtos.use-case";
import { IProduto } from "@modules/catalogo/domain/produto/produto.types";

class RecuperarTodosProdutosExpressController extends ExpressController {

  private _recuperarTodProdutosUseCase: RecuperarTodosProdutosUseCase;

  constructor(recuperarTodProdutosUseCase: RecuperarTodosProdutosUseCase) {
      super();
      this._recuperarTodProdutosUseCase = recuperarTodProdutosUseCase;
  }

  async recuperar(request: Request, response: Response, next: NextFunction) {
      try {
          const listaProdutosDTO: Array<IProduto> = await this._recuperarTodProdutosUseCase.execute();
          this.sendSuccessResponse(response,listaProdutosDTO);
      } catch (error) {
          next(error);
      }

  }

}

export { RecuperarTodosProdutosExpressController }