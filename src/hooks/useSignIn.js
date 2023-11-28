import { useMutation } from "@apollo/client";
import { SET_AUTH } from "../graphql";
import { authStorage, STORAGE_KEY } from "../utils";

export const useSignIn = () => {
  const [mutate, { client, data, error }] = useMutation(SET_AUTH);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      await authStorage.save({
        key: STORAGE_KEY.AUTH,
        data: { token: data?.authenticate.accessToken },
      });
      client.resetStore();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [signIn, data];
};
