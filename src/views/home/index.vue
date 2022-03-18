<template>
    <div class="wjd">
        <div class="wjd-1">{{whd1}}</div>
        <div class="wjd-2" v-for="item in dataList">
        {{item.title}}
        </div>
    </div>
</template>
<script>
    import { ref,onMounted,getCurrentInstance,reactive,toRefs } from "vue";
    export default {
        setup() {
            const { proxy } = getCurrentInstance(); //来获取全局 globalProperties 中配置的信息
            const whd1 = ref("123")
            let List = reactive({
                dataList:[]
            })
            onMounted(() => {
                whd();
            });
            let whd = () => {
                proxy.$axios
                    .post("/getResource", {
                        // phone: 12345678912,
                    })
                    .then((res) => {
                        List.dataList = res
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            return {
                whd1,
                List,
                ...toRefs(List)
            }
        }
    }
</script>
<style lang="less">
    .wjd {
        color: black;

        .wjd-1 {
            color: red;
        }
    }
</style>