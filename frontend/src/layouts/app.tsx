import { SUPER_ADMIN } from "@utils/constants";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("@layouts/admin"));
const OwnerLayout = dynamic(() => import("@layouts/owner"));

export default function AppLayout({
  userPermissions,
  ...props
}: {
  userPermissions: string[];
}) {
  if (userPermissions?.includes(SUPER_ADMIN)) {
    return <AdminLayout {...props} />;
  }
  return <OwnerLayout {...props} />;
}
