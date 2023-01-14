
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}
// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled
