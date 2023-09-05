import { faker } from '@faker-js/faker';
import { beforeAll, describe, expect, test } from "vitest";
import { IDEntityUUIDInvalid } from "../../../../shared/domain/domain.exception";
import { Categoria } from "./categoria.entity";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception";
import { CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types";

let nomeCategoriaValido: string;
let nomeCategoriaTamanhoMinInvalido: string;
let nomeCategoriaTamanhoMaxInvalido: string;
let UUIDValido: string;
let UUIDInvalido: string;

//Chamado uma vez antes de iniciar a execução de todos os testes no contexto atual.
beforeAll(async () => {

    //Preenchendo as variáveis com dados em conformidade com as restrições da regra de negócio
    nomeCategoriaValido = faker.string.alpha({length:{min:3,max:50}});
    nomeCategoriaTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:2}});
    nomeCategoriaTamanhoMaxInvalido = faker.string.alpha({length:{min:51,max:51}});
    UUIDValido = faker.string.uuid(); //Retorna um UUID v4
    UUIDInvalido = faker.string.alpha({length:{min:1,max:20}});

});


//Suite de Testes de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados
describe('Entidade de Domínio: Categoria (Criar)', () => {

    //Teste define um conjunto de expectativas relacionadas.
    //Recebe o nome do teste e uma função que contém as expectativas a serem testada
    test('Deve criar uma Categoria Válida - ', async () => {
    
        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: nomeCategoriaValido
        };

        console.log(categoriaValida);

        //Quando (When) e então (Then)
        expect(Categoria.criar(categoriaValida))
            .to.be.instanceof(Categoria)
    });
    

    test('Não deve criar Categoria com nome Inválido - Tamanho Mínimo', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalida: CriarCategoriaProps = {
            nome: nomeCategoriaTamanhoMinInvalido
        }

        //Quando (When) e então (Then)
        expect (() => Categoria.criar(categoriaNomeInvalida))
        .toThrowError(NomeCategoriaTamanhoMinimoInvalido)
    });

    test('Não deve criar Categoria com nome Inválido - Tamanho Máximo', async () => {

         //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalida: CriarCategoriaProps = {
            nome: nomeCategoriaTamanhoMaxInvalido
        };

        //Quando (When) e então (Then)
        expect (() => Categoria.criar(categoriaNomeInvalida))
        .toThrowError(NomeCategoriaTamanhoMaximoInvalido)
    });

});

describe('Entidade de Domínio: Categoria (Recuperar)', () => {

    test('Deve Recuperar Uma Categoria Válida', async () => {

        //Dado (Given)
        const categoriaValida: RecuperarCategoriaProps = {
            id: UUIDValido,
            nome: nomeCategoriaValido
        };

        //Quando (When) e Então (Then)
        expect(Categoria.recuperar(categoriaValida))
            .to.be.instanceof(Categoria);

    });

    test('Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalido: RecuperarCategoriaProps = {
            id: UUIDInvalido,
            nome: nomeCategoriaValido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaIdInvalido))
            .toThrowError(IDEntityUUIDInvalid);

    });

    test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

        //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
            id: UUIDValido,
            nome: nomeCategoriaTamanhoMaxInvalido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);

    });

});    
