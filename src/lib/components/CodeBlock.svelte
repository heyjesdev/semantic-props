<script lang="ts">
    import Code from "./Code.svelte";

	let { description, lang, code }: {
		description: string,
		lang: string,
		code: string
	} = $props();
</script>

<semantic-props version="3">
	<article class="container">
		<h4 class="desc">{lang} &mdash; {description}</h4>
		<pre><Code lang={lang} code={code} /></pre>
	</article>
</semantic-props>

<style>
	.container {
		display: inline-block;
		inline-size: fit-content;
		max-inline-size: min(100%, var(--large-container));
		vertical-align: top;
		margin-block: 0 var(--medium);
		margin-inline-end: var(--small);
		:global(& + &) {
			margin-block-start: 0;
		}
	}

	.desc {
		display: block;
		font-weight: var(--thin-weight);
		font-family: var(--display-family);
		font-size: var(--x-small-font);
		text-transform: uppercase;
		color: var(--medium-contrast-color);
		line-height: var(--normal-line);
		margin: var(--3x-small);
	}

	pre {
		display: block;
		tab-size: 4;
		white-space: pre;
		font: var(--small-font)/var(--short-line) var(--mono-family);
		border-radius: var(--small-radius);
		border: 1px var(--line) var(--middleground-color);
		border-block-end-width: 2px;
		background-color: var(--foreground-color);
		color: var(--medium-contrast-color);
		padding-block: var(--small);
		padding-inline: var(--small) var(--x-large);
		margin: 0;
		overflow: auto;
	}
</style>