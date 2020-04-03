# Caesar's crush 

## Índice

* [1. Prefácio](#1-prefácio)
* [2. O que é o Caesar's crush?](#2-O-que-é-o-Caesar's-crush?)
* [3.  Quem são os principais usuários?](#3-Quem-são-os-principais-usuários?)
* [4.  Como o produto resolve os problemas do usuário?](#4-Como-o-produto-resolve-os-problemas-do-usuário?)
* [5. Como foi feito o projeto?](#6-Como-foi-feito-o-projeto?)
* [6.  Quais foram as tecnologias usadas no projeto?](#7-Quais-foram-as-tecnologias-usadas-no-projeto)
* [9. Como instalar  e iniciar a aplicação](#9-Como-instalar-e-iniciar-a-aplicação:)
*[10.Como o deploy da  aplicação é feita](#10-Como-o-deploy-da-aplicação-é-feita:)
***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. O que é o Caesar's crush?

é um projeto desenvolvido com o objetivo de criptografar e descriptografar mensagens usando a cifra de césar, o tema do projeto é mandar mensagens secretas para alguém que você gosta :D

## 3. Quem são os principais usuários?
Pessoas que gostariam de mandar mensagens de uma maneira diferente e divertida

## 4. Como o produto resolve os problemas do usuário?

O produto oferece uma interface simples e clean, atendendo o usuário no  seu objetivo de mandar mensagens de um jeito diferente.

## 5. Como foi feito o projeto?
primeiro foi feita a definição de qual seria o produto, e quais seriam os usuários finais, com essa informação já definida, se iniciou o processo de desenho da interface  na qual o usuário iria colocar os dados e receber o resultado desejado, o desenvolvimento da interface tem como objetivo ser  confortável e clara para o usuário,dentro da proposta estabelecida.

### Quais foram as tecnologias usadas no projeto?

* javascript
* html
* css
* nodeJS


### Como instalar  e iniciar a aplicação:

Faça um clone para a sua máquina(git clone + url do repositório) e dê um npm start no terminal,copie a url (geralmente é a http://localhost:5000) e cole no seu navegador :D

### Como o deploy da  aplicação é feita:

1. No GitHub, vá até  o seu repositório.
2. abaixo do nome do seu repositório clique em Settings.
3. No "GitHub Pages", use o menu suspenso Source (Fonte) e selecione uma fonte de publicação.(master branch,ou outra branch)
