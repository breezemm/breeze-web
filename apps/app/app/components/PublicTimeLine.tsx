"use client";
import React, {useCallback, useMemo, useRef} from "react";
import TimeLinePost from "@/app/components/TimeLinePost";
import {axios} from "@/lib/axios";
import {useInfiniteQuery} from "@tanstack/react-query";
import {TimeLineProps} from "@/interfaces/TimeLineData";

const fetchPublicTimeLine = async({pageParam}:{pageParam:number})=>{
  const response = await  axios.get(`/public/timeline?page${pageParam}`)
  return ( response.data.data as TimeLineProps[] )
}

const PublicTimeLine = () => {
  const observer = useRef<IntersectionObserver>()
  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } =
      useInfiniteQuery({
        queryKey: ["publicTimeline"],
        queryFn: ({ pageParam }) => fetchPublicTimeLine({ pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length ? allPages.length + 1 : undefined;
        },
      })

  const lastElementRef = useCallback(
      (node: HTMLDivElement) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasNextPage && !isFetching) {
            fetchNextPage();
          }
        });
        if (node) observer.current.observe(node);
      },
      [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  const publicTimelines = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  if (isLoading) return <h1>Loading ...</h1>;


  return (
    <div className="md:flex flex-col flex-1 justify-center items-center">
      <div className="text-sm flex gap-1 justify-center w-full">
        <span className="font-semibold ">Aung Myat Moe</span>commented on this.
      </div>
      {publicTimelines &&
          publicTimelines.map((timeline) => {
            return <div key={timeline.id} ref={lastElementRef}>
              <TimeLinePost data={timeline}/>
            </div>
          })}
    </div>
  );
};

export default PublicTimeLine;
