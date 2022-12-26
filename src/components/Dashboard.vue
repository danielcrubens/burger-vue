<template>
  <div id="burger-table">

    <div id="burger-table-heading">
      <div class="order-id">#:</div>
      <div>Cliente <i class="fa-solid fa-user"></i></div>
      <div>Pão <i class="fa-solid fa-bread-slice"></i></div>
      <div>Carne <i class="fa-solid fa-drumstick-bite"></i></div>
      <div>Opcionais <i class="fa-solid fa-eye"></i></div>
      <div>Ações <i class="fa-solid fa-arrow-rotate-left"></i></div>
    </div>

    <div id="burger-table-rows">
      <div class="burger-table-row">
        <div class="order-number">1</div>
        <div>João</div>
        <div>Pão de Trigo</div>
        <div>Maminha</div>
        <div>
          <ul>
            <li>Salame</li>
            <li>Tomate</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status">
            <option value="">Selecione </option>
          </select>
          <button class="delete-btn">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
 
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.3rem;

}

#burger-table-heading {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  padding: 0.75rem;
  border-bottom: 0.18rem solid #333;
  svg{
    color: $link;
  }
  div {
    width: 19%;
  }

  .order-id {
    width: 5%;

  }
  i{
    color: red;
    background: pink;
  }
}

#burger-table-rows {
  display: flex;
  flex-wrap: wrap;
}

.burger-table-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.75rem;
  border-bottom: 0.06rem solid #CCC;

  div {
    width: 19%;
  }

  .order-number {
    width: 5%;
  }
}

select {
  padding: 0.75rem 0.37rem;
  margin-right: 0.75rem;

  outline: none;
}

.delete-btn {
  background-color: $h1;
  color: #fcba03;
  font-weight: bold;
  border: 0.12rem solid $h1;
  padding: 0.62rem;
  font-size: 1rem;
  margin: 0 auto;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: transparent;
    color: $h1;
  }
}
</style>