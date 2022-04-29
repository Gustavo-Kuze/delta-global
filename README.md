## CRUD de alunos

Desafio de Código.

## Instruções para instalação

### Ambiente de Desenvolvimento

Por gentileza, siga as intruções descritas na [documentação oficial do React Native](https://reactnative.dev/docs/getting-started) para preparar seu ambiente de desenvolvimento.

### Instalando as dependências do projeto

**Atenção**: O projeto foi configurado utilizando o NPM e as versões dependências estão fixas no arquivo `package-lock.json`.

____

Para instalar as dependências utilize o comando:

```
npm install
```

Caso esteja executando o projeto no iOS, após instalar as deps do NPM, instale as dependências do Cocoa Pods:

```
cd ios && pod install
```

### Como executar o projeto

**Android**

Após abrir o emulador do `AVD` ou `Genymotion`, execute o seguinte comando no terminal:

```
npx react-native run-android
```

**iOS**

Abra o arquivo `ios/delta.xcworkspace` no XCode e execute o projeto clicando no ícone de "Play"

____

## Sobre as decisões tomadas

**Porque usar Redux em um projeto tão pequeno!!?**

Por se tratar de um projeto de avaliação, decidi implementar Redux e Redux Sagas para demonstrar a abordagem que eu escolheria caso estivésse criando uma aplicação do mundo real. 

Sinto que devo citar que em projetos menores, a própria Context API supriria basicamente todas as necessidades de compartilhamento de estado, inclusive nesse projeto.

**Por que utilizar Firebase ao invés de um servidor próprio?**

Por se tratar de um projeto pequeno e para fins de avaliação, escolhi a opção mais ágil por conta do curto tempo para entrega das funcionalidades. Além disso, a hospedagem em núvem é gratuita para projetos de pequeno porte, permitindo que o serviço seja acessado de uma build final e garantindo que todo o fluxo do app possa ser testado sem custos adicionais.

Tanto os dados `JSON` quanto os arquivos de imagens estão sendo armazenados no Firebase. Para isso estão sendo utilzados, respectivamente, os seguites serviços:

- Realtime Database
- Storage

