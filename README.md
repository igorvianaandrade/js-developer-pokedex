# 🚀 Trilha JS Developer — Projeto Pokédex


---


# 📒 Anotações (Espaço do Aluno)
Guia de anotações para desenvolvimento do projeto **Pokédex** utilizando **HTML, CSS e JavaScript**.

---

# 🎨 Normalize CSS
Utilize o **Normalize CSS** para garantir consistência de estilos entre diferentes navegadores.

### Como usar
Adicione o link dentro da tag `<head>` do HTML.

🔗 https://cdnjs.com/libraries/normalize

---

# 📁 Estrutura de Pastas do Projeto

Organize o projeto da seguinte forma:

```

/assets
/css
/js

index.html

````

Essa organização facilita a manutenção e escalabilidade do projeto.

---

# 🔤 Google Fonts

Utilize **Google Fonts** para melhorar a tipografia da aplicação.

### Como usar
Adicione o código de importação dentro do `<head>` do HTML.

🔗 https://fonts.google.com/selection/embed

### Aplicação Global
No arquivo `global.css`, aplique a fonte para todos os elementos:

```css
* {
    font-family: 'NomeDaFonte', sans-serif;
}
````

---

# 📱 Mobile First

### Conceito

A abordagem **Mobile First** consiste em criar o layout primeiro para **dispositivos móveis** e depois adaptar para telas maiores.

### Vantagens

* Melhor performance
* Código mais organizado
* Evita reescrita desnecessária de CSS

### Boa prática

1. Criar estilos base para **mobile**
2. Utilizar **media queries** para telas maiores

---

# ⚙️ Dinâmica do Projeto

Se estiver usando **JavaScript para gerar a lista de Pokémons**, utilize a seguinte estrutura de URL para carregar as imagens:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{ID_DO_POKEMON}.png
```

Exemplo:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
```

---

# 🧬 API dos Pokémons

Para obter dados dos Pokémons utilize a **PokeAPI**.

### Exemplo de requisição

```
https://pokeapi.co/api/v2/pokemon/1
```

### Lista de Pokémons

```
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10
```

---

# 🎨 Modelo de Interface da Pokédex

Referência visual para o layout da aplicação.

🔗 Dribbble
[https://dribbble.com/shots/6540871-Pokedex-App/attachments/6540871-Pokedex-App?mode=media](https://dribbble.com/shots/6540871-Pokedex-App/attachments/6540871-Pokedex-App?mode=media)

🖼️ Imagem do modelo
[https://cdn.dribbble.com/userupload/42297016/file/original-ee1c480dc3f7d8d55244a79336cc6c2c.png?resize=800x600](https://cdn.dribbble.com/userupload/42297016/file/original-ee1c480dc3f7d8d55244a79336cc6c2c.png?resize=800x600)

---

# 📏 Conversão de REM para PX

Ferramenta útil para converter unidades de medida.

🔗 [https://pixelsconverter.com/rem-to-px](https://pixelsconverter.com/rem-to-px)

---

# 📐 Media Queries

### Exemplos

🔗 [https://www.w3schools.com/Css/css3_mediaqueries_ex.asp](https://www.w3schools.com/Css/css3_mediaqueries_ex.asp)

### Breakpoints do Bootstrap

🔗 [https://getbootstrap.com/docs/5.0/layout/breakpoints/](https://getbootstrap.com/docs/5.0/layout/breakpoints/)

---

# 🌐 Fetch API

Utilize **Fetch API** para consumir dados da PokeAPI.

📚 Documentação oficial
🔗 [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```
