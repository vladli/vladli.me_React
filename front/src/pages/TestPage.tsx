import Table from "components/Table/Table";
import LoadingEffect from "../components/LoadingEffect";
import PageTitle from "../components/PageTitle";

const TestPage = () => {
  return (
    <>
      <PageTitle title="Test Page" />
      <div className="h-full">
        <Table>
          <Table.Head>
            <span />
            <span>Email</span>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <span>1</span>
              <span>email@e.com</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default TestPage;
