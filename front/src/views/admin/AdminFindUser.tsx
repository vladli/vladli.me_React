import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import LoadingEffect from "../../components/LoadingEffect";

export default function AdminFindUser() {
  const [uid, setUid] = useState<string>("XhYt4D0ZGlhuXryslrPDly40LJB3");
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["admin_getUser"],
    enabled: false,
    queryFn: async () => {
      const { data } = await axios.get("/api/users/user", {
        params: { uid: uid },
      });
      return data;
    },
  });
  const inputReference = useRef<HTMLInputElement>(null);
  useEffect(() => {
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
        <Button className="ml-2" onClick={() => refetch()}>
          <MdSearch />
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
