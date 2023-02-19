import LoadingEffect from "../components/LoadingEffect";
import PageTitle from "../components/PageTitle";

const TestPage = () => {
  return (
    <>
      <PageTitle title="Test Page" />
      <div className="h-full">
        <LoadingEffect />
      </div>
    </>
  );
};

export default TestPage;
