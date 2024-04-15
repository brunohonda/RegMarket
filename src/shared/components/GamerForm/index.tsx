import { useState } from "react";
import { Address } from "../../interfaces/Address";
import { Gamer } from "../../interfaces/Gamer";
import { Input } from "../Input";
import { InputWithButton } from "../InputWithButton";
import searchIcon from './../../../../assets/search.png';
import { GamerFormController } from "./controller";
import { Container } from "./styles";

export function GamerForm(props: { gamer?: Gamer }) {
  const [ postalCode, setPostalCode ] = useState<string>(props.gamer?.address.postalCode ?? '');
  const [ address, setAddress ] = useState<Address|null>(props.gamer?.address ? props.gamer?.address : null);

  const handlerSearchAddress = async () => {
    try {
      const data = await GamerFormController.fetchAddress(postalCode);
      setAddress(data);
    } catch (error) {
      console.error('Error on search address by postal code', error);
    }
  };

  return (
    <Container>
      <Input placeholder="Primeiro nome">{ props.gamer?.firstName }</Input>
      <Input placeholder="Último nome">{ props.gamer?.lastName }</Input>
      <Input placeholder="E-mail">{ props.gamer?.email }</Input>
      <InputWithButton placeholder="CEP" iconSource={ searchIcon } onChangeText={(text) => setPostalCode(text)} onClick={ handlerSearchAddress }>{ postalCode }</InputWithButton>
      <Input placeholder="Rua">{ address?.street }</Input>
      <Input placeholder="Número">{ address?.addressNumber?.toString() }</Input>
      <Input placeholder="Bairro">{ address?.neighborhood }</Input>
      <Input placeholder="Cidade">{ address?.city }</Input>
      <Input placeholder="UF">{ address?.stateCode }</Input>
    </Container>
  )
}