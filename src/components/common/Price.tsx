import styled from "styled-components";

const NumDiv = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const NumDivMg = styled(NumDiv)`
  margin-top: 12px;
`;

type PriceProps = {
  value?: number;
  margin?: string;
};

const Price: React.FC<PriceProps> = ({ value, margin }) => {
  const price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (margin === "on") {
    return <NumDivMg>{price}</NumDivMg>;
  }
  return <NumDiv>{price}</NumDiv>;
};

Price.defaultProps = {
  margin: "off",
};

export default Price;
