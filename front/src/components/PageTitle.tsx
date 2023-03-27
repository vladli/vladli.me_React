import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

function PageTitle({ title }: Props) {
  const _title = title + " | vladli.me";
  return (
    <Helmet>
      <title>{_title}</title>
    </Helmet>
  );
}

export default PageTitle;
