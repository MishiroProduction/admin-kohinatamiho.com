<template>
  <div class="sidebar">
    <ul class="side-menu-list">
      <li class="menu">
        <router-link class="link" to="/">
          <span>トップ</span>
        </router-link>
      </li>
      <li class="menu">
        <input id="users" class="acd-check" type="checkbox"/>
        <label class="acd-label category-name" for="users">ユーザー管理</label>
        <div class="menu-child">
          <ul>
            <li>
              <router-link class="link" to="">
                <span>ユーザー一覧</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',
})
</script>

<style lang="scss" scoped>
.side-menu-list {
  text-align:left;
  position: -webkit-sticky;
  position: sticky;
  float: left;
  height: 800px;
  top: 0;
  left: 0;
  width: 15%;
  background: #2c3e50;
  .site-top{
    color: #fff;
    display: block;
    margin: 10px;
    padding: 3px;
  }
  .acd-check{
    display: none;
  }
  .acd-label{
    color: #fff;
    display: block;
    margin: 10px;
    margin-bottom: 1px;
    padding: 3px;
  }
  .menu-child{
    border: 1px solid #333;
    height: 0;
    opacity: 0;
    padding: 0 5px;
    transition: .5s;
    visibility: hidden;
  }
  .acd-check:checked + .acd-label + .menu-child{
    height: 10%;
    opacity: 1;
    padding: 10px;
    visibility: visible;
  }
  .side-menu-list {
    padding: 0;
    margin: 10px auto;
    .menu {
      margin: 10px auto;
      .category-name {
        color: #fff;
      }
      .menu-child {
        .link {
          text-decoration: none;
          color: #fff;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
