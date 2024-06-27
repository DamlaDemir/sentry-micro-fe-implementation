// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode } from 'react';
import {
  Text,
  Stack,
  Box,
  useColorModeValue,
  VisuallyHidden,
  chakra,
  Container,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export function App() {
  return (
    <Box bg="#000" color="#fff" padding={24}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>© 2024 Sentry Micro Fe Playground</Text>
        <Stack flexDirection="row" spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter color="#1DA1F2" />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube color="#c4302b" />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram color="#5B51D8" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  const throwError = () => {
    throw new Error('footer social button error');
  };

  return (
    <chakra.button
      bg="#eee"
      borderRadius="50%"
      w={40}
      h={40}
      onClick={throwError}
      cursor={'pointer'}
      as={'a'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default App;
