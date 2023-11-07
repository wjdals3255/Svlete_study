<!-- ST -->

<script>
  let text =''
</script>

<h1>
  {text}
</h1>

<input 
  type="text"  
  value={text} 
  on:input={(e) => {text = e.target.value}} 
/>
<button on:click={() => {text = 'jeongmin'}}>Click</button>