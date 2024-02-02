<script context="module">
	// URLSearchParams
	// URL을 발견할 때마다 url.searchParams다음의 인스턴스인 를 통해 쿼리 매개변수에 액세스할 수 있습니다
	// const url = new URL(import.meta.url);
	// const foo = url.searchParams.get('foo');
	// console.log(foo);

	// 웹압호화(UUID: Universally Unique Identifier)
	//  범용 고유 식별자를 나타내는 16바이트(128비트) 길이의 식별자입니다. UUID는 네트워크 상에서의 고유성을 보장하고 식별자가 필요한 많은 컨텍스트에서 사용
	// Web Crypto API는 전역 을 통해 제공됩니다 crypto. 콘텐츠 보안 정책 헤더 에 내부적으로 사용되지만 UUID 생성과 같은 작업에도 사용할 수도 있습니다.
	// const uuid = crypto.randomUUID();
	// console.log(uuid); //56b655ba-adc3-44ae-93b9-669fc7c2ca62
</script>

<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
