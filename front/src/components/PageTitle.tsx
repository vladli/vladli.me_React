import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

function PageTitle({ title }: Props) {
  const _title = "vladli.me | " + title;
  return (
    <Helmet>
      <title>{_title}</title>
    </Helmet>
  );
}

export default PageTitle;
