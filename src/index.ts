import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
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

    const produtoRepo =  new ProdutoPrismaRepository(prisma);

 ////////////////////////////////
    //Recuperar Produto por UUID//
    ////////////////////////////////
   
    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(produtoRecuperado);

    ///////////////////
    //Inserir Produto//
    ///////////////////

    //const categoria01: Categoria = Categoria.recuperar({
    //    id: "2920cc8b-6ccf-4177-bfce-0ca73de60175",
    //    nome: 'Sala'
    //});    

   // const categoria02: Categoria = Categoria.recuperar({
    //   id: "6db7e350-fbc2-4d50-ac60-751ea89bd73f",
    //  nome: 'Banho'
    //});

    //const produto: Produto = Produto.criar({
    //    nome:'Toalha de mesa',
    //    descricao:'toalha de algodão',
    //    valor:40,
    //    categorias:[categoria01,categoria02]
    // });

    //const produtoInserido = await produtoRepo.inserir(produto);

    //console.log(produtoInserido);

    /////////////////////
    //Atualizar Produto//
    /////////////////////

    const categoria01: Categoria = Categoria.recuperar({
        id: '7061d559-ab25-4182-98ce-170afdf2acd2',
        nome: 'mesa'
    });    

    const categoria02: Categoria = Categoria.recuperar({
        id: '96a7f212-e01d-4de7-8abc-70cabbc898fd',
        nome: 'banho'
    })
   
    const produto: Produto = Produto.recuperar({
        id: "c3d7d942-e368-4e9c-85e5-5bb898d776fc",
        nome: "Toalha de Mesa Grande",
        descricao: "Toalha de Algodão",
        valor: 100,
        categorias:[categoria01,categoria02]
    });    

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);

    console.log(atualizouProduto) /////////////////////
    //Atualizar Produto//
    /////////////////////

    const categoria01: Categoria = Categoria.recuperar({
        id: '7061d559-ab25-4182-98ce-170afdf2acd2',
        nome: 'mesa'
    });    

    const categoria02: Categoria = Categoria.recuperar({
        id: '96a7f212-e01d-4de7-8abc-70cabbc898fd',
        nome: 'banho'
    })
   
    const produto: Produto = Produto.recuperar({
        id: "c3d7d942-e368-4e9c-85e5-5bb898d776fc",
        nome: "Toalha de Mesa Grande",
        descricao: "Toalha de Algodão",
        valor: 100,
        categorias:[categoria01,categoria02]
    });    

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);

    console.log(atualizouProduto)
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