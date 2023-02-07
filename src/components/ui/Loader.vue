<template>
  <div class="loader-container"><div class="loader"></div></div>
</template>

<style lang="scss" scoped>
.loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
  margin: 50px 0;
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
}
.loader:before,
.loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: #6e2b15;
  box-shadow: 30px 0 0 #dba34c;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: #1e6080;
  box-shadow: 30px 0 0 #bdc774;
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.8);
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% {
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(720deg) scale(0.8);
    -moz-transform: rotate(720deg) scale(0.8);
  }
}
@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #dba34c;
  }
  50% {
    box-shadow: 0 0 0 #dba34c;
    margin-bottom: 0;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #dba34c;
    margin-bottom: 10px;
  }
}
@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #bdc774;
  }
  50% {
    box-shadow: 0 0 0 #bdc774;
    margin-top: -20px;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #bdc774;
    margin-top: 0;
  }
}
</style>
