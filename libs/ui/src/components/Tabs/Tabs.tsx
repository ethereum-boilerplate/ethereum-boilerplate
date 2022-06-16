import { TabsProps } from './Tabs.types';
import styles from './Tabs.styles';
import Tab from '../Tab/Tab';
import React, { useEffect, useRef, useState } from 'react';
import color from '../../styles/colors';
import { PopoverDropdown, PopoverElement, Icon } from 'web3uikit';
import { useNavigate } from 'react-router-dom';
const { TabsStyled, DivIconStyled } = styles;

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [width, setWidth] = useState<number | null>();
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const width = ref.current && ref.current.offsetWidth;
    setWidth(width);
  }, []);
  console.log(width);
  return (
    <div ref={ref}>
      <TabsStyled
        data-testid="test-Tabs"
        style={{ display: width && width > 800 ? 'flex' : 'none' }}
      >
        {tabs.map((tab, index) => {
          // const active = selected === tab;
          const { name, href } = tab;
          return (
            <Tab
              key={index}
              name={name}
              href={href}
              onClick={() => console.log('clicked')}
            />
          );
        })}
      </TabsStyled>

      <DivIconStyled
        style={{ display: width && width < 800 ? 'block' : 'none' }}
      >
        <PopoverDropdown
          parent={<Icon fill={color.blue} size={24} svg="more" />}
          position="bottom"
          moveBody={-90}
          move={-100}
        >
          {tabs.map((tab) => {
            const { name, href } = tab;
            return (
              <PopoverElement
                backgroundColor="transparent"
                height={30}
                onClick={() => navigate(href)}
                text={name}
                textColor="white"
                textSize={10}
                width={100}
                icon={'link'}
              />
            );
          })}
        </PopoverDropdown>
      </DivIconStyled>
    </div>
  );
};

export default Tabs;
