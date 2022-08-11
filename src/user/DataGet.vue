<template>
    <div class="text-center mt-10">
        <hr>
        <h1 class="text-3xl my-5 font-black">USER LIST</h1>
        <hr />
        <div v-if="userList === null" class="my-5 p-5 pb-10  mx-auto rounded-lg">
            <img width="200" class="m-auto" src="https://dataapi.co.kr/img/loading.gif" />
            <h4>데이터를 불러오는 중입니다.</h4>
        </div>

        <div v-else-if="userList.length < 1" class="my-5 p-5 pb-10  mx-auto rounded-lg">
            <h4 class="flex justify-center items-center my-3">
                <img width="40" class="mr-5" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
                <span>
                    유저가 발견되지 않았습니다.
                </span>
            </h4>
        </div>

        <div v-else>
            <ul class="my-5 text-left p-5 pb-10 max-w-[1000px] mx-auto rounded-lg">
                <router-link :to="{
                    name: 'detail', params: {userId: user.id}}"
                     v-for="(user, idx) in userList" :key="idx">
                    <li
                        class="border-2 p-10 m-5 rounded-md shadow-lg  shadow-gray-300/40 cursor-pointer 
                        hover:shadow-sky-200 
                        hover:border-sky-100 flex hover:bg-sky-100 hover:ring hover:ring-sky-200">
                       <div class="mr-10 flex items-center flex-col	">
                         <img src="https://templates.scriptsbundle.com/opportunities-v3/demo/images/admin.jpg"
                             width="100" alt="">
                            <h5 class="mt-2">{{user.id}}</h5>
                       </div>
                        <div>
                            <h4 class="text-xl my-2">{{ user.name }}</h4>

                            <p class="text-lg">
                                ({{ user.address.zipcode }}) {{ user.address.street }}
                            </p>

                            <a class="text-gray-400" :href="'mailto:' + user.email">{{ user.email }}</a> |
                            <a class="text-gray-400" :href="'tel:+' + user.phone">+ {{ user.phone }}</a>
                        </div>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            userList: null,
        }
    },

    methods: {
        fetchData: function () {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/')
                .then(function (response) {
                    // response
                    if (response.status !== 200) {
                        alert('통신에러!');
                        self.userList = [];
                    } else {
                        self.userList = response.data;
                    }
                })
        }
    },

    mounted() {
        this.fetchData();
    },
}
</script>

<style>
</style>