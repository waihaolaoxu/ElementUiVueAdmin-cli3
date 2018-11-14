<template>
    <div class="aside-wrap">
        <div class="logo"><router-link to="/">美氪云CMS</router-link></div>
        <div class="menu-wrap">
            <el-menu :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened background-color="#324157" text-color="#B4BCCC" active-text-color="#fff" style="border-right:0" router>
                
                <el-submenu :index="'group-'+key" v-for="(value, key) in navData" :key="key">
                    <template slot="title"> 
                        <i :class="value.icon"></i>
                        <span slot="title" v-text="value.group"></span>
                    </template>
                    <el-menu-item :index="value.href" v-for="(value, key) in value.list" :key="key" :route="{path:value.href}" v-text="value.name"></el-menu-item>
                </el-submenu>

            </el-menu>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navData:[
            {
                icon:'el-icon-menu',
                group:'模板',
                list:[
                    {
                        href:'/list',
                        name:'列表'
                    },
                    {
                        href:'/form',
                        name:'表单'
                    }
                ]
            },
            {
                icon:'el-icon-message',
                group:'其他',
                list:[
                    {
                        href:'/foo2',
                        name:'foo2'
                    }
                ]
            }
        ],
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
        activePath() {
            var path = this.$route.path;
            var light = this.$route.meta.light;
            var param = this.$route.meta.param;
            if (light) {
                path = light;
                if (param) {
                    path = path + '/' + this.$route.params[param];
                }
            }
            return path;
        }
    }
  }
</script>