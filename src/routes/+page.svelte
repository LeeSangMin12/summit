<script>
	import axios from "axios";

	import Counter from '@/routes/home/Counter.svelte';
	import welcome from '@/lib/images/svelte-welcome.webp';
	import welcome_fallback from '@/lib/images/svelte-welcome.png';

	const api = axios.create({
  	baseURL: "http://localhost:8080", 
	});

  /**
  * hi 를 서버에 보냄 
  */
	const send_hi = () => {
		const hi = "안녕하세요";
		api.post("/hi", hi, {

		}).then((res) => {
			console.log(res);
		})
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	
	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />

	<button on:click={send_hi}>인사 서버에 보내기</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
