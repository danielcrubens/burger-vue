<template>
   
    <div>
      <form id="buger-form" @submit="createBurger">
        <Message :msg="msg" v-show="msg"/>
        <div class="input-container">
          <label for="nome">Nome do Cliente</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome completo">
        </div>
        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha o tipo de carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <input :disabled="!nome || !pao||!carne " type="submit" value="Criar meu Burger">
      </form>
    </div>

</template>

<script>
import Message from './Message.vue'
export default {
  name: 'BurgerForm',
  components: {
    Message
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    
    }
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("https://db-burger-vue.onrender.com/ingredientes")
      const data = await req.json()
      console.log(data)
      this.paes = data.paes
      this.carnes = data.carnes
      this.opcionaisdata = data.opcionais
    },
    async createBurger(e) {
      e.preventDefault();
      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: 'Solicitado',

      }
      const dataJson = JSON.stringify(data)
      const req = await fetch("https://db-burger-vue.onrender.com/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      }); 
      const res = await req.json()
      console.log(res)
      //colocar msg no sistema
  this.msg = `Pedido N° ${res.id} realizado com sucesso!`
      // limpar message
      setTimeout(() => this.msg = "", 3600)
      // limpar campos
      this.nome = ""
      this.carne = ""
      this.pao = ""
      this.opcionais = []

    }
  },
  mounted() {
    this.getIngredientes()
  },
}
</script>

<style lang="scss" scoped>
$disable:#dddd;

#buger-form {
  h1 {
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
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 1.25rem;

    span {
      width: auto;
      margin-left: 0.37rem;
      font-weight: bold;
    }

    input {
      width: auto;
    }
  }

  input[type=submit] {
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
    &:disabled{
		background:$disable;
		color:#bebebe;
    border-left:none;
		cursor: auto;
    &:hover{
      background:#cccc;
      color:#bebebe;
    }
    }
    &:hover {
      background-position: left bottom;
      color: $text;
    }
  }
}
</style>