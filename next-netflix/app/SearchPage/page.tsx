import getQueryClient from "../utils/getQueryClient";
import Hydrate from "../utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import SearchHydrate from "./SearchHydrate";
import { getSearchData } from "../api";


interface HydrationProps {
    searchData: ReturnType<typeof dehydrate>;
  }

export default function Hydration({ searchData }: HydrationProps) {
    return (
      <Hydrate state={searchData}>
        <SearchHydrate />
      </Hydrate>
    );
  }
  
export async function getServerSideProps(): Promise<{ props: HydrationProps }> {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["hydrate-datas"], getSearchData);
    const dehydratedState = dehydrate(queryClient);

    return {
        props: {
        searchData: dehydratedState,
        },
    };
    }




