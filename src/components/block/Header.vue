<template>
    <div class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" menu-trigger="click">
        <li class="el-menu-item" @click="asideToggle">
          <i class="iconfont" :class="{'icon-dedent':!asideFolded,'icon-indent':asideFolded}"></i>
        </li>
        <!-- <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu> -->
        <el-submenu index="4" class="login-info fr">
          <template slot="title">Admin</template>
          <el-menu-item index="4-1">退出登录</el-menu-item>
          <el-menu-item index="4-2">设置</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    created(){
      this.checkWidth();
      window.onresize=this.checkWidth;
    },
    methods: {
      checkWidth:function(){
        if(window.innerWidth>500){
          this.$store.commit('ASIDE_TOGGLE',false);
        }else{
          this.$store.commit('ASIDE_TOGGLE',true);
        }
      },
      asideToggle(){
        this.$store.commit('ASIDE_TOGGLE');
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      ...mapGetters(['asideFolded'])
    }
  }
</script>