import { rm, media } from '@/styles';
import { colors } from '@/styles';
import { fontGeist } from '@/styles/fonts';
import React from 'react';
import styled from 'styled-components';

interface PhoneInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
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

  ${media.xsm`
    font-size: ${rm(14)};
  `}
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: ${rm(8)};
  width: 100%;

  ${media.xsm`
    gap: ${rm(6)};
  `}
`;

const CountryCodeField = styled.div`
  width: ${rm(80)};
  height: ${rm(56)};
  border: 1px solid #DDE2E7;
  border-radius: ${rm(8)};
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rm(16)};
  color: ${colors.black100};
  ${fontGeist(400)};
  flex-shrink: 0;

  ${media.xsm`
    width: ${rm(70)};
    height: ${rm(48)};
    font-size: ${rm(14)};
  `}
`;

const PhoneNumberField = styled.input`
  flex: 1;
  height: ${rm(56)};
  border: 1px solid #DDE2E7;
  border-radius: ${rm(8)};
  font-size: ${rm(16)};
  ${fontGeist(400)};
  padding: 0 ${rm(20)};
  background: #F7FAFC;
  outline: none;
  color: #222;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  ${media.xsm`
    height: ${rm(48)};
    padding: 0 ${rm(16)};
    font-size: ${rm(14)};
  `}

  &::placeholder {
    color: #A0A0A0;
    opacity: 0.6;
    font-size: ${rm(16)};
    ${fontGeist(400)};

    ${media.xsm`
      font-size: ${rm(14)};
    `}
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

export const PhoneInput: React.FC<PhoneInputProps> = ({ 
  label, 
  value = '', 
  onChange, 
  placeholder = "Номер получателя" 
}) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <PhoneInputContainer>
        <CountryCodeField>+375</CountryCodeField>
        <PhoneNumberField
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          type="tel"
        />
      </PhoneInputContainer>
    </Wrapper>
  );
};

export default PhoneInput;
