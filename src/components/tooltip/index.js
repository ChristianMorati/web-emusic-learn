import React from "react";
import styled from "styled-components";

const TooltipText = styled.div`
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-color: lightblue
  }
`;
const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  text-align: center;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
    z-index: 1;
  }
`;
const TooltipCard = styled.div`
z-index: 1;
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;
export default function ToolTip({hoverText, toolTipText}) {
    return (
        <TooltipCard>
            <TooltipText>
                <p>{hoverText}</p>
            </TooltipText>
            <TooltipBox>
                <p>{toolTipText}</p>
            </TooltipBox>
        </TooltipCard>
    );
}