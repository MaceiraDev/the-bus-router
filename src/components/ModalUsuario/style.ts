import styled from "styled-components";

export const FormContainer = styled.form`
h2 {
  color: var(--blue);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align:center;
  font-weight: 700;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-size: 1rem;
  margin-bottom: 10px;
  &::placeholder {
      color: var(--text-body);
  }
}

textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-size: 1rem;
  margin-bottom: 10px;
  &::placeholder {
      color: var(--text-body);
  }
  resize: none;
}
select {
  width: 50%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-size: 1rem;
}

button[type='submit'] {
  width: 100%;
  padding: 10px;
  background-color: green;
  color: #fff;
  border-radius: 8px;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;

  &:hover {
      filter: brightness(0.9);
  }

}

`
