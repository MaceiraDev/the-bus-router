import styled from "styled-components";

export const LoaderStyle = styled.div`
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.box {
  width: 20px;
  height: 20px;
  margin: 0 8px;
  border-radius: 50%;
  animation: jump_4123 1s ease-in-out infinite;
}

.box:nth-child(1) {
  background-color: #4e4e4e;
  animation-delay: 0.2s;
}

.box:nth-child(2) {
  background-color: #bdbdbd;
  animation-delay: 0.4s;
}

.box:nth-child(3) {
  background-color: #4e4e4e;
  animation-delay: 0.6s;
}

.box:nth-child(4) {
  background-color: #bdbdbd;
  animation-delay: 0.8s;
}

@keyframes jump_4123 {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }
}



`

