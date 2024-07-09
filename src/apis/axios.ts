import axiosInstance from "./axiosInstance";

interface user {
  id: string;
  password: string;
}
export const postRegister = async ({ id, password }: user) => {
  try {
    //api 주소 나중에 변경해야 함
    const response = await axiosInstance.post("/auth/register", {
      id,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async ({ id, password }: user) => {
  try {
    // api 주소 나중에 변경해야 함
    const response = await axiosInstance.post("/auth/login", {
      id,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // 액세스 토큰은 메모리에 저장 (보안을 위해 localStorage 대신 메모리에 저장하는 것이 권장됩니다)
    localStorage.setItem("accessToken", accessToken);

    // 리프레시 토큰은 로컬 스토리지에 저장
    localStorage.setItem("refreshToken", refreshToken);
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};
