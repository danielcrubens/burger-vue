<template>
  <div id="burger-table">
    <MessageDelete :msg="msg" v-show="msg" />
    <MessageAlert :alert="alert" v-show="alert" />

    <div id="burger-table-heading">
      <div class="order-id">#</div>
      <div>Cliente <i class="fa-solid fa-user"></i></div>
      <div>Pão <i class="fa-solid fa-bread-slice"></i></div>
      <div>Carne <i class="fa-solid fa-drumstick-bite"></i></div>
      <div>Opcionais <i class="fa-solid fa-eye"></i></div>
      <div>Ações <i class="fa-solid fa-arrow-rotate-left"></i></div>
    </div>

    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status" @change="updateBurger($event, burger.id)">
            <option value="">Selecione </option>
            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageDelete from './MessageDelete.vue'
import MessageAlert from './MessageAlert.vue'
export default {
  name: 'Dashboard',
  components: {
    MessageDelete,
    MessageAlert
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: []
    }
  },
  methods: {
    async getPedidos() {
      const req = await fetch('https://db-burger-vue.onrender.com/burgers')
      const data = await req.json()
      this.burgers = data
      console.log(this.burgers)

      //resgatar os status
      this.getStatus()
    },
    async getStatus() {
      const req = await fetch('https://db-burger-vue.onrender.com/status')
      const data = await req.json()
      this.status = data
      console.log(this.status)
    },
    async deleteBurger(id) {
      const req = await fetch(`https://db-burger-vue.onrender.com/burgers/${id}`, {
        method: 'DELETE'
      })
      const res = await req.json()
      //msg
      this.msg = `Pedido N° ${id} apagado! `
      setTimeout(() => window.location.reload(), 3600)

      this.getPedidos()
    },
    async updateBurger(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`https://db-burger-vue.onrender.com/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });
      const res = await req.json()
      //msg
      this.alert = `Status do pedido N° ${res.id} atualizado para ${res.status}! `
      setTimeout(() => window.location.reload(), 1600)

      this.getPedidos()

    }
  },
  mounted() {
    this.getPedidos()
  },
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}

::-webkit-scrollbar {
  width: .4rem;
  background: #F4F4F4;
}

::-webkit-scrollbar-thumb {
  background: #dad7d7;
}

li {
  list-style: none;
}

#burger-table {
  width: 1200px;
  margin: 0 auto;
  margin-top: 1.3rem;
  max-height: 330px;
  overflow: scroll;
  overflow-x: hidden;

}

#burger-table-heading {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  padding: 0.75rem;
  border-bottom: 0.18rem solid #333;

  svg {
    color: $link;
  }

  div {
    width: 19%;
  }

  .order-id {
    width: 5%;

  }

  i {
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
  color: $link;
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