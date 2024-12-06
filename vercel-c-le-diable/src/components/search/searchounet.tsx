import { useQuery } from "@tanstack/react-query";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "@tanstack/react-form";
import {
  buildCavabiensepasserHttpRequest,
  httpClient,
  toHttpParams,
} from "../../utils/api.ts";
import { ChartType, DashboardParams, SearchType } from "../../utils/types.ts";
import { ThemeContext } from "../../providers/context.tsx";
import { getIsoDate, getTomorrowDate } from "../../utils/utils.ts";
import { ChartShallowDataShape } from "reaviz";

const defaultDashboardParams = (): DashboardParams => {
  return {
    startDate: getIsoDate(new Date()),
    endDate: getIsoDate(getTomorrowDate()),
    startAddress: undefined,
    arrivalAddress: undefined,
    type: undefined,
    chartType: undefined,
  };
};

export default function Searchounet(
  props: Readonly<{
    setData: Dispatch<SetStateAction<ChartShallowDataShape[] | undefined>>;
    setChartType: Dispatch<SetStateAction<ChartType | undefined>>;
  }>,
) {
  const { setData, setChartType } = props;
  const [params, setParams] = useState<DashboardParams | undefined>(undefined);

  const searchQuery = useQuery<ChartShallowDataShape[]>({
    queryKey: ["search", params],
    queryFn: async () => {
      console.log("params", params);
      const options = params ? { searchParams: toHttpParams(params) } : {};
      return await httpClient(
        buildCavabiensepasserHttpRequest("/dashboard"),
        options,
      ).json();
    },
    enabled: false,
  });

  useEffect(() => {
    if (!searchQuery.data) return;
    setData(searchQuery.data);
  }, [setData, searchQuery.data]);

  useEffect(() => {
    if (!params) return;
    searchQuery.refetch();
  }, [params]);

  const form = useForm<DashboardParams>({
    defaultValues: defaultDashboardParams(),
    onSubmit: async ({ value }) => {
      setParams(value);
      setChartType(value.chartType);
    },
  });

  function submitSearchForm(event: FormEvent) {
    event.stopPropagation();
    event.preventDefault();
    form.handleSubmit();
  }

  return (
    <form onSubmit={submitSearchForm}>
      <form.Field
        name="startDate"
        children={(field) => (
          <input
            type={"date"}
            name={field.name}
            value={getIsoDate(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) =>
              field.handleChange(getIsoDate(e.target.valueAsDate))
            }
          />
        )}
      />

      <form.Field
        name="endDate"
        children={(field) => (
          <input
            type={"date"}
            name={field.name}
            value={getIsoDate(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) =>
              field.handleChange(getIsoDate(e.target.valueAsDate))
            }
          />
        )}
      />

      <form.Field
        name="type"
        children={(field) => (
          <select
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value as SearchType)}
          >
            <option value="BY_GATHERING_TYPE">Par type</option>
            <option value="BY_GATHERING_TAGS">Par tag</option>
            <option value="BY_GATHERING_GROUPINGS">Par groupe</option>
            <option value="BY_GATHERING_PARTICIPATION">
              Par participation
            </option>
            <option value="BY_GATHERING_FOLLOW">Par favoris</option>
          </select>
        )}
      />
      <form.Field
        name="chartType"
        children={(field) => (
          <select
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value as ChartType)}
          >
            <option value="LINE">Ligne</option>
            <option value="BAR">Barre</option>
            <option value="BUBBLE">Bulle</option>
            <option value="PIE">Tarte</option>
          </select>
        )}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}
