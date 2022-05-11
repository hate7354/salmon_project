import styled from "styled-components";
import { useTable } from "react-table";

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  padding: 20px;
`;
export const salary_table_columns = [
  {
    id: "expander",
    // Build our expander column
    Header: (props: { getToggleAllRowsExpandedProps: Function; isAllRowsExpanded: Boolean }) => {
      return (
        <span {...props.getToggleAllRowsExpandedProps()}>
          {props.isAllRowsExpanded ? "👇" : "👉"}
        </span>
      );
    },

    Cell: ({ row }: any) =>
      row.canExpand ? (
        <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? "👇" : "👉"}</span>
      ) : null,
  },
  {
    accessor: "name",
    Header: "이름",
  },
  {
    accessor: "group",
    Header: "소속",
  },
  {
    accessor: "work_time",
    Header: "근무 시간",
  },
  {
    accessor: "payment",
    Header: "총 지급액",
  },
  {
    accessor: "amount",
    Header: "실 수령액",
  },
];

const Balance = (props: { values: any }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.values.map((coin: any, idx: any) => {
        return <Checkbox key={idx} value={coin}></Checkbox>;
      })}
    </div>
  );
};
