import { useState, memo, useEffect } from 'react';

import { Paper, Divider, Box, Typography } from '@mui/material'
import TabsMenu from 'src/components/TabsMenu';

import { fetchImage } from 'src/api/itemApis';

import { isEmpty, keys } from 'lodash';


interface ItemData {
  guid: string;
  name: string;
  path: string[];
  properties: Record<string, string>;
}

interface PropertyBoxProps {
  itemData: ItemData;
}

interface PropertyItemProps {
  data: Record<string, any>;
}

const PropertyItem = ({ data }: { data: Record<string, any> }) => {
  const properties = data?.properties;
  const labels = keys(properties);

  return labels?.map((item: any) => <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Typography variant='body2' fontWeight='500' flex={1}>{item}:</Typography>
      <Typography variant='body1' flex={2}>{properties?.[item] || ''}</Typography>
    </Box>
  </>);
}

const PropertyBox = ({
  itemData,
}: PropertyBoxProps) => {
  const [tabValue, setTabValue] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (isEmpty(itemData)) return;

    const imageId = itemData?.guid;
    fetchImage(imageId)?.then(setImage);

  }, [itemData])

  return (
    <Paper
      sx={{
        minWidth: { md: '400px', sm: '100%' },
        minHeight: '250px',
        maxHeight: '400px',
      }}
    >
      <Box p={2}>
        <TabsMenu
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabHeaders={['Properties', 'Image']}
        />

        <Divider sx={{ mt: 2 }} />

        <Box py={2}>
          {isEmpty(itemData) &&
            <Typography variant='body1'>Please select a row from the table</Typography>
          }
          {tabValue === 0 ?
            <PropertyItem data={itemData} />
            :
            <img src={image || ''} alt={itemData?.guid || ''} width='300px' height='150px' />
          }
        </Box>
      </Box>
    </Paper>
  )
}

export default memo(PropertyBox);
