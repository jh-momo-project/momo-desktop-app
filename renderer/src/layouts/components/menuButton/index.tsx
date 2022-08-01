import Button from "@components/Button";
import { Menu } from "@components/Icons";
import { MenuButtonContainer } from "./styles";

function MenuButton() {
  return (
    <MenuButtonContainer>
      <Button p="6px">
        <Menu />
      </Button>
    </MenuButtonContainer>
  );
}

export default MenuButton;
