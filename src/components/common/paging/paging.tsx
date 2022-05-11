import { MouseEventHandler } from "react";
import next from "assets/Img/next.svg";
import prev from "assets/Img/prev.svg";
import { PagingDiv, BtnContent, Next, Prev } from "styles/common/paging/Paging.styled";

const Paging = (props: {
  pageIndex: number;
  pageOptions: any[];
  previousPage: MouseEventHandler<HTMLButtonElement>;
  canPreviousPage: any;
  nextPage: MouseEventHandler<HTMLButtonElement>;
  canNextPage: any;
}) => {
  return (
    <PagingDiv>
      <div className="table-pagesIndexing">
        {props.pageIndex + 1} out of {props.pageOptions.length}
      </div>
      <BtnContent>
        <Prev onClick={props.previousPage} disabled={!props.canPreviousPage}>
          {" "}
          <img src={prev} alt="" />
        </Prev>
        <BtnContent>
          {props.pageOptions.map((index, page) => {
            let totalPages = props.pageOptions.length;
            if (page + 1 > 5 && page + 1 < 10 && totalPages >= 10) {
              return;
            }
            if (page + 1 === 10) {
              return <Prev key={index}>....{10}</Prev>;
            }
            if (page + 1 > 10 && totalPages > 10) {
              const numbersOFpagesAfter_Page_10 = props.pageOptions.slice(10);
              if (numbersOFpagesAfter_Page_10.length > 3 && page + 1 === totalPages) {
                return <Prev key={index}>....{totalPages}</Prev>;
              }
              if (numbersOFpagesAfter_Page_10.length > 3 && page + 1 <= 12) {
                return <Prev key={index}>{page + 1}</Prev>;
              }
              if (numbersOFpagesAfter_Page_10.length > 3) {
                return;
              }
              return <Prev key={index}>{page + 1}</Prev>;
            }
            return <Prev key={index}>{page + 1}</Prev>;
          })}
        </BtnContent>
        <Next onClick={props.nextPage} disabled={!props.canNextPage}>
          <img src={next} alt="" />
        </Next>
      </BtnContent>
    </PagingDiv>
  );
};
export default Paging;
