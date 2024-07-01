import { useGetJson, useGetJson2, useUpdateJson } from "./hooks/useGetJson";

export default function Home() {
  const { data } = useGetJson2();
  const {} = useGetJson({ enabled: !!data });

  const { mutateAsync } = useUpdateJson();

  const submit = async () => {
    try {
      const bb = await mutateAsync({ a: "boyt" });
      console.log({ bb });
    } catch (err) {}
  };
  return (
    <div>
      <p>Home</p>
      <button onClick={submit} type="button">
        button
      </button>
    </div>
  );
}
