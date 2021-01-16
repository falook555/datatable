<template>
  <div class="stock container">
    <br />
    <br />
    <h1 class="page-header">
      Fruit table
    </h1>
    <input
      class="form-control mb-4"
      type="text"
      placeholder="ค้นหาสินค้า"
      v-model="search"
    />
    <!-- <Pagination> -->
    <table id="customers" class="table table-striped">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>ภาพ</th>
          <th>ชื่อสินค้า</th>
          <th>ราคา</th>
          <th>รายละเอียด</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr v-for="item in resultQuery" :key="item.id">
          <td width="1%">{{ item.id }}</td>
          <td width="10%"><img :src="item.img" width="150" /></td>
          <td width="10%">{{ item.productname }}</td>
          <td width="10%">{{ item.price }} บาท/กก.</td>
          <td width="69%">{{ item.dtails }}</td>
        </tr>
      </tbody>
    </table>
    <!-- </Pagination> -->
  </div>
</template>

<script>
import axios from "axios";
// import Pagination from "@/views/Pagination.vue";

export default {
  name: "stock",
  components: {
    // Pagination,
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      search: "",
    };
  },
  computed: {
    resultQuery() {
      if (this.search) {
        return this.info.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.productname.toLowerCase().includes(v));
        });
      } else {
        return this.info;
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:4005/get-stock")
      .then((response) => (this.info = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid rgb(0, 0, 0);
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #cccccc;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #a5004d;
  color: white;
}

#tbody {
  text-align: center;
}
</style>
