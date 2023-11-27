import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SET_AUTH } from "../graphql";
import { authStorage, STORAGE_KEY } from "../utils";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SET_AUTH);

  useEffect(() => {
    if (result?.data && !result?.error) {
      authStorage.save({
        key: STORAGE_KEY.AUTH,
        data: { token: result.data?.authenticate.accessToken },
        expires: 1000 * 3600,
      });
    }
  }, [result]);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [signIn, result];
};
