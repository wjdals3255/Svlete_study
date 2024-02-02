<script>
	import { page } from '$app/stores';
</script>

<!-- 오류가 발생하여 해당 오류 매세지를 표현 -->
<h1>{$page.status}: {$page.error.message}</h1>
