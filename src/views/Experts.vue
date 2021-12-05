<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Experts" />

      <!-- Portfolio Grid Items -->
      <b-row>
        <!--FILTRO-->

        <div class="form-group mb-5">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="procura pelo nome expert..."
            v-model="filterName"
          />
        </div>
       <!-- <div class="form-group mx-sm-3 mb-5">
          <select class="form-control form-control-lg" v-model="filterGroup">
            <option value="todos">todos os Sponsors</option>
            <option value="anfíbio">anfíbios</option>
            <option value="ave">aves</option>
            <option value="mamífero">mamíferos</option>
            <option value="peixe">peixes</option>
            <option value="réptil">répteis</option>
          </select>
        </div>-->
        <div class="form-group mx-sm-3 mb-5">
          <select class="form-control form-control-lg">
            <option value="todos">todos os níveis</option>
            <option value="1">Nivel Geral</option>
            <option value="2">Nivel Especialista </option>
          </select>
        </div>
        <div class="form-group mb-5">
          <button class="btn btn-success btn-lg">
            <i></i> ordenar
          </button>
        </div>
      </b-row>
      <div class="row">
        <Expert v-for="a in expertDb" :key="a.id" :expert="a"></Expert>
      </div>
    </b-container>
  </section>
</template>

<script>
import Expert from "@/components/Expert.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import db from "../../db/expert.json";

export default {
  name: "Experts",
  components: {
    HeaderPage,
    Expert
  },
  data: function() {
    return {
      filterName: "",
      filterGroup: "todos",
      filterLevel: "todos",
      reverse: false,
      animals: [],
      userLevel:0,
      expertDb: db
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
