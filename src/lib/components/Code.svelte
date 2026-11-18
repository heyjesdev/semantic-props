<script lang="ts">
	import hljs from "highlight.js";

	let { lang, code }: {
		lang: string,
		code: string
	} = $props();
</script>

<semantic-props version="3">
	<code>{@html hljs.highlight(code.trim(), { language: lang }).value}</code>
</semantic-props>

<style>
	code {
		font-family: var(--mono-family);
	}

	code :global {
		/*
			Atom One Light+Dark by Daniel Gamage
			Original One Light Syntax theme from https://github.com/atom/one-light-syntax
			Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
		*/

		.hljs {
			color: var(--gray-800);
			@container style(--theme: dark) {
				color: var(--gray-300);
			}
		}

		.hljs-comment,
		.hljs-quote {
			color: var(--gray-600);
			font-style: italic;
			@container style(--theme: dark) {
				color: var(--gray-600);
			}
		}

		.hljs-doctag,
		.hljs-keyword,
		.hljs-formula {
			color: var(--purple-700);
			@container style(--theme: dark) {
				color: var(--purple-400);
			}
		}

		.hljs-section,
		.hljs-name,
		.hljs-selector-tag,
		.hljs-deletion,
		.hljs-subst {
			color: var(--red-600);
			@container style(--theme: dark) {
				color: var(--red-400);
			}
		}

		.hljs-literal {
			color: var(--cyan-800);
			@container style(--theme: dark) {
				color: var(--cyan-400);
			}
		}

		.hljs-string,
		.hljs-regexp,
		.hljs-addition,
		.hljs-attribute,
		.hljs-meta-string {
			color: var(--green-700);
			@container style(--theme: dark) {
				color: var(--green-400);
			}
		}

		.hljs-built_in,
		.hljs-class .hljs-title {
			color: var(--yellow-800);
			@container style(--theme: dark) {
				color: var(--yellow-400);
			}
		}

		.hljs-attr,
		.hljs-variable,
		.hljs-template-variable,
		.hljs-type,
		.hljs-selector-class,
		.hljs-selector-attr,
		.hljs-selector-pseudo,
		.hljs-number {
			color: var(--orange-800);
			@container style(--theme: dark) {
				color: var(--orange-400);
			}
		}

		.hljs-symbol,
		.hljs-bullet,
		.hljs-link,
		.hljs-meta,
		.hljs-selector-id,
		.hljs-title {
			color: var(--blue-600);
			@container style(--theme: dark) {
				color: var(--blue-400);
			}
		}

		.hljs-emphasis {
			font-style: italic;
		}

		.hljs-strong {
			font-weight: var(--bold-weight);
		}

		.hljs-link {
			text-decoration: underline;
		}
	}
</style>