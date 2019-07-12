import React from 'react'
import { Background, Box } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'
import Headline from './Headline'
import styled from 'styled-components'
import Options from './Options/index'

const HeadlineBoxWithLaptopFix = styled(Box)`
  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    margin-top: -90px;
  }

  @media screen and (min-width: 1351px) and (max-width: 1400px) {
    margin-top: -60px;
  }
`

const Providers = () => (
  <Box mt={100}>
    <Background background='#f7f7f7'>
      <AppContainer>
        <Box mt={[170, 170, 62, 62, -100]}>
          <Headline />
          <Options />
          <HeadlineBoxWithLaptopFix
            mb={[283, 283, 309, 309, 335, 390]}
            mt={[92, 92, 92, 112, -32, 0]}
          >
            <Heading.h3 align='center'>
              A developer’s guide to going serverless
            </Heading.h3>
          </HeadlineBoxWithLaptopFix>
        </Box>
      </AppContainer>
    </Background>
  </Box>
)

export default Providers
