import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { config } from "@/utils/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { fetchAppData } from "@/store/slices/appSlice";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { init } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (session && !init) {
      dispatch(fetchAppData({}));
    }
  }, [session]);

  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex", position: "relative", zIndex: 5, flex: 1 }}>
        {session && <Sidebar />}
        <Box sx={{ p: 3, width: "100%", height: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
