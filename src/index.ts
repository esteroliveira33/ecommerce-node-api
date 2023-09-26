import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient();

async function main() {

    let categoria: Categoria;
    categoria = Categoria.criar({nome:'mesa'});

    /*await prisma.categoria.create({
        data: {
            id: categoria.id,
            nome: categoria.nome
        }
    });*/

    const categoriarecuperada = await prisma.categoria.update({
        where: {id: "2eca23b4-d03b-48c2-a0ee-91f19a9c198f"},
        data: {nome: 'banho'},
    })

    const ListaCategorias = await prisma.categoria.findMany();
    console.log(ListaCategorias);

}

main()

    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Execeção de Domínio');
            console.log(error.message);
        }
        else {
            console.log('Outras Execeções');
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })
