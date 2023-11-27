import { LoaderStyle } from "./style";

interface LoadingProps {
  visible?: boolean;
}

export const Loader = ({ visible = false }: LoadingProps) => {
  return (
    <>
      {
        visible &&
        <LoaderStyle>
          <div className="loader">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </LoaderStyle>
      }
    </>
  )
}
