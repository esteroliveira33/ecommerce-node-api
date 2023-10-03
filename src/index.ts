import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { PrismaClient } from '@prisma/client';
import { DomainException } from '@shared/domain/domain.exception';

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {
   
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);

    const categoriaRecuperada: Categoria | null= await categoriaRepo.recuperarPorUuid("c2666bdb-c055-40bb-951b-32f899f41e30");

    console.log(categoriaRecuperada);

    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();
    
    //console.log (todasCategorias);

    //const existeCategoria: boolean = await categoriaRepo.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);

    //const categoria: Categoria = Categoria.criar({
     //   nome: 'Sala e quarto'
    //});

    //const categoriaInserida = await categoriaRepo.inserir(categoria);

    //.log(categoriaInserida);

    //const categoria: Categoria= Categoria.recuperar({
    //    id: "96a7f212-e01d-4de7-8abc-70cabbc898df", 
    //    nome: "Banho"
    //})

    //const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);

    //console.log (atualizouCategoria);

    //const categoriaDeletada: boolean = await categoriaRepo.deletar("c2666bdb-c055-40bb-951b-32f899f41e30");

    //console.log(categoriaDeletada);

}   

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
       if (error instanceof DomainException) {
           console.log('Execeção de Dóminio');
           console.log(error.message);
       }
       else {
           console.log('Outras Exceções');
           console.log(error.message);
       }
       await prisma.$disconnect();
       process.exit(1);
   })