import styled from 'styled-components'

export const Container = styled.header`

nav{
  background: var(--background);
  border-bottom: solid 5px var(--backgroundDois);
}
i{
  font-size: 25pt;
}
.nav-link{
  color: #000;
  font-size: 16pt;
  font-weight: 500;
}
.nav-link:hover{
  color: #fff !important;
  font-size: 16pt;
  font-weight: 500;
}
.btn-add-trans{
  background: var(--backgroundDois);
  border: solid 2px var(--backgroundDois);
  border-radius: 4px;
  color: #fff;
  transition: 0.3s;
  font-weight: 700;
}
.btn-add-trans:hover{
  background: transparent;
  color: var(--backgroundDois);
}
.item{
  text-align: center;
  color: #000;
  font-weight: 600;
}
.item:hover{
  background: #00000030 ;
}
`
