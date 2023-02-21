import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import LoadingEffect from "../../components/LoadingEffect";

export default function AdminFindUser() {
  const [uid, setUid] = React.useState<string>("XhYt4D0ZGlhuXryslrPDly40LJB3");
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["admin_getUser"],
    enabled: false,
    queryFn: async () => {
      const { data } = await axios.get("/api/users/getUser", {
        params: { uid: uid },
      });
      return data;
    },
  });
  const inputReference = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    inputReference.current?.focus();
  }, []);

  return (
    <>
      <div className="flex place-items-center">
        <Input
          ref={inputReference}
          name="uid"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
        />
        <Button
          className="ml-2"
          leftIcon="material-symbols:search-sharp"
          onClick={() => refetch()}
        >
          Search
        </Button>
      </div>
      <ul>
        <li>{data?.uid}</li>
        <li>{data?.email}</li>
        <li>{data?.metadata?.creationTime}</li>
      </ul>
    </>
  );
}
