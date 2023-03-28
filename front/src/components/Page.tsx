import clsx from "clsx";
import PageTitle from "components/PageTitle";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  children: React.ReactElement;
  responsive?: boolean;
  center?: boolean;
  className?: string;
};

const Page = ({
  title,
  children,
  responsive = true,
  center,
  className,
}: Props) => {
  const { t } = useTranslation();
  const classes = twMerge(
    clsx({
      "flex justify-center p-4 lg:justify-start": responsive && !center,
      "flex justify-center p-4": center,
    }),
    className
  );
  return (
    <>
      <PageTitle title={t(title)} />
      <div className={classes}>{children}</div>
    </>
  );
};

export default Page;
