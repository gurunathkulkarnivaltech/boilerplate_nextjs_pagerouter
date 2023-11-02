import React from 'react';
import styled from "@emotion/styled";

type Props = {}

const OrderedList = styled('ol')`
    font-size: 20px;
    margin-left: 100px;
    list-style-type: numeric;
    margin-bottom: 20px;
 `;

const UnorderedList = styled('ul')`
    font-size: 20px;
    margin-left: 100px;
    list-style-type: circle;
 `;

const ListItem = styled('li')`
    font-size: 18px;
 `;
 
const Heading = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 80px;
 `;

export default function CardComponent({}: Props) {
  return (
    <div>
    <Heading>This is an Ordered List</Heading>
    <OrderedList>
        <ListItem>apple</ListItem>
        <ListItem>orange</ListItem>
    </OrderedList>
    <Heading>This is an Unordered List</Heading>
    <UnorderedList>
        <ListItem>apple</ListItem>
        <ListItem>orange</ListItem>
    </UnorderedList>
</div>
  )
}