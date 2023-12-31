// import { postRefresh } from "@/api/refresh";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthStore {
  access: string;
  refresh: string;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
  loginUser: (accessToken: string, refreshToken: string) => void;
  logoutUser: () => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      access: "",
      refresh: "",
      isAuthenticated: false,
      refreshUser: () => new Promise(() => {}),
      // () =>
      // postRefresh({
      //   body: {
      //     refresh: get().refresh,
      //   },
      // })
      //   .then((res) => {
      //     const { access } = res as { access: string };
      //     set({ access, isAuthenticated: true });
      //   })
      //   .catch(() => {
      //     set({ access: "", refresh: "", isAuthenticated: false });
      //   }),

      loginUser: (accessToken, refreshToken) => {
        set({
          access: accessToken,
          refresh: refreshToken,
          isAuthenticated: true,
        });
      },
      logoutUser: () => {
        set({ access: "", refresh: "", isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);

export { useAuthStore };
