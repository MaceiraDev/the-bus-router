import { createGlobalStyle } from "styled-components";
export const GloblaStyle = createGlobalStyle`
 :root {
        --background: #d49103;
        --backgroundDois: #0d1b2a;
    }
body {
  background-color: #fff;
}

.react-modal-overlay{
  background: rgba(0, 0, 0, 0.73);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

}
.react-modal-content{
  max-width:100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
  border: 2px solid #000;
}
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
      filter: brightness(0.8);
  }
  
}

`

