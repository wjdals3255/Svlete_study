<script>
  import {storeName} from './store'
  import Parent from "./Parent.svelte";
  let name = 'world'
  $storeName = name

  console.log(storeName); // {set: ƒ, update: ƒ, subscribe: ƒ}
  console.log($storeName);  
  // set, update, subscribe 메소드를 사용해 구현하는 대신,
  // 간단하게 $ 표시를 사용하는 것을 Auto-subscribe(자동구독)이라함
</script>

<h1>Hello {name}!</h1>
<Parent />