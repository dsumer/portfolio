import { LayoutWrapper } from '../../../components/layout-wrapper';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  // TODO: define common footer for each blog post
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
