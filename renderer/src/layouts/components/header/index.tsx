import Text from "@components/Text";
import { HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer as="header" jc="start">
      <Text size={22} weight="medium">
        MOMO PROJECT
      </Text>
    </HeaderContainer>
  );
}

export default Header;
