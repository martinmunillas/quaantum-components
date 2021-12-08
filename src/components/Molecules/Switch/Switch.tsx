import React, { useState, useEffect } from 'react';
import { QuaantumProps } from '../../..';
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

  const inner: QuaantumProps = {
    float: 'left',
    width: '50%',
    height: '36px',
    padding: '0',
    lineHeight: '36px',
    color: '#fff',
    fontWeight: 'bold',
    boxSizing: 'border-box',
  };

  return (
    <Flex align='center'>
      {label}{' '}
      <QuaantumBase
        position='relative'
        width='75px'
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
            width='200%'
            marginLeft='-100%'
            transition='margin 0.3s ease-in 0s'
            _after={{
              ...inner,
              content: message?.off || '""',
              pr: '10px',
              bgColor: '#bbb',
              color: '#fff',
              textAlign: 'right',
            }}
            _before={{
              ...inner,
              content: message?.on || '""',
              pl: '10px',
              bgColor: '#060',
              color: '#fff',
            }}
            className='inner'
          />
          <QuaantumBase
            as='span'
            display='block'
            width='24px'
            margin='5px'
            background='#fff'
            position='absolute'
            top='0'
            bottom='0'
            right='40px'
            border='0 solid #bbb'
            borderRadius='20px'
            transition='all 0.3s ease-in 0s'
            className='switch'
          />
        </QuaantumBase>
      </QuaantumBase>
    </Flex>
  );
};

export default Switch;
