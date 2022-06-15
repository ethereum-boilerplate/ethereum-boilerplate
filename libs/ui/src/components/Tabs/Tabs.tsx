import { TabsProps } from './Tabs.types';
import styles from './Tabs.styles';
import Tab from '../Tab/Tab';
import React, { useEffect, useRef, useState } from 'react';
import color from '../../styles/colors';
import { PopoverDropdown, PopoverElement, Icon } from 'web3uikit';
const { TabsStyled, DivIconStyled } = styles;

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0]);
  const [width, setWidth] = useState<number | null>();
  const ref = useRef<HTMLDivElement | null>(null);
  const selectedHandler = (tab: string) => {
    setSelected(tab);
  };
  const clickHandler = () => {
    console.log('clicked');
  };

  useEffect(() => {
    const width = ref.current && ref.current.offsetWidth;
    setWidth(width);
  }, []);
  console.log(width);
  return (
    <div ref={ref}>
      <TabsStyled
        className="Tabs"
        data-testid="test-Tabs"
        style={{ display: width && width > 800 ? 'flex' : 'none' }}
      >
        {tabs.map((tab, index) => {
          const active = selected === tab;
          return (
            <Tab
              key={index}
              tabName={tab}
              activeState={active}
              onClick={() => selectedHandler(tab)}
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
            return (
              <PopoverElement
                backgroundColor="transparent"
                height={30}
                onClick={clickHandler}
                text={tab}
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
