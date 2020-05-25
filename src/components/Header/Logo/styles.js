import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-blue-900 hover:text-blue-900`};
`;

export const Text = styled.h1`
  ${tw`text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-20 h-20 mr-3 rounded-full`};

  img {
    ${tw`border-7 border-white rounded-full`};
  }
`;
