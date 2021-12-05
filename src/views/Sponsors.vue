<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Sponsor" />

      <!-- Portfolio Grid Items -->
      <b-row>
        <!--FILTRO-->

        <div class="form-group mb-5">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="procura pelo nome..."
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
          <select class="form-control form-control-lg" v-model="filterLevel">
            <option value="todos">todos os níveis</option>
            <option value="1">Nivel Prata</option>
            <option value="2">Nivel Gold </option>
            <option value="3">Nivel Premiun</option>
            <option value="4">Nivel Black</option>
          </select>
        </div>
        <div class="form-group mb-5">
          <button class="btn btn-success btn-lg" @click="getSponsor">
            <i></i> ordenar
          </button>
        </div>
      </b-row>
      <div class="row">
        <Sponsor v-for="a in sponsorsDb" :key="a.id" :sponsor="a"></Sponsor>
      </div>
    </b-container>
  </section>
</template>

<script>
import Sponsor from "@/components/Sponsor.vue";
import HeaderPage from "@/components/HeaderPage.vue";
///import sponsorService from "@/api/sponsor.service";
import db from "../../db/sponsors.json";

export default {
  name: "Sponsors",
  components: {
    HeaderPage,
    Sponsor
  },
  data: function() {
    return {
      filterName: "",
      filterGroup: "todos",
      filterLevel: "todos",
      reverse: false,
      animals: [],
      userLevel:0,
      sponsorsDb: db,
    };
  },
  computed: {},
  methods: {
    getSponsor(){
    }
  },
  created() {}
};
</script>
