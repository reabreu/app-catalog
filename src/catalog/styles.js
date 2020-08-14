import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header1 = styled.h1`
  text-align: center;
`;

export const AppsListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px 0 20px;
`;

export const Li = styled.li`
  display: block;
  padding: 45px 5px 30px;
  border: 1px solid white;
  width: calc(25% - 10px);
  margin-right: 10px;
  margin-top: 20px;
  min-height: 300px;

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

export const SearchInput = styled.input`
  width: 100%;
  background: none;
  border: 1px solid white;
  display: block;
  border-radius: 8px;
  padding: 8px 10px;
  color: white;
  margin-right: 10px;
  width: 80%;
  font-size: 15px;

  &::placeholder {
    color: white;
    opacity: 1;
  }
`;

export const AuthSelect = styled.select`
  border: 1px solid white;
  background: none;
  color: white;
  width: 100%;
`;

export const AuthOption = styled.option`
  background: #0d4f71;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`;

export const FilterPanel = styled.div`
  display: flex;
  padding: 0 10px 0 20px;
  margin-bottom: 30px;
`;
