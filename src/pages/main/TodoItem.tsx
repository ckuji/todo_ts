import { CheckIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CardItemType } from "../../types";

type todoItemProps = {
    todoItem: CardItemType,
    onChangeTodoCompleteHandler: (id: number) => void
}

const CardItem: React.FC<todoItemProps> = ({todoItem, onChangeTodoCompleteHandler}) => {
    return (
        <Box 
            h='65px'
            borderBottomWidth='1px'
            borderBottomStyle='solid'
            borderBottomColor='gray.200'
        >
            <Flex h='100%'>
                <Box display='flex' alignItems='center' justifyContent='center' h='100%' p='0' w='50px'>
                    <Center
                        rounded='full'
                        w='32px'
                        h='32px'
                        borderWidth='1px'
                        borderStyle='solid'
                        borderColor='gray.200'
                        cursor='pointer'
                        onClick={() => onChangeTodoCompleteHandler(todoItem.id)}
                    >
                        {todoItem.completed ? <CheckIcon color='green.300' /> : ''}
                    </Center>
                </Box>
                <Text
                    textDecoration={todoItem.completed ? 'line-through' : ''}
                    p='0 19px'
                    fontSize='xl'
                    display='flex'
                    alignItems='center'
                    color={todoItem.completed ? 'gray.300' : 'gray.700'}
                >{todoItem.text}</Text>
            </Flex>
        </Box>
    )
}

export default CardItem;