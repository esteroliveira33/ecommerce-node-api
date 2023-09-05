Feature: Criar Cateoria

Como um <administrador>
Eu quero <Criar uma categoria>
De modo que <Os produtos possam ser associados a uma ou mais categorias facilitando a organização e busca dos produtos>

Scenario: Categoria válida (Padrão)

Dado <Given> [Categoria válida]
Quando (When) [Socilitar a Criação de uma Categoria]
Então (Then) [A categoria deve ser criada corretamente]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho mínimo (Execeção)

Dado [Uma categoria com nome que não atende ao tamanho mínimo]
Quando [Solicitar a Criação de uma Categoria]
Então [Um erro informando que o nome da categoria não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da categoria não atende o tamanho máximo (Exceção)

Dado [Uma categoria com nome que não atende ao tamanho máximo]
Quando [Solicitar a Criação de uma Categoria]
Então [Um erro informando que o nome da categoria não possui um tamanho máximo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da categoria não possui somente espaços em branco

Dado [Uma categoria com nome que não possui somente espaços em branco]
Quando [Solicitar a Criação de uma Categoria]
Então [Um erro informando que o nome da categoria é inválido deve ser apresentado]