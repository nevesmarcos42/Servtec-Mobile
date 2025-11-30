# Servtec-Mobile

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

Aplicação mobile para cotação e conversão de moedas estrangeiras em tempo real. Desenvolvida com React Native para uma experiência nativa multiplataforma.

[Sobre](#sobre-o-projeto) • [Funcionalidades](#funcionalidades) • [Tecnologias](#tecnologias) • [Instalação](#instalação) • [Uso](#uso) • [Contribuir](#contribuindo)

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Sobre o Projeto

Servtec-Mobile é uma aplicação mobile construída para auxiliar na cotação e conversão de moedas estrangeiras em tempo real. O projeto foi desenvolvido com foco em fornecer informações precisas e atualizadas sobre câmbio de moedas.

### Principais Características

- **Cotação em Tempo Real** - Dados atualizados consumidos de API externa
- **Conversão de Moedas** - Conversão entre diferentes moedas
- **Interface Responsiva** - Design mobile otimizado
- **Armazenamento Local** - Persistência de dados no dispositivo
- **Multiplataforma** - Funciona em iOS e Android

---

## Funcionalidades

### Aplicação Mobile

- **Cotação de Moedas**

  - Visualização de taxas de câmbio em tempo real
  - Suporte para múltiplas moedas
  - Atualização automática de valores

- **Conversão**

  - Converter valores entre diferentes moedas
  - Cálculo automático baseado em cotação atual
  - Interface intuitiva para entrada de valores

- **Armazenamento**
  - Salvar cotações favoritas
  - Histórico de conversões
  - Cache de dados para uso offline

---

## Tecnologias

### Mobile

| Tecnologia       | Descrição                     |
| ---------------- | ----------------------------- |
| **React Native** | Framework mobile              |
| **JavaScript**   | Linguagem de programação      |
| **Expo**         | Plataforma de desenvolvimento |

### API Externa

- **Awesome Cotação** - Fornecimento de dados de cotação em tempo real

---

## Arquitetura

### Estrutura de Diretórios

```
Servtec-Mobile/
├── assets/          # Arquivos estáticos (imagens, fontes)
├── src/
│   └── screens/     # Telas da aplicação
│       ├── Cotacao.js    # Tela de cotação
│       └── Site.js       # Tela web/site
├── App.js           # Componente principal
├── app.json         # Configurações do app
└── package.json     # Dependências do projeto
```

---

## Instalação

### Pré-requisitos

- **Node.js** - [Download](https://nodejs.org/)
- **npm** ou **yarn** - Gerenciador de pacotes
- **Expo CLI** - `npm install -g expo-cli`
- **Expo Go** - App para testar (disponível na App Store/Play Store)

### Instalação Local

#### 1. Clone o repositório

```bash
git clone https://github.com/nevesmarcos42/Servtec-Mobile.git
cd Servtec-Mobile
```

#### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

#### 3. Inicie a aplicação

```bash
npm start
# ou
yarn start
# ou
expo start
```

#### 4. Execute no dispositivo

- Escaneie o QR Code com o app **Expo Go** (Android/iOS)
- Ou pressione `a` para Android emulator
- Ou pressione `i` para iOS simulator

---

## Uso

### Primeiro Acesso

1. **Abra o app** no seu dispositivo via Expo Go

2. **Tela de Cotação**:

   - Visualize as cotações atualizadas
   - Selecione a moeda desejada
   - Veja os valores em tempo real

3. **Conversão de Moedas**:
   - Escolha a moeda de origem
   - Escolha a moeda de destino
   - Digite o valor a ser convertido
   - Veja o resultado instantaneamente

---

## Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Código

- Seguir convenções do React Native
- Usar componentes funcionais e Hooks
- Manter componentes pequenos e reutilizáveis
- Testar em ambas as plataformas (iOS e Android)

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por **Marcos Aurélio Neves**

[GitHub](https://github.com/nevesmarcos42)

---

**Versão**: 1.0.0

**Última Atualização**: Novembro 2025
