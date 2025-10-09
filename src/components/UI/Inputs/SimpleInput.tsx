import { rm } from '@/styles';
import { colors } from '@/styles';
import { fontGeist } from '@/styles/fonts';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rm(8)};
  width: 100%;
  margin-bottom: ${rm(24)};
`;

const StyledLabel = styled.label`
  font-size: ${rm(16)};
  color: ${colors.black100};
  ${fontGeist(400)};
  font-weight: 400;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #B3D9FF;
  border-radius: ${rm(8)};
  font-size: ${rm(16)};
  ${fontGeist(400)};
  padding: ${rm(16)} ${rm(20)};
  background: #F7FAFC;
  outline: none;
  color: #222;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
    opacity: 0.6;
    font-size: ${rm(16)};
    ${fontGeist(400)};
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    background: #ffffff;
    
    &::placeholder {
      opacity: 0.8;
    }
  }

  &:hover {
    border-color: #80C7FF;
  }
`;

export const SimpleInput: React.FC<SimpleInputProps> = ({ label, placeholder, ...props }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        {...props}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default SimpleInput;
