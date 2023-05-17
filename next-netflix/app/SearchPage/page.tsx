import getQueryClient from "../utils/getQueryClient";
import Hydrate from "../utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import SearchHydrate from "./SearchHydrate";
import { getSearchData } from "../api";

export default async function Hydration() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-datas"], getSearchData);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SearchHydrate />
    </Hydrate>
  );
}
