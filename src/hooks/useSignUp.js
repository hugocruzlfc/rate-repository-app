import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql";

export const useSignUp = () => {
  const [mutate, { client, data, error }] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { user: { username, password } },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [signUp, data];
};
