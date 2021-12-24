import React, { useState, useEffect } from 'react';
import Flex from '../../Atoms/Flex/Flex';
import { QuaantumBase } from '../../Base/QuaantumBase';

type OnOff = Record<'on' | 'off', string>;

export interface SwitchProps {
  label: string;
  message?: OnOff;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, message, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(value || false);

  useEffect(() => {
    value !== undefined && setIsChecked(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <Flex align='center'>
      {label}{' '}
      <QuaantumBase
        position='relative'
        width='50px'
        display='inline-block'
        textAlign='left'
        top='8px'
      >
        <QuaantumBase
          as='input'
          type='checkbox'
          display='none'
          checked={isChecked}
          onChange={handleChange}
          name={label}
          id={label}
          customCss={`
            &:checked + label .inner {
                margin: 0;
            }
            
            &:checked + label .switch {
                right: 0px;
            }
            `}
        />
        <QuaantumBase
          as='label'
          display='block'
          overflow='hidden'
          cursor='pointer'
          border='0 solid #bbb'
          borderRadius='20px'
          htmlFor={label}
        >
          <QuaantumBase
            as='span'
            display='block'
            transition='all 0.3s ease-in 0s'
            height='24px'
            padding='0'
            lineHeight='24px'
            color='#fff'
            fontWeight='bold'
            boxSizing='border-box'
            content={message?.off || '""'}
            pr='10px'
            bgColor={isChecked ? 'blue' : '#bbb'}
            textAlign='right'
          />
          <QuaantumBase
            as='span'
            display='block'
            width='20px'
            margin='2px'
            background='#fff'
            position='absolute'
            top='0'
            bottom='0'
            right={isChecked ? '0' : '25px'}
            border='0 solid #bbb'
            borderRadius='20px'
            transition='all 0.3s ease-in 0s'
          />
        </QuaantumBase>
      </QuaantumBase>
    </Flex>
  );
};

export default Switch;
