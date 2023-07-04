declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export const metadata: {
    title: string;
    description: string;
  };
}
