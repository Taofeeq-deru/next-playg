import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getPlaceholder = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
};

const updatePlaceholder = (payload: Record<string, unknown>) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", payload);
};

export const useGetJson = ({ enabled }: { enabled: boolean }) => {
  const { data, isLoading, isFetched, error, isFetching } = useQuery({
    queryKey: ["placeholder"],
    queryFn: getPlaceholder,
    enabled
  });

  return { data, isLoading, isFetched, error, isFetching };
};

export const useGetJson2 = () => {
  const query = useQuery({
    queryKey: ["placeholder"],
    queryFn: getPlaceholder
  });

  return query;
};

export const useUpdateJson = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, error } = useMutation({
    mutationFn: updatePlaceholder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["placeholder"] });
    }
  });

  return {
    mutate, //a normal function that triggers the api
    mutateAsync, //an async function that triggers the api
    isPending,
    error
  };
};
