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
          {props.isAllRowsExpanded ? "π" : "π"}
        </span>
      );
    },

    Cell: ({ row }: any) =>
      row.canExpand ? (
        <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? "π" : "π"}</span>
      ) : null,
  },
  {
    accessor: "name",
    Header: "μ΄λ¦",
  },
  {
    accessor: "group",
    Header: "μμ",
  },
  {
    accessor: "work_time",
    Header: "κ·Όλ¬΄ μκ°",
  },
  {
    accessor: "payment",
    Header: "μ΄ μ§κΈμ‘",
  },
  {
    accessor: "amount",
    Header: "μ€ μλ Ήμ‘",
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
