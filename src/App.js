import { Grid, Box, GridItem, Text } from '@chakra-ui/react';
import { useState } from 'react';

function App({ Component, pageProps }) {
  const white = '#F5EFE6';
  const beige = '#E8DFCA';
  const [bgColor, setBgColor] = useState({
    first: white,
    second: white,
    third: white,
    fourth: white,
  });

  const changeBg = (e) => {
    const color = bgColor[e.target.id];
    console.log('triggered');
    if (color === white) {
      const newObj = { ...bgColor, [e.target.id]: beige };
      setBgColor(newObj);
    } else if (color === beige) {
      const newObj = { ...bgColor, [e.target.id]: white };
      setBgColor(newObj);
    }
  };

  const resetBg = (e) => {
    const newObj = { ...bgColor, [e.target.id]: white };
    setBgColor(newObj);
  };

  return (
    <>
      {/* <Text>Devin is...</Text> */}
      <Grid
        h='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={0.5}
      >
        <GridItem
          colSpan={1}
          id={'first'}
          pos='relative'
          bg={bgColor.first}
          onMouseEnter={(e) => changeBg(e)}
          onMouseOut={(e) => resetBg(e)}
          borderRadius={5}
        >
          <Box>
            <Text pos='absolute' top='0' left='0'>
              a developer
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          id={'second'}
          pos='relative'
          bg={bgColor.second}
          onMouseEnter={(e) => changeBg(e)}
          onMouseLeave={(e) => resetBg(e)}
          borderRadius={5}
        >
          <Box>
            <Text pos='absolute' top='0' right='0'>
              a musician
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          id={'third'}
          bg={bgColor.third}
          pos='relative'
          onMouseEnter={(e) => changeBg(e)}
          onMouseLeave={(e) => resetBg(e)}
          borderRadius={5}
        >
          <Box>
            <Text pos='absolute' bottom='0' left='0'>
              an artist
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          id={'fourth'}
          bg={bgColor.fourth}
          pos='relative'
          onMouseEnter={(e) => changeBg(e)}
          onMouseLeave={(e) => resetBg(e)}
          borderRadius={5}
        >
          <Box>
            <Text pos='absolute' bottom='0' right='0'>
              other things too...
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
