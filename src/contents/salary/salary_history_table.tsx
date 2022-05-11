/* eslint-disable jsx-a11y/alt-text */
import Button from "components/common/Button";
import styled from "styled-components";
import Table from "components/common/table/Table";
import { salary_table_columns } from "components/common/table/TableColumn";
import { salary_table_data } from "components/common/table/TableData";
import { SelectBox } from "components/common/Select";
import { Align } from "components/common/Align";
import { useMemo } from "react";

const Search = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  border-top: 1px solid #eaeaea;
`;

const SALARY_HISTORY_TABLE = () => {
  const columns = useMemo(() => salary_table_columns, []);
  const data = useMemo(() => salary_table_data, []);

  return (
    <>
      <Search>
        <SelectBox width={[110, 120, 133]} name={["이름", "이름", "이름"]} />
        <Button width={100} height={30} name="조회" />
      </Search>
      <Align title={["이름", "이름", "이름"]} />
      <Table columns={columns} data={data} />
    </>
  );
};

export default SALARY_HISTORY_TABLE;
