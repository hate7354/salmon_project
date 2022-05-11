import React from "react";
import Paging from "components/common/paging/paging";
import { useTable, usePagination, useExpanded } from "react-table";
import { TableSheet, Thead, Tbody, ThTr, Tr, Th, Td } from "styles/common/table/Table.styled";

type TableProps = {
  columns?: any;
  data?: any;
};

const Table: React.FC<TableProps> = ({ columns: userColumns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    // needed for pagination functionality
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { expanded, pageIndex },
  } = useTable(
    {
      columns: userColumns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useExpanded,
    usePagination
  );
  return (
    <>
      <TableSheet {...getTableProps()}>
        <Thead>
          {headerGroups.map((header: any) => (
            // getHeaderGroupProps를 통해 header 배열을 호출한다
            <ThTr {...header.getHeaderGroupProps()}>
              {header.headers.map((col: any) => (
                // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
                <Th {...col.getHeaderProps()}>{col.render("Header")}</Th>
              ))}
            </ThTr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              // getRowProps는 각 row data를 호출해낸다
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  // getCellProps는 각 cell data를 호출해낸다
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </TableSheet>

      <Paging
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
      />

      <div>Showing the first 20 results of {page.length} rows</div>
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
    </>
  );
};

export default Table;
