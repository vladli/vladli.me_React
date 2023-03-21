import Avatar from "components/Avatar/Avatar";
import Badge from "components/Badge";
import Indicator from "components/Indicator";
import { useAuth } from "context/AuthContext";

type Props = {};

export default function UserInfo({}: Props) {
  const { user, role } = useAuth();
  const emailFirstLetter = user?.email?.charAt(0).toUpperCase();
  return (
    <div className="mx-2 mb-2 flex justify-center gap-2 rounded-md border border-dotted border-primary p-4">
      <Avatar
        color="info"
        letters={emailFirstLetter}
        size="xs"
        shape="circle"
        online
      />
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
