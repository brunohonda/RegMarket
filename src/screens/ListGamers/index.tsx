import React from "react";
import { ActionBar } from "../../shared/components/ActionBar";
import { GamerListItem } from "../../shared/components/GamerListItem";
import { Input } from "../../shared/components/Input";
import { Action } from "../../shared/interfaces/Action";
import { Gamer } from "../../shared/interfaces/Gamer";
import { ListContainer, ListGamersContainer, SearchContainer } from "./styles";

const gamers: Gamer[] = [
  { firstName: 'A', lastName: 'B', email: 'a@b.com', address: { postalCode: '', street: 'Street A', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
  { firstName: 'B', lastName: 'C', email: 'b@c.com', address: { postalCode: '', street: 'Street B', addressNumber: null, city: 'City', stateCode: 'MG', neighborhood: 'neighborhood' }},
];

export function ListGamersScreen({ navigation }: any) {
  const actions: Action[] = [
    { key: 'Register', title: 'Cadastrar', onPress: () => navigation.navigate('Register') },
  ];

  return (
    <ListGamersContainer>
      <SearchContainer>
        <Input placeholder="Buscar Gamer"></Input>
      </SearchContainer>
      <ListContainer>
        { gamers.map(gamer => <GamerListItem key={ gamer.email } gamer={ gamer } navigation={ navigation }></GamerListItem>) }
      </ListContainer>
      <ActionBar actions={ actions }></ActionBar>
    </ListGamersContainer>
  )
}