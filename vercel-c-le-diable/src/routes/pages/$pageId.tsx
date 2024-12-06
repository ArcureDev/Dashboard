import { createFileRoute, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChartType, EgapC3 } from "@/utils/types.ts";
import { tuyau } from "@/utils/api.ts";
import Searchounet from "@/components/search/searchounet.tsx";
import { useState } from "react";
import {
  Bar,
  BarChart,
  BarSeries,
  BubbleChart,
  ChartShallowDataShape,
  LineChart,
  PieChart,
  schemes,
} from "reaviz";

export const Route = createFileRoute("/pages/$pageId")({
  component: PageComponent,
});

function PageComponent() {
  const { pageId } = useParams({ from: "/pages/$pageId" });
  const [data, setData] = useState<ChartShallowDataShape[] | undefined>(
    undefined,
  );

  const [chartType, setChartType] = useState<ChartType | undefined>(undefined);

  const searchQuery = useQuery<EgapC3>({
    queryKey: ["pages", pageId.toString()],
    queryFn: async () => {
      return tuyau.pages({ pageId }).$get().unwrap();
    },
    staleTime: 5000,
  });

  return (
    <div className="flex flex-col gap-3 rounded-md border border-gray-200 bg-gray-100 w-48 h-96 p-4 shadow-sm">
      <Searchounet setData={setData} setChartType={setChartType}></Searchounet>
      <Charty data={data} chartType={chartType} />
    </div>
  );
}

function Charty(
  props: Readonly<{
    data: ChartShallowDataShape[] | undefined;
    chartType: ChartType | undefined;
  }>,
) {
  if (props.chartType) {
    switch (props.chartType) {
      case "BAR":
        return (
          <BarChart
            width={400}
            height={350}
            data={props.data}
            series={
              <BarSeries colorScheme={schemes[0]} padding={0.1} bar={<Bar />} />
            }
          />
        );
      case "LINE":
        return <LineChart height={300} width={300} data={props.data} />;
      case "BUBBLE":
        return <BubbleChart height={300} width={300} data={props.data} />;
      case "PIE":
        return <PieChart height={300} width={300} data={props.data} />;
    }
  }
}
