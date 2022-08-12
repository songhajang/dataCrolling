    <template>
  <div class="mt-5">
    <hr>
    <h1 class="text-3xl my-10 text-center font-black"> <strong class="text-5xl text-sky-300">{{userId}}</strong> USER PROFILE</h1>
    <hr>

    <p class="text-center mt-10"><router-link class="p-3 bg-gray-300 rounded-md" :to="{name : 'user'}">돌아가기</router-link></p>

    <div class="mx-auto max-w-[850px] min-h-[400px] my-10 shadow-lg ">

      <div class="my-20 text-center" v-if="DetailList == null">
          <img width="200" class="m-auto" src="https://dataapi.co.kr/img/loading.gif" />
          <h3 class="text-black text-lg text-center pt-20">데이터 연결중입니다.</h3>
      </div>

      <div v-else-if="DetailList.length < 1">
        <h3 class="text-red-500 text-2xl text-center pt-20">
          <img width="50" class="mx-auto my-10" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
          데이터 연결 오류 !</h3>
      </div>

      <div v-else class="my-10 flex border-2 box-border ">
        <img class="max-w-[400px]"
          src="https://images.unsplash.com/photo-1531854253260-44f0d06e3d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="">

        <div class="ml-10 mt-20">

          <h1 class="text-3xl font-black text-sky-500 mb-10 flex">
            <img class="max-w-[50px] mr-5"
              src="https://templates.scriptsbundle.com/opportunities-v3/demo/images/admin.jpg " alt=""> |
            <span class="ml-5">{{ DetailList.username }} </span>
          </h1>

          <h3 class="my-5 text-lg text-sky-800 font-semibold">NAME 
            <p class="text-gray-400 mt-2 font-light">{{ DetailList.name }}</p>
          </h3>
          <h3 class="my-5 text-lg text-sky-800 font-semibold">ADDRESS 
            <p class="text-gray-400 mt-2 font-light">( {{DetailList.address.suite }} )</p>
            <p class="text-gray-400 mt-2 font-light">{{DetailList.address.city}} - {{DetailList.address.street}} - {{DetailList.address.zipcode}}</p>  
          </h3>
          <h3 class="my-5 text-lg text-sky-800 font-semibold">EMAIL 
            <p class="text-gray-400 mt-2 font-light">{{DetailList.email}}</p>
          </h3>
          <h3 class="my-5 text-lg text-sky-800 font-semibold">PHONE 
            <p class="text-gray-400 mt-2 font-light">{{DetailList.phone}}</p>
          </h3>
          <h3 class="my-5 mb-10 text-lg text-sky-800 font-semibold">COMPANY 
            <p class="text-gray-400 mt-2 font-light">{{DetailList.company.catchPhrase}}</p>
          </h3>

        </div>

      </div>
    </div>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      DetailList: null,
      userId: this.$route.params.userId,
    }
  },
  methods: {
    test() {
      let self = this

      this.$axios.get('https://jsonplaceholder.typicode.com/users/' + this.userId)
        .then(res => {
          // console.log(res)
          if (res.status !== 200) {
            alert('통신에러!');
            self.DetailList = [];
          } else {
            self.DetailList = res.data;
          }

        })
    }
  },
  mounted() {
    this.test()
  }
}
</script>

    <style>
    </style>