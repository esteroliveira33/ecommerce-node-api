import { Categoria } from "./modules/catalogo/domain/categoria/categoria.entity";
import { DomainException } from "./shared/domain/domain.exception";

try {
    let categoria: Categoria;
    categoria = Categoria.criar({nome: 'Cama'});
    console.log(categoria);

    let propsCategoria = {
        id: '49438875-e729-4fb5-8ab8-e00dc8842d5f',
        nome: 'Mesa'
    };
    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);
    console.log(categoria.equals(categoria))
}
catch (error:any) {
    if (error instanceof DomainException){
    console.log(error.message);
    }
}
finally{
    console.log('Ação deve ser  executada em caso de sucesso e em caso de exceção.');
}