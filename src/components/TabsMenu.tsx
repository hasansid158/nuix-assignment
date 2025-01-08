import type React from 'react';
import { memo } from 'react';

import { Tabs, Tab, Typography } from '@mui/material';
import type { TabsProps } from '@mui/material';

interface TabsMenuProps extends Omit<TabsProps, 'onChange'> {
  setTabValue?: (value: number) => void;
  tabHeaders?: (string | React.ReactNode)[];
  tabValue: number;
}

const TabsMenu: React.FC<TabsMenuProps> = ({
  setTabValue = () => { },
  tabHeaders = [],
  tabValue,
  ...rest
}) => {
  return (
    <Tabs
      value={tabValue}
      onChange={(e, val) => setTabValue(val)}
      TabIndicatorProps={{ sx: { display: 'none' } }}
      {...rest}
    >
      {tabHeaders.map((item, index) => (
        <Tab
          key={index}
          value={index}
          label={item}
        />
      ))}
    </Tabs>
  );
};

export default memo(TabsMenu);
