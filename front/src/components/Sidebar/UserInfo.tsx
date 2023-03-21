import Badge from "components/Badge";
import Indicator from "components/Indicator";
import { useAuth } from "context/AuthContext";

type Props = {};

export default function UserInfo({}: Props) {
  const { user, role } = useAuth();
  return (
    <div className="mx-2 mb-2 flex justify-center rounded-md border border-dotted border-primary p-4">
      {role === "admin" ? (
        <Indicator item={<Badge color="error">A</Badge>}>
          <p className="pt-1">{user?.email}</p>
        </Indicator>
      ) : (
        <p>{user?.email}</p>
      )}
    </div>
  );
}
