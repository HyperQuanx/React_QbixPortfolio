import styled from "styled-components";

export const RepositoryTable = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 2rem 0 8rem 0;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #f0f0f0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  padding: 8px 0;
`;

export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 8px 0;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.div`
  flex: ${(props) => props.width || 1};
  display: flex;
  align-items: center;
`;

export const IndexCell = styled(TableCell)`
  flex: 0.5;
  justify-content: center;
`;

export const RepositoryLink = styled.span`
  color: #3b7ead;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
