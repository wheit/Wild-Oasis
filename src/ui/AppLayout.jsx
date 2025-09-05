import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;
function AppLayout() {
  const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
  `;
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
export default AppLayout;
