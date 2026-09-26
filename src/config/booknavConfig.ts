import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "Development",
		icon: "material-symbols:code-rounded",
		desc: "",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "The world's largest code hosting platform",
				// icon 字段可以使用 astro-icon 图标库的图标名称
				// 也可以使用图片 URL 和本地图片路径
				// 不填则会通过接口自动获取目标站点的 favicon 图标（需要在上面配置）
				icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org",
				desc: "Web Technologies Documentation",
				weight: 9,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "A static site generator for the modern web",
				weight: 8,
			},
			{
				title: "Svelte",
				url: "https://svelte.dev",
				desc: "A frameworks that compiles components into high-performance native JS",
				weight: 7,
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "A powerful and flexible CSS framework",
				weight: 6,
			},
		],
	},
	{
		id: "opensource",
		name: "Open Source",
		icon: "material-symbols:code-rounded",
		desc: "Useful open source projects and libraries",
		weight: 90,
		items: [
			{
				title: "Firefly",
				url: "https://github.com/CuteLeaf/Firefly",
				desc: "A clear and beautiful Astro personal blog theme template",
				icon: "/favicon/firefly-32.png",
				weight: 10,
			},
		],
	},
	{
		id: "design",
		name: "Design",
		icon: "material-symbols:palette-outline-rounded",
		desc: "Color scheme, icons and sources of inspiration",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "A massive collection of icons from popular icon sets",
				weight: 10,
			},
		],
	},
	{
		id: "tools",
		name: "Tools",
		icon: "material-symbols:build-outline-rounded",
		desc: "Useful online tools",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "Online PNG / JPEG image compression",
				weight: 10,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Image compression and format conversion tool from Google",
				weight: 9,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "Convert code snippets into beautiful images",
				weight: 8,
			},
		],
	},
	{
		id: "resources",
		name: "Resources",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "Documentation, tutorials and reading materials",
		weight: 70,
		items: [
			{
				title: "Firefly Docs",
				url: "https://docs-firefly.cuteleaf.cn/en/",
				desc: "Firefly theme template documentation",
				icon: "https://docs-firefly.cuteleaf.cn/logo.png",
				weight: 10,
			},
		],
	},
];
