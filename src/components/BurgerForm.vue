<template>
  <div>
    <p>Menssagem pedido</p>
    <div>
      <form id="buger-form">
        <h1>Monte seu Burger</h1>
        <div class="input-container">
          <label for="nome">Nome do Cliente</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome completo">
        </div>
        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option value="integral">Integral</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha o tipo de carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option value="maminha">Maminha</option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span>
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span> <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span>
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span>
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span> <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span>
          </div>
        </div>
        <input type="submit" class="submit-btn" value="Criar meu Burger">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerForm'
}
</script>

<style lang="scss" scoped>
#buger-form {
  h1{
    margin-bottom: 0.8rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: .8rem;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.4rem;
    padding: 0.31rem 0.62rem;
    border-left: 0.25rem solid $link;
  }

  input,
  select {
    padding: 0.62rem;
    outline: none;
    width: 18.75rem;
    border: 0.06rem solid $bg;

    &:focus {
      border: 0.06rem solid $link;
    }
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem 0.5rem;
    justify-content: space-between;
    align-content: end;
    justify-items: start;
    width: 100%;
    margin-bottom: 1.25rem;

    span,
    input {
      width: auto;
    }

    span {
      margin-left: -4.5rem;
      font-weight: bold;
    }
  }

  .submit-btn {
    width: auto;
    cursor: pointer;
    display: block;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(to right, $bg 50%, $link 50%);
    background-size: 200% 100.5%;
    background-position: right bottom;
    font-size: 1rem;
    color: $h1;
    border: none;
    border-left: 0.20rem solid $bg;
    border-color: none;
    box-shadow: 0.188rem 0.188rem 0.125rem rgba(0, 0, 0, 0.2);
    transition: all .3s ease-out;

    &:hover {
      background-position: left bottom;
      color: $text;
    }
  }
}
</style>