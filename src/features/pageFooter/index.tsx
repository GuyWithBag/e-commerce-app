import { Box, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import FooterDetailsList from './components/FooterDetailsList'
import FooterDetailsListItem from './components/FooterDetailsListItem'
import FooterDetailsIconListItem from './components/FooterDetailsIconListItem'
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter } from 'react-icons/bi'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Box px={'navbarPaddingX'} className='body-secondary drop-shadow py-20 '>
      <footer className='flex flex-col items-center justify-center'>
        <Box className='grid grid-cols-5 max-sm:grid-cols-3'>
          {/* Customer Service */}
          <FooterDetailsList title='Customer Service'>
            <List>
              <FooterDetailsListItem title='Help Centre' />
              <FooterDetailsListItem title='Shopee Cares PH' />
              <FooterDetailsListItem title='Payment Methods' />
              <FooterDetailsListItem title='ShopeePay' />
              <FooterDetailsListItem title='Shopee Coins' />
              <FooterDetailsListItem title='Order Tracking' />
              <FooterDetailsListItem title='Free Shipping' />
              <FooterDetailsListItem title='Return & Refund' />
              <FooterDetailsListItem title='Shopee Guarantee' />
              <FooterDetailsListItem title='Overseas Product' />
              <FooterDetailsListItem title='Contact Us' />
            </List>
          </FooterDetailsList>
          {/* About Shopee */}
          <FooterDetailsList title='About ShopIt'>
            <List>
              <FooterDetailsListItem title='About Us' /> 
              <FooterDetailsListItem title='Shopee Blog' /> 
              <FooterDetailsListItem title='Shopee Careers' /> 
              <FooterDetailsListItem title='Shopee Policies' /> 
              <FooterDetailsListItem title='Privacy Policy' /> 
              <FooterDetailsListItem title='Shopee Mall' /> 
              <FooterDetailsListItem title='Seller Centre' /> 
              <FooterDetailsListItem title='Flash Deals' /> 
              <FooterDetailsListItem title='Media Contact' /> 
            </List>
          </FooterDetailsList>
          {/* Payment and Logistics */}
          <Box className='flex flex-col'>
            <FooterDetailsList title='Payment'>
              <Box>
                {/* <PaymentIcon type='visa' />
                <PaymentIcon type='mastercard' />
                <PaymentIcon type='jcb' />
                <PaymentIcon type='paypal' /> 
                <PaymentIcon type='american-express' /> */}
                {/* <Visa */}

              </Box>
            </FooterDetailsList>
            <FooterDetailsList title='Logistics'>

            </FooterDetailsList>
          </Box>
          {/* Follow us */}
          <FooterDetailsList title='Follow Us'>
            <List>
              <FooterDetailsIconListItem title='Facebook' icon={<BiLogoFacebookCircle />} />
              <FooterDetailsIconListItem title='Instagram' icon={<BiLogoInstagramAlt />} />
              <FooterDetailsIconListItem title='Twitter' icon={<BiLogoTwitter />} />
              <FooterDetailsIconListItem title='LinkedIn' icon={<BiLogoLinkedinSquare />} />
            </List>
          </FooterDetailsList>
          {/* App Download */}
          <FooterDetailsList title='App Download'>

          </FooterDetailsList>
        </Box>
        <Box>
          
        </Box>
      </footer>
    </Box>
  )
}