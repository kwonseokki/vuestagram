<template>
  <div :class="filter + ' filter-item'" :style="`background-image:url(${url})`" >
    <span class="filter-name">
      <slot name="a"></slot>
      <button @click="fire">버튼</button>
    </span>
    </div> 
</template>

<script>
export default {
    name : "FilterBox",
    data() {
        return {
          msg : "hello"
        }
    },
    props : {
        url : String,
        filter : String
    },
    methods : {
      fire() {
        this.emitter.emit("fire", this.filter)
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  position: relative;
}

.filter-name {
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  color:#222;
  font-weight:bold;
}
</style>