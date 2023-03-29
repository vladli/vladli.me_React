import { useQuery } from "@tanstack/react-query";
import Box from "components/Box";
import LoadingEffect from "components/LoadingEffect";
import axiosAPI from "config/axiosAPI";
import { useTranslation } from "react-i18next";
import AddItem from "./AddItem";
import Item from "./Item";

export type DataProps = {
  _id: string;
  userUID: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const Todos = () => {
  const { t } = useTranslation("beginnerProjects");
  const { isLoading, isError, data, refetch } = useQuery<DataProps[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axiosAPI.get("/api/todos/item");
      return data;
    },
  });

  if (isLoading || !data) return <LoadingEffect />;
  return (
    <Box className="w-1/2 p-4">
      <h5 className="text-center">{t("Todos.title")}</h5>
      <AddItem {...{ refetch }} />
      <ol start={1}>
        {data.map((item: any) => (
          <Item key={item._id} item={item} {...{ refetch }} />
        ))}
      </ol>
    </Box>
  );
};

export default Todos;
