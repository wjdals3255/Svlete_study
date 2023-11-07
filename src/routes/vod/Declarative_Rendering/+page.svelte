<script>
  let name = 'world'
  let age = 80

  function assign() {
      name = 'jeong min'
      age = 30
  }
  // setTimeout(() => {
  //   name = 'jeong min'
  //   age = 30
  // }, 3000)
</script>

<!-- 선언적 랜더링이 가능하다 -->
<h1>Hello {name}!</h1>

<h2 class={age < 80 ? 'active' : ''}>{age}</h2>

<img src="" alt="{name}" /><br />

<!-- 단방향 데이터 바인딩 -->
<input type="text" value="{name}">  

<!-- 양방향 데이터 바인딩 -->
<input type="text" bind:value="{name}">  

<br />

<button on:click={assign}>Assign</button>

<style>
  h1 {
    color: red
  }
  .active {
    color: blue
  }
</style>