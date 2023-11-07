<script>
  let name = 'world'
  let toggle = false
  if(toggle){
    
  }
</script>

<button on:click={() =>{toggle = !toggle}}>
  Toggle
</button>
{#if toggle}
  <h1>Hello {name}!</h1>
{:else}
  <div>No name !</div>
{/if}
<!-- 시작: "#", 중간구문: ":", 끝: "/" -->