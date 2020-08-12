import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header1 = styled.h1`
  text-align: center;
`;

export const AppsListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Li = styled.li`
  display: block;
  padding: 45px 5px 30px;
  border: 1px solid white;
  width: 20%;
  margin-top: 20px;
  min-height: 200px;
  opacity: 0.5;
  transition: opacity 0.2s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AppIcon = styled.img`
  max-height: 40px;
  max-width: 80%;
  display: block;
  margin-bottom: 10px;
`;

export const AppTitle = styled.p`
  color: white;
  text-align: center;
  justify-self: flex-end;
`;

export const AppVersion = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  justify-self: flex-end;
`;

export const AppLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;
