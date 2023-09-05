import { ICategoria, CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types";
import { NomeCategoriaNuloOuIndefinido, NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception";
import { Entity } from "../../../../shared/domain/entity";
import { read } from "fs";

class Categoria extends Entity<ICategoria> implements ICategoria{

    private _nome: string;
    
    public get nome(): string {
        return this._nome;
    }
    
    private set nome(value: string){
        if (value === null || value === undefined){
            throw new NomeCategoriaNuloOuIndefinido();
        }

    if(value.trim().length < 3){
        throw new NomeCategoriaTamanhoMinimoInvalido();
    }

    if (value.trim().length > 50){
        throw new NomeCategoriaTamanhoMaximoInvalido();
    }

    this._nome = value;
}
    private constructor(categoria: ICategoria){
       super(categoria.id);
        this.nome = categoria.nome;
    }

    public  static criar(props: CriarCategoriaProps): Categoria {
        let { nome } = props;
        return new Categoria({ nome });
    }

    public static recuperar(props: RecuperarCategoriaProps): Categoria {
        return new Categoria(props);
    }
}

export { Categoria }