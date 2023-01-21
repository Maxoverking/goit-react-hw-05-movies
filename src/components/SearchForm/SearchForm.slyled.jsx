import styled from "styled-components";
import { TbMovieOff } from 'react-icons/tb';

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`
export const Li = styled.li`
    display: flex;
    align-items:center;
    gap: 10px;
`
export const BUTTON = styled.button`
    margin-left: 6px;
    padding: 4px 6px;
`
export const MyIcons = styled(TbMovieOff)`
color: black;
`